import React, { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import UnlockSection from './components/UnlockSection';
import LetterRevealSection from './components/LetterRevealSection';
import EasterEggsSection from './components/EasterEggsSection';
import FuturePromiseSection from './components/FuturePromiseSection'; // Agar ye last m rakhna ho to
import FloatingHearts from './components/FloatingHearts';
import BirthdayCake from './components/BirthdayCake';
import ImageScrollSection from './components/ImageScrollSection';
import FinalMessageSection from './components/FinalMessageSection'; // Naya Page Import kiya
import { ArrowRight } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  // Letter section aate hi hearts udna shuru honge
  useEffect(() => {
    if (currentSection === 'letter') {
      setShowHearts(true);
    }
  }, [currentSection]);

  // --- NAVIGATION LOGIC ---

  const handleStartJourney = () => {
    setCurrentSection('unlock');
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setCurrentSection('cake');
  };

  const handleCakeFinish = () => {
    setCurrentSection('letter');
  };

  const handleLetterFinish = () => {
    setCurrentSection('images');
  };

  const handleImagesFinish = () => {
    setCurrentSection('eggs');
  };

  // ✅ YAHAN HAI LOGIC: Eggs complete hone par 'message' section par bhejega
  const handleEggsFinish = () => {
    setCurrentSection('message');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-beige to-warm-brown-light relative overflow-x-hidden">
      {/* Background Hearts */}
      {showHearts && <FloatingHearts />}
      
      <div className="relative z-10">
        
        {/* 1. Landing */}
        {currentSection === 'landing' && (
          <LandingSection onOpenCapsule={handleStartJourney} />
        )}

        {/* 2. Unlock */}
        {currentSection === 'unlock' && (
          <UnlockSection onUnlock={handleUnlock} />
        )}

        {/* 3. Cake */}
        {currentSection === 'cake' && (
          <div className="min-h-screen flex flex-col items-center justify-center animate-fade-in pb-10">
             <BirthdayCake />
             <button 
               onClick={handleCakeFinish}
               className="mt-4 flex items-center gap-2 px-8 py-3 bg-warm-brown text-white rounded-full 
                          font-playfair font-bold shadow-lg hover:bg-warm-brown-light 
                          transform hover:scale-105 transition-all duration-300 animate-bounce"
             >
               Read Your Letter 💌 <ArrowRight size={20} />
             </button>
          </div>
        )}
        
        {/* 4. Letter */}
        {currentSection === 'letter' && (
          <LetterRevealSection onContinue={handleLetterFinish} />
        )}

        {/* 5. Images */}
        {currentSection === 'images' && (
          <div className="min-h-screen flex flex-col items-center justify-center animate-fade-in bg-[#FFF0F5]">
             <ImageScrollSection />
             <div className="pb-16 mt-8">
               <button 
                 onClick={handleImagesFinish}
                 className="flex items-center gap-2 px-8 py-3 bg-[#9D5C6E] text-white rounded-full 
                            font-playfair font-bold shadow-lg hover:bg-rose-700
                            transform hover:scale-105 transition-all duration-300"
               >
                 Go to Memories 💭 <ArrowRight size={20} />
               </button>
             </div>
          </div>
        )}
        
        {/* 6. Easter Eggs (Yahan button click hoga to handleEggsFinish chalega) */}
        {currentSection === 'eggs' && (
          <EasterEggsSection onContinue={handleEggsFinish} />
        )}
        
        {/* 7. Final Message (Overflowing with love...) */}
        {currentSection === 'message' && (
          <FinalMessageSection />
        )}
        
      </div>
    </div>
  );
}

export default App;