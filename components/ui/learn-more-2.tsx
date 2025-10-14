"use client";
import { motion } from "framer-motion";
import { TfiArrowRight } from "react-icons/tfi";
import React from "react";

const LearnMore2: React.FC<ButtonProps> = ({
  children,
  className = "",
  bgColor = "#ffffff",
  textColor = "#140d25",
  arrowColor = "#140d25",
  arrowBg = "transparent",
  hoverBg = "#140d25",
  hoverText = "#ffffff",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "text-sm px-3 py-1",
    md: "text-lg px-4 py-2",
    lg: "text-2xl px-6 py-3",
  };

  return (
    <motion.button
      className={`
        rounded-full 
        duration-500 
        hover:scale-105 
        transition-all 
        flex 
        items-center 
        justify-between 
        gap-2 
        cursor-pointer 
        group 
        ${sizeClasses[size]} 
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      whileHover="hover"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <span>{children}</span>

      <motion.div
        variants={{
          hover: {
            backgroundColor: hoverBg,
            color: hoverText,
            rotate: -45,
            transition: { duration: 0.4, ease: "easeInOut" },
          },
        }}
        className="p-2 rounded-full"
        style={{
          backgroundColor: arrowBg,
          color: arrowColor,
        }}
      >
        <TfiArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
};

export default LearnMore2;
