"use client";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import LearnMore2 from "../ui/learn-more-2";

const AboutSection: React.FC<AboutSectionProps> = ({
  id,
  title = "",
  imageSrc = "",
  heading = "",
  paragraphs = [],
  buttonText = "",
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (inView) setIsVisible(true);
    else setIsVisible(false);
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0),
        1
      );
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const variants: Variants = {
    hidden: { x: 0 },
    visible: {
      x: 100,
      transition: {
        duration: 1.8,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
      <section
        id={id}
        ref={ref}
        className="relative border-t-[1px] border-b-[1px] border-white z-10 overflow-hidden"
      >
        <h1 className="text-white uppercase absolute md:top-14 md:-ml-4 left-5 top-10 text-xl md:-rotate-90">
          About US
        </h1>
        <div className="flex flex-col md:flex-row justify-around lg:gap-0 lg:pl-26 md:pl-12 xl:justify-between  items-center text-white">
          <div className="relative h-full w-full md:w-[50%] md:h-[50vh] xl:h-screen md:mt-0 mt-14 xl:w-[45%] overflow-hidden">
            <motion.img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={isVisible ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-[#140d25] z-10"
              variants={variants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            />
          </div>

          <div className="text-start md:max-w-[280px] lg:max-w-sm xl:max-w-xl xl:mr-40 px-6 mt-10 md:px-0">
            <h2 className="text-3xl lg:text-4xl xl:text-6xl">{heading}</h2>

            {paragraphs.map((text, index) => (
              <p key={index} className="lg:text-lg md:text-sm mt-5 xl:mt-10">
                {text}
              </p>
            ))}

            <LearnMore2 className="mt-14 mb-10 md:mb-0 xl:mt-36">
              {buttonText}
            </LearnMore2>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
