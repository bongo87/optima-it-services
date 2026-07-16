import React, { useState } from 'react';
import { 
  Menu, 
  ChevronLeft, 
  Network, 
  MonitorCog, 
  Terminal, 
  ShieldAlert, 
  Layers 
} from 'lucide-react';

function App() {
  // State to handle expanding/collapsing the left sidebar
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* 🧭 SIDEBAR NAVIGATION */}
      <aside 
        className={`bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4 transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-64' : 'w-20'
        }`}
      >
        <div>
          {/* Header & Toggle Button */}
          <div className={`flex items-center mb-8 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
            {isExpanded && (
              <span className="font-extrabold tracking-wider text-xl text-white">
                OPTIMA<span className="text-lime-400">.IT</span>
              </span>
            )}
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
              { icon: <MonitorCog size={20} />, label: "OS & Software Deployments" },
              { icon: <Terminal size={20} />, label: "Custom Software" },
              { icon: <ShieldAlert size={20} />, label: "System Diagnostics" }
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

      {/* 🖥️ MAIN CONTENT AREA */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
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
              Clean installations and upgrades of Windows or Linux systems. Comprehensive deployment of Microsoft 365, application bundles, drivers, and custom environment configurations.
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
            <h3 className="text-lg font-bold text-white mb-2">System Diagnostics & System Hardening</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Troubleshooting deep OS crashes, running system audits, executing malware extraction, and implementing mandatory 2FA account setup to defend critical digital identities.
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default App;