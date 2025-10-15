"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";
import Button from "../ui/learn-more-btn";
import HeroSectionSecond from "../ui/second-part-hero-section";

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  const HeroText = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, delayChildren: 0.8, staggerChildren: 0.4 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 70, damping: 25 },
    },
  };
  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={container}
      className="relative w-full min-h-screen overflow-hidden"
    >
      <div className="absolute w-full h-[70vh] md:h-full">
        <motion.video
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[70%_center] xl:object-center z-10 "
          style={{ y: videoY }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4 }}
        />
      </div>

      <div className="min-h-[60vh] md:min-h-[56vh] lg:min-h-[60vh] xl:min-h-0"></div>
      <div className="absolute -bottom-40 md:-bottom-150 xl:-bottom-40 left-0 w-full h-full z-20 bg-gradient-to-t from-[#140d25] via-[#140d25]"></div>
      <motion.div
        className="relative z-20 flex flex-col pl-8 md:pl-26 lg:pl-34 xl:pl-40 xl:pt-72 text-white max-w-7xl"
        variants={HeroText}
        initial="hidden"
        animate={showContent ? "visible" : "hidden"}
        style={{ y: contentY }}
      >
        <motion.div
          className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-7xl md:max-w-xl lg:max-w-2xl xl:max-w-[800px] font-bold"
          variants={item}
        >
          <h1>
            EsteraX brings innovation to <br />
            life through code and creativity.
          </h1>
        </motion.div>

        <motion.div
          className="max-w-xs md:max-w-sm  lg:max-w-xl mt-8 md:mt-16 md:text-xl lg:text-2xl xl:text-3xl"
          variants={fadeItem}
        >
          <p>
            From concept, to design, to launch, we’ll help you create seamless
            experiences through innovation and modern technology.
          </p>
        </motion.div>

        <motion.div variants={fadeItem}>
          <Button icon={<TfiArrowRight />} className="mt-8 md:mt-14 text-3xl">
            Learn More
          </Button>
        </motion.div>

        <HeroSectionSecond />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
