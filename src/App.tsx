import React, { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import UnlockSection from './components/UnlockSection';
import LetterRevealSection from './components/LetterRevealSection';
import EasterEggsSection from './components/EasterEggsSection';
import FuturePromiseSection from './components/FuturePromiseSection';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    if (isUnlocked && currentSection === 'letter') {
      setShowHearts(true);
    }
  }, [isUnlocked, currentSection]);

  const handleOpenCapsule = () => {
    setCurrentSection('unlock');
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setCurrentSection('letter');
  };

  const handleContinueToEggs = () => {
    setCurrentSection('eggs');
  };

  const handleContinueToPromise = () => {
    setCurrentSection('promise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-beige to-warm-brown-light relative overflow-x-hidden">
      {showHearts && <FloatingHearts />}
      
      <div className="relative z-10">
        {currentSection === 'landing' && (
          <LandingSection onOpenCapsule={handleOpenCapsule} />
        )}
        
        {currentSection === 'unlock' && (
          <UnlockSection onUnlock={handleUnlock} />
        )}
        
        {currentSection === 'letter' && (
          <LetterRevealSection onContinue={handleContinueToEggs} />
        )}
        
        {currentSection === 'eggs' && (
          <EasterEggsSection onContinue={handleContinueToPromise} />
        )}
        
        {currentSection === 'promise' && (
          <FuturePromiseSection />
        )}
      </div>
    </div>
  );
}

export default App;