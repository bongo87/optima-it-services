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
  FileSpreadsheet
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
                  <p className="text-xs text-slate-400">Configure corporate size to estimate hardware requirements & design turnaround</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* WORKSTATIONS */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <MonitorCog size={14} className="text-lime-400" /> Connected Devices & Workstations
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
                    <input 
                      type="range" 
                      min="5" 
                      max="150" 
                      step="5"
                      value={networkConfig.workstations}
                      onChange={(e) => setNetworkConfig(prev => ({ ...prev, workstations: parseInt(e.target.value) }))}
                      className="w-full accent-lime-400 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-lime-400 font-mono w-24 text-right">
                      {networkConfig.workstations} Devices
                    </span>
                  </div>
                </div>

                {/* VLAN COUNT */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Network size={14} className="text-lime-400" /> Isolated VLAN Segments
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
                    <span className="text-xs font-bold text-lime-400 font-mono w-16 text-right">
                      {networkConfig.vlanCount} VLAN{networkConfig.vlanCount > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* WIRELESS ACCESS POINTS */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Wifi size={14} className="text-lime-400" /> Access Points / Wi-Fi Zones
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
                    <span className="text-xs font-bold text-lime-400 font-mono w-16 text-right">
                      {networkConfig.wirelessAP} AP{networkConfig.wirelessAP > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* REDUNDANT ROUTER */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                    <Router size={14} className="text-lime-400" /> High Availability (Dual Gateway Router)
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
                      Single Router Gateway
                    </button>
                    <button
                      onClick={() => setNetworkConfig(prev => ({ ...prev, redundantRouter: true }))}
                      className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        networkConfig.redundantRouter
                          ? 'bg-lime-950/60 border-lime-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Dual Router Failover
                    </button>
                  </div>
                </div>
              </div>

              {/* ESTIMATION SUMMARY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 bg-slate-950/50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs text-slate-400">Design & Simulation Timeline:</span>
                  <p className="text-2xl font-extrabold text-lime-400 font-mono">{netEst.totalDays} Business Days</p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Estimated Hardware Procurement Budget:</span>
                  <p className="text-2xl font-extrabold text-emerald-400 font-mono">~${netEst.totalHardwareBudget} Est.</p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="p-6 bg-linear-to-r from-slate-900 via-slate-900 to-lime-950/30 border border-lime-800/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-white text-base">Plan a resilient network for your facility</h4>
                <p className="text-xs text-slate-400 mt-0.5">Let us simulate your topology in Cisco Packet Tracer and generate an optimized hardware proposal.</p>
              </div>
              <button 
                onClick={() => alert("Network assessment requested!")}
                className="bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold py-2.5 px-5 rounded-xl transition-colors cursor-pointer text-xs whitespace-nowrap flex items-center gap-2"
              >
                Request Network Design
                <ExternalLink size={14} />
              </button>
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