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
  Check,
  Cloud,
  Server,
  HardDrive,
  RefreshCw,
  Zap,
  Search,
  Layout,
  Rocket,
  LineChart,
  PieChart,
  TrendingUp,
  BrainCircuit,
  Filter,
  Workflow,
  Table,
  Wifi,
  Router,
  Radio,
  FileSpreadsheet,
  Settings,
  HardDriveDownload,
  Sliders,
  CheckSquare,
  Lock,
  Key,
  FileCode,
  Bot,
  Play,
  Activity,
  AlertTriangle,
  FolderGit2
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

  // Interactive state for the Cloud Migration estimator
  const [cloudConfig, setCloudConfig] = useState({
    serverCount: 1,
    databaseGb: 50,
    backupStrategy: 'daily', // 'daily' | 'realtime'
    supportLevel: 'business' // 'basic' | 'business'
  });

  // Interactive state for Data & Analytics Estimator
  const [analyticsConfig, setAnalyticsConfig] = useState({
    rowCount: 50000,
    dataSources: 2,
    enableML: true,
    dashboardFrequency: 'realtime' // 'daily' | 'realtime'
  });

  // Interactive state for Network Architecture Estimator
  const [networkConfig, setNetworkConfig] = useState({
    workstations: 25,
    vlanCount: 3,
    wirelessAP: 2,
    redundantRouter: false
  });

  // Interactive state for OS & System Setup Configurator
  const [osConfig, setOsConfig] = useState({
    workstations: 5,
    osType: 'dual', // 'windows' | 'linux' | 'dual'
    suite: 'enterprise', // 'basic' | 'enterprise'
    securityHardening: true
  });

  // Interactive state for Custom Automation Estimator
  const [automationConfig, setAutomationConfig] = useState({
    scriptLanguage: 'python', // 'python' | 'java' | 'bash'
    taskComplexity: 'medium', // 'simple' | 'medium' | 'complex'
    scheduleType: 'cron', // 'manual' | 'cron' | 'event'
    guiRequired: false
  });

  // Interactive state for Diagnostics & Security Estimator
  const [securityConfig, setSecurityConfig] = useState({
    deviceCount: 10,
    scanDepth: 'full', // 'quick' | 'full' | 'deep'
    vulnerabilityAudit: true,
    osHardening: true
  });

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  const calculateEstimate = () => {
    let days = 7; // Set realistic base minimum working days
    if (selectedFeatures.portfolio) days += 1;
    if (selectedFeatures.customDomain) days += 1;
    if (selectedFeatures.contactForm) days += 1;
    if (selectedFeatures.analytics) days += 1;
    return days;
  };

  // Cloud Migration Cost & Timeline Calculator Logic
  const calculateCloudEstimate = () => {
    const baseMigrationDays = 7 + (cloudConfig.serverCount - 1); // Realistic minimum 7 working days
    const dbMigrationDays = Math.ceil(cloudConfig.databaseGb / 100);
    const totalDays = baseMigrationDays + dbMigrationDays + (cloudConfig.backupStrategy === 'realtime' ? 1 : 0);

    // Approximate monthly AWS infra estimate (USD)
    const serverCost = cloudConfig.serverCount * 45; // e.g., t3.medium EC2 instances
    const storageCost = (cloudConfig.databaseGb * 0.11); // RDS / EBS storage
    const backupCost = cloudConfig.backupStrategy === 'realtime' ? 30 : 10;
    const supportCost = cloudConfig.supportLevel === 'business' ? 100 : 20;
    const monthlyTotal = Math.round(serverCost + storageCost + backupCost + supportCost);

    return { totalDays, monthlyTotal };
  };

  // Data & Analytics Estimator Logic
  const calculateAnalyticsEstimate = () => {
    const baseDays = 3;
    const sourceDays = analyticsConfig.dataSources * 2;
    const mlDays = analyticsConfig.enableML ? 4 : 0;
    const volumeDays = Math.ceil(analyticsConfig.rowCount / 100000);
    const totalDays = baseDays + sourceDays + mlDays + volumeDays;

    const pipelineCost = analyticsConfig.dataSources * 150 + (analyticsConfig.enableML ? 300 : 100);
    const estimatedValueGain = Math.round((analyticsConfig.rowCount * 0.08) + (analyticsConfig.dataSources * 450));

    return { totalDays, pipelineCost, estimatedValueGain };
  };

  // Network Architecture Estimator Logic
  const calculateNetworkEstimate = () => {
    const baseDays = 4;
    const switchDays = Math.ceil(networkConfig.workstations / 24);
    const vlanDays = networkConfig.vlanCount * 1;
    const totalDays = baseDays + switchDays + vlanDays + (networkConfig.redundantRouter ? 2 : 0);

    // Hardware cost approximation in ZAR / USD budget estimation
    const switchCost = switchDays * 450;
    const apCost = networkConfig.wirelessAP * 180;
    const routerCost = networkConfig.redundantRouter ? 900 : 450;
    const cablingCost = networkConfig.workstations * 25;
    const totalHardwareBudget = switchCost + apCost + routerCost + cablingCost;

    return { totalDays, totalHardwareBudget };
  };

  // OS & System Setup Estimator Logic
  const calculateOsEstimate = () => {
    const hoursPerMachine = osConfig.osType === 'dual' ? 2.5 : 1.5;
    const totalHours = Math.ceil(osConfig.workstations * hoursPerMachine + (osConfig.securityHardening ? 2 : 0));
    const estimatedDays = Math.max(1, Math.ceil(totalHours / 8));
    const softwareBudgetEstimate = osConfig.workstations * (osConfig.suite === 'enterprise' ? 150 : 50);

    return { estimatedDays, totalHours, softwareBudgetEstimate };
  };

  // Custom Automation Estimator Logic
  const calculateAutomationEstimate = () => {
    let baseHours = 4;
    if (automationConfig.taskComplexity === 'medium') baseHours = 8;
    if (automationConfig.taskComplexity === 'complex') baseHours = 16;
    if (automationConfig.guiRequired) baseHours += 6;
    if (automationConfig.scheduleType === 'event') baseHours += 4;

    const estimatedDays = Math.max(1, Math.ceil(baseHours / 8));
    const hoursSavedPerWeek = automationConfig.taskComplexity === 'simple' ? 3 : (automationConfig.taskComplexity === 'medium' ? 8 : 20);

    return { estimatedDays, totalHours: baseHours, hoursSavedPerWeek };
  };

  // Diagnostics & Security Estimator Logic
  const calculateSecurityEstimate = () => {
    const scanHours = securityConfig.scanDepth === 'quick' ? 1 : (securityConfig.scanDepth === 'full' ? 3 : 6);
    const perDeviceMinutes = 15;
    const totalHours = Math.ceil(scanHours + (securityConfig.deviceCount * perDeviceMinutes) / 60 + (securityConfig.vulnerabilityAudit ? 4 : 0));
    const estimatedDays = Math.max(1, Math.ceil(totalHours / 8));

    return { estimatedDays, totalHours, riskReductionPct: securityConfig.osHardening ? 85 : 50 };
  };

  const navItems = [
    { id: 'overview', icon: <Layers size={20} />, label: "Overview & Catalog" },
    { id: 'cloud', icon: <Cloud size={20} />, label: "Cloud Migration" },
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
                  Explore our modular service offerings—from cloud server migration and enterprise web applications to predictive analytics, network infrastructure, and task automation.
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
                  8 Core Modules Available
                </span>
              </div>

              {/* ITEM 0: CLOUD MIGRATION (Text Left | Image Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-lime-500/30 transition-all duration-300 group">
                <div className="lg:col-span-7 flex flex-col justify-center lg:order-1 order-2">
                  <div className="flex items-center gap-3 text-sky-400 mb-2">
                    <Cloud size={22} />
                    <span className="text-xs font-bold uppercase tracking-wider">Cloud Infrastructure & AWS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Cloud Migration & Onboarding for Small Businesses</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    A lightweight, cost-effective service designed for single-branch small businesses moving from physical servers and local databases to secure AWS cloud infrastructure. Minimizes hardware maintenance and eliminates single points of failure with predictable monthly running costs.
                  </p>
                  <button 
                    onClick={() => setActiveTab('cloud')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-lime-400 hover:bg-lime-300 px-5 py-2.5 rounded-xl transition-all w-fit cursor-pointer shadow-lg shadow-lime-400/10"
                  >
                    View Cloud Migration Strategy <ArrowRight size={14} />
                  </button>
                </div>
                <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-800 group-hover:border-lime-500/40 transition-colors lg:order-2 order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1600267185393-e158a98703de?auto=format&fit=crop&w=800&q=80" 
                    alt="Cloud Migration and Server Architecture" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-sky-400 uppercase tracking-widest bg-slate-950/80 px-2.5 py-1 rounded-lg border border-sky-500/30">
                    AWS EC2 & RDS
                  </span>
                </div>
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

      case 'cloud':
        const cloudEst = calculateCloudEstimate();
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
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-sky-950/40 px-3 py-1 rounded-full border border-sky-800/30">
                  AWS Cloud Architecture
                </span>
                <h1 className="text-3xl font-extrabold text-white mt-3">Cloud Migration & Infrastructure</h1>
                <p className="text-slate-400 text-sm mt-1">Seamless transition from on-premise physical servers to managed AWS cloud environments.</p>
              </div>

              <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-3 py-1.5 rounded-xl border border-sky-800/40 flex items-center gap-1.5 w-fit">
                <Cloud size={14} /> AWS EC2 & RDS Managed
              </span>
            </header>

            {/* WHAT WE OFFER IN CLOUD MIGRATION */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={18} className="text-sky-400" /> What Exactly We Offer
                </h2>
                <span className="text-xs text-sky-400 font-mono">Managed Solutions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="p-2.5 bg-sky-950/60 rounded-xl w-fit text-sky-400 border border-sky-800/40 mb-3">
                    <Server size={20} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">On-Premise to AWS Virtual Server Migration</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Migration of local physical or virtual servers to secure, auto-scaling AWS EC2 virtual machines with customized OS configurations.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="p-2.5 bg-sky-950/60 rounded-xl w-fit text-sky-400 border border-sky-800/40 mb-3">
                    <Database size={20} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">Database & File Cloud Synchronization</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Transfer and conversion of legacy relational databases into managed AWS RDS instances and secure S3 bucket storage.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl">
                  <div className="p-2.5 bg-sky-950/60 rounded-xl w-fit text-sky-400 border border-sky-800/40 mb-3">
                    <ShieldAlert size={20} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">Security, Backup & Disaster Recovery</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Setup of custom IAM permissions, VPC firewall rules, daily automated backups, and 24/7 infrastructure monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* ENHANCED VISUAL MIGRATION STEPS SECTION WITH PICTURES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-sky-400" /> Our 4-Step Migration Framework
                </h2>
                <span className="text-xs text-sky-400 font-mono">End-to-End AWS Onboarding</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" 
                      alt="Assessment & Audit" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-sky-500/90 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        Assessment & Audit
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Inventory existing local servers, databases, and bandwidth usage to select optimal AWS instance sizes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" 
                      alt="Architecture & Provisioning" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-sky-500/90 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        Architecture & VPC
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Configure secure VPCs, IAM user permissions, firewall rules, and provision virtual EC2 or RDS nodes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" 
                      alt="Data Transfer & Testing" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-sky-500/90 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        Data Sync & Sandbox
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Sync local databases and file stores into cloud storage, run integrity tests, and conduct trial runs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                      alt="Cutover & Optimization" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-sky-500/90 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-sky-400 transition-colors">
                        Live Cutover & Backup
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Execute final live cutover off-peak, map domains/IPs, activate automated backups, and monitor metrics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CLOUD ESTIMATOR CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-sky-950/60 text-sky-400 rounded-xl border border-sky-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">AWS Cloud Migration Estimator</h3>
                  <p className="text-xs text-slate-400">Tailor requirements to estimate deployment timeline & estimated AWS running costs</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* SERVERS */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Server size={14} className="text-sky-400" /> Virtual / Physical Servers to Migrate
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={cloudConfig.serverCount}
                      onChange={(e) => setCloudConfig(prev => ({ ...prev, serverCount: parseInt(e.target.value) }))}
                      className="w-full accent-sky-400 cursor-pointer"
                    />
                    <span className="text-sm font-bold text-sky-400 font-mono w-12 text-right">{cloudConfig.serverCount} Server{cloudConfig.serverCount > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* DATABASE SIZE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <HardDrive size={14} className="text-sky-400" /> Total Database / File Volume (GB)
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="10" 
                      max="500" 
                      step="10"
                      value={cloudConfig.databaseGb}
                      onChange={(e) => setCloudConfig(prev => ({ ...prev, databaseGb: parseInt(e.target.value) }))}
                      className="w-full accent-sky-400 cursor-pointer"
                    />
                    <span className="text-sm font-bold text-sky-400 font-mono w-16 text-right">{cloudConfig.databaseGb} GB</span>
                  </div>
                </div>

                {/* BACKUP STRATEGY */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <RefreshCw size={14} className="text-sky-400" /> Automated Backup Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCloudConfig(prev => ({ ...prev, backupStrategy: 'daily' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        cloudConfig.backupStrategy === 'daily'
                          ? 'bg-sky-950/60 border-sky-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Daily Snapshot
                    </button>
                    <button
                      onClick={() => setCloudConfig(prev => ({ ...prev, backupStrategy: 'realtime' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        cloudConfig.backupStrategy === 'realtime'
                          ? 'bg-sky-950/60 border-sky-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Real-time Replication
                    </button>
                  </div>
                </div>

                {/* SUPPORT LEVEL */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-sky-400" /> Maintenance & Support Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCloudConfig(prev => ({ ...prev, supportLevel: 'basic' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        cloudConfig.supportLevel === 'basic'
                          ? 'bg-sky-950/60 border-sky-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Standard Monitoring
                    </button>
                    <button
                      onClick={() => setCloudConfig(prev => ({ ...prev, supportLevel: 'business' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        cloudConfig.supportLevel === 'business'
                          ? 'bg-sky-950/60 border-sky-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      24/7 Managed Support
                    </button>
                  </div>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Migration Timeline:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{cloudEst.totalDays} Business Days</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Est. AWS Monthly Infra Cost:</span>
                  <p className="text-2xl font-extrabold text-sky-400 font-mono">~${cloudEst.monthlyTotal} / month</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-sky-950/20 border border-slate-800/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Ready to move your servers to the cloud?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Schedule an infrastructure assessment with our team to map out your migration strategy.</p>
              </div>
              <button 
                onClick={() => alert("Cloud consultation request initiated!")}
                className="bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Schedule Migration Audit
                <ExternalLink size={14} />
              </button>
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

            {/* VISUAL WEB DEVELOPMENT STEPS WITH PICTURES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-cyan-400" /> Our Development Lifecycle
                </h2>
                <span className="text-xs text-cyan-400 font-mono">Agile Delivery Methodology</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" 
                      alt="Discovery & Scope Analysis" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <Search size={14} className="text-cyan-400" /> Discovery & Scope
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Gather client requirements, define app features, curate asset libraries, and draft initial content outlines.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80" 
                      alt="UI/UX Prototyping & Layout" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <Layout size={14} className="text-cyan-400" /> UI/UX Wireframing
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Design clean dark-mode components, pick accessible color schemes, and structure responsive navigation layouts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
                      alt="Frontend Engineering & Integration" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <Code2 size={14} className="text-cyan-400" /> Development & React
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Construct functional React components, implement Tailwind CSS utilities, and configure interactive state logic.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Deployment & GitHub Pages Hosting" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-cyan-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <Rocket size={14} className="text-cyan-400" /> QA & Deployment
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Execute cross-browser checks, optimize page performance, connect custom domain names, and deploy live on GitHub Pages.
                      </p>
                    </div>
                  </div>
                </div>
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
                  { id: 'portfolio', label: 'Virtual CV / Single-Page Portfolio', days: '1 Day' },
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
        const analyticsEst = calculateAnalyticsEstimate();
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-violet-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            {/* VIBRANT VIOLET/FUCHSIA HEADER */}
            <header className="relative p-8 rounded-3xl bg-linear-to-r from-violet-950/80 via-slate-900 to-fuchsia-950/40 border border-violet-800/50 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-violet-300 uppercase bg-violet-900/60 px-3 py-1 rounded-full border border-violet-700/50 mb-3">
                    <BrainCircuit size={14} className="animate-pulse" /> Business Intelligence Engine
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Data Analytics & Predictive Dashboards
                  </h1>
                  <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                    Transforming raw, multi-source operational data into dynamic visual dashboards, automated cluster segmentation, and actionable business intelligence.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-violet-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-violet-500/30 flex items-center gap-1.5">
                    <BarChart3 size={14} /> Power BI
                  </span>
                  <span className="text-[11px] font-mono text-fuchsia-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-fuchsia-500/30 flex items-center gap-1.5">
                    <BrainCircuit size={14} /> Python & Scikit-learn
                  </span>
                </div>
              </div>
            </header>

            {/* VIBRANT CORE ANALYTICS SOLUTIONS GRID */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp size={18} className="text-violet-400" /> Analytics Capabilities
                </h2>
                <span className="text-xs text-violet-400 font-mono">End-to-End Insights</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1: POWER BI */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-violet-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20 group">
                  <div className="p-3 bg-violet-950/80 rounded-xl w-fit text-violet-400 border border-violet-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    Power BI Dashboard Generation
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Structuring relational data models, automated refresh pipelines, and interactive executive reporting views across key KPIs.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 shrink-0" /> Dynamic drill-down filter visualizer
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-violet-400 shrink-0" /> Automated scheduled dataset refresh
                    </li>
                  </ul>
                </div>

                {/* CARD 2: KMEANS ML */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-fuchsia-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-950/20 group">
                  <div className="p-3 bg-fuchsia-950/80 rounded-xl w-fit text-fuchsia-400 border border-fuchsia-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <BrainCircuit size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors">
                    KMeans Machine Learning Clustering
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Leveraging Scikit-learn to run unsupervised clustering on customer segments, transaction histories, and operational metrics.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-fuchsia-400 shrink-0" /> Optimal centroid detection algorithms
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-fuchsia-400 shrink-0" /> NumPy & Matplotlib scatter plot reports
                    </li>
                  </ul>
                </div>

                {/* CARD 3: SQL & ETL */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group">
                  <div className="p-3 bg-cyan-950/80 rounded-xl w-fit text-cyan-400 border border-cyan-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Database size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    SQL Warehousing & ETL Pipelines
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Designing normalized SQL relational schemas, PostgreSQL queries, and automated data cleaning Python scripts.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Automated anomaly & null-value cleanup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Multi-source CSV & SQL consolidation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISUAL ANALYTICS WORKFLOW LIFECYCLE WITH IMAGES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Workflow size={18} className="text-violet-400" /> The 4-Stage Data Pipeline
                </h2>
                <span className="text-xs text-violet-400 font-mono">From Raw Data to Insight</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STAGE 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80" 
                      alt="Data Ingestion & Aggregation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-violet-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                        <Filter size={14} className="text-violet-400" /> Ingestion & Cleaning
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Extract raw data from CSVs, SQL databases, or APIs; sanitize duplicates, standardise formats, and handle missing attributes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STAGE 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                      alt="Relational Modeling & Warehousing" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-violet-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                        <Table size={14} className="text-violet-400" /> Relational Modeling
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Construct star schemas, primary/foreign key relationships, and optimized SQL views tailored for analytics queries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STAGE 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" 
                      alt="Predictive Modeling & Clustering" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-violet-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                        <BrainCircuit size={14} className="text-violet-400" /> Machine Learning
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Execute Python unsupervised KMeans algorithms to uncover hidden patterns, customer tiers, and operational clusters.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STAGE 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Dashboard Visualization & Reporting" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-violet-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-violet-300 transition-colors flex items-center gap-1.5">
                        <BarChart3 size={14} className="text-violet-400" /> Interactive BI
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Publish sleek Power BI reporting suites with dynamic filters, time-series projections, and executive drill-down cards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE DATA PIPELINE CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-violet-950/60 text-violet-400 rounded-xl border border-violet-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Data Pipeline & Insights Estimator</h3>
                  <p className="text-xs text-slate-400">Configure dataset parameters to estimate setup timeframe & value ROI</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* DATASET ROWS */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Table size={14} className="text-violet-400" /> Total Record Volume (Rows)
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="5000" 
                      max="500000" 
                      step="5000"
                      value={analyticsConfig.rowCount}
                      onChange={(e) => setAnalyticsConfig(prev => ({ ...prev, rowCount: parseInt(e.target.value) }))}
                      className="w-full accent-violet-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-violet-400 font-mono w-20 text-right">
                      {(analyticsConfig.rowCount / 1000).toFixed(0)}k Rows
                    </span>
                  </div>
                </div>

                {/* DATA SOURCES */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Database size={14} className="text-violet-400" /> Data Sources / Databases to Merge
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="8" 
                      value={analyticsConfig.dataSources}
                      onChange={(e) => setAnalyticsConfig(prev => ({ ...prev, dataSources: parseInt(e.target.value) }))}
                      className="w-full accent-violet-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-violet-400 font-mono w-16 text-right">
                      {analyticsConfig.dataSources} Source{analyticsConfig.dataSources > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* MACHINE LEARNING TOGGLE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <BrainCircuit size={14} className="text-violet-400" /> Predictive Clustering & ML
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setAnalyticsConfig(prev => ({ ...prev, enableML: false }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        !analyticsConfig.enableML
                          ? 'bg-violet-950/60 border-violet-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Standard BI Dashboards
                    </button>
                    <button
                      onClick={() => setAnalyticsConfig(prev => ({ ...prev, enableML: true }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        analyticsConfig.enableML
                          ? 'bg-violet-950/60 border-violet-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      KMeans ML Included
                    </button>
                  </div>
                </div>

                {/* DASHBOARD REFRESH FREQUENCY */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <RefreshCw size={14} className="text-violet-400" /> Data Sync Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setAnalyticsConfig(prev => ({ ...prev, dashboardFrequency: 'daily' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        analyticsConfig.dashboardFrequency === 'daily'
                          ? 'bg-violet-950/60 border-violet-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Daily Scheduled Sync
                    </button>
                    <button
                      onClick={() => setAnalyticsConfig(prev => ({ ...prev, dashboardFrequency: 'realtime' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        analyticsConfig.dashboardFrequency === 'realtime'
                          ? 'bg-violet-950/60 border-violet-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Near Real-time Gateway
                    </button>
                  </div>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Delivery Timeframe:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{analyticsEst.totalDays} Business Days</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Est. Operational Efficiency Gain:</span>
                  <p className="text-2xl font-extrabold text-fuchsia-400 font-mono">+${analyticsEst.estimatedValueGain} / month</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-violet-950/30 border border-violet-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Unlock the full value of your business data</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us build automated Power BI reports and machine learning clustering models for your datasets.</p>
              </div>
              <button 
                onClick={() => alert("Analytics consultation requested!")}
                className="bg-violet-500 hover:bg-violet-400 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request Analytics Audit
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      case 'network':
        const netEst = calculateNetworkEstimate();
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-lime-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            {/* LIME / EMERALD HEADER */}
            <header className="relative p-8 rounded-3xl bg-linear-to-r from-lime-950/80 via-slate-900 to-emerald-950/40 border border-lime-800/50 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/60 px-3 py-1 rounded-full border border-lime-800/50 mb-3">
                    <Network size={14} className="animate-pulse" /> Enterprise Infrastructure
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Network Architecture & Hardware Budgeting
                  </h1>
                  <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                    End-to-end network topology engineering, virtual Cisco Packet Tracer simulations, VLAN segmentations, and comprehensive hardware procurement planning.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-lime-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-lime-500/30 flex items-center gap-1.5">
                    <Router size={14} /> Cisco Packet Tracer
                  </span>
                  <span className="text-[11px] font-mono text-emerald-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30 flex items-center gap-1.5">
                    <Wifi size={14} /> VLAN & Subnetting
                  </span>
                </div>
              </div>
            </header>

            {/* WHAT WE OFFER IN NETWORK ARCHITECTURE */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={18} className="text-lime-400" /> Infrastructure Capabilities
                </h2>
                <span className="text-xs text-lime-400 font-mono">Enterprise Standard Solutions</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-lime-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-lime-950/20 group">
                  <div className="p-3 bg-lime-950/80 rounded-xl w-fit text-lime-400 border border-lime-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Router size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-lime-300 transition-colors">
                    Cisco Packet Tracer Simulations
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Full pre-deployment virtual network modeling. Pre-verify router interfaces, trunking protocols, and ping latency before buying physical gear.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-lime-400 shrink-0" /> Multi-router & switch topology diagrams
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-lime-400 shrink-0" /> Command-line CLI configuration scripts
                    </li>
                  </ul>
                </div>

                {/* CARD 2 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 group">
                  <div className="p-3 bg-emerald-950/80 rounded-xl w-fit text-emerald-400 border border-emerald-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Radio size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    VLAN & Subnet Isolation
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Segment corporate departments, guest Wi-Fi, and IoT devices into distinct subnet ranges to reduce broadcast traffic and isolate security breaches.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Custom IPv4/IPv6 CIDR subnet masks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Inter-VLAN routing & ACL firewalls
                    </li>
                  </ul>
                </div>

                {/* CARD 3 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group">
                  <div className="p-3 bg-cyan-950/80 rounded-xl w-fit text-cyan-400 border border-cyan-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <FileSpreadsheet size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Procurement Costing & BOM
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Itemized Bill of Materials (BOM) for switches, patch panels, Cat6 cabling, access points, and server rack mountings catered to your budget.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Multi-vendor price comparison (Cisco/Ubiquiti)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Future-proofed expansion forecasting
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISUAL 4-STEP NETWORK DESIGN PROCESS WITH IMAGES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-lime-400" /> Engineering & Deployment Lifecycle
                </h2>
                <span className="text-xs text-lime-400 font-mono">From Site Map to Hardware</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" 
                      alt="Site Survey & Floor Planning" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-lime-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-lime-300 transition-colors flex items-center gap-1.5">
                        <Layers size={14} className="text-lime-400" /> Physical Site Assessment
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Analyze office blueprints, physical port counts, wall drops, and calculate cable run distances to prevent signal attenuation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80" 
                      alt="Packet Tracer Topology Modeling" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-lime-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-lime-300 transition-colors flex items-center gap-1.5">
                        <Cpu size={14} className="text-lime-400" /> Virtual Topology Simulation
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Construct full interactive network schematics in Cisco Packet Tracer, testing IP addressing schemes and switch trunking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" 
                      alt="VLAN Security & Subnet Design" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-lime-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-lime-300 transition-colors flex items-center gap-1.5">
                        <ShieldAlert size={14} className="text-lime-400" /> Security & Subnet Mapping
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Assign VLAN IDs, configure DHCP pools, setup WPA3 enterprise security for wireless APs, and write router access control lists.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-lime-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                      alt="Hardware Procurement & Deployment" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-lime-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-lime-300 transition-colors flex items-center gap-1.5">
                        <FileSpreadsheet size={14} className="text-lime-400" /> Budget & Procurement
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Generate final physical hardware procurement manifests, complete with rack layout guides and cable management specs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE NETWORK HARDWARE ESTIMATOR CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-lime-950/60 text-lime-400 rounded-xl border border-lime-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Network Infrastructure Estimator</h3>
                  <p className="text-xs text-slate-400">Estimate hardware requirements, cost budgets & deployment days</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WORKSTATIONS */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <MonitorCog size={14} className="text-lime-400" /> Active Workstations & Ethernet Drops
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="5" 
                      max="120" 
                      step="5"
                      value={networkConfig.workstations}
                      onChange={(e) => setNetworkConfig(prev => ({ ...prev, workstations: parseInt(e.target.value) }))}
                      className="w-full accent-lime-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-lime-400 font-mono w-20 text-right">{networkConfig.workstations} Nodes</span>
                  </div>
                </div>

                {/* VLAN COUNT */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Layers size={14} className="text-lime-400" /> Segmented VLANs (Dept/Guest/IoT)
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="8" 
                      value={networkConfig.vlanCount}
                      onChange={(e) => setNetworkConfig(prev => ({ ...prev, vlanCount: parseInt(e.target.value) }))}
                      className="w-full accent-lime-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-lime-400 font-mono w-16 text-right">{networkConfig.vlanCount} VLANs</span>
                  </div>
                </div>

                {/* WIRELESS APs */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Wifi size={14} className="text-lime-400" /> Access Points Needed
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={networkConfig.wirelessAP}
                      onChange={(e) => setNetworkConfig(prev => ({ ...prev, wirelessAP: parseInt(e.target.value) }))}
                      className="w-full accent-lime-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-lime-400 font-mono w-16 text-right">{networkConfig.wirelessAP} APs</span>
                  </div>
                </div>

                {/* REDUNDANT ROUTER */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Router size={14} className="text-lime-400" /> Gateway Failover / Redundancy
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setNetworkConfig(prev => ({ ...prev, redundantRouter: false }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        !networkConfig.redundantRouter
                          ? 'bg-lime-950/60 border-lime-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Single Router
                    </button>
                    <button
                      onClick={() => setNetworkConfig(prev => ({ ...prev, redundantRouter: true }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        networkConfig.redundantRouter
                          ? 'bg-lime-950/60 border-lime-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Dual High-Availability
                    </button>
                  </div>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Design & Simulation Time:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{netEst.totalDays} Business Days</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Est. Hardware Budget (BOM):</span>
                  <p className="text-2xl font-extrabold text-emerald-400 font-mono">~${netEst.totalHardwareBudget}</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-lime-950/30 border border-lime-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Planning a office network refresh or expansion?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us build a simulated topology and complete hardware BOM for your enterprise.</p>
              </div>
              <button 
                onClick={() => alert("Network topology request submitted!")}
                className="bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request Network Design
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      case 'os':
        const osEst = calculateOsEstimate();
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            {/* EMERALD / TEAL HEADER */}
            <header className="relative p-8 rounded-3xl bg-linear-to-r from-emerald-950/80 via-slate-900 to-teal-950/40 border border-emerald-800/50 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50 mb-3">
                    <MonitorCog size={14} className="animate-pulse" /> System Provisioning
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    OS & Workstation Deployment
                  </h1>
                  <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                    Standardized operating system installations, dual-boot Linux/Windows configurations, workstation driver optimization, and automated software deployment.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-emerald-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-emerald-500/30 flex items-center gap-1.5">
                    <Settings size={14} /> Linux / Windows
                  </span>
                  <span className="text-[11px] font-mono text-teal-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-teal-500/30 flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Hardened Policies
                  </span>
                </div>
              </div>
            </header>

            {/* SERVICES CARDS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <MonitorCog size={18} className="text-emerald-400" /> Workstation Configuration Options
                </h2>
                <span className="text-xs text-emerald-400 font-mono">Clean & Standardized</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 group">
                  <div className="p-3 bg-emerald-950/80 rounded-xl w-fit text-emerald-400 border border-emerald-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <MonitorCog size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    Clean OS Installation
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Fresh installation of Windows 11 Enterprise or Linux distributions (Ubuntu, Fedora, Debian) with bloatware removed.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Full hardware driver validation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" /> Optimized boot time & service tweaks
                    </li>
                  </ul>
                </div>

                {/* CARD 2 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/20 group">
                  <div className="p-3 bg-teal-950/80 rounded-xl w-fit text-teal-400 border border-teal-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Dual-Boot Environments
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Configuring GRUB bootloaders to run Linux for development alongside Windows for standard productivity software on single systems.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal-400 shrink-0" /> Safe disk partition splitting
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-teal-400 shrink-0" /> Shared NTFS storage partition setup
                    </li>
                  </ul>
                </div>

                {/* CARD 3 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group">
                  <div className="p-3 bg-cyan-950/80 rounded-xl w-fit text-cyan-400 border border-cyan-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Sliders size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Software Suite Rollout
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Automated silent installations of essential dev kits, Office suites, antivirus tools, and remote management agents.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Scripted winget / APT package manager setup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" /> Standardized desktop profile settings
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISUAL PROCESS STEPS WITH IMAGES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-emerald-400" /> Deployment Process
                </h2>
                <span className="text-xs text-emerald-400 font-mono">Streamlined & Fast</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80" 
                      alt="Hardware Verification & Backup" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <HardDrive size={14} className="text-emerald-400" /> Pre-Install & Backup
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Verify system specs, run drive health diagnostics, and archive existing user data safely before formatting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=600&q=80" 
                      alt="Partitioning & OS Installation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <MonitorCog size={14} className="text-emerald-400" /> Partition & OS Install
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Partition storage drives, install selected OS image, and configure bootloader parameters cleanly.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" 
                      alt="Driver & Security Configuration" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <Settings size={14} className="text-emerald-400" /> Drivers & Security
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Inject vendor hardware drivers, apply system security policies, and enable BitLocker/LUKS encryption.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" 
                      alt="Software Deployment & Handover" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-emerald-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                        <CheckSquare size={14} className="text-emerald-400" /> Apps & User Handover
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Deploy software suites via automated package scripts, restore user files, and perform final sign-off tests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE OS CONFIGURATOR ESTIMATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-emerald-950/60 text-emerald-400 rounded-xl border border-emerald-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">System Provisioning Estimator</h3>
                  <p className="text-xs text-slate-400">Configure PC fleet parameters to estimate installation turnaround time</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WORKSTATION COUNT */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <MonitorCog size={14} className="text-emerald-400" /> Workstations / PCs to Setup
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      value={osConfig.workstations}
                      onChange={(e) => setOsConfig(prev => ({ ...prev, workstations: parseInt(e.target.value) }))}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-emerald-400 font-mono w-16 text-right">{osConfig.workstations} System{osConfig.workstations > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* OS TYPE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Settings size={14} className="text-emerald-400" /> Target Operating System
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['windows', 'linux', 'dual'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setOsConfig(prev => ({ ...prev, osType: type }))}
                        className={`p-2 rounded-xl border text-xs font-semibold capitalize cursor-pointer transition-all ${
                          osConfig.osType === type
                            ? 'bg-emerald-950/60 border-emerald-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {type === 'dual' ? 'Dual Boot' : type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SOFTWARE SUITE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Sliders size={14} className="text-emerald-400" /> Software Bundle Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setOsConfig(prev => ({ ...prev, suite: 'basic' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        osConfig.suite === 'basic'
                          ? 'bg-emerald-950/60 border-emerald-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Basic Office & Web
                    </button>
                    <button
                      onClick={() => setOsConfig(prev => ({ ...prev, suite: 'enterprise' }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        osConfig.suite === 'enterprise'
                          ? 'bg-emerald-950/60 border-emerald-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Developer / Pro Suite
                    </button>
                  </div>
                </div>

                {/* SECURITY HARDENING */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-emerald-400" /> Endpoint Encryption & Hardening
                  </label>
                  <button
                    onClick={() => setOsConfig(prev => ({ ...prev, securityHardening: !prev.securityHardening }))}
                    className={`w-full p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      osConfig.securityHardening
                        ? 'bg-emerald-950/60 border-emerald-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <CheckSquare size={14} className={osConfig.securityHardening ? 'text-emerald-400' : 'text-slate-600'} />
                    {osConfig.securityHardening ? 'Disk Encryption & Group Policy Enabled' : 'Standard Default Policies'}
                  </button>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Turnaround Time:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{osEst.estimatedDays} Business Day{osEst.estimatedDays > 1 ? 's' : ''} ({osEst.totalHours} hrs)</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Software License Budget Est.:</span>
                  <p className="text-2xl font-extrabold text-emerald-400 font-mono">~${osEst.softwareBudgetEstimate}</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Need workforce PCs formatted or setup?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us configure clean, high-performance workstation setups for your team.</p>
              </div>
              <button 
                onClick={() => alert("OS setup request submitted!")}
                className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request OS Provisioning
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      case 'software':
        const autoEst = calculateAutomationEstimate();
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            {/* AMBER / GOLD HEADER */}
            <header className="relative p-8 rounded-3xl bg-linear-to-r from-amber-950/80 via-slate-900 to-orange-950/40 border border-amber-800/50 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-amber-400 uppercase bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/50 mb-3">
                    <Terminal size={14} className="animate-pulse" /> Workflow Automation
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    Custom Task Automation & Scripts
                  </h1>
                  <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                    Eliminate tedious manual workloads, repetitive file sorting, and complex data formatting through lightweight Python scripts, Java utilities, and scheduled background daemons.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-amber-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-amber-500/30 flex items-center gap-1.5">
                    <FileCode size={14} /> Python & Java
                  </span>
                  <span className="text-[11px] font-mono text-orange-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-orange-500/30 flex items-center gap-1.5">
                    <Bot size={14} /> Background Cron Jobs
                  </span>
                </div>
              </div>
            </header>

            {/* WHAT WE OFFER IN CUSTOM AUTOMATION */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-amber-400" /> Automation Solutions
                </h2>
                <span className="text-xs text-amber-400 font-mono">Precision Scripting</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-950/20 group">
                  <div className="p-3 bg-amber-950/80 rounded-xl w-fit text-amber-400 border border-amber-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <FileCode size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    File & Directory Monitors
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Automated file watchers that sort incoming downloads, parse PDF invoices, extract metadata, and organize directory trees automatically.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Real-time directory event listeners
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-amber-400 shrink-0" /> Custom tagging & automatic archive zip
                    </li>
                  </ul>
                </div>

                {/* CARD 2 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 group">
                  <div className="p-3 bg-orange-950/80 rounded-xl w-fit text-orange-400 border border-orange-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    Data Scraping & API Integration
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Python Beautiful Soup / Selenium scrapers and REST API connectors that aggregate web data directly into Excel or database stores.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-400 shrink-0" /> Anti-blocking retry & proxy logic
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-400 shrink-0" /> Scheduled daily execution scripts
                    </li>
                  </ul>
                </div>

                {/* CARD 3 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-yellow-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-950/20 group">
                  <div className="p-3 bg-yellow-950/80 rounded-xl w-fit text-yellow-400 border border-yellow-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Terminal size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    Desktop Utility Applications
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Lightweight Java or Python GUI tools for staff members to process batch images, calculate quotes, or convert proprietary formats.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0" /> Cross-platform Windows & Mac support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-yellow-400 shrink-0" /> Single executable binary delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISUAL 4-STEP AUTOMATION DEVELOPMENT LIFECYCLE WITH IMAGES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Workflow size={18} className="text-amber-400" /> Automation Engineering Steps
                </h2>
                <span className="text-xs text-amber-400 font-mono">Rapid Script Delivery</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" 
                      alt="Process Audit & Logic Mapping" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-amber-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <Search size={14} className="text-amber-400" /> Workflow Audit
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Identify manual bottlenecks, step-by-step logic rules, input data formats, and desired automation triggers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" 
                      alt="Script Development & Logic Coding" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-amber-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <Terminal size={14} className="text-amber-400" /> Script Development
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Write optimized Python or Java code with built-in error handling, logging, and edge-case exception handling.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
                      alt="Scheduler & Daemon Config" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-amber-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <Bot size={14} className="text-amber-400" /> Scheduling & Testing
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Bind scripts to Windows Task Scheduler, systemd services, or cron triggers and test with sample payloads.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                      alt="Deployment & Documentation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-amber-400 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <Play size={14} className="text-amber-400" /> Deployment & Docs
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Deploy executable scripts onto production machines, provide clear README documentation, and hand over control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE AUTOMATION ESTIMATOR CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-amber-950/60 text-amber-400 rounded-xl border border-amber-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Custom Automation Estimator</h3>
                  <p className="text-xs text-slate-400">Configure script scope to calculate development turnaround and time saved</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PROGRAMMING LANGUAGE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <FileCode size={14} className="text-amber-400" /> Primary Tech Stack
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['python', 'java', 'bash'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setAutomationConfig(prev => ({ ...prev, scriptLanguage: lang }))}
                        className={`p-2 rounded-xl border text-xs font-semibold capitalize cursor-pointer transition-all ${
                          automationConfig.scriptLanguage === lang
                            ? 'bg-amber-950/60 border-amber-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                {/* COMPLEXITY */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <BrainCircuit size={14} className="text-amber-400" /> Task Complexity Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['simple', 'medium', 'complex'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setAutomationConfig(prev => ({ ...prev, taskComplexity: level }))}
                        className={`p-2 rounded-xl border text-xs font-semibold capitalize cursor-pointer transition-all ${
                          automationConfig.taskComplexity === level
                            ? 'bg-amber-950/60 border-amber-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SCHEDULE TYPE */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <RefreshCw size={14} className="text-amber-400" /> Execution Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'manual', label: 'Manual Run' },
                      { id: 'cron', label: 'Cron / Timer' },
                      { id: 'event', label: 'File Event' }
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setAutomationConfig(prev => ({ ...prev, scheduleType: mode.id }))}
                        className={`p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          automationConfig.scheduleType === mode.id
                            ? 'bg-amber-950/60 border-amber-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* GUI REQUIRED */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Layout size={14} className="text-amber-400" /> User Interface (Desktop App GUI)
                  </label>
                  <button
                    onClick={() => setAutomationConfig(prev => ({ ...prev, guiRequired: !prev.guiRequired }))}
                    className={`w-full p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      automationConfig.guiRequired
                        ? 'bg-amber-950/60 border-amber-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <CheckSquare size={14} className={automationConfig.guiRequired ? 'text-amber-400' : 'text-slate-600'} />
                    {automationConfig.guiRequired ? 'Desktop Window GUI Included' : 'Command-Line / Background Daemon'}
                  </button>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Development Turnaround:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{autoEst.estimatedDays} Business Day{autoEst.estimatedDays > 1 ? 's' : ''} ({autoEst.totalHours} hrs)</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Estimated Labor Saved:</span>
                  <p className="text-2xl font-extrabold text-amber-400 font-mono">~{autoEst.hoursSavedPerWeek} Hours / week</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-amber-950/30 border border-amber-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Tired of repetitive manual data tasks?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us build a custom automated Python or Java tool to handle it seamlessly.</p>
              </div>
              <button 
                onClick={() => alert("Automation consultation requested!")}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request Custom Script
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      case 'diagnostics':
        const secEst = calculateSecurityEstimate();
        return (
          <div className="max-w-5xl mx-auto space-y-10">
            <button 
              onClick={() => setActiveTab('overview')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-red-400 transition-colors group cursor-pointer"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to Overview Menu
            </button>
            
            {/* RED / CRIMSON HEADER */}
            <header className="relative p-8 rounded-3xl bg-linear-to-r from-red-950/80 via-slate-900 to-rose-950/40 border border-red-800/50 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-red-400 uppercase bg-red-950/60 px-3 py-1 rounded-full border border-red-800/50 mb-3">
                    <ShieldAlert size={14} className="animate-pulse" /> Cybersecurity & Hardware Health
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    System Diagnostics & Security Audit
                  </h1>
                  <p className="text-slate-300 text-sm mt-2 max-w-2xl leading-relaxed">
                    Comprehensive hardware troubleshooting, malware eradication, system vulnerability auditing, and two-factor authentication (2FA) account hardening.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-red-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-red-500/30 flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Account Hardening
                  </span>
                  <span className="text-[11px] font-mono text-rose-300 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-rose-500/30 flex items-center gap-1.5">
                    <Activity size={14} /> System Health Diagnostic
                  </span>
                </div>
              </div>
            </header>

            {/* WHAT WE OFFER IN DIAGNOSTICS & SECURITY */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={18} className="text-red-400" /> Diagnostic & Security Capabilities
                </h2>
                <span className="text-xs text-red-400 font-mono">Proactive Protection</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CARD 1 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-red-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-red-950/20 group">
                  <div className="p-3 bg-red-950/80 rounded-xl w-fit text-red-400 border border-red-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                    Hardware Diagnostic & Thermal Stress Test
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    In-depth testing of RAM, SSD/HDD bad sectors, GPU thermal throttling, and power supply stability to isolate freeze and crash root causes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-red-400 shrink-0" /> S.M.A.R.T drive telemetry inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-red-400 shrink-0" /> MemTest86 memory integrity verification
                    </li>
                  </ul>
                </div>

                {/* CARD 2 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-rose-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-rose-950/20 group">
                  <div className="p-3 bg-rose-950/80 rounded-xl w-fit text-rose-400 border border-rose-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <ShieldAlert size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                    Malware & Spyware Eradication
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Deep offline scanning to purge rootkits, trojans, ad-injectors, and cryptominers while safeguarding personal file integrity.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-rose-400 shrink-0" /> Host file & DNS hijack cleanup
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-rose-400 shrink-0" /> Browser extension & startup entry scrub
                    </li>
                  </ul>
                </div>

                {/* CARD 3 */}
                <div className="bg-slate-900/60 border border-slate-800 hover:border-orange-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-950/20 group">
                  <div className="p-3 bg-orange-950/80 rounded-xl w-fit text-orange-400 border border-orange-800/60 mb-4 group-hover:scale-110 transition-transform">
                    <Key size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    Identity Hardening & 2FA Setup
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    Remediating compromised accounts, configuring TOTP hardware authenticators, password managers, and revoking unauthorized sessions.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-400 shrink-0" /> LinkedIn, Email, & Cloud account recovery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-orange-400 shrink-0" /> Hardware key (YubiKey) & MFA deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* VISUAL 4-STAGE AUDIT PROCESS WITH IMAGES */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={18} className="text-red-400" /> Security Audit & Recovery Lifecycle
                </h2>
                <span className="text-xs text-red-400 font-mono">Thorough Security Response</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* STEP 1 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                      alt="Threat Inspection & Telemetry Scan" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-red-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      01
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-red-300 transition-colors flex items-center gap-1.5">
                        <Search size={14} className="text-red-400" /> Triage & Scan
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Isolate affected machines from local networks and perform offline boot scans to detect malware and hardware faults.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 2 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" 
                      alt="Threat Eradication & Remediation" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-red-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      02
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-red-300 transition-colors flex items-center gap-1.5">
                        <ShieldAlert size={14} className="text-red-400" /> Remediation
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Purge malicious files, restore altered system binaries, update BIOS/firmware, and repair corrupted registry keys.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&q=80" 
                      alt="Account Security & MFA Lockdown" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-red-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      03
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-red-300 transition-colors flex items-center gap-1.5">
                        <Key size={14} className="text-red-400" /> Account Lockdown
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Reset passwords, terminate stale OAuth sessions, configure authenticator 2FA, and store master credentials securely.
                      </p>
                    </div>
                  </div>
                </div>

                {/* STEP 4 */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                      alt="Hardening Policies & Continuous Guard" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-red-500 text-slate-950 backdrop-blur-md flex items-center justify-center font-extrabold text-xs shadow-lg">
                      04
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1 group-hover:text-red-300 transition-colors flex items-center gap-1.5">
                        <Lock size={14} className="text-red-400" /> Hardening & Handover
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Apply OS security baselines, activate real-time Defender/Endpoint guards, and deliver a full diagnostic audit report.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTERACTIVE DIAGNOSTICS CALCULATOR */}
            <div className="bg-slate-900/60 border border-slate-800/80 p-6 md:p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="p-2.5 bg-red-950/60 text-red-400 rounded-xl border border-red-800/40">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Diagnostics & Security Audit Estimator</h3>
                  <p className="text-xs text-slate-400">Configure system diagnostic parameters to estimate audit turnaround and risk mitigation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* DEVICE COUNT */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <MonitorCog size={14} className="text-red-400" /> Systems / Devices to Audit
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="1" 
                      max="25" 
                      value={securityConfig.deviceCount}
                      onChange={(e) => setSecurityConfig(prev => ({ ...prev, deviceCount: parseInt(e.target.value) }))}
                      className="w-full accent-red-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-red-400 font-mono w-16 text-right">{securityConfig.deviceCount} System{securityConfig.deviceCount > 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* SCAN DEPTH */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Activity size={14} className="text-red-400" /> Diagnostic Scan Depth
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'quick', label: 'Quick Scan' },
                      { id: 'full', label: 'Full Diagnostics' },
                      { id: 'deep', label: 'Deep Stress Test' }
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => setSecurityConfig(prev => ({ ...prev, scanDepth: mode.id }))}
                        className={`p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          securityConfig.scanDepth === mode.id
                            ? 'bg-red-950/60 border-red-500 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ACCOUNT AUDIT */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Key size={14} className="text-red-400" /> Credential & Account Audit
                  </label>
                  <button
                    onClick={() => setSecurityConfig(prev => ({ ...prev, vulnerabilityAudit: !prev.vulnerabilityAudit }))}
                    className={`w-full p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      securityConfig.vulnerabilityAudit
                        ? 'bg-red-950/60 border-red-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <CheckSquare size={14} className={securityConfig.vulnerabilityAudit ? 'text-red-400' : 'text-slate-600'} />
                    {securityConfig.vulnerabilityAudit ? '2FA & OAuth Revocation Audit Included' : 'Hardware-Only Diagnostics'}
                  </button>
                </div>

                {/* OS HARDENING */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Lock size={14} className="text-red-400" /> OS Hardening & Endpoint Guard
                  </label>
                  <button
                    onClick={() => setSecurityConfig(prev => ({ ...prev, osHardening: !prev.osHardening }))}
                    className={`w-full p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 ${
                      securityConfig.osHardening
                        ? 'bg-red-950/60 border-red-500 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <CheckSquare size={14} className={securityConfig.osHardening ? 'text-red-400' : 'text-slate-600'} />
                    {securityConfig.osHardening ? 'Full Endpoint Hardening Baseline' : 'Basic Malware Removal'}
                  </button>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Estimated Turnaround Time:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{secEst.estimatedDays} Business Day{secEst.estimatedDays > 1 ? 's' : ''} ({secEst.totalHours} hrs)</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Vulnerability Risk Reduction:</span>
                  <p className="text-2xl font-extrabold text-red-400 font-mono">~{secEst.riskReductionPct}% Protection</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-red-950/30 border border-red-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Experiencing computer crashes or security alerts?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us perform a hardware diagnostic and re-secure your accounts with 2FA.</p>
              </div>
              <button 
                onClick={() => alert("Security diagnostic request submitted!")}
                className="bg-red-500 hover:bg-red-400 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Schedule System Audit
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
        {/* BACKGROUND GLOW EFFECTS */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-xl text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/80 px-4 py-1.5 rounded-full border border-lime-800/50 shadow-lg">
            <Sparkles size={14} className="animate-pulse" /> Optima IT Solutions
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Next-Generation <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-emerald-300 to-cyan-400">
              IT Consulting Portal
            </span>
          </h1>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Enterprise infrastructure, cloud migrations, modern web applications, predictive machine learning analytics, and task automation systems.
          </p>

          <button
            onClick={() => setHasEntered(true)}
            className="inline-flex items-center gap-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-extrabold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-lime-400/20 cursor-pointer text-sm"
          >
            Launch Solution Portal <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans antialiased">
      {/* SIDEBAR NAVIGATION */}
      <aside className={`${isExpanded ? 'w-64' : 'w-20'} bg-slate-900/80 border-r border-slate-800/80 flex flex-col justify-between transition-all duration-300 shrink-0 sticky top-0 h-screen z-30 backdrop-blur-md`}>
        <div className="p-4 space-y-6">
          {/* BRAND LOGO */}
          <div className="flex items-center justify-between">
            {isExpanded ? (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-lime-400 text-slate-950 rounded-xl font-black text-lg shadow-md shadow-lime-400/20">
                  OI
                </div>
                <div>
                  <h2 className="font-extrabold text-sm text-white leading-none">OPTIMA</h2>
                  <span className="text-[10px] text-lime-400 font-mono tracking-wider uppercase">IT Solutions</span>
                </div>
              </div>
            ) : (
              <div className="p-2 bg-lime-400 text-slate-950 rounded-xl font-black text-lg mx-auto shadow-md">
                OI
              </div>
            )}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors hidden md:block cursor-pointer"
            >
              <ChevronLeft size={18} className={`transition-transform duration-300 ${!isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* NAV ITEMS */}
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === item.id 
                    ? 'bg-lime-400 text-slate-950 font-bold shadow-lg shadow-lime-400/10' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
                title={!isExpanded ? item.label : undefined}
              >
                <span className={activeTab === item.id ? 'text-slate-950' : 'text-slate-400'}>
                  {item.icon}
                </span>
                {isExpanded && <span className="truncate">{item.label}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* BOTTOM USER / EXIT ACTION */}
        <div className="p-4 border-t border-slate-800/80">
          <button
            onClick={() => setHasEntered(false)}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-red-400 hover:bg-red-950/30 transition-colors cursor-pointer"
          >
            <LogOut size={18} />
            {isExpanded && <span>Exit Portal</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {renderMainContent()}
      </main>
    </div>
  );
}

export default App;