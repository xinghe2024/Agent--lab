import React, { forwardRef, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';

const WaitlistSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section ref={ref} className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-electric-500/5 blur-[100px] -z-10"></div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">Secure Your Founding Spot</h2>
        <p className="text-lg text-gray-600 mb-10">
          We are limiting the initial research cohort to <span className="font-bold text-navy-900">50 Active Agents</span> to ensure direct access to our engineering team.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center animate-[fadeInUp_0.5s_ease-out_forwards]">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Check className="h-8 w-8 text-green-600" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Application Received!</h3>
            <p className="text-green-700">We will review your profile and contact qualified advisors within 48 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
            >
              Register another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-6 py-4 rounded-full text-gray-900 placeholder-gray-400 bg-white border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 shadow-lg whitespace-nowrap
                    ${loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-electric-600 to-violet-600 hover:from-electric-500 hover:to-violet-500 hover:shadow-electric-500/30 hover:-translate-y-0.5'
                    }
                  `}
                >
                  {loading ? (
                    <span className="flex items-center">
                        <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Applying...
                    </span>
                  ) : 'Apply Now'}
                </button>
            </div>
          </form>
        )}
        
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-400">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
           Applications open for Batch #1 (US Only)
        </div>
      </div>
    </section>
  );
});

WaitlistSection.displayName = 'WaitlistSection';

export default WaitlistSection;