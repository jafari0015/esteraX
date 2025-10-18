import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, Variant } from "framer-motion";
import Image from "next/image";
import LearnMore2 from "../ui/learn-more-2";
import Line from "../Layout/line";
import services from "../../Data/services";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);
  const lastWheelTimeRef = useRef<number>(0);

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power1.out", duration: 0.5 });


  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalScroll = window.innerHeight * (services.length - 1);

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: false,
        onEnter: () => setIsInView(true),
        onLeave: () => setIsInView(false),
        onEnterBack: () => setIsInView(true),
        onLeaveBack: () => setIsInView(false),
      });
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx && ctx.revert && ctx.revert();
    };
  }, []);



  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mq.matches);
    const handleChange = (e: MediaQueryListEvent) =>
      setIsSmallScreen(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const trySetIndex = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;
    if (nextIndex < 0 || nextIndex >= services.length) return;
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setActiveIndex(nextIndex);

    window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, 900);
  };

  useEffect(() => {
    const allowPageScroll = !isInView;

    const onWheel = (e: WheelEvent) => {
      if (allowPageScroll) return;

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 800) return;
      lastWheelTimeRef.current = now;

      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      const direction = Math.sign(e.deltaY);

      // Prevent scrolling beyond the first and last items
      const nextIndex = activeIndex + direction;
      if (nextIndex < 0 || nextIndex >= services.length) {
        e.preventDefault();
        return;
      }

      trySetIndex(nextIndex);
      e.preventDefault();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (allowPageScroll) return;
      if (e.touches && e.touches.length) {
        touchStartYRef.current = e.touches[0].clientY;
      }
    };
    const onTouchMove = () => {
      if (allowPageScroll) return;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (allowPageScroll) return;
      if (touchStartYRef.current === null) return;

      const touchEndY =
        e.changedTouches && e.changedTouches[0]
          ? e.changedTouches[0].clientY
          : null;
      if (touchEndY === null) return;

      const dy = touchStartYRef.current - touchEndY;
      const threshold = 20;
      if (Math.abs(dy) > threshold) {
        const direction = Math.sign(dy);
        const nextIndex = activeIndex + direction;

        if (nextIndex >= 0 && nextIndex < services.length) {
          trySetIndex(nextIndex);
        }
      }
      touchStartYRef.current = null;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (allowPageScroll) return;

      const tag =
        (document.activeElement && document.activeElement.tagName) || "";
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        (document.activeElement &&
          (document.activeElement as HTMLElement).isContentEditable)
      )
        return;

      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        const nextIndex = activeIndex + 1;
        if (nextIndex < services.length) {
          trySetIndex(nextIndex);
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        const nextIndex = activeIndex - 1;
        if (nextIndex >= 0) {
          trySetIndex(nextIndex);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isInView, activeIndex]);

  useEffect(() => {
    if (isInView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isInView]);

  const textVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
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

  const adjustedImageVariants: Variants = isSmallScreen
    ? {
      hidden: { opacity: 0, x: "100%" },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
      },
      exit: {
        opacity: 0,
        x: "-100%",
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    }
    : imageVariants;

  return (
    <>
      <div
        ref={containerRef}
        className={`relative w-full min-h-[120vh] md:min-h-screen flex ${isSmallScreen ? "flex-col" : "flex-row"
          } bg-gradient-to-r from-blue-700 to-[#190d39] pt-16 pb-20`}
      >
        <h1 className="text-white uppercase absolute md:top-24 md:-left-10 left-5 top-10 text-xl md:-rotate-90">
          Key areas of focus
        </h1>

        <div className="relative w-full flex justify-center items-center z-0 order-1 lg:order-2 mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={adjustedImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full h-[40vh] md:h-[30vh] lg:h[60vh] xl:h-[70vh] max-w-xs md:max-w-sm lg:mt-20 xl:mt-0 lg:max-w-xl xl:max-w-3xl"
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
            {services.map((service, index) => (
              <motion.li
                key={service.id}
                layout
                className="space-y-4 border-b md:border-b-0 border-white/20 pb-4"
                role="presentation"
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <motion.span
                    className="sm:hidden text-3xl mr-3 order-1"
                    animate={{ rotate: index === activeIndex ? 45 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    +
                  </motion.span>

                  <button
                    role="tab"
                    aria-selected={index === activeIndex}
                    className={`text-left transition-all duration-500 ease-in-out flex-1 cursor-pointer${index === activeIndex
                      ? "text-3xl md:text-5xl xl:text-7xl font-semibold opacity-100"
                      : "text-2xl md:text-xl lg:text-2xl font-semibold opacity-50 hover:opacity-70"
                      }`}
                  >
                    {service.title}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {index === activeIndex && (
                    <motion.div
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
            ))}
          </motion.ul>
        </div>
      </div>

      <Line direction="horizontal" color="white" thickness={1} />
    </>
  );
};
export default HorizontalAccordion;
