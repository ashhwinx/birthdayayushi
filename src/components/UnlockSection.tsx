import React, { useState, useEffect } from 'react';
import { Lock, Key, Clock, Puzzle } from 'lucide-react';

interface UnlockSectionProps {
  onUnlock: () => void;
}

const UnlockSection: React.FC<UnlockSectionProps> = ({ onUnlock }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('password');
  const [password, setPassword] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [puzzleComplete, setPuzzleComplete] = useState(false);

  // Countdown timer (set to August 25th, 2024 12:00 AM for demo purposes)
  useEffect(() => {
    const targetDate = new Date('2024-08-25T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft(difference);
      } else {
        setTimeLeft(0);
        if (selectedMethod === 'countdown') {
          onUnlock();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedMethod, onUnlock]);

  const handlePasswordSubmit = () => {
    // Accept various anniversary-related answers
    const correctAnswers = ["Sorry","sorry"];
    if (correctAnswers.some(answer => password.toLowerCase().includes(answer))) {
      onUnlock();
    } else {
      alert('Hmm, that doesn\'t seem right. Think about our special day... 💕');
    }
  };

  const handlePuzzleComplete = () => {
    setPuzzleComplete(true);
    setTimeout(() => {
      onUnlock();
    }, 1000);
  };

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Locked Envelope */}
        <div className="locked-envelope animate-fade-in">
          <div className="envelope-large">
            <div className="envelope-back-large"></div>
            <div className="envelope-front-large"></div>
            <div className="envelope-flap-large"></div>
            <Lock className="lock-icon" size={32} />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-warm-brown mb-8">
          Choose Your Key
        </h2>

        {/* Unlock Method Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedMethod('password')}
            className={`unlock-method-btn ${selectedMethod === 'password' ? 'active' : ''}`}
          >
            <Key size={20} />
            <span>Solve Me</span>
          </button>
          
        </div>

        {/* Unlock Methods */}
        {selectedMethod === 'password' && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-warm-brown-dark font-poppins mb-4">
            Ive felt it inside but stayed quite because i guess i dont deserve it. 
What word is it.
            </p>
            <div className="space-y-4">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Me"
                className="w-full max-w-sm mx-auto px-4 py-3 border-2 border-warm-brown/30 rounded-lg focus:border-warm-brown focus:outline-none bg-cream/50"
              />
              <button
                onClick={handlePasswordSubmit}
                className="primary-btn"
              >
                Unlock with Love
              </button>
            </div>
          </div>
        )}

        

        {selectedMethod === 'countdown' && (
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-warm-brown-dark font-poppins mb-6">
              This capsule will automatically open on our anniversary...
            </p>
            <div className="countdown-display">
              {timeLeft > 0 ? formatTime(timeLeft) : 'Time to open! 💕'}
            </div>
            {timeLeft === 0 && (
              <button
                onClick={onUnlock}
                className="primary-btn animate-pulse"
              >
                The Time Has Come
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnlockSection;