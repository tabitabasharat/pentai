// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";

const PercentageSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      percentage: "23%",
      description:
        "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
    },
    {
      percentage: "23%",
      description:
        "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
    },
    {
      percentage: "23%",
      description:
        "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
    },
  ];

  return (
    <section className="py-12  sm:py-16 lg:py-[144px]">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[36px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative transform-gpu
                transition-all duration-1000 ease-out
                ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-10 scale-95 blur-sm"
                }
                hover:translate-y-[-8px] hover:scale-105
              `}
              style={{
                transitionDelay: `${400 + index * 200}ms`,
                transitionProperty: "opacity, transform, filter, scale",
              }}
            >
              <div className="text-center max-w-full mx-auto flex flex-col">
                {/* Percentage */}
                <div
                  className="bg-percent-img ps-[50px] text-left py-8 sm:py-10 lg:py-[52px] transform-gpu transition-transform duration-500 ease-out hover:scale-105"
                  style={{
                    animation: isVisible
                      ? `percentagePop 0.8s ease-out ${
                          600 + index * 200
                        }ms both`
                      : "none",
                  }}
                >
                  <span
                    style={{
                      background:
                        "linear-gradient(92.48deg, #7E7E7E -14.98%, #FFFFFF 49.56%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      backgroundSize: "200% 100%",
                      animation: isVisible
                        ? `gradientFlow 4s ease-in-out ${
                            800 + index * 300
                          }ms infinite`
                        : "none",
                    }}
                    className="text-6xl sm:text-5xl lg:text-7xl xl:text-[72px] font-[dm-bold] block transform-gpu transition-transform duration-300 ease-out hover:scale-110"
                  >
                    {stat.percentage}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-gray-400 text-sm sm:text-base lg:text-lg mt-[10px] leading-relaxed sm:leading-loose px-2 sm:px-0 transform-gpu transition-all duration-700 ease-out"
                  style={{
                    animation: isVisible
                      ? `fadeInUp 0.8s ease-out ${1200 + index * 150}ms both`
                      : "none",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0) scale(0.95);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes percentagePop {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateX(90deg);
          }
          70% {
            transform: scale(1.05) rotateX(0deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
          }
        }

        @keyframes gradientFlow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default PercentageSection;
