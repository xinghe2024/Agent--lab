import React from 'react';
import { ArrowRight, Sparkles, Mic, Calendar, Mail, Search, Clock, CheckCircle2, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const AudioWave: React.FC = () => {
  return (
    <div className="flex items-center gap-1.5 h-10">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="w-1.5 bg-electric-400 rounded-full animate-pulse"
          style={{ 
            height: `${Math.max(40, Math.random() * 100)}%`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: '1s'
          }}
        ></div>
      ))}
    </div>
  );
};

const WorkflowDemo: React.FC = () => {
  return (
    <div className="relative mt-20 mx-auto max-w-5xl animate-[fadeInUp_1s_ease-out_0.8s_forwards] opacity-0">
      
      {/* Main Container: Solid Dark High Contrast, No Blur */}
      <div className="relative bg-[#020617] border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
          
          {/* LEFT: Input (The Task) */}
          <div className="w-full md:w-[45%]">
             <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 shadow-xl relative group">
                {/* Badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-electric-600 rounded-full text-xs font-bold text-white tracking-wide shadow-lg shadow-electric-600/20">
                  INCOMING REQUEST
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-electric-500/10 flex items-center justify-center text-electric-400 border border-electric-500/20">
                      <Mic size={24} />
                    </div>
                    <div>
                      <div className="text-base text-white font-semibold">Voice Note</div>
                      <div className="text-xs text-slate-400 font-mono">00:12 • Agent Sarah</div>
                    </div>
                  </div>
                  <AudioWave />
                </div>

                <p className="text-slate-200 text-lg leading-relaxed font-medium">
                  "Find a <span className="text-electric-400 border-b border-dashed border-electric-500/50">3-bed downtown</span> under <span className="text-electric-400 border-b border-dashed border-electric-500/50">1.2M</span> for Sarah. Send her the listings and book a call for <span className="text-electric-400 border-b border-dashed border-electric-500/50">Sunday at 2pm</span>."
                </p>
             </div>
          </div>

          {/* CENTER: Transformation Arrow */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 text-slate-600">
             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
             <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-electric-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Sparkles size={20} className="animate-pulse" />
             </div>
             <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>

          {/* RIGHT: Output (The Result) */}
          <div className="w-full md:flex-1">
             <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
                {/* Header */}
                <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">Execution Log</span>
                   </div>
                   <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold">
                      <Zap size={12} fill="currentColor" />
                      Saved 45 mins
                   </div>
                </div>

                {/* List Items */}
                <div className="p-2">
                  {/* Task 1 */}
                  <div className="flex items-center gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors border-b border-slate-800/50 last:border-0">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Search size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">Update CRM Criteria</h4>
                      <p className="text-xs text-slate-400">Downtown, 3 Bed, &lt;$1.2M</p>
                    </div>
                    <CheckCircle2 size={18} className="text-slate-600" />
                  </div>

                  {/* Task 2 */}
                  <div className="flex items-center gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors border-b border-slate-800/50 last:border-0">
                     <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                      <Calendar size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">Schedule Viewing</h4>
                      <p className="text-xs text-slate-400">Sun, 24th @ 2:00 PM</p>
                    </div>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>

                  {/* Task 3 */}
                  <div className="flex items-center gap-4 p-4 hover:bg-slate-800/50 rounded-xl transition-colors">
                     <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">Listing Report Drafted</h4>
                      <p className="text-xs text-slate-400">Ready for review</p>
                    </div>
                    <button className="px-3 py-1 bg-electric-600 hover:bg-electric-500 text-white text-xs font-medium rounded transition-colors shadow-lg shadow-electric-600/20">
                      Send
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Tech Grid Background - Keeping it light/subtle on the section background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-20"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[10%] w-72 h-72 md:w-[600px] md:h-[600px] bg-purple-100/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
        <div className="absolute top-[10%] left-[10%] w-72 h-72 md:w-[500px] md:h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-[20%] w-72 h-72 md:w-[600px] md:h-[600px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-electric-200 bg-white/50 backdrop-blur-sm mb-8 animate-[fadeInUp_0.8s_ease-out_forwards] shadow-sm">
            <Sparkles className="w-4 h-4 text-electric-600 mr-2" />
            <span className="text-sm font-medium text-electric-900">New Research Cohort Opening</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 mb-8 max-w-5xl mx-auto animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
          Decoding the Workflow of the <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 via-violet-600 to-electric-600 animate-shimmer bg-[length:200%_100%]">
            Top 1% Solo Agents.
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] opacity-0 font-medium">
          We are building the ultimate <span className="font-bold text-navy-900">AI Co-pilot</span> that works via SMS & Email. No new app to download. We are looking for 50 Founding Advisors to shape the future.
        </p>
        
        <div className="flex flex-col items-center gap-5 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] opacity-0 relative z-20">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-navy-900 rounded-full hover:bg-navy-800 shadow-xl shadow-navy-900/20 transform hover:-translate-y-1"
          >
            Join the Research Waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <p className="text-sm text-slate-500 font-medium">
            No spam. 100% focused on efficiency.
          </p>
        </div>

        {/* New Workflow Visualization */}
        <WorkflowDemo />

      </div>
      
      {/* Visual Connector Line to next section */}
      <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-slate-200 hidden md:block"></div>
    </section>
  );
};

export default Hero;