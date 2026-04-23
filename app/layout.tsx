import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "UstadLink | Enterprise AI Since 2008",
  description:
    "UstadLink is a creative software company turning ideas into powerful digital experiences.",
  keywords: ["UstadLink", "Software Company", "Digital Experiences", "Creative Solutions"],
  authors: [{ name: "UstadLink Team", url: "https://www.UstadLink.com" }],
  creator: "UstadLink",
  publisher: "UstadLink",
  metadataBase: new URL("https://www.UstadLink.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "UstadLink",
    description:
      "UstadLink is a creative software company turning ideas into powerful digital experiences.",
    url: "https://www.UstadLink.com",
    siteName: "UstadLink",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UstadLink - Creative Software Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UstadLink",
    description:
      "UstadLink is a creative software company turning ideas into powerful digital experiences.",
    creator: "@UstadLink",
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
