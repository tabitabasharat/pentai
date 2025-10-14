// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-img-dashboard py-[40px] md:py-[60px] lg:py-[80px] flex flex-col gap-[8px] md:gap-[10px] lg:gap-[12px] px-4 sm:px-6">
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
        className={`
        text-center font-[dm-medium] text-[#ECEDEE] text-[16px] sm:text-[17px] lg:text-[18px] 
        px-2 sm:px-0 transition-all duration-1000 ease-out delay-200
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      >
        Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
      </p>

      <img
        src="/Images/Dashboard.svg"
        className={`
          mt-[16px] sm:mt-[20px] lg:mt-[24px] w-full max-w-6xl mx-auto px-2 sm:px-0
          transition-all duration-1000 ease-out delay-400
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          hover:scale-105 hover:transition-transform hover:duration-300
        `}
        alt="Dashboard"
      />
    </div>
  );
};

export default Dashboard;
