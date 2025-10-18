"use client"

import { useState, useEffect, useMemo } from "react"

export default function CookiePolicyPage() {
    const [activeSection, setActiveSection] = useState("what-are-cookies")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const sections = useMemo(() => [
        { id: "what-are-cookies", label: "What are cookies" },
        { id: "types-of-cookies", label: "Types of cookies we use" },
        { id: "essential-cookies", label: "Essential cookies" },
        { id: "analytics-cookies", label: "Analytics cookies" },
        { id: "marketing-cookies", label: "Marketing cookies" },
        { id: "how-we-use", label: "How we use cookies" },
        { id: "third-party", label: "Third-party cookies" },
        { id: "managing-cookies", label: "Managing cookies" },
    ], [])

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((section) => document.getElementById(section.id))

            const scrollPosition = window.scrollY + 200

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const section = sectionElements[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [sections])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.offsetTop - offset
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            })
        }
        setMobileMenuOpen(false)
    }

    return (
        <div className="min-h-screen bg-primary pt-18 sm:pt-20 xl:pt-26 md:pl-18 xl:pl-26">
            {/* Header with curved wave */}
            <header className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-foreground text-foreground overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Cookie Policy</h1>
                    <p className="text-indigo-100 text-lg">Effective May 1, 2018</p>
                </div>

                {/* Curved wave SVG */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                        <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="#140d25" />
                    </svg>
                </div>
            </header>

            {/* Main content with sidebar */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar navigation */}
                    <aside
                        className={`lg:w-80 ${mobileMenuOpen ? "fixed inset-0 bg-foreground z-40 p-6 overflow-y-auto" : "hidden lg:block"
                            }`}
                    >
                        <nav className="lg:sticky lg:top-24 space-y-2">
                            {mobileMenuOpen && (
                                <div className="mb-8 pb-4 border-b border-gray-200">
                                    <h2 className="text-2xl font-bold text-gray-900">Cookie Policy</h2>
                                </div>
                            )}
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-4 py-3 cursor-pointer  rounded-lg text-lg transition-all ${activeSection === section.id
                                        ? "bg-foreground/80 text-primary font-semibold border-l-4 border-indigo-600"
                                        : "text-foreground font-semibold hover:bg-foreground/90 hover:text-primary"
                                        }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main content */}
                    <main className="flex-1 max-w-3xl">
                        {/* What are cookies */}
                        <section id="what-are-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">What are cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                                    website. They are widely used to make websites work more efficiently and provide information to the
                                    owners of the site.
                                </p>
                                <p>
                                    Cookies allow us to recognize your device and store some information about your preferences or past
                                    actions. This helps us provide you with a better experience and allows us to improve our services.
                                </p>
                            </div>
                        </section>

                        {/* Types of cookies */}
                        <section id="types-of-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Types of cookies we use</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    We use different types of cookies to run our website and services. Some cookies are essential for the
                                    operation of our site, while others help us improve your experience or allow us to track how you use
                                    our services.
                                </p>
                                <p>Below, we describe the main categories of cookies we use and explain their purpose.</p>
                            </div>
                        </section>

                        {/* Essential cookies */}
                        <section id="essential-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Essential cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    Essential cookies are necessary for our website to function properly. These cookies enable core
                                    functionality such as security, network management, and accessibility. You cannot opt-out of these
                                    cookies.
                                </p>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">Examples of essential cookies:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>Session cookies that keep you logged in</li>
                                        <li>Security cookies that protect against fraud</li>
                                        <li>Load balancing cookies that distribute traffic</li>
                                        <li>Cookie consent preferences</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Analytics cookies */}
                        <section id="analytics-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Analytics cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    Analytics cookies help us understand how visitors interact with our website by collecting and
                                    reporting information anonymously. This data helps us improve our website and services.
                                </p>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">We use analytics cookies to:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>Track the number of visitors to our site</li>
                                        <li>Understand how visitors navigate our site</li>
                                        <li>Identify which pages are most popular</li>
                                        <li>Measure the effectiveness of our content</li>
                                        <li>Improve user experience based on usage patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Marketing cookies */}
                        <section id="marketing-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Marketing cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    Marketing cookies are used to track visitors across websites. The intention is to display ads that are
                                    relevant and engaging for individual users and thereby more valuable for publishers and third-party
                                    advertisers.
                                </p>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">Marketing cookies help us:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>Display personalized advertisements</li>
                                        <li>Measure the effectiveness of advertising campaigns</li>
                                        <li>Limit the number of times you see an advertisement</li>
                                        <li>Remember your preferences for future visits</li>
                                        <li>Share information with advertising partners</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* How we use cookies */}
                        <section id="how-we-use" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">How we use cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    We use cookies for various purposes to enhance your experience on our website. Here are the main ways
                                    we utilize cookies:
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white border border-indigo-100 p-6 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Authentication and Security</h3>
                                        <p className="text-gray-700">
                                            We use cookies to verify your identity and maintain your login session securely. This ensures that
                                            only you can access your account and personal information.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-indigo-100 p-6 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Preferences and Settings</h3>
                                        <p className="text-gray-700">
                                            Cookies help us remember your preferences, such as language selection, display settings, and other
                                            customization options you&apos;ve chosen.
                                        </p>
                                    </div>
                                    <div className="bg-white border border-indigo-100 p-6 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Performance and Analytics</h3>
                                        <p className="text-gray-700">
                                            We analyze how you use our website to identify areas for improvement and optimize your experience.
                                            This includes tracking page load times and identifying technical issues.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Third-party cookies */}
                        <section id="third-party" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Third-party cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics
                                    of our website and deliver advertisements on and through our website.
                                </p>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">Third-party services we use:</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li>
                                            <strong>Google Analytics:</strong> To analyze website traffic and user behavior
                                        </li>
                                        <li>
                                            <strong>Social Media Platforms:</strong> To enable social sharing and display social media content
                                        </li>
                                        <li>
                                            <strong>Advertising Networks:</strong> To deliver targeted advertisements based on your interests
                                        </li>
                                        <li>
                                            <strong>Content Delivery Networks:</strong> To improve website performance and load times
                                        </li>
                                    </ul>
                                </div>
                                <p>
                                    Please note that these third-party services have their own privacy policies and cookie policies. We
                                    recommend reviewing their policies to understand how they use cookies.
                                </p>
                            </div>
                        </section>

                        {/* Managing cookies */}
                        <section id="managing-cookies" className="mb-16 scroll-mt-24">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Managing cookies</h2>
                            <div className="prose prose-lg text-foreground space-y-4">
                                <p>
                                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie
                                    preferences by clicking on the appropriate opt-out links provided in our cookie consent banner.
                                </p>
                                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                                    <h3 className="text-xl font-semibold text-indigo-900 mb-3">Browser settings</h3>
                                    <p className="text-gray-700 mb-3">
                                        Most web browsers allow you to control cookies through their settings preferences. However, if you
                                        limit the ability of websites to set cookies, you may worsen your overall user experience.
                                    </p>
                                    <p className="text-gray-700">
                                        Here are links to cookie management instructions for popular browsers:
                                    </p>
                                    <ul className="space-y-2 text-gray-700 mt-3">
                                        <li>Google Chrome</li>
                                        <li>Mozilla Firefox</li>
                                        <li>Safari (Desktop)</li>
                                        <li>Safari (Mobile)</li>
                                        <li>Microsoft Edge</li>
                                        <li>Opera</li>
                                    </ul>
                                </div>
                                <p>
                                    If you use a different browser, please refer to your browser&apos;s help documentation for information on
                                    how to manage cookies.
                                </p>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}
