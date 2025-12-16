import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const ImageScrollSection: React.FC = () => {
  const images = [
    "/m1.jpeg",
    "/m2.jpeg",
    "/m3.jpeg",
    "/m4.jpeg",
    "/m5.jpeg",
  ];

  return (
    <div className="relative w-full min-h-screen py-20  overflow-hidden">
      
      {/* --- Background Decorations --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#eecfd6_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      {/* Soft Blobs */}
      <div className="absolute top-20 left-[-100px] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-40 right-[-100px] w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      {/* --- Header --- */}
      <div className="relative z-10 text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 className="font-dancing text-4xl md:text-6xl text-[#9D5C6E] font-bold drop-shadow-sm leading-tight">
            Finally we have few<br/> photos together <span className="text-rose-400">💕</span>
          </h2>
        </motion.div>
      </div>

      {/* --- Timeline Container --- */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        
        {/* Central Vertical Line (Visible on Desktop) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-rose-300 to-transparent transform md:-translate-x-1/2 rounded-full hidden md:block"></div>

        {/* Images Loop */}
        <div className="flex flex-col gap-12 md:gap-24 pb-20">
          {images.map((img, index) => (
            <TimelineItem key={index} src={img} index={index} />
          ))}
        </div>

        {/* End Heart */}
        <div className="flex justify-center mt-8 md:mt-0 relative z-10">
           <div className="bg-white p-3 rounded-full shadow-lg border-2 border-pink-100 animate-bounce">
             <Heart className="text-[#9D5C6E] fill-[#9D5C6E]" size={24} />
           </div>
        </div>

      </div>

      {/* --- Styles --- */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

// --- Single Timeline Item Component ---
const TimelineItem = ({ src, index }: { src: string, index: number }) => {
  // Logic: Even index = Left side, Odd index = Right side
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* 1. Empty Space (For Desktop Alignment) */}
      <div className="hidden md:block w-1/2"></div>

      {/* 2. Timeline Dot (Center Point) */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#9D5C6E] rounded-full border-4 border-white shadow-md transform md:-translate-x-1/2 z-20 hidden md:block"></div>

      {/* 3. The Content (Polaroid) */}
      <div className="w-full md:w-1/2 flex justify-center md:block px-4 md:px-12">
        <motion.div
          // Animation Logic:
          // Mobile: Always comes from bottom-up or slight fade
          // Desktop: Even comes from Left (-x), Odd comes from Right (+x)
          initial={{ opacity: 0, x: isEven ? -100 : 100, rotate: isEven ? -5 : 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: isEven ? -2 : 2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative group"
        >
          {/* Polaroid Frame */}
          <div className="bg-white p-3 pb-12 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transform transition-transform duration-500 hover:scale-105 hover:z-30 hover:shadow-2xl border border-gray-100">
            
            {/* Image Wrapper */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src={src} 
                alt="Memory" 
                className="w-full h-full object-cover filter sepia-[0.1] hover:sepia-0 transition-all duration-500"
              />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Bottom Heart/Decoration */}
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <Heart size={18} className="inline-block text-rose-300 fill-rose-100/50" />
            </div>

            {/* Tape Effect (Optional Aesthetic Detail) */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm rotate-2 z-10 opacity-80"></div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ImageScrollSection;