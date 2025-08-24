import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 20 }).map((_, i) => (
        <Heart
          key={i}
          className="absolute text-warm-brown/20 animate-float-up"
          size={Math.random() * 20 + 15}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-50px',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;