import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

interface EasterEggsSectionProps {
  onContinue: () => void;
}

interface EasterEgg {
  id: number;
  position: { x: number; y: number };
  message: string;
  isRevealed: boolean;
}

const EasterEggsSection: React.FC<EasterEggsSectionProps> = ({ onContinue }) => {
  const [easterEggs] = useState<EasterEgg[]>([
    {
      id: 1,
      position: { x: 20, y: 30 },
      message: "From endless chess moves , 8ball pool 💌matches to sending me ghosts reels and even making me imagine ki dekho vahan koi khada hoga😭",
      isRevealed: false
    },
    {
      id: 2,
      position: { x: 70, y: 40 },
      message: "From sending you off shoulder top photos 💗and asking you for ki coffee kb pilaoge is still on top☕",
      isRevealed: false
    },
    {
      id: 3,
      position: { x: 40, y: 60 },
      message: "From spotting brown color in everything i see to making brown rose for my YOU 🫀, even painting my nails 💅",
      isRevealed: false
    },
    {
      id: 4,
      position: { x: 60, y: 20 },
      message: "From dedicating me HER to sharing the story behind certain songs you hear. 🤎🫂",
      isRevealed: false
    },
    {
      id: 5,
      position: { x: 30, y: 80 },
      message: "From searching for you in every passing bus to patiently waiting just to see My You. 🫶",
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <div className="max-w-4xl mx-auto text-center relative w-full">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-warm-brown mb-6">
          Little Love Notes
        </h2>
        
        <p className="text-lg text-warm-brown-dark font-poppins mb-8 max-w-2xl mx-auto">
          I've hidden some special memories around here. Click on the floating hearts to discover them! 💕
        </p>

        {/* Easter Eggs Container */}
        <div className="relative w-full h-96 mx-auto border-2 border-warm-brown/20 rounded-xl bg-cream/30 overflow-hidden">
          {easterEggs.map((egg) => (
            <button
              key={egg.id}
              onClick={() => handleEggClick(egg.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 easter-egg-heart ${
                revealedEggs.includes(egg.id) ? 'revealed' : ''
              }`}
              style={{
                left: `${egg.position.x}%`,
                top: `${egg.position.y}%`,
              }}
            >
              <Heart 
                size={32} 
                className={`transition-all duration-300 ${
                  revealedEggs.includes(egg.id) 
                    ? 'text-warm-brown fill-warm-brown scale-110' 
                    : 'text-warm-brown/60 hover:text-warm-brown hover:scale-125'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Popup for Easter Egg Messages */}
        {activePopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-cream border-2 border-warm-brown rounded-xl max-w-md w-full p-6 relative animate-scale-in">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-warm-brown hover:text-warm-brown-dark transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <Heart className="text-warm-brown fill-warm-brown mx-auto mb-4" size={40} />
                <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  {easterEggs.find(egg => egg.id === activePopup)?.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-8 mb-8">
          <p className="text-sm text-warm-brown/70 font-poppins mb-4">
            Found {revealedEggs.length} of {easterEggs.length} memories
          </p>
          <div className="flex justify-center space-x-2">
            {easterEggs.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  revealedEggs.includes(index + 1)
                    ? 'bg-warm-brown'
                    : 'bg-warm-brown/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="primary-btn"
        >
          {revealedEggs.length === easterEggs.length ? "You Found Them All! Continue" : "Continue to Promise"}
        </button>
      </div>
    </div>
  );
};

export default EasterEggsSection;