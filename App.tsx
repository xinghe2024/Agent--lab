import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import WorkflowSection from './components/WorkflowSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';
import TypeformModal from './components/TypeformModal';
import LegalModal from './components/LegalModals';

type ModalState = 'none' | 'typeform' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalState>('none');

  const openTypeform = () => setActiveModal('typeform');
  const openPrivacy = () => setActiveModal('privacy');
  const openTerms = () => setActiveModal('terms');
  const closeModal = () => setActiveModal('none');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onCtaClick={openTypeform} />
        <ProblemSection />
        <WorkflowSection />
        <MissionSection />
        <TeamSection />
        <WaitlistSection onCtaClick={openTypeform} />
      </main>
      <Footer 
        onOpenPrivacy={openPrivacy} 
        onOpenTerms={openTerms} 
      />
      
      {/* Application Modal */}
      <TypeformModal 
        isOpen={activeModal === 'typeform'} 
        onClose={closeModal} 
      />

      {/* Legal Modals */}
      <LegalModal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        type="privacy" 
      />
      <LegalModal 
        isOpen={activeModal === 'terms'} 
        onClose={closeModal} 
        type="terms" 
      />
    </div>
  );
};

export default App;