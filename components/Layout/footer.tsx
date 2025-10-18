"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  footerSections,
  socialLinks,
  addressSections,
  contacts,
} from "@/Data/footer-data";
import Line from "../Layout/line";
const AnimatedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="relative inline-block before:content-[''] before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-foreground before:transition-all before:duration-100 hover:before:w-full hover:before:left-0"
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
    className="relative inline-block before:content-[''] before:absolute before:right-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-foreground before:transition-all before:duration-100 hover:before:w-full hover:before:left-0"
  >
    {children}
  </a>
);


const Footer = () => {

  return (
    <section >
      <div className="hidden xl:flex lg:ml-25">
        <Line direction="vertical" thickness={1} color="white" zIndex={50} />
      </div>
      <motion.footer
        className="relative z-0 overflow-hidden pt-8 text-foreground md:pt-10 lg:pt-32 border-t px-6 -mb-24 md:-mb-14 lg:-mb-6
         md:pl-24 lg:pl-28 xl:pl-48 bg-gradient-to-b from-primary via-primary to-purple-950 ">
        <div className="relative z-50 w-full">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 max-w-7xl ">
            <div>
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
                    className={`space-y-2 ${section.title === "What we do"
                      ? "text-sm md:text-base text-foreground/80"
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

            <div>
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

            <div> {addressSections.map((address) => (
              <address key={address.title} className="not-italic">
                <h3 className="font-semibold text-xl md:text-4xl mb-3">
                  {address.title}
                </h3>
                <ul className="space-y-1 text-base md:text-base text-foreground/80">
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
            ))}</div>

            <div>
              {contacts.map((contact) => (
                <address key={contact.title} className="not-italic">
                  <h3 className="font-semibold text-xl md:text-4xl mb-3">
                    {contact.title}
                  </h3>
                  <ul className="space-y-1 text-base md:text-base text-foreground/80">
                    {contact.lines.map((line, idx) => (
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
        <div className="col-span-2 w-full  border-t border-foreground my-14"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-10 text-base md:text-lg space-y-2 mt-20 lg:mt-0">
          <p>
            <AnimatedLink href="/privacy">Privacy policy</AnimatedLink> |{" "}
            <AnimatedLink href="/cookies">Cookie policy</AnimatedLink>
          </p>
          <div>
            <p className="text-foreground/80 text-base">
              © 2008 - 2025 NPCcomplete Ltd (Trading as Satalia). All Rights
              Reserved.
            </p>
            <p className="text-foreground/80 text-base">
              Registered in England and Wales · Company No: 06759250
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
