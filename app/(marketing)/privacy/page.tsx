"use client"

import { useState, useEffect } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicyPage() {
    const [activeSection, setActiveSection] = useState("types-of-information")

    const sections = [
        { id: "types-of-information", label: "Types of information we collect online" },
        { id: "information-automatically", label: "Information that may be collected automatically" },
        { id: "how-we-use", label: "How we use your information" },
        { id: "information-we-share", label: "Information we share" },
        { id: "children-privacy", label: "Children privacy" },
        { id: "privacy-choices", label: "Your privacy choices" },
        { id: "data-security", label: "Data security" },
        { id: "third-party", label: "Third party sites and social media plug-ins" },
    ]
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 120; // adjust this depending on your sticky header height
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setActiveSection(id);
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200

            for (const section of sections) {
                const element = document.getElementById(section.id)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-primary pt-18 sm:pt-20 xl:pt-26 md:pl-18 xl:pl-26">

            <header className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-purple-600 to-purple-700  pb-24 pt-16">
                <div className="container relative z-10 mx-auto px-6 text-center">
                    <h1 className="mb-3 text-4xl font-bold text-foreground md:text-5xl">Privacy Policy</h1>
                    <p className="text-sm text-foreground/80">Effective May 1, 2018</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full"
                        preserveAspectRatio="none"
                    >
                        <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="#140d25" />
                    </svg>
                </div>
            </header>

            <div className="container mx-auto px-6 py-16">
                <div className="flex gap-12 items-start">
                    <aside className="hidden w-64 shrink-0 lg:block">
                        <div className="sticky top-24">
                            <ScrollArea className="max-h-[80vh] rounded-xl border border-white/10">
                                <nav className="space-y-1 p-2">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`block w-full rounded-lg px-4 py-3 text-left text-lg cursor-pointer transition-all ${activeSection === section.id
                                                ? "bg-purple-900 font-semibold text-foreground"
                                                : "font-medium text-foreground hover:bg-purple-900/20 hover:text-foreground transition-all duration-500"
                                                }`}
                                        >
                                            {section.label}
                                        </button>
                                    ))}
                                </nav>
                            </ScrollArea>
                        </div>
                    </aside>

                    <main className="flex-1">
                        {/* Types of information section */}
                        <section id="types-of-information" className="mb-16 scroll-mt-32">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Types of information we collect online</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    The types of Personal Data that we may collect while you use the Underdog Site are described in this
                                    section and include both information that you provide to us and information that we collect
                                    automatically when you use the *** Site.
                                </p>
                                <p className="leading-relaxed">
                                    For purposes of this Privacy Policy, "Personal Data" means information that identifies you or that
                                    could reasonably be used to identify you. Examples of Personal Data include name, address, telephone
                                    number, and email address.
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-bold text-foreground">Information You Provide</h3>
                                <p className="leading-relaxed text-foreground">
                                    You generally do not have to register for a service or program to receive much of our content.
                                    However, some of our content is available only to registered or identified users and will require you
                                    to set up a profile or provide specific information about yourself in order to provide you the
                                    service.
                                </p>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-bold text-foreground">
                                    Personal Data You Provide When Visiting *** Sites
                                </h3>
                                <p className="mb-4 leading-relaxed text-foreground">
                                    *** collects Personal Data that you provide on *** Sites, for example, when purchasing a service, to
                                    receive marketing products and information, contact *** customer service, or respond to ***
                                    questionnaires or surveys. This could include:
                                </p>
                                <ul className="ml-6 space-y-2 text-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Contact information such as your name, address, phone number, or email address</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Registration information such as your username and password</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            Employment, education and other background information when you inquire about employment with us
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            Payment information (such as banking information, payment card number, expiration date, delivery
                                            address, and billing address)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            Content you may provide (for example, when you complete our Online Contact Form or submit other
                                            information)
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-bold text-foreground">
                                    Personal Data You Share During Other Interactions with ***
                                </h3>
                                <p className="leading-relaxed text-foreground">
                                    We may collect Personal Data that you provide when you interact with us regarding our products, if you
                                    communicate with us or request information from *** you may be prompted to provide us with contact
                                    information or as well as any Personal Data that is relevant to your request.
                                </p>
                            </div>
                        </section>

                        {/* Information automatically section */}
                        <section id="information-automatically" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">
                                Information that may be collected automatically
                            </h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    When you use our Sites or interact with our emails, we may automatically collect certain information
                                    using technologies such as cookies, web beacons, and web server logs. This information may include
                                    your Internet Protocol (IP) address, browser type, Internet Service Provider (ISP), referring/exit
                                    pages, operating system, date/time stamp, and clickstream data.
                                </p>
                                <p className="leading-relaxed">
                                    We use this information to analyze trends, administer the site, track users' movements around the
                                    site, and gather demographic information about our user base as a whole. We may also use this
                                    information to improve our Sites and services, personalize your experience, and deliver content that
                                    is relevant to your interests.
                                </p>
                            </div>
                        </section>

                        {/* How we use section */}
                        <section id="how-we-use" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">How we use your information</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    We use the Personal Data we collect for various purposes, including to provide and improve our
                                    services, communicate with you, and comply with legal obligations. Specifically, we may use your
                                    Personal Data to:
                                </p>
                                <ul className="ml-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Provide, operate, and maintain our website and services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Improve, personalize, and expand our website and services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Understand and analyze how you use our website and services</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Develop new products, services, features, and functionality</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            Communicate with you, either directly or through one of our partners, for customer service,
                                            updates, and marketing purposes
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Process your transactions and manage your orders</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Find and prevent fraud</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Information we share section */}
                        <section id="information-we-share" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Information we share</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    We may share your Personal Data with third parties in the following circumstances:
                                </p>
                                <ul className="ml-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            With service providers who perform services on our behalf, such as payment processing, data
                                            analysis, email delivery, hosting services, and customer service
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>With our business partners to offer you certain products, services, or promotions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            To comply with legal obligations, respond to legal requests, or protect our rights and interests
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            In connection with a business transaction, such as a merger, acquisition, or sale of assets
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Children privacy section */}
                        <section id="children-privacy" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Children privacy</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    Our services are not directed to children under the age of 13, and we do not knowingly collect
                                    Personal Data from children under 13. If we learn that we have collected Personal Data from a child
                                    under 13, we will take steps to delete such information as soon as possible.
                                </p>
                                <p className="leading-relaxed">
                                    If you are a parent or guardian and believe that your child has provided us with Personal Data, please
                                    contact us using the information provided in the "Contact details" section below.
                                </p>
                            </div>
                        </section>

                        {/* Privacy choices section */}
                        <section id="privacy-choices" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Your privacy choices</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">You have certain rights and choices regarding your Personal Data:</p>
                                <ul className="ml-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            <strong>Access and Update:</strong> You may access and update certain Personal Data by logging
                                            into your account
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            <strong>Marketing Communications:</strong> You may opt out of receiving marketing emails by
                                            following the unsubscribe instructions in those emails
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            <strong>Cookies:</strong> You can control cookies through your browser settings
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>
                                            <strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature that lets you tell
                                            websites that you do not want to have your online activities tracked
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Data security section */}
                        <section id="data-security" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Data security</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your Personal Data against
                                    unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
                                </p>
                                <ul className="ml-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Encryption of data in transit and at rest</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Regular security assessments and audits</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Access controls and authentication mechanisms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 mt-1.5 size-1.5 shrink-0 rounded-full bg-foregtext-foreground" />
                                        <span>Employee training on data protection and security</span>
                                    </li>
                                </ul>
                                <p className="leading-relaxed">
                                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                                    strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its
                                    absolute security.
                                </p>
                            </div>
                        </section>

                        {/* Third party section */}
                        <section id="third-party" className="mb-16 scroll-mt-8">
                            <h2 className="mb-6 text-3xl font-bold text-foreground">Third party sites and social media plug-ins</h2>
                            <div className="space-y-4 text-foreground">
                                <p className="leading-relaxed">
                                    Our website may contain links to third-party websites and services. We are not responsible for the
                                    privacy practices or content of these third-party sites. We encourage you to review the privacy
                                    policies of any third-party sites you visit.
                                </p>
                                <p className="leading-relaxed">
                                    Our website may also include social media features, such as the Facebook "Like" button and widgets.
                                    These features may collect your IP address, which page you are visiting on our site, and may set a
                                    cookie to enable the feature to function properly. Social media features and widgets are either hosted
                                    by a third party or hosted directly on our website. Your interactions with these features are governed
                                    by the privacy policy of the company providing them.
                                </p>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}
