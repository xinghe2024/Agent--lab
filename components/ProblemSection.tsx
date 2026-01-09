import React from 'react';
import { TrendingUp, Users, BrainCircuit } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const cards = [
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "The Production Plateau",
      text: "You're stuck at your personal capacity limit not because you can't sell, but because you're buried in paperwork and scheduling.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "The Hiring Dilemma",
      text: "Hiring a human assistant means lower margins, management headaches, and months of training. It's a heavy burden.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-white" />,
      title: "AI That Actually Works",
      text: "ChatGPT creates generic content. You need an AI that integrates with your CRM and acts like a trained Operations Manager.",
      gradient: "from-electric-500 to-blue-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Decorative subtle gradient background */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-slate-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">The "Successful Solo" Trap</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            To grow beyond your current limits, you usually have to hire a team and split your commission. <br />
            <span className="font-semibold text-electric-600">We are fixing that equation.</span>
          </p>
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