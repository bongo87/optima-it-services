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
  Sparkles
} from 'lucide-react';

function App() {
  // State to manage whether the client has entered the portal
  const [hasEntered, setHasEntered] = useState(false);
  // State to handle expanding/collapsing the left sidebar
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-lime-500 selection:text-slate-950">
      
      {/* 🚀 1. INSPIRING WELCOME PORTAL OVERLAY */}
      {!hasEntered && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950 overflow-hidden">
          
          {/* Background Image with slightly higher opacity and a slow scale animation */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 scale-100 transition-transform duration-1000"
            style={{ backgroundImage: "url('/welcome-bg.jpeg')" }}
          ></div>
          
          {/* Subtle Cyber Grid Lines overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
          
          {/* Enhanced Radial Center Glow behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-500/15 rounded-full blur-[140px] pointer-events-none"></div>

          {/* Welcome Card Content with a subtle lime-glow shadow */}
          <div className="relative text-center max-w-2xl border border-slate-800/80 bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl shadow-lime-500/10 border-t-lime-500/30">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/60 px-4 py-1.5 rounded-full border border-lime-800/50 mb-6">
              <Sparkles size={14} className="animate-pulse" />
              Secure. Optimize. Automate.
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none mb-6">
              OPTIMA <span className="text-lime-400">IT SERVICES</span>
            </h1>
            
            <p className="text-slate-300 leading-relaxed text-base md:text-lg mb-8 max-w-lg mx-auto">
              We engineer secure network architectures, optimize workplace operating systems, and craft automation solutions designed to scale your enterprise.
            </p>

            {/* Business Pillars Quick List */}
            <div className="grid grid-cols-3 gap-3 mb-10 text-xs text-slate-400 font-medium">
              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <Cpu size={16} className="mx-auto mb-2 text-lime-400" />
                Tailored Systems
              </div>
              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <Network size={16} className="mx-auto mb-2 text-lime-400" />
                Robust Networks
              </div>
              <div className="p-3 bg-slate-950/50 rounded-xl border border-slate-800/60 backdrop-blur-sm">
                <ShieldCheck size={16} className="mx-auto mb-2 text-lime-400" />
                Absolute Security
              </div>
            </div> {/* <-- Closed this div correctly! */}

            {/* Explore Services Button and guide text */}
            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={() => setHasEntered(true)}
                className="inline-flex items-center gap-3 bg-lime-400 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-lime-300 transition-all duration-300 cursor-pointer shadow-lg shadow-lime-400/10 hover:shadow-lime-400/20 group text-base"
              >
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              {/* Elegant, soft guiding text under the button */}
              <span className="text-xs italic text-slate-400 tracking-wide select-none animate-pulse">
                Click to view our custom network designs, OS setups, and automation tools
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 🖥️ 2. FIXED TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 h-16 flex items-center justify-between px-6">
        <div className="flex flex-col justify-center">
          <span className="font-extrabold tracking-wider text-xl text-white leading-none">
            OPTIMA<span className="text-lime-400"> IT SERVICES</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1">
            Secure. Optimize. Automate.
          </span>
        </div>

        {/* Dynamic Status Display on the Right */}
        <div className="flex items-center gap-3 bg-slate-950 px-4 py-1.5 rounded-full border border-slate-800">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-300">Secure Live Session</span>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="flex flex-1 h-[calc(100vh-4rem)]">
        
        {/* 🧭 3. COLLAPSIBLE SIDEBAR NAVIGATION */}
        <aside 
          className={`bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 transition-all duration-300 ease-in-out shrink-0 ${
            isExpanded ? 'w-64' : 'w-20'
          }`}
        >
          <div>
            {/* Sidebar Toggle Control */}
            <div className={`flex items-center mb-6 ${isExpanded ? 'justify-end' : 'justify-center'}`}>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-lime-400 transition-colors duration-200 cursor-pointer"
                title={isExpanded ? "Collapse Menu" : "Expand Menu"}
              >
                {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {[
                { icon: <Layers size={20} />, label: "Overview" },
                { icon: <Network size={20} />, label: "Network Design" },
                { icon: <MonitorCog size={20} />, label: "OS Deployments" },
                { icon: <Terminal size={20} />, label: "Custom Software" },
                { icon: <ShieldAlert size={20} />, label: "Diagnostics" }
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl font-medium transition-all duration-200 cursor-pointer text-left ${
                    index === 0 
                      ? 'bg-lime-950/40 text-lime-400 border border-lime-500/20' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <span className={`transition-opacity duration-300 whitespace-nowrap ${
                    isExpanded ? 'opacity-100' : 'opacity-0 hidden'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* User Profile Footer Badge */}
          <div className="border-t border-slate-800 pt-4 flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-full bg-lime-500 font-bold text-slate-950 flex items-center justify-center shrink-0">
              RM
            </div>
            {isExpanded && (
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-white truncate">Rebone Motswana</span>
                <span className="text-xs text-lime-400 truncate">Administrator</span>
              </div>
            )}
          </div>
        </aside>

        {/* 🖥️ 4. MAIN CONTENT AREA */}
        <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-950">
          <header className="mb-10">
            <span className="text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/40 px-3 py-1 rounded-full border border-lime-800/30">
              Control Panel Active
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-3">Welcome Back</h1>
            <p className="text-slate-400 text-sm mt-1">Here is a snapshot of your customized IT consulting service catalog.</p>
          </header>

          {/* SERVICES CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-lime-500/20 transition-all">
              <div className="text-lime-400 mb-4 bg-lime-950/30 w-12 h-12 rounded-xl flex items-center justify-center">
                <Network size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Network Design & Cost Estimation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Designing secure, simulated network infrastructures (VLANs, custom subnets). Providing hardware procurement quotes and complete network setup cost estimations for small businesses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-lime-500/20 transition-all">
              <div className="text-lime-400 mb-4 bg-lime-950/30 w-12 h-12 rounded-xl flex items-center justify-center">
                <MonitorCog size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">OS Deployment & Software Suites</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Clean operating system installations (Windows/Linux), configuration of key business productivity software suites (Microsoft 365), drivers, and security settings.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-lime-500/20 transition-all">
              <div className="text-lime-400 mb-4 bg-lime-950/30 w-12 h-12 rounded-xl flex items-center justify-center">
                <Terminal size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Custom Software & Task Automation</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Streamlining workflows using automated Python scripts for data manipulation, folder sorting, and building specialized utility tools using modern Java desktop environments.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-lime-500/20 transition-all">
              <div className="text-lime-400 mb-4 bg-lime-950/30 w-12 h-12 rounded-xl flex items-center justify-center">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">System Diagnostics & Security Hardening</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Troubleshooting deep OS crashes, running system audits, executing malware extraction, and implementing mandatory 2FA account setup to defend critical digital identities.
              </p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}

export default App;