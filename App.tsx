import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onCtaClick={scrollToWaitlist} />
        <ProblemSection />
        <MissionSection />
        <TeamSection />
        <WaitlistSection ref={waitlistRef} />
      </main>
      <Footer />
    </div>
  );
};

export default App;