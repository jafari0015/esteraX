import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "Diba Tech | Web, Mobile & Software Development Agency",
  description:
    "Diba Tech is a digital agency building websites, mobile apps, custom software, hosting solutions, and reliable technology for growing businesses.",
  keywords: [
    "Diba Tech",
    "Web Development",
    "Mobile Development",
    "Software Development",
    "Digital Agency",
    "Hosting Solutions",
  ],
  authors: [{ name: "Diba Tech Team", url: "https://www.dibatech.com" }],
  creator: "Diba Tech",
  publisher: "Diba Tech",
  metadataBase: new URL("https://www.dibatech.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "Diba Tech",
    description:
      "Diba Tech builds web platforms, mobile apps, custom software, and complete digital solutions for modern businesses.",
    url: "https://www.dibatech.com",
    siteName: "Diba Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diba Tech - Web, Mobile and Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diba Tech",
    description:
      "Diba Tech builds web platforms, mobile apps, custom software, and complete digital solutions for modern businesses.",
    creator: "@DibaTech",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={afacad.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
