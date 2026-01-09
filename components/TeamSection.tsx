import React from 'react';
import { Cpu, Network, Code2, Database } from 'lucide-react';

const QuantumAvatar: React.FC<{ initials: string; role: string; icon: React.ReactNode; color: string; delay?: string }> = ({ initials, role, icon, color, delay = '0s' }) => {
  return (
    <div className={`relative group w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center justify-center animate-[fadeInUp_0.5s_ease-out_forwards]`} style={{ animationDelay: delay }}>
        {/* Animated Background Mesh */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Floating Icon */}
        <div className="mb-2 text-gray-400 group-hover:text-navy-900 transition-colors duration-300 transform group-hover:scale-110">
            {icon}
        </div>

        {/* Initials */}
        <div className="text-2xl font-bold text-navy-900 tracking-tighter mb-1 relative z-10">
            {initials}
        </div>

        {/* Role Badge */}
        <div className="px-2 py-1 bg-gray-50 rounded text-[10px] font-mono text-gray-500 uppercase tracking-widest border border-gray-100">
            {role}
        </div>

        {/* High-tech glow on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric-500/20 rounded-3xl transition-colors duration-300"></div>
        <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-card-shine" />
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
       {/* Background Decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-slate-50 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-bold uppercase tracking-wider mb-4 border border-navy-100">
                The Builders
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6">Silicon Valley Tech,<br/>Real Estate Heart.</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a team of product experts from public tech companies (NYSE: BEKE). We know how to build powerful software, but we don't know your daily grind.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              That's why we aren't just "launching" a product. We are recruiting <span className="text-navy-900 font-semibold underline decoration-electric-500/30 decoration-4 underline-offset-2">Founding Advisors</span> to guide us. We build the engine, you steer the car.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">KW</div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">EX</div>
                    <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-500">CB</div>
                </div>
                <span>Already advised by top agents from KW, eXp, and Coldwell Banker.</span>
            </div>
          </div>

          <div className="relative">
             {/* Abstract Grid of Avatars */}
             <div className="grid grid-cols-2 gap-4 md:gap-6 transform lg:rotate-3 lg:skew-y-3 transition-transform hover:rotate-0 hover:skew-y-0 duration-700">
                <div className="flex justify-end pt-8">
                    <QuantumAvatar 
                        initials="JD" 
                        role="Product" 
                        icon={<Cpu size={24}/>} 
                        color="from-blue-500 to-cyan-500" 
                        delay="0s"
                    />
                </div>
                <div>
                    <QuantumAvatar 
                        initials="AL" 
                        role="AI Core" 
                        icon={<Network size={24}/>} 
                        color="from-purple-500 to-pink-500" 
                        delay="0.1s"
                    />
                </div>
                <div className="flex justify-end">
                    <QuantumAvatar 
                        initials="MK" 
                        role="System" 
                        icon={<Database size={24}/>} 
                        color="from-emerald-500 to-green-500" 
                        delay="0.2s"
                    />
                </div>
                <div className="pt-8">
                    <QuantumAvatar 
                        initials="RX" 
                        role="UX/UI" 
                        icon={<Code2 size={24}/>} 
                        color="from-orange-500 to-yellow-500" 
                        delay="0.3s"
                    />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;