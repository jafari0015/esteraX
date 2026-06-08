"use client";

import AboutUs from "@/components/block/about-us";
import ProjectSection from "@/components/block/case-studies";
import aboutUsSectionData from "@/Data/about-us-data";
import FAQSection from "@/components/block/faq-section";
import HeroSection from "@/components/block/hero-section";
import HorizontalAccordion from "@/components/block/services-section";
import Testmonails from "@/components/block/testmonail-section";
import React, { useRef } from "react";

const Home = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const testmonailRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex-1 min-h-screen">
      <HeroSection />
      <AboutUs {...aboutUsSectionData} />
      <HorizontalAccordion />
      <div id="project-section" ref={projectRef}>
        <ProjectSection />
      </div>
      <div id="faq-section" ref={faqRef}>
        <FAQSection />
      </div>
      <div id="testmonail-section" ref={testmonailRef}>
        <Testmonails />
      </div>
    </div>
  );
};

export default Home;
