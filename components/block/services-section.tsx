"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
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
    const totalScroll = viewportH * totalItems * 1.5;

    const ctx = gsap.context(() => {
      gsap.set(imageRefs.current, (i: number) => ({
        xPercent: i === 0 ? -50 : 50,
        autoAlpha: i === 0 ? 1 : 0,
        willChange: "transform, opacity",
      }));


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1.5,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.min(
              services.length - 1,
              Math.max(0, Math.round(progress * (services.length - 1)))
            );
            setActiveIndex(newIndex);
          },
        },
      });

      const segment = 1.5 / totalItems;
      const enterPortion = 0.7 * segment;

      services.forEach((_, i) => {
        const current = imageRefs.current[i];
        const next = imageRefs.current[i + 1];

        if (!current) return;

        const startTime = i * segment;

        tl.to(
          current,
          {
            xPercent: -200,
            autoAlpha: 0,
            ease: "power3.inOut",
            duration: enterPortion,
          },
          startTime
        );

        if (next) {
          gsap.set(next, { xPercent: 100, autoAlpha: 0 });

          tl.to(
            next,
            {
              xPercent: 0,
              autoAlpha: 1,
              ease: "power3.inOut",
              duration: enterPortion,
            },
            startTime
          );
        }
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


  const textVariants: Variants = {
    hidden: { opacity: 0, height: 0, y: 8 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: 8,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const onClickItem = (idx: number) => {
    if (isSmallScreen) {
      setActiveIndex(idx);
      return;
    }

    if (tlRef.current && containerRef.current) {
      const progressPerItem = 1 / services.length;
      const targetProgress = progressPerItem * idx + progressPerItem * 0.6;

      const st = tlRef.current.scrollTrigger;
      if (st) {
        const totalScroll = st.end - st.start;
        const targetScroll = st.start + targetProgress * totalScroll;
        window.scrollTo({ top: targetScroll, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`relative w-full min-h-[120vh] md:min-h-screen flex  ${isSmallScreen ? "flex-col" : "flex-row"
          } bg-gradient-to-r from-blue-700 to-[#190d39] pt-16 pb-20`}
        aria-label="Key areas of focus"
      >
        <h1 className="text-foreground tracking-widest uppercase absolute md:top-26 md:-left-12 left-5 top-5 mb-5 text-xl md:-rotate-90 select-none">
          Key areas of focus
        </h1>
        <div
          ref={imageWrapperRef}
          className="relative w-full flex justify-center items-center z-0 order-1 lg:order-2 mb-8 md:mb-0 overflow-hidden"
          style={{
            minHeight: isSmallScreen ? 220 : 420,
            position: "relative",
          }}
        >

          {isSmallScreen ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={imageVariants}
                className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl "
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
          ) : (
            services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="absolute top-1/2 left-1/2 w-full h-[40vh] md:h-[50vh] lg:h-[60vh] max-w-xs md:max-w-sm lg:max-w-xl xl:max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden"
                style={{
                  zIndex: services.length - index,
                }}

              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            ))
          )}
        </div>

        <div className="w-full px-6 md:pl-26 lg:pl-36 xl:pl-40 flex flex-col justify-center md:pt-20 lg:pt-36 items-start text-foreground z-20 overflow-hidden order-2 lg:order-1 ">
          <motion.ul layout className="space-y-4 w-full" role="tablist">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.li
                  key={service.id}
                  layout
                  className="space-y-4 border-b md:border-b-0 border-foreground/20 pb-4"
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
                      className={`text-left transition-all duration-500 ease-in-out flex-1 cursor-pointer ${isActive
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