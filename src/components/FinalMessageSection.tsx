import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const FinalMessageSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF0F5] relative overflow-hidden text-center px-6">
      
      {/* --- Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-rose-300 animate-pulse"><Sparkles size={32} /></div>
        <div className="absolute bottom-20 right-10 text-rose-300 animate-pulse animation-delay-2000"><Sparkles size={40} /></div>
        
        {/* Soft Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200 rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 animate-fade-in-up space-y-8">
        
        {/* Animated Heart */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="text-[#9D5C6E] fill-[#9D5C6E] animate-bounce" size={60} />
            <div className="absolute inset-0 bg-rose-400 blur-xl opacity-40 animate-pulse"></div>
          </div>
        </div>

        {/* The Text */}
        <div className="space-y-4">
          <h1 className="font-dancing text-5xl md:text-7xl font-bold text-[#9D5C6E] drop-shadow-sm leading-tight">
            Overflowing with love,
          </h1>
          
          <div className="h-px w-24 bg-[#9D5C6E]/30 mx-auto my-4"></div>
          
          <p className="font-playfair text-2xl md:text-4xl text-[#6b4226] italic opacity-90">
            carrying the most honest sorry.
          </p>
        </div>

        {/* Optional: Small signature or ending decoration */}
        <div className="pt-12 opacity-60">
           <span className="font-poppins text-sm tracking-[0.3em] text-[#9D5C6E] uppercase">Forever Yours</span>
        </div>

      </div>

    </div>
  );
};

export default FinalMessageSection;