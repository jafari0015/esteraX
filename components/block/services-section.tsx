"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LearnMore2 from "../ui/learn-more-2";
import Line from "../Layout/line";
import services from "../../Data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const set = (m: MediaQueryList | MediaQueryListEvent) =>
      setIsSmallScreen(m.matches);
    set(mq);
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const imageWrap = imageWrapperRef.current;
    if (!container || !imageWrap) return;

    if (isSmallScreen) {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tlRef.current && tlRef.current.kill();
      tlRef.current = null;
      return;
    }

    const viewportH = window.innerHeight;
    const totalItems = services.length;
    const totalScroll = viewportH * totalItems;

    const ctx = gsap.context(() => {
      gsap.set(imageWrap, { xPercent: 100 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      const segmentDuration = 1;
      services.forEach((service, i) => {
        const wrap = document.querySelector(`#imageWrap-${i}`);

        tl.set(wrap, { xPercent: 100, overwrite: true });

        tl.to(wrap, {
          xPercent: 0,
          ease: "power1.out",
          duration: segmentDuration / 2,
        });

        tl.call(() => setActiveIndex(i));

        tl.to(wrap, {
          xPercent: -100,
          ease: "power1.in",
          duration: segmentDuration / 2,
        });
      });

      tlRef.current = tl;
    }, container);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }
      ctx && ctx.revert && ctx.revert();
    };
  }, [isSmallScreen]);

  const textVariants: any = {
    hidden: { opacity: 0, height: 0, y: 8 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: 8,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // const imageVariants: any = {
  //   hidden: { opacity: 0, x: "100%" },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: "-100%",
  //     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  //   },
  // };

  const onClickItem = (idx: number) => {
    setActiveIndex(idx);
    if (tlRef.current && !isSmallScreen && containerRef.current) {
      const progressPerItem = 1 / services.length;
      const playTo = progressPerItem * idx;
      const st = tlRef.current.scrollTrigger!;
      if (st) {
        const totalScroll = st.end - st.start;
        const targetScroll = st.start + playTo * totalScroll;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`relative w-full min-h-[120vh] md:min-h-screen flex ${
          isSmallScreen ? "flex-col" : "flex-row"
        } bg-gradient-to-r from-blue-700 to-[#190d39] pt-16 pb-20`}
        aria-label="Key areas of focus"
      >
        <h1 className="text-white uppercase absolute md:top-24 md:-left-10 left-5 top-10 text-xl md:-rotate-90 select-none">
          Key areas of focus
        </h1>

        <div
          ref={imageWrapperRef}
          className="relative w-full flex justify-center items-center z-0 order-1 lg:order-2 mb-8 md:mb-0"
          style={{ minHeight: isSmallScreen ? 220 : 420 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              // variants={imageVariants}
              // initial="hidden"
              // animate="visible"
              // exit="exit"
              className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl"
            >
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full px-6 md:pl-26 lg:pl-36 xl:pl-40 flex flex-col justify-center md:pt-20 lg:pt-36 items-start text-white z-10 order-2 lg:order-1">
          <motion.ul layout className="space-y-4 w-full" role="tablist">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.li
                  key={service.id}
                  layout
                  className="space-y-4 border-b md:border-b-0 border-white/20 pb-4"
                  role="presentation"
                >
                  <div
                    onClick={() => onClickItem(index)}
                    className="flex items-center justify-between cursor-pointer"
                    aria-controls={`panel-${service.id}`}
                    aria-expanded={isActive}
                  >
                    <motion.span
                      className="sm:hidden text-3xl mr-3 order-1"
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      aria-hidden
                    >
                      +
                    </motion.span>

                    <button
                      role="tab"
                      aria-selected={isActive}
                      className={`text-left transition-all duration-500 ease-in-out flex-1 cursor-pointer ${
                        isActive
                          ? "text-3xl md:text-5xl xl:text-6xl font-semibold opacity-100"
                          : "text-2xl md:text-xl lg:text-2xl font-semibold opacity-50 hover:opacity-70"
                      }`}
                    >
                      {service.title}
                    </button>
                  </div>

                  <AnimatePresence initial={false} mode="wait">
                    {isActive && (
                      <motion.div
                        id={`panel-${service.id}`}
                        layout
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden md:pl-4"
                      >
                        <p className="text-base lg:text-lg leading-relaxed max-w-md mt-6">
                          {service.description}
                        </p>
                        <LearnMore2 className="mt-10 mb-10 ml-1">
                          Learn more
                        </LearnMore2>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>

      <Line direction="horizontal" color="white" thickness={1} />
    </>
  );
};

export default HorizontalAccordion;
