"use client";
import { motion } from "framer-motion";

interface VerticalLineProps {
  height: number | string;
  top?: number;
  right?: number;
  color?: string;
}

const VerticalLine: React.FC<VerticalLineProps> = ({
  height,
  top = 0,
  right = 0,
  color = "white",
}) => (
  <motion.div
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
    style={{
      position: "absolute",
      top,
      right,
      transformOrigin: "bottom",
    }}
  >
    <div
      className="w-[1px] lg:h-[102px] md:h-[80px] h-[70px] lg:right[200px] md:right-[100px] absolute right-[70px]"
      style={{ height, backgroundColor: color }}
    />
  </motion.div>
);

export default VerticalLine;
