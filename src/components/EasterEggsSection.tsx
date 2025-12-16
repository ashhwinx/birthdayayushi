import React, { useState } from 'react';
import { Heart, X, Sparkles, ArrowRight } from 'lucide-react'; // ArrowRight add kiya hai

interface EasterEggsSectionProps {
  onContinue: () => void;
}

interface EasterEgg {
  id: number;
  position: { x: number; y: number };
  image: string;
  isRevealed: boolean;
}

const EasterEggsSection: React.FC<EasterEggsSectionProps> = ({ onContinue }) => {
  // Yahan apni images ke URL replace karein
  const [easterEggs] = useState<EasterEgg[]>([
    {
      id: 1,
      position: { x: 20, y: 30 },
      image: "/h1.jpeg", 
      isRevealed: false
    },
    {
      id: 2,
      position: { x: 75, y: 25 },
      image: "/h2.jpeg",
      isRevealed: false
    },
    {
      id: 3,
      position: { x: 45, y: 55 },
      image: "/h3.jpeg",
      isRevealed: false
    },
    {
      id: 4,
      position: { x: 15, y: 75 },
      image: "/h4.jpeg",
      isRevealed: false
    },
    {
      id: 5,
      position: { x: 80, y: 70 },
      image: "/h5.jpeg",
      isRevealed: false
    }
  ]);

  const [revealedEggs, setRevealedEggs] = useState<number[]>([]);
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const handleEggClick = (eggId: number) => {
    if (!revealedEggs.includes(eggId)) {
      setRevealedEggs([...revealedEggs, eggId]);
    }
    setActivePopup(eggId);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const activeEggData = easterEggs.find(egg => egg.id === activePopup);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-10 left-10 text-pink-200 animate-pulse hidden md:block">
        <Sparkles size={40} />
      </div>
      <div className="absolute bottom-10 right-10 text-rose-200 animate-pulse hidden md:block" style={{ animationDelay: '1s' }}>
        <Sparkles size={40} />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-dancing font-bold text-[#9D5C6E] mb-2 drop-shadow-sm">
          Hidden Treasures
        </h2>
        <p className="text-sm md:text-base text-rose-800/70 font-poppins mb-6">
          Find the 5 hidden hearts to see our memories 💕
        </p>

        {/* --- GAME BOARD --- */}
        <div className="relative w-full max-w-md md:max-w-2xl h-[350px] md:h-[450px] border-4 border-white rounded-3xl bg-[#fff0f5] shadow-[0_10px_40px_rgba(157,92,110,0.2)] overflow-hidden">
           
           {/* Grid Pattern */}
           <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'radial-gradient(#9D5C6E 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
           </div>

           {/* HEARTS (Clickable) */}
          {easterEggs.map((egg) => (
            <button
              key={egg.id}
              onClick={() => handleEggClick(egg.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 hover:scale-110 transition-transform duration-300"
              style={{
                left: `${egg.position.x}%`,
                top: `${egg.position.y}%`,
              }}
            >
              <div className="relative group p-2">
                 <Heart 
                  size={32} 
                  className={`drop-shadow-md transition-colors duration-300 ${
                    revealedEggs.includes(egg.id) 
                      ? 'text-[#9D5C6E] fill-[#9D5C6E]' // Found
                      : 'text-rose-400 fill-rose-200 animate-bounce' // Not Found
                  }`}
                  style={{ animationDuration: `${2 + egg.id * 0.5}s` }} 
                />
              </div>
            </button>
          ))}
        </div>

        {/* --- POPUP MODAL (PHOTO ONLY) --- */}
        {activeEggData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closePopup}>
            
            {/* Modal Content Wrapper */}
            <div 
              className="relative max-w-lg w-full bg-white p-2 rounded-2xl shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking on image
            >
              
              {/* Close Button (Top Right Outside on Desktop, Inside on Mobile) */}
              <button
                onClick={closePopup}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-rose-200 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md"
              >
                <X size={32} />
              </button>

              {/* Image Display */}
              <div className="rounded-xl overflow-hidden border border-gray-100">
                <img 
                   src={activeEggData.image} 
                   alt="Memory" 
                   className="w-full h-auto max-h-[70vh] object-contain bg-pink-50"
                 />
              </div>
              
              {/* Bottom Decorative Bar */}
              <div className="h-2 w-full bg-[#9D5C6E] mt-2 rounded-full opacity-50"></div>
            </div>
          </div>
        )}

        {/* --- PROGRESS & BUTTON --- */}
        <div className="mt-8 w-full flex flex-col items-center pb-12">
          
          {/* Progress Bar */}
          <div className="flex gap-2 mb-6">
            {easterEggs.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  revealedEggs.includes(index + 1) ? 'w-8 bg-[#9D5C6E]' : 'w-2 bg-pink-200'
                }`}
              />
            ))}
          </div>

          {/* Continue Button (Added Here) */}
          <button
            onClick={onContinue}
            disabled={revealedEggs.length !== easterEggs.length}
            className={`
              px-10 py-4 rounded-full font-playfair font-bold text-lg shadow-xl transition-all duration-300 transform flex items-center gap-3
              ${revealedEggs.length === easterEggs.length 
                 ? 'bg-[#9D5C6E] text-white hover:bg-rose-800 hover:scale-105 animate-bounce cursor-pointer' 
                 : 'bg-white text-gray-300 border-2 border-gray-100 cursor-not-allowed'}
            `}
          >
            {revealedEggs.length === easterEggs.length ? (
              <>Read Final Message 💌 <ArrowRight size={20} /></>
            ) : (
              "Find all 5 hearts first..."
            )}
          </button>
          
        </div>

      </div>
    </div>
  );
};

export default EasterEggsSection;