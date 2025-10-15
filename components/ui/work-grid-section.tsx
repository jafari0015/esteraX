import React from "react";
import DrawOutlineButton from "./draw-outline-button";
import resources from "@/Data/resources";
import Image from "next/image";
const GridWorkSection = () => {
  return (
    <div className="bg-white text-black lg:px-25 border-l md:px-18">
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex flex-col px-4 md:pl-10 w-full items-center justify-center border pt-20 relative"
          >
            <Image
              src={resource.imageUrl}
              alt={resource.title}
              className="rounded-full w-60 h-60 md:w-52 md:h-52 lg:w-68 lg:h-68 xl:w-80 xl:h-80"
            />
            <div className="mt-10">
              <span className="text-base pt-20 pb-5">{resource.date}</span>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold mb-8 md:h-[150px]">
                {resource.title}
              </h1>
              <p className="text-lg lg:text-xl lg:pt-10  md:h-[200px]">
                {resource.description}
              </p>
            </div>
            <div className="self-start mt-10 mb-14">
              <DrawOutlineButton strokeColor="#000000">
                Learn More
              </DrawOutlineButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridWorkSection;
