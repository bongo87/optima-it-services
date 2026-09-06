// Vercel / Node serverless endpoint for Optima IT Solutions service requests.
// Keep RESEND_API_KEY and TURNSTILE_SECRET on the server only.

const DESTINATION_EMAIL = process.env.OPTIMA_DESTINATION_EMAIL || 'rebonemotswana7@gmail.com';
const MAX_BODY_LENGTH = 12000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

// Global memory stores across serverless function invocations
const recentRequests = globalThis.__optimaRecentRequests || new Map();
globalThis.__optimaRecentRequests = recentRequests;

const verificationCodes = globalThis.__optimaVerificationCodes || new Map();
globalThis.__optimaVerificationCodes = verificationCodes;

const SERVICE_RULES = {
  sad: {
    title: 'System Analysis & Design Consultation',
    fields: {
      projectType: ['Business management system', 'Web application', 'Mobile application', 'Database system', 'Workflow / process system', 'Existing system redesign'],
      projectStage: ['Idea / planning', 'Requirements already collected', 'Partially designed', 'Already being developed', 'Existing system needs analysis'],
      deliverables: ['Requirements & SRS', 'UML / use-case diagrams', 'ERD & data model', 'System architecture', 'Full analysis & design package'],
      users: ['1–3', '4–10', '11–25', '26–50', 'More than 50']
    }
  },
  cloud: {
    title: 'Cloud Migration & Infrastructure Request',
    fields: {
      currentHosting: ['Office / physical server', 'Shared hosting', 'On-premise virtual machines', 'Another cloud provider', 'Mixed environment'],
      targetCloud: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Not sure — recommend one', 'Hybrid cloud'],
      workload: ['Website / web application', 'Database', 'File server / documents', 'Business application', 'Multiple servers and services'],
      downtime: ['No planned downtime', 'Less than 1 hour', '1–4 hours', 'More than 4 hours', 'Not sure']
    }
  },
  webdev: {
    title: 'Web Application & Portfolio Request',
    fields: {
      siteType: ['Business website', 'Online portfolio', 'Landing page', 'Custom web application', 'Client / staff portal'],
      features: ['Information & contact pages', 'Forms & enquiries', 'User accounts / login', 'Dashboard & reporting', 'Online catalogue / booking'],
      contentStatus: ['Content is ready', 'Some content is ready', 'Need help structuring content', 'Need full content planning'],
      hosting: ['GitHub / static hosting', 'Cloud hosting', 'Existing hosting account', 'Not sure — recommend one']
    }
  },
  analytics: {
    title: 'Data & Analytics Consultation',
    fields: {
      analyticsGoal: ['Management dashboard', 'Sales / revenue analysis', 'Operations monitoring', 'Customer analysis', 'Forecasting / machine learning'],
      dataSources: ['Excel / spreadsheets', 'SQL database', 'Cloud database', 'Multiple systems', 'Not sure'],
      dataVolume: ['Under 10,000 records', '10,000–100,000 records', '100,000–1 million records', 'More than 1 million', 'Not sure'],
      output: ['Interactive dashboard', 'Automated reports', 'Data cleaning pipeline', 'Machine learning model', 'Dashboard + automated pipeline']
    }
  },
  network: {
    title: 'Network Architecture & Setup Request',
    fields: {
      siteType: ['Small office', 'Single branch', 'Multi-floor office', 'Multiple branches', 'Home / small workspace'],
      deviceCount: ['1–10', '11–25', '26–50', '51–100', 'More than 100'],
      networkNeed: ['New network setup', 'Network redesign', 'Wi-Fi improvement', 'Branch connectivity', 'Performance / reliability issue'],
      securityLevel: ['Standard business security', 'VLAN segmentation', 'Guest network isolation', 'High-security environment', 'Not sure — recommend one']
    }
  },
  os: {
    title: 'OS & System Setup Request',
    fields: {
      machineCount: ['1', '2–5', '6–15', '16–30', 'More than 30'],
      osChoice: ['Windows', 'Linux', 'Windows + Linux dual boot', 'OS upgrade / reinstallation', 'Not sure'],
      setupScope: ['OS installation only', 'Drivers & essential software', 'Full workstation configuration', 'Security hardening', 'Full setup + hardening'],
      supportNeed: ['No ongoing support', 'One-time troubleshooting', 'Monthly support', 'Quarterly maintenance']
    }
  },
  software: {
    title: 'Custom Automation & Software Request',
    fields: {
      automationArea: ['File / folder processing', 'Spreadsheet / data processing', 'Report generation', 'Email / notification workflow', 'Business process / approvals'],
      frequency: ['Several times a day', 'Daily', 'Weekly', 'Monthly', 'Only when triggered by an event'],
      integration: ['Files / spreadsheets', 'Database', 'Email', 'Web application / API', 'Multiple systems'],
      complexity: ['Simple repetitive task', 'Several steps / rules', 'Multiple systems', 'Complex business workflow', 'Not sure — recommend an approach']
    }
  },
  diagnostics: {
    title: 'Diagnostics & Security Assessment',
    fields: {
      issueType: ['Slow system / performance issue', 'Network connectivity problem', 'Suspected malware / security issue', 'Vulnerability assessment', 'Routine security health check'],
      environment: ['Workstations', 'Servers', 'Network devices', 'Cloud environment', 'Entire business environment'],
      urgency: ['Routine — no immediate impact', 'Within a few business days', 'Business operations are affected', 'Critical service disruption'],
      assessmentScope: ['Quick diagnostic', 'Full diagnostic report', 'Security-focused assessment', 'Full diagnostic + hardening recommendations']
    }
  }
};

const COMMON_RULES = {
  preferredContact: ['Email', 'Phone call', 'WhatsApp'],
  timeline: ['As soon as possible', 'Within 1 week', 'Within 2–4 weeks', 'Within 1–3 months'],
  budget: ['Under R5,000', 'R5,000–R15,000', 'R15,000–R50,000', 'Above R50,000', 'Not sure — advise me']
};

function json(res, status, body) {
  res.status(status).json(body);
}

function clean(value, max = 500) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value) {
  return clean(value, 1000).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function isAllowed(value, allowed) {
  return typeof value === 'string' && allowed.includes(value);
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 160;
}

function validPhone(value) {
  return /^[+0-9()\s-]{7,25}$/.test(value);
}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function verifyTurnstile(token, remoteIp) {
  if (!process.env.TURNSTILE_SECRET) {
    return { success: false, reason: 'Human verification secret is missing on server.' };
  }
  if (!token) {
    return { success: false, reason: 'Human verification token missing.' };
  }

  const formData = new URLSearchParams();
  formData.append('secret', process.env.TURNSTILE_SECRET);
  formData.append('response', token);
  if (remoteIp && remoteIp !== 'unknown') {
    formData.append('remoteip', remoteIp);
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString()
  });

  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return json(res, 405, { message: 'Method not allowed.' });

  const origin = req.headers.origin;
  if (process.env.ALLOWED_ORIGIN && origin && origin !== process.env.ALLOWED_ORIGIN) {
    return json(res, 403, { message: 'Request origin is not allowed.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  const now = Date.now();

  // Cleanup rate limiter
  for (const [key, timestamp] of recentRequests) if (now - timestamp > RATE_WINDOW_MS) recentRequests.delete(key);
  const previous = recentRequests.get(ip) || 0;
  const attempts = Number(req.headers['x-optima-attempts'] || 0);
  if (attempts > 0) return json(res, 429, { message: 'Too many requests.' });
  if (previous && now - previous < RATE_WINDOW_MS / RATE_LIMIT) {
    return json(res, 429, { message: 'Please wait a few minutes before sending another request.' });
  }

  const raw = JSON.stringify(req.body || {});
  if (raw.length > MAX_BODY_LENGTH) return json(res, 413, { message: 'Submission is too large.' });

  const body = req.body || {};
  const action = clean(body.action, 30) || 'verify_and_submit'; // Default fallback or 'send_code'
  const serviceId = clean(body.serviceId, 40);
  const service = SERVICE_RULES[serviceId];
  if (!service) return json(res, 400, { message: 'Unknown service.' });

  // Honeypot: normal users never see or fill this field.
  if (clean(body.website, 200)) return json(res, 400, { message: 'Submission rejected.' });

  const fullName = clean(body.fullName, 80);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 25);
  const company = clean(body.company, 120);
  const location = clean(body.location, 120);
  const details = clean(body.details, 280);

  if (!fullName || !/^[A-Za-zÀ-ÿ' -]{2,80}$/.test(fullName)) return json(res, 400, { message: 'Please provide a valid full name.' });
  if (!validEmail(email)) return json(res, 400, { message: 'Please provide a valid email address.' });
  if (!validPhone(phone)) return json(res, 400, { message: 'Please provide a valid phone number.' });
  if (!company || !location) return json(res, 400, { message: 'Required contact details are missing.' });
  if (!isAllowed(body.preferredContact, COMMON_RULES.preferredContact)) return json(res, 400, { message: 'Invalid contact preference.' });
  if (!isAllowed(body.timeline, COMMON_RULES.timeline)) return json(res, 400, { message: 'Invalid timeline.' });
  if (!isAllowed(body.budget, COMMON_RULES.budget)) return json(res, 400, { message: 'Invalid budget selection.' });
  if (details.length > 280) return json(res, 400, { message: 'Additional explanation is too long.' });
  if (body.consent !== true) return json(res, 400, { message: 'Consent is required.' });

  for (const [field, allowed] of Object.entries(service.fields)) {
    if (!isAllowed(body[field], allowed)) return json(res, 400, { message: `Invalid selection for ${field}.` });
  }

  // --- STEP 1: SEND EMAIL VERIFICATION CODE ---
  if (action === 'send_code') {
    let verification;
    try {
      verification = await verifyTurnstile(clean(body.turnstileToken, 2048), ip);
    } catch {
      return json(res, 502, { message: 'Human verification could not be checked. Please try again.' });
    }
    
    if (!verification?.success) {
      return json(res, 403, { message: 'Human verification failed. Please check your Turnstile configuration.' });
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
      return json(res, 500, { message: 'Email delivery is not configured on the server yet.' });
    }

    const otpCode = generateOTP();
    // Store OTP in memory with a 10-minute expiry
    verificationCodes.set(email, { code: otpCode, expires: Date.now() + 10 * 60 * 1000 });

    const codeHtml = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:600px;margin:auto;padding:20px;border:1px solid #e2e8f0;border-radius:8px">
        <h2 style="color:#2563eb">Optima IT Solutions</h2>
        <p>Hello <strong>${escapeHtml(fullName)}</strong>,</p>
        <p>Your 6-digit email verification code for submitting your service request is:</p>
        <div style="background:#f1f5f9;padding:15px;text-align:center;font-size:28px;font-weight:bold;letter-spacing:4px;color:#1e293b;border-radius:6px;margin:20px 0">
          ${otpCode}
        </div>
        <p style="font-size:13px;color:#64748b">This code will expire in 10 minutes. If you did not initiate this request, please ignore this email.</p>
      </div>`;

    const sendCodeRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM,
        to: [email],
        subject: `[Optima] Your Email Verification Code: ${otpCode}`,
        html: codeHtml
      })
    });

    if (!sendCodeRes.ok) {
      console.error('Email verification error:', await sendCodeRes.text());
      return json(res, 502, { message: 'Failed to send verification email code. Please check your email address and try again.' });
    }

    return json(res, 200, { message: 'Verification code sent to your email address.', step: 'VERIFICATION_SENT' });
  }

  // --- STEP 2: VERIFY CODE AND SUBMIT FINAL REQUEST ---
  const userCode = clean(body.verificationCode, 10);
  const storedData = verificationCodes.get(email);

  if (!storedData) {
    return json(res, 400, { message: 'No verification code was requested for this email or it has expired. Please request a code first.' });
  }

  if (Date.now() > storedData.expires) {
    verificationCodes.delete(email);
    return json(res, 400, { message: 'Verification code has expired. Please request a new one.' });
  }

  if (storedData.code !== userCode) {
    return json(res, 400, { message: 'Invalid verification code. Please check your inbox and try again.' });
  }

  // Code verified successfully -> clear OTP token
  verificationCodes.delete(email);

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
    return json(res, 500, { message: 'Email delivery is not configured on the server yet.' });
  }

  const structuredRows = Object.entries(service.fields).map(([field]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:700">${escapeHtml(field)}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0">${escapeHtml(body[field])}</td></tr>`).join('');
  const html = `
    <div style="font-family:Arial,sans-serif;color:#0f172a;max-width:760px;margin:auto">
      <h2 style="margin-bottom:4px">New Optima IT Solutions Service Request</h2>
      <p style="color:#64748b;margin-top:0">${escapeHtml(service.title)}</p>
      <h3>Contact details</h3>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px 12px;font-weight:700">Full name</td><td style="padding:8px 12px">${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Email</td><td style="padding:8px 12px">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Phone</td><td style="padding:8px 12px">${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Business / organisation</td><td style="padding:8px 12px">${escapeHtml(company)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Location</td><td style="padding:8px 12px">${escapeHtml(location)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Preferred contact</td><td style="padding:8px 12px">${escapeHtml(body.preferredContact)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Timeline</td><td style="padding:8px 12px">${escapeHtml(body.timeline)}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:700">Budget guidance</td><td style="padding:8px 12px">${escapeHtml(body.budget)}</td></tr>
      </table>
      <h3>Service requirements</h3>
      <table style="border-collapse:collapse;width:100%">${structuredRows}</table>
      <h3>Optional explanation</h3>
      <p style="background:#f8fafc;padding:12px;border-radius:8px">${escapeHtml(details || 'None provided')}</p>
      <p style="font-size:12px;color:#64748b">Human verification passed & Email address verified via 6-digit OTP code.</p>
    </div>`;

  const emailResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM,
      to: [DESTINATION_EMAIL],
      reply_to: email,
      subject: `[Optima] ${service.title} — ${fullName}`,
      html
    })
  });

  if (!emailResponse.ok) {
    console.error('Email provider error:', await emailResponse.text());
    return json(res, 502, { message: 'The request passed validation, but email delivery failed. Please try again later.' });
  }

  recentRequests.set(ip, now);
  return json(res, 200, { message: 'Request submitted successfully.' });
}