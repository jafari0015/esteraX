"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Line from "../Layout/line";
import LearnMore2 from "../ui/learn-more-2";
import DrawOutlineButton from "../ui/draw-outline-button";
import Projects from "../../Data/projects";

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const currentItem = Projects[activeIndex % Projects.length];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (activeIndex >= Projects.length) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => prev % Projects.length);
      }, 600); // must match transition duration
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <>
      <h1 className="text-secondary uppercase absolute text-xl mt-5 ml-4 md:mt-24 md:-ml-4 md:-rotate-90">
        Case Studies
      </h1>

      <div className="flex flex-col md:flex-row lg:gap-2 2xl:gap-30 bg-white md:pl-18 lg:pl-25 h-full">
        <Line direction={"vertical"} color="black" thickness={1} />

        <div className="w-full xl:min-h-screen relative overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="sync">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100vw" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentItem.mainImage}
                alt={currentItem.title}
                fill
                priority
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full h-full flex flex-col mt-20 overflow-hidden">
          <div className="flex flex-col ml-0 md:ml-10">
            <div className="relative w-full mt-10">
              <div
                className={`relative w-full overflow-hidden ${isMobile ? "w-full" : "max-w-[40rem]"
                  }`}
              >
                <motion.div
                  className="flex space-x-6"
                  animate={{
                    x: isMobile
                      ? `calc(50% - ${(activeIndex + Projects.length) * 160 + 80}px)`
                      : `-${activeIndex * 160}px`, // desktop: active at start
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {[...Projects, ...Projects, ...Projects].map((item, index) => {
                    const realIndex = index % Projects.length;
                    const isActive = activeIndex === realIndex;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveIndex(realIndex)}
                        className={`cursor-pointer transition-all duration-500 overflow-hidden flex pl-1 items-center flex-shrink-0`}
                      >
                        <div className={` rounded-full overflow-hidden transition-all duration-300 ${isActive ? "w-40 h-40" : "w-32 h-32"}
                          }`}>
                          <Image
                            src={item.avatar}
                            alt={`Avatar ${realIndex + 1}`}
                            width={64}
                            height={64}
                            className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale'
                              }`}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: "20vw" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-20vw" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-left mt-10 px-5"
              >
                <h4 className="text-xl mb-4">{currentItem.subTitle}</h4>
                <h1 className="text-3xl xl:text-5xl font-medium mb-2">
                  {currentItem.title}
                </h1>
                <p className="text-gray-600 max-w-sm mt-4 md:mt-10 md:text-base lg:text-lg">
                  {currentItem.description}
                </p>
                <DrawOutlineButton>Learn More</DrawOutlineButton>
                <div className="mt-12">
                  <Line
                    direction="horizontal"
                    thickness={1}
                    width={800}
                    color="gray"
                  />
                  <h1 className="md:text-[100px] text-[70px] lg:text-[150px] font-bold font-sans leading-none">
                    {currentItem.percentage}
                  </h1>
                  <p className="mt-5 text-base lg:text-xl">
                    {currentItem.subDescription}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 text-sm lg:text-lg mb-10 ml-5 lg:ml-5">
              <LearnMore2
                bgColor="black"
                textColor="white"
                arrowBg="white"
                arrowColor="black"
                hoverBg="white"
                hoverText="black"
                className="text-sm"
              >
                More Case Studies
              </LearnMore2>
            </div>
          </div>
        </div>
      </div>

      <Line
        direction="horizontal"
        thickness={1}
        color="black"
        length="100%"
        zIndex={50}
      />
    </>
  );
};

export default ImageGallery;
