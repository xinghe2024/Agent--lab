import React from 'react';
import { ArrowRight, ClipboardCheck } from 'lucide-react';

interface WaitlistSectionProps {
  onCtaClick: () => void;
}

const WaitlistSection: React.FC<WaitlistSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric-500/5 blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 mb-8 bg-electric-50 rounded-xl">
            <ClipboardCheck className="w-8 h-8 text-electric-600" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">
          Ready to Break the "Solo Ceiling"?
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto">
          We are currently vetting applications for our <span className="font-bold text-navy-900">Research Cohort</span>. 
          Founding Advisors get early access to the AI Operating System and shape the product roadmap.
        </p>

        <div className="flex flex-col items-center">
            <button 
              onClick={onCtaClick}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white transition-all duration-200 bg-gradient-to-r from-navy-900 to-electric-700 rounded-full hover:from-navy-800 hover:to-electric-600 shadow-xl shadow-electric-900/10 hover:shadow-electric-900/20 transform hover:-translate-y-1"
            >
              Apply for Access
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </button>
            
            <p className="mt-6 text-sm text-gray-500 font-medium">
              ~4 minutes to complete • No credit card required
            </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;