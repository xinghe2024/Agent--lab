import React, { forwardRef } from 'react';
import { Check, Sparkles, CreditCard, Lock, ArrowRight, ClipboardCheck } from 'lucide-react';

interface WaitlistSectionProps {
    onCtaClick: () => void;
}

const WaitlistSection = forwardRef<HTMLDivElement, WaitlistSectionProps>(({ onCtaClick }, ref) => {
  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Dark Backdrop for Contrast */}
      <div className="absolute inset-0 bg-navy-950 -z-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-950 to-navy-950 -z-10"></div>
      
      {/* Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Founding Advisor</span> Status
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              This isn't just a waitlist. It's a seat at the table. <br/>
              Secure lifetime access to the Agent Efficiency Lab's pilot program.
            </p>
        </div>

        <div className="flex justify-center">
            {/* Black Gold Card Design */}
            <div className="relative group w-full max-w-md bg-black rounded-3xl p-1 border border-gold-500/30 shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)] hover:shadow-[0_0_70px_-12px_rgba(245,158,11,0.5)] transition-all duration-500">
                
                {/* Card Shimmer Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 animate-card-shine" />
                </div>

                <div className="relative h-full bg-[#0B0F17] rounded-[20px] p-8 flex flex-col items-center text-center overflow-hidden">
                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
                    
                    <div className="mb-6 p-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 shadow-lg shadow-gold-500/10">
                        <ClipboardCheck size={32} />
                    </div>

                    <div className="w-full relative z-10">
                        <h3 className="text-xl font-semibold text-white mb-2">Application Required</h3>
                        <p className="text-gray-500 text-sm mb-8">
                            We are selecting 50 agents for the pilot.<br/>
                            Complete the brief survey to qualify.
                        </p>
                        
                        <button 
                            onClick={onCtaClick}
                            className={`group w-full py-4 rounded-xl font-bold text-navy-950 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)]
                                bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:scale-[1.02] hover:shadow-gold-500/40 flex items-center justify-center gap-2
                            `}
                        >
                            Start Application
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                        
                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <Lock size={12} />
                            <span>Takes less than 2 minutes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-mono">CURRENT COHORT: <span className="text-gold-500">OPEN</span> • SPOTS REMAINING: <span className="text-white">12/50</span></p>
        </div>
      </div>
    </section>
  );
});

WaitlistSection.displayName = 'WaitlistSection';

export default WaitlistSection;