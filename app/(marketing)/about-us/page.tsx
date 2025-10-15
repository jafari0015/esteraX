import Line from "@/components/Layout/line";
import LearnMore2 from "@/components/ui/learn-more-2";
import Image from "next/image";
import React from "react";
import {
  LuUserRoundSearch,
  LuAward,
  LuGraduationCap,
  LuLayers,
} from "react-icons/lu";

const AboutUs = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden px-4 md:px-0">
      <Image
        src="/gradient-background.svg"
        alt="Gradient Background Color"
        className="w-full h-[80vh] object-cover absolute inset-0 z-0"
      />

      <div className="relative pt-44 md:pt-72  md:pl-32 lg:pl-40">
        <h3 className="text-lg md:text-xl uppercase tracking-wide mb-4">
          About Us
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Enterprise AI since 2008
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-md">
          We have built enterprise AI for some of the world biggest names,
          including The Coca-Cola Company, PwC, and Tesco. We are one of a
          handful of companies that truly understand AI, and we are known as
          thought leaders in AI safety, ethics, and governance.
        </p>
      </div>

      <h1 className="text-2xl text-white absolute  md:-rotate-90 md:pl-0 md:top-[150vh]">
        {" "}
        Our Mission
      </h1>
      <section className="relative">
        <div className="hidden xl:flex absolute left-0 w-full px-6 md:px-0 h-28 top-10 z-0 bg-gradient-to-t from-[#140d25]/90 via-[#140d25]/80"></div>
        <div className="text-white grid md:grid-cols-2 md:pl-24  lg:pl-36 xl:pl-42 pt-28 md:pt-48 ">
          <div className="max-w-[350px] md:max-w-xs lg:max-w-sm xl:max-w-md ">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              We want to create a future where everyone is free to live beyond
              themselves
            </h1>
            <p className="mt-10 text-base lg:text-lg">
              We are purpose-driven and work with clients and partners to help
              solve some of the biggest challenges facing humanity. We’d love to
              optimise your resources to sustainably support human-driven
              innovation, today and tomorrow.
            </p>
          </div>
          <div className="max-w-[330px] md:max-w-xs lg:max-w-[400px]">
            <div className="md:hidden lg:flex mt-3 lg:mt-0">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="white"
                width={400}
              />
            </div>
            <div className="hidden md:flex lg:hidden mt-5">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="white"
                width={300}
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Today
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Free from inefficiency
            </h2>
            <p className="mt-10 text-base">
              Through AI products and services, we radically improve the
              efficiency of our clients, reducing costs, and improving customer
              and employee satisfaction.
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Free from ineffectiveness
            </h1>
            <p className="text-base mt-10">
              We’re reinventing how organisations operate, using innovative
              technologies, processes and structures to make organisations and
              employees more effective.
            </p>
          </div>

          <div className="w-[500px] xl:w-[600px] order-2 md:order-1">
            <video src="/about.mp4" autoPlay playsInline muted loop />
          </div>
          <div className="max-w-[330px] md:max-w-xs lg:max-w-[400px] mt-24 z-10 order-1 md:order-2">
            <div className="flex md:hidden lg:flex">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="white"
                width={400}
              />
            </div>
            <div className="hidden md:flex lg:hidden mt-5">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="white"
                width={300}
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Today
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Free from inefficiency
            </h2>
            <p className="mt-10 text-base">
              Through AI products and services, we radically improve the
              efficiency of our clients, reducing costs, and improving customer
              and employee satisfaction.
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Free from ineffectiveness
            </h1>
            <p className="text-base mt-10">
              We’re reinventing how organisations operate, using innovative
              technologies, processes and structures to make organisations and
              employees more effective.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className=" md:pl-24 lg:pl-32 xl:pl-52">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Our teams have deep expertise in AI and optimisation
          </h1>
          <p className="text-base xl:text-lg mt-8">
            We operate globally, with our decision-making decentralised – so our
            people can work on the projects most meaningful to them.
          </p>
        </div>
        <div>
          <Image src="/about-me.jpg.webp" alt="Person Stand" />
        </div>
        <Line direction={"horizontal"} color="black" thickness={1} />
      </section>

      <section className="min-h-screen bg-white -ml-6 -mr-6 md:ml-0 md:mr-0">
        <div className="hidden md:flex pl-18 lg:pl-25 ">
          <Line direction={"vertical"} thickness={1} color="black" />
        </div>
        <div className="pt-20 md:pt-40 xl:pt-60 pl-6 md:pl-35 xl:pl-48 max-w-xl lg:max-w-2xl xl:max-w-6xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-black font-medium">
            Our people have extensive experience at top-tier technology firms
            and leading academic institutions.
          </h1>
        </div>
        <div className="min-h-screen relative">
          <div className=" absolute md:-rotate-90 ml-5 md:-ml-28 -mt-72">
            <h2 className="text-xl font-medium tracking-widest text-black">
              OUR PEOPLE
            </h2>
          </div>

          <div className="md:pl-25 lg:pl-32 xl:px-38 px-10 mt-40 text-black mr-10">
            <div className="grid gap-1 xl:grid-cols-2 md:gap-24">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full ">
                    <Image
                      src="/person.webp"
                      alt="Dr. Daniel Hulme"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-4">
                    <h1 className="text-2xl font-semibold ">
                      Dr. Daniel Hulme,
                    </h1>
                    <p className="text-lg text-gray-700">CEO and founder</p>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-gray-500 leading-relaxed  max-w-xl">
                  <p>
                    Daniel has over two decades of applied AI experience,
                    researching and implementing AI solutions. A leading expert
                    in the field, he is also Chief AI Officer at{" "}
                    <span className="underline">WPP</span> and Computer Science
                    Entrepreneur-in-Residence at{" "}
                    <span className="underline">UCL</span>He holds a master and
                    a doctorate in AI from UCL.
                  </p>

                  <p>
                    EsterX co-founders include Dr Alastair Moore, an expert in
                    machine learning and innovation, and Professor Anthony
                    Finkelstein, the Chief Scientific Adviser for National
                    Security to the UK government.
                  </p>
                </div>
              </div>

              <div className="grid gap-16 sm:grid-cols-2">
                <div className="space-y-4">
                  <div className="border-t" />
                  <LuUserRoundSearch
                    className="h-8 w-8 text-foreground"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-3xl font-semibold">Expertise</h3>
                  <p className="text-base lg:text-lg leading-relaxed ">
                    We have 20+ PhDs/MScs with rare expertise in discrete
                    mathematics, operations research and optimisation, the
                    decision-making component of AI.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuAward className="h-8 w-8 " strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold ">Pedigree</h3>
                  <p className="text-base lg:text-lg leading-relaxed ">
                    Our people have experience at top-tier companies including
                    Google, IBM, Microsoft, and PwC. They are graduates of, and
                    some are professors at, leading academic institutions,
                    including UCL, and Singularity University.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuGraduationCap className="h-8 w-8 " strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold ">Experience</h3>
                  <p className="text-base lg:text-lg leading-relaxed ">
                    We have a higher standard of definition of expert, with
                    hundreds of collective years experience across the AI stack
                    and academia.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuLayers className="h-8 w-8 " strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold ">Full-stack</h3>
                  <p className="text-base lg:text-lg leading-relaxed ">
                    200+ knowledgeable professionals across data science,
                    optimisation, software engineering and operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-32 flex items-center xl:ml-[32rem] flex-col md:flex-row gap-16">
              <div className="relative w-52 h-52 md:w-36 md:h-36 lg:h-48 lg:w-48 xl:h-60 xl:w-60 flex-shrink-0 overflow-hidden rounded-full ">
                <Image
                  src="/person.webp"
                  alt="Dr. Daniel Hulme"
                  className="h-full w-full  object-cover"
                />
              </div>
              <div>
                <blockquote className="text-2xl lg:text-3xl xl:text-5xl font-normal leading-tight">
                  There never been a more exciting time to be at the forefront
                  of AI. Every industry is being transformed by the technology.
                </blockquote>
                <div className="mt-12 xl:mt-20">
                  <LearnMore2
                    bgColor="black"
                    textColor="white"
                    arrowBg="white"
                    arrowColor="black"
                    hoverBg="white"
                    hoverText="black"
                  >
                    Join Our Team
                  </LearnMore2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
