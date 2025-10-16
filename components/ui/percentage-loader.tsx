"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  animate,
  AnimatePresence,
} from "framer-motion";

const PercentageLoader: React.FC<LoaderProps> = ({
  duration = 3,
  className,
}) => {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const motionPercent = useMotionValue(0);

  useEffect(() => {
    const controls = animate(motionPercent, 100, {
      duration,
      ease: "easeInOut",
      onUpdate: (latest) => setPercent(Number(latest.toFixed(0))),
      onComplete: () => {
        setTimeout(() => setVisible(false), 500);
      },
    });

    return () => controls.stop();
  }, [duration, motionPercent]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 1, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={className}
        >
          <motion.span
            key={percent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="border-t-[1px] border-foreground"
          >
            {percent}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PercentageLoader;
