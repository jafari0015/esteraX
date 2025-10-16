import { motion } from "motion/react";
import { FaConnectdevelop } from "react-icons/fa";
export default function Logo() {
  return (
    <div className="size-full flex items-center justify-center">
      <link
        href="https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center relative">
          <motion.div
            className="mr-0"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="relative p-1 "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <FaConnectdevelop
                  className="w-6 h-6 text-foreground "
                  strokeWidth={2}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.span
                className="text-foreground select-none text-4xl relative z-10"
                style={{
                  fontFamily: '"Afacad", sans-serif',
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                E
              </motion.span>
            </div>

            <span
              className="text-foreground tracking-tight select-none text-4xl"
              style={{
                fontFamily: '"Afacad", sans-serif',
                fontWeight: 600,
                letterSpacing: "-0.05em",
              }}
            >
              stera
            </span>

            <motion.div
              className="relative ml-2"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                </motion.div>

                <span
                  className="text-foreground select-none text-4xl relative z-10"
                  style={{
                    fontFamily: '"Afacad", sans-serif',
                    fontWeight: 700,
                    display: "inline-block",
                    letterSpacing: "0.05em",
                  }}
                >
                  X
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
