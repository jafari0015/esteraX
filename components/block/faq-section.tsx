"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TfiPlus } from "react-icons/tfi";
import Line from "../Layout/line";
import Link from "next/link";
import faqData from "../../Data/faq-data";
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="relative bg-white w-full min-h-[100vh] md:min-h-[80vh] xl:min-h-screen xl:pb-80 overflow-hidden flex">
        <h1 className="text-black uppercase absolute text-xl mt-4 md:mt-10 ml-4 md:ml-8 md:-rotate-90">
          FAQ
        </h1>
        <div className="max-w-2xl mt-[500px] lg:max-w-3xl  xl:h-[800px] md:mt-40 xl:mt-80  xl:ml-48 z-0 absolute">
          <video
            src="/faq.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex-1 max-w-xl mt-14 ml-5 w-full absolute xl:mt-36 md:mt-40 md:ml-10 xl:ml-40 z-20 m md:text-center">
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold">
            Got questions?
            <br />
            We have answers.
          </h2>
        </div>
        <div className="relative -mt-20 md:mt-60 xl:mt-96 z-10 flex w-full items-center justify-end overflow-hidden">
          <div className="w-full md:ml-[250px] lg:ml-[350px] xl:ml-[900px] border-l border-b bg-white xl:bg-transparent">
            {faqData.map((item, index) => (
              <motion.div key={index} className="mb-4">
                <Line direction={"horizontal"} thickness={1} />

                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-4 md:pt-2 lg:py-4 xl:py-6 pl-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        backgroundColor:
                          activeIndex === index ? "#140d25" : "#f1f1f1",
                        color: activeIndex === index ? "#ffffff" : "#000000",
                        scale: activeIndex === index ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-semibold lg:font-bold !rounded-full"
                    >
                      {index + 1}
                    </motion.div>

                    <span className="font-medium text-sm md:text-base lg:text-xl">
                      {item.q}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    className="text-xl xl:text-4xl transition-transform duration-100 mr-5"
                  >
                    <TfiPlus />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -10 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="py-2 text-black/70 text-sm lg:text-lg pl-5 md:pl-14 xl:pl-20">
                        {item.a}
                      </p>
                      <Link href={item.url} className="ml-20">
                        {item.url}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Line direction={"horizontal"} thickness={1} color="black" />
    </>
  );
};

export default FAQSection;
