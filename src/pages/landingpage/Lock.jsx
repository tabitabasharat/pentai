// components/Navbar.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Lock = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 flex lg:flex-row flex-col gap-8 sm:gap-12 lg:gap-[117px] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Blur Shade Effect */}
      <motion.div
        style={{
          position: "absolute",
          width: "337.44px",
          height: "116.27px",
          background: "#FFF9F9",
          opacity: "0.5",
          border: "1px solid #000000",
          filter: "blur(196.25px)",
          transform: "rotate(-36.63deg)",
          zIndex: 5,
        }}
        className="hidden lg:block lg:left-[354.89px] lg:top-[3817.31px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left Content */}
      <div className="w-full lg:max-w-3xl mx-auto flex justify-center lg:justify-start items-center lg:items-start flex-col text-center lg:text-left relative z-10">
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
          text-center lg:text-left font-[dm-semibold] text-[28px] sm:text-[32px] lg:text-[48px] 
          leading-[110%] sm:leading-[105%] lg:leading-[100%] mb-4 sm:mb-[10px] lg:mb-[30px]
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        >
          Lorem Ipsum <br className="hidden sm:block" /> Dollar
        </h1>
        <p className="max-w-[263px] text-white text-[14px] sm:text-[16px] font-[dm] mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left">
          Consequat netus consequat tortor vitae cursus nullam tincidunt urna.
          Tristique leo consequat
        </p>
        <div className="w-full flex justify-center lg:justify-start">
          <img src="/Images/lock/lock_front.svg" className="max-w-[280px] sm:max-w-none" />
        </div>
      </div>

      {/* Right Content -- Cards Grid */}
      <div className="w-full flex flex-col items-center lg:items-end gap-6 sm:gap-8 lg:gap-[24px] mx-auto relative z-10">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[24px] w-full justify-center lg:justify-end">
          <div className="gradient-border w-full sm:w-fit py-4 sm:py-[25.92px] px-4 sm:px-[11.23px] rounded-[15.7px] flex justify-center sm:justify-start gap-4 sm:gap-[24px]">
            <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
              <img
                src="/Images/lock/LockLaminated.svg"
                className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
              />
              <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Lorem Ipsum <br className="hidden sm:block" /> Dollar
              </p>
            </div>
          </div>
          <div className="gradient-border w-full sm:w-fit py-4 sm:py-[23px] px-4 sm:px-[70.73px] rounded-[15.7px] flex justify-center sm:justify-start gap-4 sm:gap-[24px]">
            <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
              <img
                src="/Images/lock/SecurityCamera.svg"
                className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
              />
              <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Lorem Ipsum <br className="hidden sm:block" /> Dollar
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[33px] w-full">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[20px] items-center lg:items-end w-full ">
            <div className="gradient-border w-full lg:w-fit py-4 sm:py-[20.92px] px-4 sm:px-[54.23px] rounded-[15.7px] flex flex-col gap-4 sm:gap-[24px]">
              <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
                <img
                  src="/Images/lock/Fingerprint.svg"
                  className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
                />
                <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                  Lorem Ipsum <br className="hidden sm:block" /> Dollar
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-end w-full">
              <div className="gradient-border w-full  py-4 sm:py-[25.92px] px-4 sm:px-[11.23px] rounded-[15.7px]">
                <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
                  <img
                    src="/Images/lock/ShieldCheck.svg"
                    className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
                  />
                  <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center ">
                    Lorem Ipsum <br className="hidden sm:block" /> Dollar
                  </p>
                </div>
              </div>
              <div className="gradient-border w-full  py-4 sm:py-[25.92px] px-4 sm:px-[11.23px] rounded-[15.7px]">
                <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
                  <img
                    src="/Images/lock/Wall.svg"
                    className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
                  />
                  <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center ">
                    Lorem Ipsum <br className="hidden sm:block" /> Dollar
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-border w-full lg:w-fit p-4 sm:p-[23.23px] flex justify-center lg:justify-start items-center rounded-[15.7px]">
            <div className="flex gap-3 sm:gap-[9.19px] items-center flex-col">
              <img
                src="/Images/lock/ShieldWarning.svg"
                className="w-8 h-8 sm:w-[40px] sm:h-[40px]"
              />
              <p className="font-[dm-semibold] text-[#ECEDEE] text-[16px] sm:text-[18px] lg:text-[20px] text-center">
                Lorem Ipsum <br className="hidden sm:block" /> Dollar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lock;