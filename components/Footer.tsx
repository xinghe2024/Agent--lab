import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500">
          © 2025 Agent Efficiency Lab. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-navy-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-navy-900 transition-colors">Terms of Service</a>
          <a href="#" className="text-sm text-gray-500 hover:text-navy-900 transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;