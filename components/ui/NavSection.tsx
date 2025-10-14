"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const NavSection: React.FC<NavSectionProps> = ({
  title,
  items,
  hovered,
  setHovered,
  showLine = true,
  arrowSize = "w-5 h-5",
  darkStyle = false,
  className = "",
  onLinkClick,
}) => {
  return (
    <div className={`align-content-center ${className}`}>
      {title && (
        <h2 className=" text-3xl mt-10 md:mt-0 mb-5 md:mb-8 md:text-2xl lg:text-4xl ml-5 font-semibold">
          {title}
        </h2>
      )}

      {showLine && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        >
          <div
            className={`h-[1px] mb-5 md:mb-10 lg:w-72 w-96  md:w-50 ml-5 ${
              darkStyle ? "bg-black" : "bg-white"
            }`}
          />
        </motion.div>
      )}

      <ul className="space-y-2 fixed">
        {items.map((item, i) => {
          const isHovered = hovered === item.title;
          return (
            <motion.li
              key={item.title}
              className="cursor-pointer flex items-center "
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * i, duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center"
                animate={{ x: isHovered ? 30 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 22,
                  mass: 0.6,
                }}
              >
                <div className="flex items-center overflow-hidden min-w-[24px]">
                  <AnimatePresence mode="sync">
                    {isHovered && (
                      <motion.span
                        key="arrow"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 1, 0.5, 1],
                          opacity: { duration: 0.4, delay: 0.05 },
                        }}
                        className="inline-flex items-center"
                      >
                        <HiArrowRight className={arrowSize} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href={item.url}
                  className={``}
                  onClick={() => {
                    onLinkClick?.();
                  }}
                >
                  {item.title}
                </Link>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavSection;
