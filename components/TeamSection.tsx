import React from 'react';
import { Code2, Cpu, LineChart, ShieldCheck } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A collective of Product & AI experts with 6+ years of experience building prop-tech solutions for public companies. We are now independent researchers solving the 'Solo Agent' bottleneck.
            </p>
            
            <div className="flex flex-wrap gap-3">
               <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 text-sm font-semibold text-slate-500">ex-Opendoor</div>
               <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 text-sm font-semibold text-slate-500">ex-Zillow</div>
               <div className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-100 text-sm font-semibold text-slate-500">ex-Compass</div>
            </div>
          </div>

          <div className="flex gap-6 justify-center lg:justify-end">
             {/* Abstract Avatar Grid - Reliable & Professional */}
            <div className="flex flex-col gap-4 mt-8">
                {/* Member 1: Engineering */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:border-electric-200 transition-all duration-300 group cursor-default">
                    <Code2 className="w-8 h-8 text-slate-400 group-hover:text-electric-600 transition-colors mb-3" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">Eng</span>
                </div>
                 {/* Member 2: Product */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 ml-8 group cursor-default">
                     <LineChart className="w-8 h-8 text-slate-400 group-hover:text-violet-600 transition-colors mb-3" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">Product</span>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                 {/* Member 3: AI */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:border-electric-200 transition-all duration-300 group cursor-default">
                    <Cpu className="w-8 h-8 text-slate-400 group-hover:text-electric-600 transition-colors mb-3" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">AI Lab</span>
                </div>
                 {/* Member 4: Security */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-300 ml-8 group cursor-default">
                    <ShieldCheck className="w-8 h-8 text-slate-400 group-hover:text-violet-600 transition-colors mb-3" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 uppercase tracking-wider">Security</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;