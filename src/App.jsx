import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-xl border border-lime-500/30 bg-slate-900/50 p-8 rounded-2xl shadow-xl shadow-lime-500/5">
        <span className="text-xs font-bold tracking-widest text-lime-400 uppercase bg-lime-950/50 px-3 py-1 rounded-full border border-lime-800">
          System Initialized
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-2 tracking-tight">
          OPTIMA <span className="text-lime-400">IT SERVICES</span>
        </h1>
        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Our modern React + Tailwind workspace is fully configured. Day 1 setup complete—ready to build out our high-impact consulting services!
        </p>
      </div>
    </div>
  );
}

export default App;