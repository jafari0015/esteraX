import React from "react";

const HeroSectionSecond = () => {
  return (
    <section className="flex md:flex-row flex-col gap-y-32 md:gap-y-0 items-center justify-around xl:gap-60  lg:gap-20 mt-60 pb-20 xl:pb-40 pr-10 md:pr-0 xl:px-24">
      <div className="md:max-w-[300px] lg:max-w-xs xl:max-w-2xl flex-shrink-0">
        <p className="md:text-base xl:text-lg">
          Everything starts with us understanding your goals. Only then do we
          design, develop, or optimize your digital solution – handpicking the
          right mix of web, mobile, and cloud technologies to make it work
          flawlessly.
        </p>

        <p className="md:text-base xl:text-lg mt-8 xl:mt-16">
          It’s how we’ve crafted seamless technology solutions for clients since
          2015 — long before modern apps dominated the market.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-20 flex-shrink-0">
        <img src="/logo-dfs.svg" alt="dfs" />
        <img src="/logo-ds-smith.svg" alt="ds-smith" />
        <img src="/logo-gigaclear.svg" alt="gigaclear" />
        <img src="/logo-odeon.svg" alt="odeon" />
        <img src="/logo-techdata.svg" alt="techdata" />
        <img src="/logo-tesco.svg" alt="tesco" />
        <img src="/The_Coca-Cola_Company_logo-new.svg" alt="coca-cola" />
      </div>
    </section>
  );
};

export default HeroSectionSecond;
