import React, { useState } from 'react';
import { 
  Menu, 
  ChevronLeft, 
  Network, 
  MonitorCog, 
  Terminal, 
  ShieldAlert, 
  Layers,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  ArrowLeft,
  LogOut,
  Globe,
  BarChart3,
  Database,
  CheckCircle2,
  ExternalLink,
  Code2,
  Calculator,
  Check
} from 'lucide-react';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Interactive state for the Web Dev tab scope calculator
  const [selectedFeatures, setSelectedFeatures] = useState({
    portfolio: true,
    customDomain: false,
    contactForm: true,
    analytics: false,
  });

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  const calculateEstimate = () => {
    let days = 3;
    if (selectedFeatures.portfolio) days += 2;
    if (selectedFeatures.customDomain) days += 1;
    if (selectedFeatures.contactForm) days += 1;
    if (selectedFeatures.analytics) days += 1;
    return days;
  };

  const navItems = [
    { id: 'overview', icon: <Layers size={20} />, label: "Overview & Catalog" },
    { id: 'webdev', icon: <Globe size={20} />, label: "Web Apps & Portfolios" },
    { id: 'analytics', icon: <BarChart3 size={20} />, label: "Data & Analytics" },
    { id: 'network', icon: <Network size={20} />, label: "Network Architecture" },
    { id: 'os', icon: <MonitorCog size={20} />, label: "OS & System Setup" },
    { id: 'software', icon: <Terminal size={20} />, label: "Custom Automation" },
    { id: 'diagnostics', icon: <ShieldAlert size={20} />, label: "Diagnostics & Security" }
  ];

  const renderMainContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* HERO / WELCOME BANNER */}
            <header className="relative p-8 md:p-10 rounded-3xl bg-linear-to-r from-slate-900 via-slate-900/90 to-lime-950/30 border border-slate-800/80 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/60 px-3.5 py-1 rounded-full border border-lime-800/40 mb-4">
                  <Sparkles size={14} className="animate-pulse" /> Precision Technology Solutions
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  High-Performance <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-emerald-300 to-cyan-400">IT Consulting & Software</span>
                </h1>
                <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
                  Explore our modular service offerings—from enterprise web applications and predictive analytics to hardened network infrastructure and task automation.
                </p>
              </div>
            </header>

            {/* ZIGZAG SERVICES SECTION */}
            <div className="space-y-12">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-white">Featured Consulting Catalog</h2>
                  <p className="text-xs text-slate-400">Structured solutions built on industry-standard architectures</p>
                </div>
                <span className="text-xs text-lime-400 font-mono bg-lime-950/40 px-3 py-1 rounded-full border border-lime-800/30">
                  7 Core Modules Available
                </span>
              </div>

              {/* ITEM 1: WEB DEV (Image Left | Text Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-lime-500/30 transition-all duration-300 group">
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 group-hover:border-lime-500/40 transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                    alt="Web Development & Single Page Apps" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                    Modern Web Stack
                  </span>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-cyan-400 mb-2">
                    <Globe size={22} />
                    <span className="text-xs font-bold uppercase tracking-wider">Frontend & Web Systems</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Custom Web Application Development</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Engineering sleek, ultra-responsive single-page applications, interactive business landing pages, and interactive digital portfolios. Built using standard React, Tailwind CSS, and GitHub hosting integrations.
                  </p>
                  <button 
                    onClick={() => setActiveTab('webdev')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-xl transition-all w-fit cursor-pointer shadow-lg shadow-lime-400/10"
                  >
                    View Web Development Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* ITEM 2: NETWORK DESIGN (Text Left | Image Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-lime-500/30 transition-all duration-300 group">
                <div className="lg:col-span-7 flex flex-col justify-center lg:order-1 order-2">
                  <div className="flex items-center gap-3 text-lime-400 mb-2">
                    <Network size={22} />
                    <span className="text-xs font-bold uppercase tracking-wider">Enterprise Infrastructure</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Network Topology Design & Costing</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Designing secure, simulated network topologies using Cisco Packet Tracer. We map VLAN isolation, custom subnets, multilayer switching, and generate complete hardware procurement budgets for small to medium enterprises.
                  </p>
                  <button 
                    onClick={() => setActiveTab('network')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-xl transition-all w-fit cursor-pointer shadow-lg shadow-lime-400/10"
                  >
                    View Infrastructure Process <ArrowRight size={14} />
                  </button>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 group-hover:border-lime-500/40 transition-colors lg:order-2 order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" 
                    alt="Network Hardware and Servers" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-lime-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-lg border border-lime-500/30">
                    Cisco Packet Tracer
                  </span>
                </div>
              </div>

              {/* ITEM 3: DATA ANALYTICS (Image Left | Text Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-lime-500/30 transition-all duration-300 group">
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 group-hover:border-lime-500/40 transition-colors">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                    alt="Data Analytics and Visualization" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-violet-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-lg border border-violet-500/30">
                    Python & Power BI
                  </span>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-violet-400 mb-2">
                    <BarChart3 size={22} />
                    <span className="text-xs font-bold uppercase tracking-wider">Business Intelligence</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Data Analytics & Predictive Dashboards</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Transforming raw business datasets into interactive visual dashboards and predictive models. Utilizing Python (NumPy, Matplotlib, Scikit-learn), KMeans clustering algorithms, and Power BI reporting.
                  </p>
                  <button 
                    onClick={() => setActiveTab('analytics')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-xl transition-all w-fit cursor-pointer shadow-lg shadow-lime-400/10"
                  >
                    View Data Solutions <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* ITEM 4: CUSTOM AUTOMATION (Text Left | Image Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-lime-500/30 transition-all duration-300 group">
                <div className="lg:col-span-7 flex flex-col justify-center lg:order-1 order-2">
                  <div className="flex items-center gap-3 text-amber-400 mb-2">
                    <Terminal size={22} />
                    <span className="text-xs font-bold uppercase tracking-wider">Workflow Engineering</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Custom Task Automation & Scripts</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Eliminating manual data entry and administrative clutter through tailored Python automation tools, directory monitors, automated file-sorting scripts, and Java utility desktop apps.
                  </p>
                  <button 
                    onClick={() => setActiveTab('software')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-xl transition-all w-fit cursor-pointer shadow-lg shadow-lime-400/10"
                  >
                    View Automation Catalog <ArrowRight size={14} />
                  </button>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 group-hover:border-lime-500/40 transition-colors lg:order-2 order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80" 
                    alt="Code Terminal and Automation Scripts" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-lg border border-amber-500/30">
                    Python & Java
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'webdev':
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            <header className="border-b border-slate-800/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/30">
                  Digital Presence Suite
                </span>
                <h1 className="text-3xl font-extrabold text-white mt-3">Custom Web Applications & Portfolios</h1>
                <p className="text-slate-400 text-sm mt-1">High-performance web applications tailored for small businesses, professionals, and academic portfolios.</p>
              </div>

              <div className="flex gap-2">
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1.5 rounded-xl border border-cyan-800/40 flex items-center gap-1.5">
                  <Code2 size={14} /> React + Tailwind CSS
                </span>
              </div>
            </header>

            {/* CORE OFFERING CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 p-6 rounded-2xl transition-all duration-300">
                <div className="p-3 bg-cyan-950/60 rounded-xl w-fit text-cyan-400 border border-cyan-800/40 mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Single-Page Applications (SPAs)</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Fast, reactive web platforms developed with modern JavaScript frameworks, offering fluid navigation without repetitive page refreshes.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" /> Dynamic state handling & client-side routing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" /> Fully responsive across desktop, tablet, & mobile
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 p-6 rounded-2xl transition-all duration-300">
                <div className="p-3 bg-cyan-950/60 rounded-xl w-fit text-cyan-400 border border-cyan-800/40 mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Virtual CV & Portfolio Portals</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Interactive web portfolios designed to showcase technical skills, coursework projects, and professional history—hosted directly on GitHub Pages.
                </p>
                <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" /> GitHub Pages hosting & custom domain mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-400" /> Integrated downloadable resume & project showcases
                  </li>
                </ul>
              </div>
            </div>

            {/* INTERACTIVE SCOPE & ESTIMATOR CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-lime-950/60 text-lime-400 rounded-xl border border-lime-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Interactive Web Project Estimator</h3>
                  <p className="text-xs text-slate-400">Select components to estimate turn-around time and scope</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'portfolio', label: 'Virtual CV / Single-Page Portfolio', days: '2 Days' },
                  { id: 'contactForm', label: 'Interactive Contact Form & Map Pinning', days: '1 Day' },
                  { id: 'customDomain', label: 'Custom Domain & GitHub Pages Setup', days: '1 Day' },
                  { id: 'analytics', label: 'Embedded Analytics & Visitor Metrics', days: '1 Day' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleFeature(item.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                      selectedFeatures[item.id]
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                        selectedFeatures[item.id] ? 'bg-cyan-400 border-cyan-400 text-slate-950 font-bold' : 'border-slate-700'
                      }`}>
                        {selectedFeatures[item.id] && <Check size={12} />}
                      </div>
                      <span className="text-xs font-semibold">{item.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                      +{item.days}
                    </span>
                  </button>
                ))}
              </div>

              {/* REMOVED SUBMIT BUTTON - DISPLAYING ESTIMATED TIME ONLY */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Turnaround Time:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{calculateEstimate()} Business Days</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-cyan-950/20 border border-slate-800/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Ready to build your web presence?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us build a clean, responsive web application tailored to your project goals.</p>
              </div>
              <button 
                onClick={() => alert("Consultation form opened!")}
                className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request Consultation
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            <header className="border-b border-slate-800/80 pb-6">
              <span className="text-xs font-bold tracking-widest text-violet-400 uppercase bg-violet-950/40 px-3 py-1 rounded-full border border-violet-800/30">
                Business Intelligence Engine
              </span>
              <h1 className="text-3xl font-extrabold text-white mt-3">Data Analytics & Predictive Dashboards</h1>
              <p className="text-slate-400 text-sm mt-1">Converting operational data into clear visual insights and automated clustering reports.</p>
            </header>

            <div className="space-y-4">
              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex gap-4 items-start">
                <BarChart3 className="text-violet-400 shrink-0" size={24} />
                <div>
                  <h3 className="text-base font-bold text-white">Power BI Dashboard Generation</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    Structuring relational data schemas and producing dynamic visual reports for operational tracking and executive summaries.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex gap-4 items-start">
                <Database className="text-violet-400 shrink-0" size={24} />
                <div>
                  <h3 className="text-base font-bold text-white">Machine Learning & Data Clustering</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                    Applying Python statistical libraries (NumPy, Scikit-learn) and unsupervised algorithms (KMeans) to segment customer groups and recognize patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            <header className="border-b border-slate-800/80 pb-6">
              <span className="text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/40 px-3 py-1 rounded-full border border-lime-800/30">
                Enterprise Consulting Phase
              </span>
              <h1 className="text-3xl font-extrabold text-white mt-3">Network Architecture & Infrastructure Budgeting</h1>
              <p className="text-slate-400 text-sm mt-1">Our end-to-end engineering pipeline for designing scalable, secure corporate environments.</p>
            </header>

            <div className="space-y-4">
              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex gap-4 items-start">
                <Layers className="text-lime-400 shrink-0" size={20} />
                <div>
                  <h3 className="text-base font-bold text-white">1. Site Assessment & Requirements</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">Analyzing floor plans and physical constraints to calculate hardware density targets.</p>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl flex gap-4 items-start">
                <Cpu className="text-lime-400 shrink-0" size={20} />
                <div>
                  <h3 className="text-base font-bold text-white">2. Cisco Packet Tracer Topology Simulation</h3>
                  <p className="text-slate-400 text-sm mt-1 leading-relaxed">Building complete virtual models of edge routers, managed switches, and VLAN distributions.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'os':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            <h1 className="text-3xl font-extrabold text-white">OS Deployment & Software Suites</h1>
            <p className="text-slate-400 text-sm">Clean installations (Windows/Linux), OEM driver tuning, and Microsoft 365 software integration.</p>
          </div>
        );

      case 'software':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            <h1 className="text-3xl font-extrabold text-white">Custom Software & Task Automation</h1>
            <p className="text-slate-400 text-sm">Automated Python scripts for data manipulation, folder sorting, and specialized Java utility software.</p>
          </div>
        );

      case 'diagnostics':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            <h1 className="text-3xl font-extrabold text-white">System Diagnostics & Security Hardening</h1>
            <p className="text-slate-400 text-sm">BSOD error dump troubleshooting, malware extraction, password vault configuration, and 2FA deployment.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-lime-500 selection:text-slate-950">
      
      {/* WELCOME PORTAL OVERLAY */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 bg-lime-500/15 rounded-full blur-[140px] pointer-events-none"></div>

          <div className="relative text-center max-w-2xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-2xl border-t-lime-500/30">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/60 px-4 py-1.5 rounded-full border border-lime-800/50 mb-6">
              <Sparkles size={14} className="animate-pulse" />
              Secure. Optimize. Automate.
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              OPTIMA <span className="text-lime-400">IT SOLUTIONS</span>
            </h1>
            
            <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8 max-w-lg mx-auto">
              We design secure network architectures, build custom web applications, structure data analytics, and engineer workflow automation tools.
            </p>

            <button 
              onClick={() => setHasEntered(true)}
              className="inline-flex items-center gap-3 bg-lime-400 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-lime-300 transition-all duration-300 cursor-pointer shadow-lg shadow-lime-400/20 group text-base"
            >
              Explore Catalog & Control Panel
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 h-16 flex items-center justify-between px-6">
        <div className="flex flex-col justify-center">
          <span className="font-extrabold tracking-wider text-xl text-white leading-none">
            OPTIMA<span className="text-lime-400"> IT SOLUTIONS</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">
            Secure. Optimize. Automate.
          </span>
        </div>

        <div className="flex items-center gap-3 bg-slate-950 px-4 py-1.5 rounded-full border border-slate-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300">Live Portal</span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden">
        
        {/* SIDEBAR NAVIGATION */}
        <aside 
          className={`bg-slate-900 border-r border-slate-800/80 flex flex-col justify-between p-4 transition-all duration-300 ease-in-out shrink-0 ${
            isExpanded ? 'w-64' : 'w-20'
          }`}
        >
          <div>
            <div className={`flex items-center mb-6 ${isExpanded ? 'justify-end' : 'justify-center'}`}>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-lime-400 transition-colors cursor-pointer"
              >
                {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
              </button>
            </div>

            <nav className="space-y-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3.5 p-3 rounded-xl font-medium transition-all duration-200 cursor-pointer text-left text-xs ${
                    activeTab === item.id 
                      ? 'bg-lime-950/50 text-lime-400 border border-lime-500/30' 
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span className={`transition-opacity duration-300 whitespace-nowrap font-semibold ${
                    isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-slate-800/80 pt-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-lime-400 font-bold text-slate-950 flex items-center justify-center shrink-0 text-xs">
                RM
              </div>
              {isExpanded && (
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-white truncate">Rebone Motswana</span>
                  <span className="text-[10px] text-lime-400 truncate">Lead IT Consultant</span>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                setHasEntered(false);
                setActiveTab('overview');
              }}
              className={`flex items-center gap-3.5 p-2 rounded-xl text-xs font-semibold text-red-400 hover:bg-red-950/30 transition-all cursor-pointer ${
                isExpanded ? 'w-full px-3' : 'w-9 h-9 justify-center mx-auto'
              }`}
            >
              <LogOut size={16} className="shrink-0" />
              {isExpanded && <span>Exit Portal</span>}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-slate-950">
          {renderMainContent()}
        </main>

      </div>
    </div>
  );
}

export default App;