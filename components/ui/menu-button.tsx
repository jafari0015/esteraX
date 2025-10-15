import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
interface AnimatedHamburgerButtonProps {
  backgroundColor?: string;
  onClick?: () => void;
  isOpen: boolean;
}

const AnimatedHamburgerButton: React.FC<AnimatedHamburgerButtonProps> = ({
  backgroundColor,
  onClick,
  isOpen,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => {
          onClick?.();
        }}
        className="relative w-16 h-16 rounded-full cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[1.5px] w-7 md:h-[0.8px] md:w-10"
          style={{
            backgroundColor: backgroundColor || "white",
            y: "-50%",
            left: "50%",
            x: "-50%",
            top: "35%",
          }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[1.5px] w-7 md:h-[0.8px] md:w-10"
          style={{
            backgroundColor: backgroundColor || "white",
            left: "50%",
            x: "-50%",
            top: "50%",
            y: "-50%",
          }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[1.5px] w-7 md:h-[0.8px] md:w-10"
          style={{
            backgroundColor: backgroundColor || "white",
            x: "-50%",
            y: "35%",
            bottom: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
export default AnimatedHamburgerButton;
const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50%)",
    },
  },
};
