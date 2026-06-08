import type { Metadata } from "next";
import Line from "@/components/Layout/line";
import LearnMore2 from "@/components/ui/learn-more-2";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LuUserRoundSearch,
  LuAward,
  LuGraduationCap,
  LuLayers,
} from "react-icons/lu";

export const metadata: Metadata = {
  title: "About Us - Diba Tech | Web, Mobile & Software Development Agency",
  description:
    "Meet Mahdi Jafari, full stack engineer and founder behind Diba Tech. 3+ years building websites, mobile apps, and custom software with React, Next.js, TypeScript, and Flutter.",
  keywords: [
    "About Diba Tech",
    "Digital Agency",
    "Web Development Agency",
    "Mobile Development Agency",
    "Software Development Team",
    "Custom Software",
    "Hosting Solutions",
    "UI UX Design",
  ],
  openGraph: {
    title: "About Us - Diba Tech | Web, Mobile & Software Development Agency",
    description:
      "Mahdi Jafari builds web, mobile, and software products end to end — from UI and UX to APIs, databases, and cloud deployment.",
    url: "https://www.dibatech.com/about-us",
    siteName: "Diba Tech",
    images: [
      {
        url: "/ceo.png",
        width: 1200,
        height: 630,
        alt: "Mahdi Jafari - Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Diba Tech | Web, Mobile & Software Development Agency",
    description:
      "Mahdi Jafari builds web, mobile, and software products end to end — from UI and UX to APIs, databases, and cloud deployment.",
    creator: "@DibaTech",
    images: ["/ceo.png"],
  },
};

const AboutUs = () => {
  return (
    <section className="relative min-h-screen text-foreground overflow-hidden px-4 md:px-0">
      <Image
        src="/gradient-background.svg"
        alt="Gradient Background Color"
        width={100}
        height={100}
        className="w-full h-[80vh] object-cover absolute inset-0 z-0"
      />

      <div className="relative pt-44 md:pt-72 md:pl-32 lg:pl-40">
        <h3 className="text-lg md:text-xl uppercase mb-4">About Us</h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
        We are building ambitious digital products
        </h1>
        <p className="text-lg leading-relaxed mb-12 max-w-md">
          We build websites, mobile applications, custom software, and cloud-backed
          solutions with React, Next.js, TypeScript, Node.js, and Flutter. Based
          in Kabul, Afghanistan.
        </p>
      </div>

      <h1 className="text-2xl text-foreground absolute md:-rotate-90 md:pl-0 md:top-[150vh]">
        Our Mission
      </h1>
      <section className="relative">
        <div className="hidden xl:flex absolute left-0 w-full px-6 md:px-0 mt-8 h-28 top-10 z-0 bg-gradient-to-t from-primary/90 via-primary/80"></div>
        <div className="text-foreground grid md:grid-cols-2 md:pl-24 lg:pl-36 xl:pl-42 pt-28 md:pt-48">
          <div className="max-w-[350px] md:max-w-xs lg:max-w-sm xl:max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
              We turn business ideas into useful, reliable digital systems.
            </h1>
            <p className="mt-10 text-base lg:text-lg">
              My mission is to help founders, teams, and organizations move from
              rough ideas to complete products with clear planning, clean design,
              strong development, and practical support — the same process I use
              on projects like Shahre Ketab, Raga, and Toefl Prep.
            </p>
          </div>
          <div className="max-w-[330px] md:max-w-xs lg:max-w-[400px]">
            <div className="md:hidden lg:flex mt-3 lg:mt-0">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="foreground"
                width={400}
              />
            </div>
            <div className="hidden md:flex lg:hidden mt-5">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="foreground"
                width={300}
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Today
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Web experiences that perform
            </h2>
            <p className="mt-10 text-base">
              We create websites and web platforms that load quickly, look
              professional, and help customers take action.
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Mobile products people can trust
            </h1>
            <p className="text-base mt-10">
              We design mobile app flows around real users, clear navigation,
              and dependable features that support business goals.
            </p>
          </div>

          <div className="w-full max-w-[500px] xl:max-w-[600px] order-2 md:order-1">
            <video src="/about.mp4" autoPlay playsInline muted loop />
          </div>
          <div className="max-w-[330px] md:max-w-xs lg:max-w-[400px] mt-24 z-10 order-1 md:order-2">
            <div className="flex md:hidden lg:flex">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="foreground"
                width={400}
              />
            </div>
            <div className="hidden md:flex lg:hidden mt-5">
              <Line
                direction={"horizontal"}
                thickness={1}
                color="foreground"
                width={300}
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Tomorrow
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Software that fits your workflow
            </h2>
            <p className="mt-10 text-base">
              We build custom tools, dashboards, portals, and automations that
              reduce manual work and bring important operations into one place.
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-16">
              Support that continues after launch
            </h1>
            <p className="text-base mt-10">
              We help with hosting, updates, bug fixes, performance, security,
              and new features as your business grows.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:pl-24 lg:pl-32 xl:pl-52">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Design, engineering, product thinking, and hands-on delivery in one
            workflow.
          </h1>
          <p className="text-base xl:text-lg mt-8">
            I work closely with clients so every project has a clear purpose, a
            practical plan, and a product experience people can actually use —
            with Lighthouse scores above 90, scalable APIs, and maintainable code.
          </p>
        </div>
        <div>
          <Image
            width={800}
            height={800}
            src="/about-me.jpg.webp"
            alt="Mahdi Jafari - Full Stack Engineer"
            className="w-full h-full z-0 object-cover"
          />
        </div>
        <Line direction={"horizontal"} color="black" thickness={1} />
      </section>

      <section className="min-h-screen bg-foreground -ml-6 -mr-6 md:ml-0 md:mr-0">
        <div className="hidden md:flex pl-18 lg:pl-25">
          <Line direction={"vertical"} thickness={1} color="black" />
        </div>
        <div className="pt-20 md:pt-40 xl:pt-60 pl-6 md:pl-35 xl:pl-48 max-w-xl lg:max-w-2xl xl:max-w-6xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-secondary font-medium">
            Mahdi Jafari brings 3+ years of hands-on experience across modern
            web, mobile, software, and cloud development.
          </h1>
        </div>
        <div className="min-h-screen relative">
          <div className="absolute md:-rotate-90 ml-5 md:-ml-28 -mt-80">
            <h2 className="text-xl font-medium text-secondary">FOUNDER</h2>
          </div>

          <div className="md:pl-25 lg:pl-32 xl:px-38 px-10 mt-40 text-secondary mr-10">
            <div className="grid gap-1 xl:grid-cols-2 md:gap-24">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/ceo.png"
                      width={160}
                      height={160}
                      alt="Mahdi Jafari"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="pt-4">
                    <h1 className="text-2xl font-semibold">Mahdi Jafari</h1>
                    <p className="text-lg text-gray-700">
                      Founder & Full Stack Engineer
                    </p>
                    <p className="text-base text-gray-600 mt-2">
                      Kabul, Afghanistan · jafarimahdi850@gmail.com
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-gray-500 leading-relaxed max-w-xl">
                  <p>
                    I am a full stack engineer with 3+ years of experience
                    building web and mobile applications. On the frontend I work
                    with React, Next.js, and TypeScript. On the backend I build
                    APIs with Node.js and Express. For mobile I use Flutter and
                    React Native — creating fast, scalable, and accessible
                    experiences end to end.
                  </p>

                  <p>
                    I plan, design, build, and maintain digital products with a
                    practical process shaped around client goals, user journeys,
                    and the technical foundation needed for long-term growth.
                    View my portfolio at{" "}
                    <a
                      href="https://mahdi.codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 text-gray-700"
                    >
                      mahdi.codes
                    </a>{" "}
                    or download my resume below.
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
                  <p className="text-base lg:text-lg leading-relaxed">
                    React, Next.js, TypeScript, Flutter, React Native, Node.js,
                    Express, TailwindCSS, Redux Toolkit, Strapi, PostgreSQL, and
                    Firebase.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuAward className="h-8 w-8" strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold">Process</h3>
                  <p className="text-base lg:text-lg leading-relaxed">
                    Clear discovery, practical planning, focused design, clean
                    development, launch support, and ongoing improvements.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuGraduationCap className="h-8 w-8" strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold">Experience</h3>
                  <p className="text-base lg:text-lg leading-relaxed">
                    3+ years delivering client websites, cross-platform mobile
                    apps, CMS-backed platforms, and production software with
                    measurable business impact.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border-t" />
                  <LuLayers className="h-8 w-8" strokeWidth={1.5} />
                  <h3 className="text-3xl font-semibold">Full-stack</h3>
                  <p className="text-base lg:text-lg leading-relaxed">
                    Frontend, backend, mobile, database, CMS, hosting, cloud
                    deployment, and integrations in one coordinated workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-32 flex items-center xl:ml-[32rem] flex-col md:flex-row gap-16">
              <div className="relative w-52 h-52 md:w-36 md:h-36 lg:h-48 lg:w-48 xl:h-60 xl:w-60 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/zaman.png"
                  alt="Mahdi Jafari"
                  width={240}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <blockquote className="text-2xl lg:text-3xl xl:text-5xl font-normal leading-tight">
                  &ldquo;The best way to predict the future is to build it.&rdquo;
                </blockquote>
                <p className="mt-6 text-lg text-gray-600">Mohammad Zamna Sharifi</p>
                <div className="mt-12 xl:mt-20 mb-10 flex flex-col sm:flex-row flex-wrap gap-4">
                  <Link href="/contact">
                    <LearnMore2
                      bgColor="secondary"
                      textColor="white"
                      arrowBg="white"
                      arrowColor="secondary"
                      hoverBg="white"
                      hoverText="secondary"
                    >
                      Start a Project
                    </LearnMore2>
                  </Link>
                  {/* <a
                    href="/mahdi-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LearnMore2
                      bgColor="white"
                      textColor="secondary"
                      arrowBg="secondary"
                      arrowColor="white"
                      hoverBg="secondary"
                      hoverText="white"
                    >
                      Download Resume
                    </LearnMore2>
                  </a>
                  <a
                    href="https://mahdi.codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LearnMore2
                      bgColor="transparent"
                      textColor="secondary"
                      arrowBg="secondary"
                      arrowColor="white"
                      hoverBg="secondary"
                      hoverText="white"
                      className="border border-secondary"
                    >
                      mahdi.codes
                    </LearnMore2>
                  </a> */}
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
