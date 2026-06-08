import React from "react";
import DrawOutlineButton from "./draw-outline-button";
import Image from "next/image";
import Link from "next/link";

// Type for a single resource item
export type ResourceItem = {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
  link?: string;
};

// Props for the reusable GridWorkSection
type GridWorkSectionProps = {
  resources: ResourceItem[];
  containerClassName?: string; // optional extra classes for outer div
};

const GridWorkSection: React.FC<GridWorkSectionProps> = ({
  resources,
  containerClassName = "",
}) => {
  return (
    <div className={`bg-white text-secondary border-l ${containerClassName}`}>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex flex-col px-4 md:pl-10 w-full items-center justify-center border pt-20 relative"
          >
            <Link href={resource.link || "/blog"} className="block">
              <Image
                src={resource.imageUrl}
                width={400}
                height={400}
                alt={resource.title}
                className="rounded-full w-60 h-60 md:w-52 md:h-52 lg:w-68 lg:h-68 xl:w-80 xl:h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </Link>
            <div className="mt-10 text-center md:text-left">
              <span className="text-base pt-20 pb-5">{resource.date}</span>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 md:h-[150px]">
                {resource.title}
              </h1>
              <p className="text-lg lg:text-xl lg:pt-10 md:h-[200px]">
                {resource.description}
              </p>
            </div>
            <div className="self-start mt-10 mb-14">
              <Link href={resource.link || "/blog"}>
                <DrawOutlineButton strokeColor="#000000">
                  Read Blog
                </DrawOutlineButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridWorkSection;
