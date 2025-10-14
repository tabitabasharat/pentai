// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Mainsection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);

  }, []);


  return (
    <div className="flex flex-col items-center">
      <h1
    style={{
          background:
            "linear-gradient(92.48deg, #7E7E7E -14.98%, #FFFFFF 49.56%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
        className={`
          text-center font-[dm-semibold] text-[32px] sm:text-[40px] lg:text-[48px] 
          leading-[110%] sm:leading-[105%] lg:leading-[100%] mb-[8px] sm:mb-[10px] lg:mb-[12px]
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        Lorem ipsum dolor sit amet <br className="hidden sm:block" />{" "}
        consectetur
      </h1>

      <p 
        className="text-center font-[dm] text-[#ECEDEE] text-[18px] sm:text-[20px] lg:text-[24px] px-4 sm:px-0 leading-relaxed transform-gpu transition-all duration-1000 ease-out"
        style={{
          animation: isVisible ? 
            "textReveal 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both" : 
            "none"
        }}
      >
        Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est
        <br className="hidden sm:block" />
        vivamus mauris fames et. Sed lacus purus in tellus.
      </p>

      <button 
        className="text-[#ECEDEE] mb-[30px] font-[dm-semibold] mt-[24px] sm:mt-[32px] lg:mt-[40px] text-[14px] sm:text-[15px] bg-white px-6 sm:px-[24px] py-3 sm:py-[12px] rounded-full transform-gpu transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-white/20 active:scale-95"
        style={{
          animation: isVisible ? 
            "buttonReveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s both" : 
            "none"
        }}
      >
        Book a demo
      </button>

      <style jsx>{`
        @keyframes titleReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 80px, 0) scale(0.9);
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 50px, 0);
          }
          60% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 40px, 0) scale(0.8);
          }
          70% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Mainsection;