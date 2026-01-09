import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">
          © 2025 Agent Efficiency Lab. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <button 
            onClick={onOpenPrivacy}
            className="text-sm text-gray-500 hover:text-navy-900 transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <button 
            onClick={onOpenTerms}
            className="text-sm text-gray-500 hover:text-navy-900 transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          <a href="mailto:support@agent-efficiency-lab.com" className="text-sm text-gray-500 hover:text-navy-900 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;