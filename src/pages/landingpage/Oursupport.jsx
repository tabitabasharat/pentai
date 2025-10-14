// components/Navbar.tsx
"use client";

import { useState } from "react";

const Oursupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div 
    
        className="bg-img pt-[290px] flex gap-[47px] items-center flex-col pb-[128px] bg-cover bg-no-repeat bg-center h-max w-full"
      >
        <h1 className="text-[#ECEDEE] text-[24px] font-[dm-semibold]">
          Our Supporters
        </h1>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[45px] items-center justify-items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="w-full h-24 flex items-center justify-center"
            >
              <span className="text-white font-[dm] text-[20px]">
                Supporter-logo
              </span>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Oursupport;