import React, { useState, useEffect } from 'react';
import LandingSection from './components/LandingSection';
import UnlockSection from './components/UnlockSection';
import LetterRevealSection from './components/LetterRevealSection';
import EasterEggsSection from './components/EasterEggsSection';
import FuturePromiseSection from './components/FuturePromiseSection';
import FloatingHearts from './components/FloatingHearts';
import BirthdayCake from './components/BirthdayCake';
import ImageScrollSection from './components/ImageScrollSection'; // Naya component import
import { ArrowRight } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('landing');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  // Jab letter section khule tab hearts dikhana shuru karein
  useEffect(() => {
    if (currentSection === 'letter') {
      setShowHearts(true);
    }
  }, [currentSection]);

  // --- NAVIGATION HANDLERS (Flow Logic) ---

  // 1. Landing -> Unlock
  const handleStartJourney = () => {
    setCurrentSection('unlock');
  };

  // 2. Unlock -> Cake (Password sahi hone par)
  const handleUnlock = () => {
    setIsUnlocked(true);
    setCurrentSection('cake');
  };

  // 3. Cake -> Letter
  const handleCakeFinish = () => {
    setCurrentSection('letter');
  };

  // 4. Letter -> Images (Naya Step)
  const handleLetterFinish = () => {
    setCurrentSection('images');
  };

  // 5. Images -> Easter Eggs
  const handleImagesFinish = () => {
    setCurrentSection('eggs');
  };

  // 6. Easter Eggs -> Promise
  const handleEggsFinish = () => {
    setCurrentSection('promise');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-beige to-warm-brown-light relative overflow-x-hidden">
      {/* Background Hearts Animation */}
      {showHearts && <FloatingHearts />}
      
      <div className="relative z-10">
        
        {/* STEP 1: LANDING */}
        {currentSection === 'landing' && (
          <LandingSection onOpenCapsule={handleStartJourney} />
        )}

        {/* STEP 2: UNLOCK (Password) */}
        {currentSection === 'unlock' && (
          <UnlockSection onUnlock={handleUnlock} />
        )}

        {/* STEP 3: BIRTHDAY CAKE */}
        {currentSection === 'cake' && (
          <div className="min-h-screen flex flex-col items-center justify-center animate-fade-in pb-10">
             <BirthdayCake />
             
             {/* Next Button for Cake */}
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
        
        {/* STEP 4: LETTER REVEAL */}
        {currentSection === 'letter' && (
          <LetterRevealSection onContinue={handleLetterFinish} />
        )}

        {/* STEP 5: IMAGE SCROLL (NEW SECTION) */}
        {currentSection === 'images' && (
          <div className="min-h-screen flex flex-col items-center justify-center animate-fade-in ">
             <ImageScrollSection />
             
             {/* Next Button for Images */}
             <div className="pb-16 mt-8">
               <button 
                 onClick={handleImagesFinish}
                 className="flex items-center gap-2 px-8 py-3 bg-warm-brown text-white rounded-full 
                            font-playfair font-bold shadow-lg hover:bg-warm-brown-light 
                            transform hover:scale-105 transition-all duration-300"
               >
                 Go to Memories 💭 <ArrowRight size={20} />
               </button>
             </div>
          </div>
        )}
        
        {/* STEP 6: EASTER EGGS */}
        {currentSection === 'eggs' && (
          <EasterEggsSection onContinue={handleEggsFinish} />
        )}
        
       
      </div>
    </div>
  );
}

export default App;