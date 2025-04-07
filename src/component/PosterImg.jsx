import React, { useState, useEffect } from "react";
import { HeroImgs } from "../data/Data";
import { ChevronRight, ChevronLeft } from "lucide-react";

const PosterImg = () => {
  const [currentImg, setCurrentImg] = useState(0);

  // Function to go to the previous image
  const handlePrev = () => {
    setCurrentImg((prev) => (prev === 0 ? HeroImgs.length - 1 : prev - 1));
  };

  // Function to go to the next image
  const handleNext = () => {
    setCurrentImg((prev) => (prev === HeroImgs.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex w-full h-screen transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImg * 100}%)` }}
      >
        {HeroImgs.map(({ src, name }, index) => (
          <img
            key={index}
            src={src}
            alt={name}
            className="w-full h-screen object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="w-full h-[40%] absolute top-0 left-0 right-0 flex justify-between px-5">
        <button onClick={handlePrev} 
                className="border border-transparent hover:border-white hover:border-2 hover:drop-shadow-[-2px_-2px_0px_black] p-3 h-full">
          <ChevronLeft size={50}  strokeWidth={1} className="text-white drop-shadow-[-2px_0px_0px_black]" />
        </button>
        <button onClick={handleNext} 
               className="border border-transparent hover:border-white hover:border-2 hover:drop-shadow-[2px_2px_0px_black] p-3 h-full">
          <ChevronRight size={50} strokeWidth={1} className="text-white drop-shadow-[2px_0px_0px_black]" />
        </button>
      </div>
    </div>
  );
};

export default PosterImg;
