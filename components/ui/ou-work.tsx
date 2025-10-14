"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import Line from "../Layout/line";
import DrawOutlineButton from "./draw-outline-button";
import LearnMore2 from "./learn-more-2";

const OurWork = [
  {
    subTitle: "AI for marketing",
    title: "Last mile route optimisation for DFS",
    description:
      "Satalia helped DFS transform their last-mile delivery offering with last-mile delivery technology.",
    percentage: "18%",
    subDescription: "Total Saving across the workstream",
  },
];

const WorkComponents = ({ imageSrc = "" }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const inView = useInView(ref, { amount: 0.1 });
  const [activeIndex] = useState(0);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const revealVariant: any = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: {
        duration: 1.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="xl:min-h-[70vh] h-full w-full bg-white flex flex-col md:flex-row justify-between border-b xl:gap-48  text-black md:pl-18 lg:pl-25"
    >
      <div>
        <div className="relative h-full md:w-[80%] xl:w-[145%] overflow-hidden">
          <motion.img
            src={imageSrc}
            alt="Our Mission"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={isVisible ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white z-10"
            variants={revealVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          />
        </div>
      </div>

      <div className="w-full h-full flex py-8 xl:py-0 xl:mt-30 flex-col xl:ml-40 mr-20 lg:mr-32 px-6 md:px-0">
        <div className="flex flex-col">
          {OurWork.map((item, index) => (
            <React.Fragment key={index}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: "20vw" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-20vw" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-left mt-10"
                >
                  <h4 className="text-xl mb-4">{item.subTitle}</h4>
                  <h1 className="text-3xl xl:text-5xl font-medium mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-600 max-w-sm mt-4 md:mt-10 md:text-base lg:text-lg">
                    {item.description}
                  </p>
                  <DrawOutlineButton>Learn More</DrawOutlineButton>
                  <div className="mt-12">
                    <Line
                      direction="horizontal"
                      thickness={1}
                      width={700}
                      color="gray"
                    />
                    <h1 className="md:text-[100px]  text-[70px] lg:text-[150px] font-bold font-sans leading-none">
                      {item.percentage}
                    </h1>
                    <p className="mt-10 text-base lg:text-xl">
                      {item.subDescription}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkComponents;
