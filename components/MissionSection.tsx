import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-navy-950 to-navy-950"></div>
      <div className="absolute inset-0 bg-grid-slate-100/[0.05] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight text-white">
          "Most agents hit a glass ceiling on <br />
          transaction volume. We are building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-violet-400">Hammer</span>."
        </h2>
        
        <div className="w-24 h-1.5 bg-gradient-to-r from-electric-500 to-violet-600 mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        
        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          We are researching how to automate the entire "Assistant Layer" of your business. Our goal: Help you double your volume <span className="text-white font-medium">without hiring a single human</span>.
        </p>
      </div>
      
      {/* Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-electric-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default MissionSection;