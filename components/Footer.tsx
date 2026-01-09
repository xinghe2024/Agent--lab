import React, { useState } from 'react';
import { X, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'privacy' | 'terms'>('privacy');

  const openModal = (type: 'privacy' | 'terms') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-gray-500">
              © 2025 Agent Efficiency Lab. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Proudly built for the modern agent.
            </p>
          </div>
          
          <div className="flex gap-8">
            <button 
              onClick={() => openModal('privacy')} 
              className="text-sm text-gray-500 hover:text-navy-900 transition-colors focus:outline-none"
            >
              Privacy Pledge
            </button>
            <button 
              onClick={() => openModal('terms')} 
              className="text-sm text-gray-500 hover:text-navy-900 transition-colors focus:outline-none"
            >
              Beta Terms
            </button>
            <a 
              href="mailto:c3535209@gmail.com" 
              className="text-sm text-gray-500 hover:text-navy-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Trust/Legal Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-[fadeInUp_0.3s_ease-out_forwards]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy-900 hover:bg-gray-100 rounded-full transition-all"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-electric-50 rounded-full text-electric-600">
                {modalType === 'privacy' ? <Shield size={24} /> : <FileText size={24} />}
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                {modalType === 'privacy' ? 'Data Privacy First' : 'Research Pilot Terms'}
              </h3>
            </div>

            <div className="prose prose-sm text-gray-600">
              {modalType === 'privacy' ? (
                <>
                  <p className="font-medium text-navy-900 mb-2">We treat your data like we treat our own.</p>
                  <p className="mb-4">
                    As we are currently in a Closed Beta Research phase, we operate under a strict <strong>zero-sell policy</strong>. Your email and any data shared during the pilot are used exclusively to improve the Agent Efficiency Lab tools.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 mb-4">
                    <li>We never sell your contact info to lead aggregators.</li>
                    <li>We do not train public models on your private client data.</li>
                    <li>You can request full data deletion at any time.</li>
                  </ul>
                  <p className="text-xs text-gray-400">Full legal compliance documentation will be provided upon acceptance into the Pilot Program.</p>
                </>
              ) : (
                <>
                   <p className="font-medium text-navy-900 mb-2">Founding Advisor Expectation</p>
                  <p className="mb-4">
                    By joining the waitlist, you are applying to be a Research Partner. This is not a binding contract to purchase software.
                  </p>
                  <p className="mb-4">
                    Our goal is to build tools that fit your workflow perfectly. In exchange for early access, we may ask for your honest feedback on product features.
                  </p>
                  <p className="text-xs text-gray-400">Detailed terms of service for the software usage will be issued when access credentials are granted.</p>
                </>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;