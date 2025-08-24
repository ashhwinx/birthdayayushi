import React, { useState, useEffect } from 'react';
import { Heart, Music, Volume2, VolumeX } from 'lucide-react';

interface LetterRevealSectionProps {
  onContinue: () => void;
}

const LetterRevealSection: React.FC<LetterRevealSectionProps> = ({ onContinue }) => {
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLetterVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // Here you would implement actual audio control
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b4226' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Music Controls */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-20 p-3 bg-cream border-2 border-warm-brown/30 rounded-full hover:bg-beige transition-all duration-300 shadow-lg"
      >
        {isMusicPlaying ? (
          <Volume2 className="text-warm-brown" size={20} />
        ) : (
          <VolumeX className="text-warm-brown" size={20} />
        )}
      </button>

      <div className="max-w-4xl mx-auto relative">
        {/* Opening Envelope Animation */}
        <div className="envelope-opening mb-8">
          <div className="opened-envelope">
            <div className="envelope-back-opened"></div>
            <div className="envelope-front-opened"></div>
            <div className="envelope-flap-opened"></div>
          </div>
        </div>

        {/* Letter Content */}
        {isLetterVisible && (
          <div className="letter-container animate-slide-up">
            <div className="parchment-paper">
              <div className="letter-content">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-warm-brown mb-4 flex items-center justify-center gap-2">
                    <Heart className="text-warm-brown" size={40} />
                    My Letter to My SUN
                    <Heart className="text-warm-brown" size={40} />
                  </h2>
                </div>

                <div className="letter-text space-y-6">
                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                    <span className="font-dancing text-2xl">My Dearest Mohit,</span>
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  I still remember… from sharing random series and movies with a complete stranger, to getting so lost into you...and of course, the spark I could never ignore. ✨
In short, you became “someone who felt like belonging.” 🥹
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  I even thought I’d never see you again, but still  somewhere, I hoped and prayed for it.
From sending you a reel I always wanted to...to asking you for more movies, more series, and even that Spotify blend...those songs...talking to you each day made me  realized you were different. My Different 🤎. 
Knowing you , talking to you became my favorite thing 👀
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  With you, I opened up in ways I never did before. You weren’t just a good friend, my batman, my devil,my king og the jungle....you were someone who understood me like no one else could.❤ 
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  With you, I opened up in ways I never did before. You weren’t just a good friend, my batman, my devil,my king og the jungle....you were someone who understood me like no one else could.❤ 
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  And from confessing you my liking towards you ( i still feel  guilty ... That it was the baddest/messiest way one could express) 😭
Thats why i made that Rose for you 💋🌹
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  Thank you for introducing me to “Johnny Orlando,” and yes, JVKE ..
no no, Arushi’s Jake 😂 … but in the end, I ended up loving your voice more than any of them. 🎶😘
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  my favorite nights are the one where I just get to listen to you sing, and where you sleep while talking 🫀💌 That’s the moment I wish for every day.🥰

I can’t thank you enough for bringing me the peace I 
always needed. 🫂
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  Thankyou for the amazing year... Thankyou for letting me LOVE YOU. 
                  </p>

                  <div className="text-right mt-8">
                    <p className="font-dancing text-3xl text-warm-brown">
                      Always yours,<br/>
                      – Arushi 💌
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={onContinue}
                    className="primary-btn"
                  >
                    Continuee
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterRevealSection;