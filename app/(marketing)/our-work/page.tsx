import type { Metadata } from "next";
import WorkComponents from "@/components/ui/ou-work";
import GridWorkSection, {
  ResourceItem,
} from "@/components/ui/work-grid-section";
import React from "react";
import Image from "next/image";
import resourcesData from "@/Data/resources";

export const metadata: Metadata = {
  title: "Our Work - UstadLink | AI Solutions & Case Studies",
  description: "Discover how UstadLink has helped clients save 11 million delivery miles per year, deliver 200x ROI, and improve efficiency. Explore our AI solutions and case studies including DFS and Woolworths Australia.",
  keywords: [
    "UstadLink Case Studies",
    "AI Solutions Portfolio",
    "Delivery Optimization",
    "Route Optimization",
    "AI ROI",
    "DFS Case Study",
    "Woolworths Australia",
    "Last Mile Delivery",
    "AI Efficiency",
    "Business Transformation",
    "AI Success Stories",
    "Enterprise AI Solutions"
  ],
  openGraph: {
    title: "Our Work - UstadLink | AI Solutions & Case Studies",
    description: "Discover how UstadLink has helped clients save 11 million delivery miles per year, deliver 200x ROI, and improve efficiency. Explore our AI solutions and case studies including DFS and Woolworths Australia.",
    url: "https://www.UstadLink.com/our-work",
    siteName: "UstadLink",
    images: [
      {
        url: "/bg-our-work.svg",
        width: 1200,
        height: 630,
        alt: "UstadLink Our Work - AI Solutions Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work - UstadLink | AI Solutions & Case Studies",
    description: "Discover how UstadLink has helped clients save 11 million delivery miles per year, deliver 200x ROI, and improve efficiency. Explore our AI solutions and case studies including DFS and Woolworths Australia.",
    creator: "@UstadLink",
    images: ["/bg-our-work.svg"],
  },
};
const OurWork = () => {
  const resources: ResourceItem[] = resourcesData;
  return (
    <section>
      {" "}
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
              <h3 className="text-lg md:text-2xl uppercase tracking-wide mb-4">
                Our Work
              </h3>
              <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wider mb-6 max-w-3xl">
                We could save you 11 million delivery miles per year.
              </h1>
            </div>
            <p className="text-lg md:text-sm xl:text-2xl font-thin xl:leading-relaxed leading-9 md:leading-8 mb-12 max-w-xs xl:max-w-lg xl:mr-0 xl:pt-0 lg:mr-32 mr-10 lg:pt-20">
              Or deliver a 200x ROI. Or improve efficiency equivalent to adding
              140 people – like we’ve done for other clients. <br /> <br /> But
              it’s not just about you. It’s also about your customers. <br />{" "}
              <br />
              Because when we create solutions that improve their lives,
              everyone wins. It’s how we helped DFS earn an 8% uplift in net
              promoter score through last-mile delivery transformation. And it’s
              how we helped Woolworths Australia increase delivery capacity by
              30% to get fresh groceries to their customers quicker than ever.
            </p>
          </div>
        </div>
      </section>
      <div>
        <WorkComponents
          imageSrc="/person.webp"
          workItems={[
            {
              subTitle: "AI for marketing",
              title: "Last mile route optimisation for DFS",
              description:
                "Satalia helped DFS transform their last-mile delivery offering with last-mile delivery technology.",
              percentage: "18%",
              subDescription: "Total Saving across the workstream",
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
