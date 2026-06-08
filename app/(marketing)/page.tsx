"use client";

import AboutUs from "@/components/block/about-us";
import ProjectSection from "@/components/block/case-studies";
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
      <AboutUs
        title="ABOUT US"
        imageSrc="/ceo.png"
        heading="Built by Mahdi Jafari — full stack engineer for web, mobile, and software"
        paragraphs={[
          "Mahdi Jafari is a full stack engineer with 3+ years of experience building web and mobile products with React, Next.js, TypeScript, Node.js, Express, and Flutter.",
          "Through Diba Tech, you work directly with the engineer behind the product — from UI and UX to APIs, databases, launch, and long-term support.",
          "Explore more work and background at mahdi.codes, or download the resume to see projects, skills, and experience in detail.",
        ]}
        buttonText="Learn More"
        buttonHref="/about-us"
      />
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
