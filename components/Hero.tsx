import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-20"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-72 h-72 md:w-[600px] md:h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"></div>
        <div className="absolute top-[10%] left-[10%] w-72 h-72 md:w-[500px] md:h-[500px] bg-electric-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-[20%] w-72 h-72 md:w-[600px] md:h-[600px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-electric-200 bg-electric-50/50 backdrop-blur-sm mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <Sparkles className="w-4 h-4 text-electric-600 mr-2" />
            <span className="text-sm font-medium text-electric-800">Recruiting: The "Solo-Scaler" Cohort</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 mb-8 max-w-5xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
          Scale Like a Team. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 via-violet-600 to-electric-600 animate-shimmer bg-[length:200%_100%]">
            Profit Like a Solo Agent.
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0">
          You have built a <span className="font-semibold text-navy-900">successful solo business</span>, but you've hit the <span className="font-semibold text-navy-900">"Solo Ceiling."</span>
          <br />
          Don't hire an expensive assistant. We are engineering the first AI Employee that costs $0 in management overhead.
        </p>
        
        <div className="flex flex-col items-center gap-5 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-electric-600 to-violet-600 rounded-full hover:from-electric-500 hover:to-violet-500 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 transform hover:-translate-y-1"
          >
            Apply to Clone Yourself
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
               <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
               <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
               <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
            </div>
            <span>Limited to 50 active agents. Priority Access.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;