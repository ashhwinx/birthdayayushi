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
          For My favorite person❤
          </h1>
          
       
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