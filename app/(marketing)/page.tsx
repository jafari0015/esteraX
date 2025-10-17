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
        imageSrc="/about-us.webp"
        heading="Unique AI capability"
        paragraphs={[
          "We combine expertise in data science and optimisation in a way very few AI companies can.",
          "You’ll always have direct access to highly skilled technical specialists and subject matter experts – from initial scoping to ongoing support.",
          "And our flexible AI systems not only integrate with your existing setup, but learn, optimise and improve over time – driving increasingly valuable insights that give you a competitive advantage.",
        ]}
        buttonText="Learn More"
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
