import React from 'react';
import { Heart } from 'lucide-react'; // Ensure you have lucide-react installed

const ImageScrollSection: React.FC = () => {
  const images = [
    "/m1.jpeg",
    "/m2.jpeg",
    "/m3.jpeg",
    "/m4.jpeg",
    "/m5.jpeg",
   
  ];

  return (
    // Main Container with Pink Gradient
    <div className="relative w-full py-20 overflow-hidden select-none ">
      
      {/* --- Background Decorative Blobs (Soft Pink Glows) --- */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* --- Header Section --- */}
      <div className="relative z-10 text-center mb-12 px-4">
      
        <h2 className="font-dancing text-4xl md:text-5xl text-[#9D5C6E] mt-2 font-bold drop-shadow-sm">
        Finally we have few photos together. <span className="text-rose-400">💕</span>
        </h2>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative w-full flex mask-linear-fade z-10 py-4">
        
        {/* Track 1 */}
        <div className="flex animate-scroll whitespace-nowrap">
          {images.map((img, index) => (
            <ImageCard key={`a-${index}`} src={img} index={index} />
          ))}
        </div>

        {/* Track 2 */}
        <div className="flex animate-scroll whitespace-nowrap">
          {images.map((img, index) => (
            <ImageCard key={`b-${index}`} src={img} index={index} />
          ))}
        </div>

      </div>

      {/* --- CSS Styles --- */}
      <style>{`
        .animate-scroll {
          animation: scroll 35s linear infinite;
          display: flex;
          min-width: 100%;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        /* Fade Effect on Sides */
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }

        /* Blob Animation */
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

// --- Updated Aesthetic Image Card ---
const ImageCard = ({ src, index }: { src: string, index: number }) => (
  <div className={`
    relative w-[280px] md:w-[350px] mx-6 shrink-0 group perspective-1000
    ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} 
    hover:rotate-0 transition-all duration-500
  `}>
    
    {/* Card Frame (Polaroid Look) */}
    <div className="
      bg-white p-3 pb-12 rounded-lg 
      shadow-[0_10px_30px_-10px_rgba(255,105,180,0.4)] 
      group-hover:shadow-[0_20px_40px_-10px_rgba(255,105,180,0.6)]
      transition-all duration-500 transform group-hover:-translate-y-2
      border border-pink-100
    ">
      
      {/* Image Container */}
      <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden rounded-md">
        <img 
          src={src} 
          alt="Memory" 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Pink Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Decorative Heart Icon at bottom of Polaroid */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        <Heart size={20} className="text-rose-400 fill-rose-200" />
      </div>

    </div>
  </div>
);

export default ImageScrollSection;