"use client";
import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, easeInOut } from "framer-motion";
import NavSection from "../ui/NavSection";
import VerticalLine from "../ui/VerticalLine";
import AnimatedHamburgerButton from "../ui/menu-button";
import Link from "next/link";
import Logo from "@/public/logo/logo";
const services = [
  { title: "Web Development", url: "/web-development" },
  { title: "App Development", url: "/app-development" },
  { title: "Hosting & Solutions", url: "/hosting-solutions" },
  { title: "Other Development Services", url: "/other-services" },
];

const pages = [
  { title: "About", url: "/about-us" },
  { title: "Our Work", url: "/our-work" },
  { title: "Blog", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1.5,
    y: 0,
    transition: {
      duration: 1,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: { duration: 1, ease: easeInOut, when: "afterChildren" },
  },
};

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [darkStyle, setDarkStyle] = useState(false);

  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#project-section, #faq-section, #testmonail-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDarkStyle(true);
          } else {
            setDarkStyle(false);
          }
        });
      },
      { threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return (
    <motion.header
      className={`fixed w-full top-0 left-0 z-40 backdrop-blur-md transition-all duration-500
        ${darkStyle ? "bg-foreground/20 " : "bg-primary/20"}
      `}
      initial={{ y: -100 }}
      animate={{ y: showHeader ? 0 : -102 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center md:py-[5px] lg:py-[16px] md:px-5 px-2  relative z-50">

        <div className="lg:ml-32 md:ml-16">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "backInOut" }}
        >
          <AnimatedHamburgerButton
            backgroundColor={darkStyle ? "black" : "white"}
            onClick={() => setMenuOpen((prev) => !prev)}
            isOpen={menuOpen}
          />
        </motion.div>

        <VerticalLine
          height={""}
          top={0}
          color={darkStyle ? "black" : "white"}
        />
      </div>

      {/* Border Bottom Header  */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[1px] origin-left w-full transition-colors duration-500
            ${darkStyle ? "bg-black" : "bg-foreground"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 -z-10 md:pl-26 min-h-screen xl:min-h-[70vh] justify-start items-center md:pt-20 backdrop-blur-sm overflow-hidden"
            style={{
              backgroundColor: darkStyle
                ? "rgba(255, 255, 255, 0.95)"
                : "rgba(24, 13, 53, 0.95)",
            }}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={`flex md:flex-row flex-col items-start md:items-center  xl:justify-between xl:mx-20 mt-20 ${darkStyle ? "text-black" : "text-foreground"
                }`}
            >
              <div className="md:text-center ml-5 md:ml-0  lg:ml-10">
                <Link href="/" className="text-4xl md:text-4xl xl:text-6xl mt-4 font-bold mb-2">
                  EsteraX
                </Link>
                <p
                  className={`text-xl md:text-xs lg:text-base ${darkStyle ? "text-gray-700" : "text-gray-300"
                    }`}
                >
                  We build innovative digital solutions, <br /> from web apps to
                  AI-driven platforms.
                </p>
              </div>

              <div className="flex flex-col gap-y-40 md:flex-row xl:gap-48 md:ml-10 md:gap-10 lg:ml-20 xl:mr-80">
                <NavSection
                  title="What We Do"
                  items={services}
                  hovered={hovered}
                  setHovered={setHovered}
                  showLine={true}
                  arrowSize="w-5 h-5"
                  darkStyle={false}
                  className={`text-lg md:text-base lg:text-xl md:leading-6 lg:leading-10 ${darkStyle ? "text-black" : "text-foreground"
                    }`}
                  onLinkClick={handleLinkClick}
                />
                <NavSection
                  items={pages}
                  hovered={hovered}
                  setHovered={setHovered}
                  showLine={false}
                  arrowSize="w-6 h-6"
                  textColor={darkStyle ? "text-black" : "text-foreground"}
                  darkStyle={false}
                  className={`text-2xl lg:text-4xl md:text-2xl md:leading-10 lg:leading-14 font-semibold ${darkStyle ? "text-black" : "text-foreground"
                    }`}
                  onLinkClick={handleLinkClick}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
