import React from 'react';
import { UserX, SmartphoneNfc, ShieldCheck } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const cards = [
    {
      icon: <UserX className="h-8 w-8 text-white" />,
      title: "Generic AI Lacks Context",
      text: "ChatGPT doesn't know your market, your clients, or your voice. You spend more time editing the output than it took to write it.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <SmartphoneNfc className="h-8 w-8 text-white" />,
      title: "No New App to Learn",
      text: "Stop downloading apps you'll never open. Our tools work silently in the background via SMS, Email, and Follow Up Boss.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      title: "Trust & Precision",
      text: "Real estate is high-stakes. One 'hallucination' can cost a commission. We prioritize accuracy over creativity.",
      gradient: "from-electric-500 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Decorative subtle gradient background */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-slate-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">Why Agents Are Burned Out on "AI Tools"</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Most tech companies build <span className="italic">for</span> agents without understanding the chaos of your daily life.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              
              {/* Gradient Border Reveal on Hover */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className={`mb-6 p-3 rounded-xl w-fit bg-gradient-to-br ${card.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{card.text}</p>
              
              {/* Decorative background blob for hover state */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;