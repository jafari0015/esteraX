"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  footerSections,
  socialLinks,
  addressSections,
} from "@/Data/footer-data";

const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative inline-block before:content-[''] before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-100 hover:before:w-full hover:before:left-0"
  >
    {children}
  </Link>
);

const AnimatedA = ({
  href,
  children,
  target,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) => (
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    className="relative inline-block before:content-[''] before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:transition-all before:duration-100 hover:before:w-full hover:before:left-0"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <motion.footer className="relative overflow-hidden min-h-screen text-white md:pt-10 lg:pt-32 border-t px-6 pb-20 md:pl-24 lg:pl-28 xl:pl-48 bg-gradient-to-b from-[#140d25] via-[#140d25] to-purple-950">
      <div className="relative z-10 w-full mx-auto">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between ">
          <div className="w-full flex flex-col md:flex-row  md:col-span-2 mt-10 lg:*:mt-0">
            {footerSections.map((section) => (
              <nav
                key={section.title}
                aria-label={section.title}
                className="w-full"
              >
                <h3 className="font-semibold text-xl md:text-4xl mb-4">
                  {section.title}
                </h3>
                <ul
                  className={`space-y-2 ${
                    section.title === "What we do"
                      ? "text-sm md:text-base text-gray-300"
                      : "text-xl md:text-2xl"
                  }`}
                >
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <AnimatedLink href={link.href}>{link.label}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-20 w-full md:col-span-5 mt-20 lg:mt-0 ">
            <div className="order-2 md:order-1">
              <h3 className="font-semibold text-xl md:text-4xl mb-4">Follow</h3>
              <ul className="space-y-2 text-base md:text-lg">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <AnimatedA href={social.href} target="_blank">
                      {social.label}
                    </AnimatedA>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full order-1">
              {addressSections.slice(0, 2).map((address) => (
                <address key={address.title} className="not-italic">
                  <h3 className="font-semibold text-xl md:text-4xl mb-3">
                    {address.title}
                  </h3>
                  <ul className="space-y-1 text-base md:text-base text-gray-300">
                    {address.lines.map((line, idx) => (
                      <li key={idx}>
                        {line.href ? (
                          <AnimatedA href={line.href}>{line.text}</AnimatedA>
                        ) : (
                          line.text
                        )}
                      </li>
                    ))}
                  </ul>
                </address>
              ))}

              <div className="col-span-2 w-full max-w-xl border-t border-white my-6"></div>

              {addressSections.slice(2).map((address) => (
                <address key={address.title} className="not-italic">
                  <h3 className="font-semibold text-xl md:text-4xl mb-3">
                    {address.title}
                  </h3>
                  <ul className="space-y-1 text-base md:text-base text-gray-300">
                    {address.lines.map((line, idx) => (
                      <li key={idx}>
                        {line.href ? (
                          <AnimatedA href={line.href}>{line.text}</AnimatedA>
                        ) : (
                          line.text
                        )}
                      </li>
                    ))}
                  </ul>
                </address>
              ))}
            </div>
          </div>
        </div>

        <div className="text-base md:text-lg mb-4 space-y-2 mt-20 lg:mt-0">
          <p>
            <AnimatedLink href="/privacy">Privacy policy</AnimatedLink> |{" "}
            <AnimatedLink href="/cookies">Cookie policy</AnimatedLink>
          </p>
          <p className="text-gray-300 text-base">
            © 2008 - 2025 NPCcomplete Ltd (Trading as Satalia). All Rights
            Reserved.
          </p>
          <p className="text-gray-300 text-base">
            Registered in England and Wales · Company No: 06759250
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
