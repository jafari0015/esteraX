import type { Metadata } from "next";
import WorkComponents from "@/components/ui/ou-work";
import GridWorkSection, {
  ResourceItem,
} from "@/components/ui/work-grid-section";
import React from "react";
import Image from "next/image";
import resourcesData from "@/Data/resources";

export const metadata: Metadata = {
  title: "Our Work - Diba Tech | Web, Mobile & Software Projects",
  description:
    "Explore how Diba Tech plans, designs, builds, launches, and supports websites, mobile apps, custom software, hosting setups, and digital products.",
  keywords: [
    "Diba Tech Projects",
    "Web Development Portfolio",
    "Mobile App Projects",
    "Software Development Portfolio",
    "Custom Software",
    "Hosting Solutions",
    "Digital Agency Work",
  ],
  openGraph: {
    title: "Our Work - Diba Tech | Web, Mobile & Software Projects",
    description:
      "Explore Diba Tech projects across websites, mobile apps, custom software, hosting, and digital development.",
    url: "https://www.dibatech.com/our-work",
    siteName: "Diba Tech",
    images: [
      {
        url: "/bg-our-work.svg",
        width: 1200,
        height: 630,
        alt: "Diba Tech Our Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - Diba Tech | Web, Mobile & Software Projects",
    description:
      "Explore Diba Tech projects across websites, mobile apps, custom software, hosting, and digital development.",
    creator: "@DibaTech",
    images: ["/bg-our-work.svg"],
  },
};

const OurWork = () => {
  const resources: ResourceItem[] = resourcesData;
  return (
    <section>
      <section className="relative min-h-[70vh] text-foreground">
        <Image
          src="/bg-our-work.svg"
          width={100}
          height={100}
          alt="Gradient Background Color"
          className="w-full h-[40vh] xl:h-[80vh] object-cover absolute inset-0 z-0"
        />
        <div>
          <div className="relative flex md:flex-row flex-col justify-start gap-14 pl-6 xl:gap-36 pt-28 md:pt-72 md:pl-26 lg:pl-40">
            <div>
              <h3 className="text-lg md:text-2xl uppercase mb-4">Our Work</h3>
              <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold mb-6 max-w-3xl">
                We build digital products that help teams sell, operate, and grow.
              </h1>
            </div>
            <p className="text-lg md:text-sm xl:text-2xl font-thin xl:leading-relaxed leading-9 md:leading-8 mb-12 max-w-xs xl:max-w-lg xl:mr-0 xl:pt-0 lg:mr-32 mr-10 lg:pt-20">
              Every project starts with a clear goal: better customer
              experience, smoother operations, stronger online presence, or a
              product your team can rely on every day. <br /> <br />
              Diba Tech can support the full path from strategy and design to
              development, launch, hosting, maintenance, and future feature
              growth.
            </p>
          </div>
        </div>
      </section>
      <div>
        <WorkComponents
          imageSrc="/case-study-web-portal.svg"
          workItems={[
            {
              subTitle: "Web Development",
              title: "Business website and client portal",
              description:
                "Diba Tech builds responsive websites and practical portals that help businesses manage customers, content, and communication.",
              percentage: "01",
              subDescription: "Strategy, design, and web development",
            },
          ]}
        />
      </div>
      <div>
        <GridWorkSection
          resources={resources}
          containerClassName="lg:px-25 md:px-18"
        />
      </div>
    </section>
  );
};

export default OurWork;
