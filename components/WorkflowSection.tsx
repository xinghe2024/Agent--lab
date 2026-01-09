import React from 'react';
import { MessageSquare, Calendar, Bell, CheckCircle2, Clock, Zap, ArrowRight, ShieldAlert } from 'lucide-react';

const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-electric-50 text-electric-700 text-xs font-bold uppercase tracking-wide mb-4 ring-1 ring-electric-700/10">
            Workflow Simulation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 tracking-tight">
             How Your AI Clone <br className="hidden md:block" />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 to-violet-600">Handles The Chaos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Three real scenarios where solo agents usually lose time or money. Here is how your AI handles them instantly.
          </p>
        </div>

        {/* Scenarios - Stacked Horizontal Layout */}
        <div className="flex flex-col gap-6">
          
          {/* Scenario 1: Speed to Lead */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-electric-200 transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_1.8fr]">
                {/* Left: Context */}
                <div className="p-6 md:p-8 flex flex-col justify-center bg-slate-50/50 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-blue-100 rounded-md text-blue-600">
                            <Zap className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Scenario 01</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">The "Dinner Time" Lead</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        It's 7:30 PM. You're at dinner with family. A new Zillow lead asks: <span className="italic">"Is this still available?"</span>
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200/60">
                         <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            Without AI: Response time 2 hrs
                         </div>
                         <div className="flex items-center gap-2 text-xs font-bold text-electric-600 mt-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            With AI: Response time 12 sec
                         </div>
                    </div>
                </div>

                {/* Right: UI Visualization */}
                <div className="bg-white p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                     {/* Decorative gradient behind phone */}
                     <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-electric-50 to-blue-50 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/4 -translate-y-1/4"></div>

                     {/* Chat Interface */}
                     <div className="max-w-sm mx-auto w-full space-y-3">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-[10px] text-gray-400 font-bold">LEAD</div>
                            <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-gray-700 shadow-sm">
                                Can I see 123 Maple St tomorrow?
                            </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-violet-500 flex-shrink-0 flex items-center justify-center shadow-md">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-gradient-to-r from-electric-600 to-violet-600 rounded-2xl rounded-tr-none px-4 py-2.5 text-sm text-white shadow-md">
                                Yes! I have openings at 10 AM or 2 PM. Which works best for you?
                            </div>
                        </div>
                         <div className="flex justify-end pr-12">
                            <span className="text-[10px] font-medium text-gray-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3 text-electric-500" />
                                Sent automatically via SMS
                            </span>
                        </div>
                     </div>
                </div>
            </div>
          </div>

          {/* Scenario 2: Database Nurture */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_1.8fr]">
                {/* Left: Context */}
                <div className="p-6 md:p-8 flex flex-col justify-center bg-slate-50/50 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-violet-100 rounded-md text-violet-600">
                            <Clock className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-violet-600 uppercase tracking-wider">Scenario 02</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">The "Ghost" Resurrection</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        You have 300 old leads from 2024 gathering dust. You don't have time to "check in" on them.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200/60">
                         <p className="text-xs font-medium text-gray-500 italic">
                            "I totally forgot about this person, but now they are ready to buy."
                         </p>
                    </div>
                </div>

                {/* Right: UI Visualization */}
                <div className="bg-white p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                     {/* Decorative gradient */}
                     <div className="absolute left-0 bottom-0 w-64 h-64 bg-gradient-to-tr from-violet-50 to-fuchsia-50 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/4 translate-y-1/4"></div>

                     {/* Notification Card */}
                     <div className="w-full max-w-sm bg-white rounded-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 relative">
                        <div className="absolute -left-1 top-6 w-1 h-12 bg-violet-500 rounded-r-full"></div>
                        <div className="flex items-start gap-4">
                            <div className="bg-violet-100 p-2.5 rounded-full">
                                <Bell className="w-5 h-5 text-violet-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h4 className="text-sm font-bold text-navy-900">Opportunity Detected</h4>
                                    <span className="text-[10px] text-gray-400">Just now</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1 leading-snug">
                                    <span className="font-semibold text-navy-900">Mike (Lead from Nov '24)</span> just viewed your market report for the 3rd time this week.
                                </p>
                                
                                <div className="mt-3 flex gap-2">
                                    <button className="flex-1 py-1.5 bg-violet-600 text-white text-[10px] font-bold rounded hover:bg-violet-700 transition-colors">
                                        Start Call
                                    </button>
                                    <button className="flex-1 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold rounded hover:bg-gray-50 transition-colors">
                                        View Script
                                    </button>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
          </div>

           {/* Scenario 3: Transaction Management */}
           <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_1.8fr]">
                {/* Left: Context */}
                <div className="p-6 md:p-8 flex flex-col justify-center bg-slate-50/50 border-r border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-cyan-100 rounded-md text-cyan-600">
                            <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Scenario 03</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">The Compliance Guardian</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        You are under contract. The inspection period ends tomorrow. If you miss this, your client loses their deposit.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200/60">
                         <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                            AI Status: Monitoring 24/7
                         </div>
                    </div>
                </div>

                {/* Right: UI Visualization */}
                <div className="bg-white p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                     {/* Decorative gradient */}
                     <div className="absolute right-1/2 top-1/2 w-56 h-56 bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-full blur-3xl opacity-60 -z-10 -translate-y-1/2 translate-x-1/2"></div>

                     {/* Checklist Card */}
                     <div className="w-full max-w-sm bg-white rounded-xl border border-gray-100 shadow-lg p-5">
                        <div className="flex items-center justify-between mb-4 border-b border-gray-50 pb-3">
                            <span className="text-xs font-bold text-gray-400 uppercase">Transaction: 405 W Main</span>
                            <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[10px] font-bold rounded-full border border-red-100">Action Required</span>
                        </div>
                        
                        <div className="space-y-3">
                             <div className="flex items-center gap-3 opacity-50">
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                </div>
                                <span className="text-xs text-gray-500 line-through">Send Intro to Title Co.</span>
                             </div>
                             
                             <div className="flex items-center gap-3 p-3 bg-red-50/50 rounded-lg border border-red-100 relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                                <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center bg-white z-10">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-navy-900">Schedule Inspection</span>
                                    <span className="block text-[10px] text-red-500 font-medium">Deadline: Tomorrow 5:00 PM</span>
                                </div>
                                <button className="ml-auto px-3 py-1.5 bg-white border border-gray-200 text-xs font-bold rounded shadow-sm hover:bg-gray-50">
                                    Book
                                </button>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;