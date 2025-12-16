import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthdayCake: React.FC = () => {
  const [candlesBlown, setCandles] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [bites, setBites] = useState<number>(0);
  
  const totalCandles = 5;
  const maxBites = 3;

  useEffect(() => {
    if (candlesBlown.length === totalCandles && !showCelebration) {
      setTimeout(() => {
        setShowCelebration(true);
      }, 500);
    }
  }, [candlesBlown, showCelebration]);
  
  const handleCandleClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Sirf ussi candle ko list me add karenge jispe click hua hai
    if (!candlesBlown.includes(index)) {
      setCandles((prev) => [...prev, index]);
    }
  };

  const handleCakeClick = () => {
    if (showCelebration && bites < maxBites) {
      setBites((prev) => prev + 1);
    }
  };

  const getBiteClipPath = () => {
    if (bites === 0) return 'none';
    const biteShapes = [
      'polygon(0 0, 100% 0, 100% 100%, 85% 90%, 70% 100%, 55% 90%, 40% 100%, 25% 90%, 10% 100%, 0 90%)',
      'polygon(0 0, 100% 0, 100% 100%, 90% 80%, 75% 100%, 60% 80%, 45% 100%, 20% 80%, 0 100%)',
      'polygon(0 0, 100% 0, 100% 100%, 95% 60%, 80% 90%, 60% 60%, 40% 90%, 10% 60%, 0 90%)',
    ];
    return biteShapes[bites - 1] || biteShapes[maxBites - 1];
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 select-none">
      
      <motion.div 
        className="relative flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        {/* --- Message --- */}
        <div className="absolute -top-36 w-full flex justify-center h-20 pointer-events-none z-10">
          <AnimatePresence mode='wait'>
            {showCelebration ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="text-center"
              >
                <h2 className="font-dancing text-3xl sm:text-4xl md:text-6xl text-warm-brown font-bold drop-shadow-md whitespace-normal md:whitespace-nowrap px-4 leading-tight">
  Happyyy Birthhdayy Ayushii Thakur❤️
</h2>
                <p className="font-poppins text-warm-brown-light text-sm mt-2 font-medium animate-pulse">
                  (Click the cake to eat it!)
                </p>
              </motion.div>
            ) : (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-dancing text-3xl text-warm-brown-dark font-medium text-center"
              >
                Make a wish & blow the candles... ✨
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* --- CAKE WRAPPER --- */}
        <div 
          className="relative mt-8 group"
          onClick={handleCakeClick}
        >
          {/* Cursor Logic */}
          <div className={`absolute inset-0 z-20 ${showCelebration && bites < maxBites ? 'cursor-pointer' : 'cursor-default'}`}></div>

          {/* 1. CANDLES ROW */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-[16rem] flex justify-between items-end z-50 px-2">
            {Array.from({ length: totalCandles }).map((_, index) => {
              
              // Check if THIS specific candle is blown
              const isBlown = candlesBlown.includes(index);

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col items-center justify-end w-8 h-24 
                    ${!isBlown ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                  onClick={(e) => handleCandleClick(index, e)}
                >
                  
                  {/* FLAME & SMOKE LOGIC */}
                  <AnimatePresence mode='wait'>
                    {!isBlown ? (
                      // FLAME: Sirf tab dikhega jab candle bujhi nahi hai
                      <motion.div
                        key={`flame-${index}`}
                        initial={{ scale: 0 }}
                        animate={{ 
                          scale: [1, 1.15, 0.9, 1],
                          rotate: [-2, 3, -2]
                        }}
                        // Exit fast (0.2s) taaki click krte hi gyab ho
                        exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }} 
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="absolute top-0 w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-[50%] shadow-[0_0_20px_rgba(255,200,0,0.8)] origin-bottom z-50"
                      >
                        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-50 blur-[1px]"></div>
                      </motion.div>
                    ) : (
                      // SMOKE: Sirf tab dikhega jab candle bujh gayi hai
                      <motion.div
                        key={`smoke-${index}`}
                        initial={{ opacity: 0, y: 0, scale: 0.5 }}
                        animate={{ opacity: [0.8, 0], y: -25, x: [0, (index % 2 === 0 ? 5 : -5)], scale: 1.5 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute top-0 w-2 h-6 bg-gray-400/60 blur-sm rounded-full"
                      />
                    )}
                  </AnimatePresence>
                  
                  {/* CANDLE STICK */}
                  <div className="w-3 h-14 bg-gradient-to-b from-pink-100 to-pink-200 border border-pink-300 rounded-sm shadow-sm relative overflow-hidden z-20">
                     <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#ec4899_5px,#ec4899_6px)]"></div>
                  </div>
                  
                  {/* WICK (Batti - Black thread) */}
                  {isBlown && (
                     <motion.div 
                       initial={{ height: 0 }} 
                       animate={{ height: 6 }} 
                       className="absolute top-[34px] w-0.5 bg-black/60 z-10"
                     />
                  )}
                  
                  {/* SHADOW */}
                  <div className="w-3 h-1 bg-black/20 rounded-full blur-[1px] -mb-0.5 z-20"></div>

                </div>
              );
            })}
          </div>

          {/* 2. CAKE TOP */}
          <div className="relative z-10 w-72 h-20 bg-rose-300 rounded-[50%] shadow-inner border-b-4 border-rose-400/30">
             <div className="absolute top-2 left-1/4 w-1/2 h-8 bg-white/20 rounded-[50%] blur-sm"></div>
          </div>

          {/* 3. CAKE BODY */}
          <div 
            className="relative z-0 w-72 h-40 bg-gradient-to-b from-rose-400 to-rose-600 rounded-b-[3rem] -mt-10 overflow-hidden shadow-2xl"
            style={{ 
              clipPath: getBiteClipPath(), 
              transition: 'clip-path 0.3s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            
            <div className="absolute top-0 left-0 w-full flex z-20">
               {[...Array(10)].map((_, i) => (
                 <div key={i} className={`bg-rose-300 flex-1 rounded-b-full ${i%2===0 ? 'h-10' : 'h-7'} opacity-100 shadow-sm`}></div>
               ))}
            </div>

            {/* Sprinkles */}
            <div className="absolute top-16 left-8 w-2 h-2 bg-yellow-300 rounded-full shadow-sm"></div>
            <div className="absolute top-20 right-12 w-2 h-2 bg-blue-300 rounded-full shadow-sm"></div>
            <div className="absolute bottom-12 left-20 w-2 h-2 bg-white rounded-full opacity-80"></div>
          </div>

          {/* 4. PLATE */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-80 h-10 bg-black/20 blur-lg rounded-[50%] -z-10"></div>

        </div>

      </motion.div>
    </div>
  );
};

export default BirthdayCake;