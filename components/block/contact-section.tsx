import React from "react";
import Button from "../ui/learn-more-btn";
import Line from "../Layout/line";
import { TfiArrowRight } from "react-icons/tfi";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="relative">
      <div className="hidden xl:flex lg:ml-25">
        <Line direction="vertical" thickness={1} color="white" zIndex={50} mx-auto />
      </div>

      <section className=" z-10 flex flex-col md:flex-row justify-between sticky top-0 items-center w-full min-h-[70vh] xl:min-h-screen py-10">
        <div className="flex-1 flex flex-col justify-center px-6 md:pl-30 xl:pl-52 mt-10 md:mt-0 md:text-left order-2 md:order-1">
          <h1 className="text-5xl md:text-5xl xl:text-7xl text-foreground leading-tight">
            Tell us what digital product your business needs next.
          </h1>
          <div>
            <Link href="/contact">
              <Button icon={<TfiArrowRight />} className="mt-14 text-3xl">
                <span className="text-2xl">Let&apos;s Talk</span>
              </Button></Link>
          </div>
        </div>
        <div className="flex-1 z-20 flex justify-end ml-22 sm:ml-0 items-center order-1 md:order-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 620 730"
          >
            <defs>
              <pattern
                id="pattern-a"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                viewBox="0 0 1001 1178"
              >
                <image
                  href="/footer-new-1.jpg.webp"
                  width="1000"
                  height="1200"
                />
              </pattern>
            </defs>

            <rect width="1200" height="600" fill="#140d25" />

            <path
              id="footer-1"
              d="M-278.172,481.673A100.124,100.124,0,0,1-178.111,381.486,100.124,100.124,0,0,1-78.051,481.673,100.124,100.124,0,0,1-178.111,581.86,100.124,100.124,0,0,1-278.172,481.673Zm-200.828,0a45.511,45.511,0,0,1,45.482-45.54,45.511,45.511,0,0,1,45.482,45.54,45.511,45.511,0,0,1-45.482,45.54A45.51,45.51,0,0,1-479,481.673ZM-81.769,252.846a100.124,100.124,0,0,1-96.342,73.032A100.124,100.124,0,0,1-278.172,225.691,100.124,100.124,0,0,1-178.111,125.5a100.124,100.124,0,0,1,96.376,73.159A162.157,162.157,0,0,1,4.444,81.344,132.887,132.887,0,0,1-56-30.14a132.987,132.987,0,0,1,71.581-118H138.419q1.3.678,2.581,1.383V374.857a160.538,160.538,0,0,1-63.5,13C-2.528,387.86-68.961,329.471-81.769,252.846ZM-223.594-30.291A45.511,45.511,0,0,1-178.112-75.83a45.511,45.511,0,0,1,45.482,45.539,45.511,45.511,0,0,1-45.482,45.539A45.511,45.511,0,0,1-223.594-30.291Z"
              transform="translate(479 148.14)"
              fill="url(#pattern-a)"
            ></path>
          </svg>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
