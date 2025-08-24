import React, { useState } from 'react';
import { Download, Heart, Calendar, Gift } from 'lucide-react';

const FuturePromiseSection: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadLetter = () => {
    setIsDownloading(true);
    
    // Create a simple PDF-like content (in a real app, you'd use a PDF library)
    const letterContent = `


My Dearest Mohit,

I still remember… from sharing random series and movies with a complete stranger, to getting so lost into you...and of course, the spark I could never ignore. ✨
In short, you became “someone who felt like belonging.” 🥹

I even thought I’d never see you again, but still  somewhere, I hoped and prayed for it.
From sending you a reel I always wanted to...to asking you for more movies, more series, and even that Spotify blend...those songs...talking to you each day made me  realized you were different. My Different 🤎. 
Knowing you , talking to you became my favorite thing 👀


With you, I opened up in ways I never did before. You weren’t just a good friend, my batman, my devil,my king og the jungle....you were someone who understood me like no one else could.❤ 

And from confessing you my liking towards you ( i still feel  guilty ... That it was the baddest/messiest way one could express) 😭
Thats why i made that Rose for you 💋🌹

Thank you for introducing me to “Johnny Orlando,” and yes, JVKE ..
no no, Arushi’s Jake 😂 … but in the end, I ended up loving your voice more than any of them. 🎶😘

my favorite nights are the one where I just get to listen to you sing, and where you sleep while talking 🫀💌 That’s the moment I wish for every day.🥰

I can’t thank you enough for bringing me the peace I 
always needed. 🫂

Thankyou for the amazing year... Thankyou for letting me LOVE YOU. 


Always yours,
– Sunshine💌

Created with love on ${new Date().toLocaleDateString()}
    `.trim();

    const blob = new Blob([letterContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Our_Love_Letter_Anniversary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-warm-brown/10 floating-heart-bg"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Main Heading */}
        <div className="space-y-6 animate-fade-in">
          
          
          <div className="bg-cream/80 border-2 border-warm-brown/30 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-warm-brown-dark font-poppins leading-relaxed mb-6">
            You're one of the best thing that ever happened to me. My favorite stranger who stood for me without even knowing me. 
            
              Its almost been a year now and I'm so grateful for it that you came into my life 🐣🌻
            </p>
            
            <p className="text-lg text-warm-brown/80 font-poppins">
              Mark your calendar: <span className="font-bold">August 25, 2025</span> 
              - Another love letter awaits you 💕
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-playfair font-bold text-warm-brown">
            Keep This Moment Forever
          </h3>
          
          <p className="text-lg text-warm-brown-dark font-poppins max-w-2xl mx-auto">
            Download this letter so you can read it anytime you want to remember how much you're loved.
          </p>
          
          <button
            onClick={handleDownloadLetter}
            disabled={isDownloading}
            className="download-btn"
          >
            <Download size={20} />
            <span>
              {isDownloading ? 'Preparing Your Letter...' : 'Download My Letter'}
            </span>
          </button>
        </div>

        {/* Final Message */}
        <div className="final-message-container">
          <div className="bg-gradient-to-br from-warm-brown/10 to-beige/30 border-2 border-warm-brown/20 rounded-xl p-8">
            <Heart className="text-warm-brown fill-warm-brown mx-auto mb-4" size={60} />
            
            <h4 className="text-2xl font-playfair font-bold text-warm-brown mb-4">
              Please come from Dubai i want to see you
            </h4>
            
            <p className="font-dancing text-3xl text-warm-brown-dark mb-4">
            One year later, still my favorite part of story is YOU 🫵😘
            </p>
            
            
            
            <div className="text-right">
              <p className="font-dancing text-2xl text-warm-brown">
                Forever yours,<br/>
                Sunshine💌
              </p>
            </div>
          </div>
        </div>

        {/* Countdown to Next Capsule */}
        <div className="next-capsule-countdown">
          <p className="text-sm text-warm-brown/60 font-poppins">
            Next Love Letter Time Capsule opens in approximately 365 days...
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturePromiseSection;