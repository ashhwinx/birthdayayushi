import React from 'react';
import { Heart } from 'lucide-react';

interface LandingSectionProps {
  onOpenCapsule: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onOpenCapsule }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Animated Envelope */}
        <div className="envelope-container mb-8">
          <div className="envelope-glow">
            <div className="envelope">
              <div className="envelope-back"></div>
              <div className="envelope-front"></div>
              <div className="envelope-flap"></div>
              <Heart className="heart-icon" size={24} />
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-warm-brown mb-6">
          This year's highlight. Definitely YOU 🤌
          </h1>
          
          <p className="text-lg md:text-xl text-warm-brown-dark font-poppins leading-relaxed max-w-lg mx-auto">
          Don't even know where to start this from but just want to take a moment to thankyou for being MY YOU. 🫶
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={onOpenCapsule}
          className="open-capsule-btn"
        >
          Open!
        </button>
      </div>
    </div>
  );
};

export default LandingSection;