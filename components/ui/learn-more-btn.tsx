"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  children,
  icon,
}) => {
  return (
    <motion.button
      className={`learnBtn mt-10 group flex items-center gap-3 ${className}`}
      whileHover="hover"
      onClick={onClick}
    >
      {icon && (
        <motion.div
          className="bg-white text-[#140d25] p-2 rounded-full"
          variants={{
            hover: {
              backgroundColor: "#140d25",
              color: "#ffffff",
              rotate: -10,
              scale: 0.9,
              transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          <motion.div
            className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8"
            initial={{ rotate: 0 }}
            variants={{
              hover: {
                rotate: -45,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              },
            }}
          >
            {icon}
          </motion.div>
        </motion.div>
      )}

      <motion.span
        className="text-white text-xl font-medium tracking-wide"
        variants={{
          hover: {
            x: 2,
            color: "#140d25",
            transition: {
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default Button;
