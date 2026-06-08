import { motion } from "motion/react";

export default function Logo() {
  return (
    <div className="size-full flex items-center justify-center">
      <motion.div
        className="text-foreground select-none text-3xl md:text-4xl font-bold"
        style={{
          fontFamily: '"Afacad", sans-serif',
          letterSpacing: "0",
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Diba <span className="font-semibold">Tech</span>
      </motion.div>
    </div>
  );
}
