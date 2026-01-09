import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import WaitlistSection from './components/WaitlistSection';
import Footer from './components/Footer';
import TypeformModal from './components/TypeformModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero onCtaClick={openModal} />
        <ProblemSection />
        <MissionSection />
        <TeamSection />
        <WaitlistSection onCtaClick={openModal} />
      </main>
      <Footer />
      
      {/* Safe Modal Implementation */}
      <TypeformModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;