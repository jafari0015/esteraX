"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";
import Line from "@/components/Layout/line";
import Header from "@/components/Layout/header";
import Footer from "@/components/block/footer-section";
import ContactSection from "@/components/block/contact-section";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const verticalVariant = {
    hidden: { height: 0 },
    visible: { height: "100%" },
  };
  const isContactPage = pathname === "/contact";
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        lerp: 0.05,
        orientation: "vertical",
        gestureOrientation: "vertical",
        touchMultiplier: 1.2,
        infinite: false,
      }}
    >
      <div className="flex flex-col relative min-h-screen h-full overflow-hidden bg-[#140d25]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={verticalVariant}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="hidden md:block absolute top-0 lg:left-[100px] md:left-[70px]"
        >
          <Line
            direction="vertical"
            length="100%"
            thickness={1}
            color="white"
          />
        </motion.div>

        <Header />
        <main>{children}</main>
        <div className="relative">
          {!isContactPage && <ContactSection />}
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
};

export default Layout;
