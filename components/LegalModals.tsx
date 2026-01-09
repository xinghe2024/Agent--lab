import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Shield, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const icon = isPrivacy ? <Shield className="w-6 h-6 text-electric-600" /> : <Scale className="w-6 h-6 text-electric-600" />;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col animate-[fadeInUp_0.3s_ease-out_forwards]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-gray-50/50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-navy-900">{title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-navy-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 text-sm leading-relaxed text-gray-600 space-y-6">
          {isPrivacy ? (
            <>
              <p className="italic text-gray-500">Last Updated: October 2025</p>
              <p>
                At <strong>Agent Efficiency Lab</strong> ("we", "us", or "our"), we respect your privacy. As a research initiative aimed at optimizing real estate operations, we are committed to being transparent about how we collect and use your data.
              </p>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">1. Information We Collect</h4>
                <p>We collect information you voluntarily provide when applying for our Research Cohort, including:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Contact information (Name, Email).</li>
                  <li>Professional details (Brokerage, Transaction Volume, Current Tech Stack).</li>
                  <li>Operational challenges and pain points.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">2. How We Use Your Data</h4>
                <p>Your data is used strictly for:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>Cohort Selection:</strong> Evaluating eligibility for our beta research groups.</li>
                  <li><strong>Product Research:</strong> Analyzing aggregate patterns to design our AI Operating System.</li>
                  <li><strong>Communication:</strong> Contacting you regarding your application status or research updates.</li>
                </ul>
                <p className="mt-2 text-electric-600 font-medium">We do not sell your personal data to third-party advertisers.</p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">3. Data Security</h4>
                <p>
                  We implement industry-standard security measures to protect your information. However, please note that no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">4. Contact Us</h4>
                <p>
                  If you have questions about this policy or wish to withdraw your application data, please contact us at: <a href="mailto:support@agent-efficiency-lab.com" className="text-electric-600 hover:underline">support@agent-efficiency-lab.com</a>.
                </p>
              </section>
            </>
          ) : (
            <>
              <p className="italic text-gray-500">Last Updated: October 2025</p>
              <p>
                Welcome to the <strong>Agent Efficiency Lab</strong>. By applying to or participating in our Research Cohort, you agree to these Terms of Service.
              </p>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">1. Nature of the Initiative</h4>
                <p>
                  The Agent Efficiency Lab is a <strong>research and development initiative</strong>. Any tools, software, or workflows provided during this cohort are in a "Beta" or "Prototype" state. 
                </p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">2. No Guarantees of Results</h4>
                <p>
                  While our mission is to help agents increase transaction volume, <strong>we make no guarantees regarding specific business outcomes, income, or efficiency gains</strong>. Real estate markets vary, and individual results depend on numerous factors outside our control. The "AI Employee" concept is a developmental goal, not a guaranteed service outcome.
                </p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">3. Disclaimer of Warranties</h4>
                <p className="uppercase text-xs font-bold text-gray-500 tracking-wider mb-1">IMPORTANT</p>
                <p>
                  All materials and services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not warrant that the tools will be error-free or uninterrupted.
                </p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">4. Eligibility</h4>
                <p>
                  Participation is limited to active, licensed real estate professionals. We reserve the right to accept or reject applications for the Research Cohort at our sole discretion.
                </p>
              </section>

              <section>
                <h4 className="text-navy-900 font-bold mb-2 text-base">5. Intellectual Property</h4>
                <p>
                  Feedback, ideas, or suggestions you provide regarding our tools may be used by Agent Efficiency Lab for product improvement without obligation or compensation to you.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 bg-white border border-gray-200 text-navy-900 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default LegalModal;