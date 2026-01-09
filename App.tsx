import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';
import { createPopup } from '@typeform/embed';

const App: React.FC = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);
  // Store the popup instance to avoid recreating it on every click
  const popupRef = useRef<any>(null);

  // Function to open the Typeform modal
  const openTypeform = () => {
    if (!popupRef.current) {
      // Create the popup only once
      popupRef.current = createPopup('h2wreFd6', {
        opacity: 95,
        hideHeaders: true,
        hideFooter: true,
      });
    }
    popupRef.current.toggle();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onCtaClick={openTypeform} />
        <ProblemSection />
        <MissionSection />
        <TeamSection />
        {/* We pass the same open handler to the WaitlistSection button */}
        <WaitlistSection ref={waitlistRef} onCtaClick={openTypeform} />
      </main>
      <Footer />
    </div>
  );
};

export default App;