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
                    Happyy Birthhday Ayushii
                    <Heart className="text-warm-brown" size={40} />
                  </h2>
                </div>

                <div className="letter-text space-y-6">
                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                    <span className="font-dancing text-2xl">My Dearest Ayushi,</span>
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  Ayushi - Arushi untill next time????. 💌
If you know me you definitely know my friend ayushi
Happy Birthday to the one who still means a lot, a lottt to me. Who never guided me wrong. 
Okay i miss you. 💔
Ik you hate me sm that you dont even want to see me....you don't even pick up my call still dont rply to my msgs.🙂
i still have no idea  where it all went wrong. Whether it was you, sneha, varun and yash going to trips without me or idk. I always felt you were happy with them, than with me.
Now i feel it was just for few days and was never real
(Days/months later when we talked i realised you were never happy). 
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  I only had you, still all i have is you...ik i was never there for you. But i was hurt and being honest i never wanted any of them to be there.
I know you'll never talk to me again... Like that 
I've accepted it somewhere that it was all my fault or some misunderstanding. 
But Ayushi was our friendship so weak that it ended up like that? 
I'm sorry for whatever happened 
But has everything gone so messed up that we can't even fix it?
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  After we stopped talking nothing felt the same. 
Every time i ate cholle bhatoore teri yaad ai hai. 
Mere muh se nikla bhi h meri dost to humesha yehi khaati hai kuch bhi hojaye.... 
I everyday hope ki aj phone aega ki saathme lunch krte h even after months.
I may get hundreds of friends but NONE COULD NEVER BE YOU.🥹
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  So sometimes i sit and think if that random day in 9 class ... Anshika sood ki fight nhi hui hogi or whatsoever the reason was tu mujhe milti hi nahi. 
What if we have never talked? What if we never been friends? 
From sharing everything to you to the day you left for dharamshala 
School was school just because of you....specially 9 and 10th half class. 
I have few memories of us you'll see after this.  
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  And i hope when you see it ... Tere muh pr bdi si smile aye vo dekhke.. And tujhe vo din poora ka poora yaad aye
 Obviously short on photos but you'll be able to recall each and every day as i saus .... 
I remember when jb tu school ati thi. I used to 
be the happiest of all🫶
And ab dekh itne pass hoke bhi . 
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  I miss you . Still when somebody asks me ki ayushi kahan h. And me without any clue says ki busy h vo ese vese koi bhi bahana ki time match nahi hota isliye km mil pate hai❤️‍🩹

Even after all this September me when i went miniso all i was looking for that Harry Potter thing which you always wanted. And me being me ended up calling uday btaio zara konsa hai. 
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  I know ..you hate me more than peas🫛
I might have other people but no one is like you.... 
Vo tere wali baat nahi hai. 🥺

Hope we get back to normal again and you forgive me at least in this life.
                  </p>

                  <p className="font-poppins text-warm-brown-dark leading-relaxed">
                  Happy Birthday to you💗

Thanks for being there everytime even though i never was....
While writing this, I recalled all our memories.. 💝
Arushi still says sorry. 🫂
If you any day feel like ki milna hai mujhse I'll come....just text or call me. ❤
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