import React from "react";

const capabilities = [
  "Web Development",
  "Mobile Apps",
  "Custom Software",
  "UI/UX Design",
  "Cloud Hosting",
  "Maintenance",
];

const HeroSectionSecond = () => {
  return (
    <section className="flex md:flex-row flex-col gap-y-32 md:gap-y-0 items-center justify-around xl:gap-60 lg:gap-20 mt-60 pb-20 xl:pb-40 pr-10 md:pr-0 xl:px-24">
      <div className="md:max-w-[300px] lg:max-w-xs xl:max-w-2xl flex-shrink-0">
        <p className="md:text-base xl:text-lg">
          Everything starts with understanding your goals. Then we design,
          develop, and refine the right mix of web, mobile, software, and cloud
          technology to make your digital product work smoothly.
        </p>

        <p className="md:text-base xl:text-lg mt-8 xl:mt-16">
          Diba Tech works like a focused agency partner: clear strategy, clean
          design, strong engineering, and practical support after launch.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 flex-shrink-0 w-full md:w-auto">
        {capabilities.map((capability) => (
          <div
            key={capability}
            className="border border-foreground/60 px-4 py-5 text-center text-base md:text-sm xl:text-lg uppercase"
          >
            {capability}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSectionSecond;
