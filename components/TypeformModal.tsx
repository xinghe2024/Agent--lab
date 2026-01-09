import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2 } from 'lucide-react';

interface TypeformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypeformModal: React.FC<TypeformModalProps> = ({ isOpen, onClose }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsLoaded(false); // Reset loading state on close
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Use createPortal to render outside the main DOM hierarchy to prevent z-index issues
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-[fadeInUp_0.3s_ease-out_forwards]">
        
        {/* Header / Close Button */}
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
            className="p-2 bg-white/90 rounded-full hover:bg-gray-100 text-navy-900 transition-colors shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Loading State */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-0">
            <Loader2 className="w-10 h-10 text-electric-500 animate-spin" />
          </div>
        )}

        {/* Safe Iframe Embed */}
        <iframe
          id="typeform-full"
          title="Application Form"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media;"
          // Updated with the correct Typeform ID provided by the user
          src="https://form.typeform.com/to/tQdaDlUw" 
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        ></iframe>
      </div>
    </div>,
    document.body
  );
};

export default TypeformModal;