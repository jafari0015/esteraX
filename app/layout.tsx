import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacad = Afacad({
  subsets: ["latin"],
  variable: "--font-afacad",
});

export const metadata: Metadata = {
  title: "EsteraX | Enterprise AI Since 2008",
  description:
    "EsteraX is a creative software company turning ideas into powerful digital experiences.",
  keywords: ["EsteraX", "Software Company", "Digital Experiences", "Creative Solutions"],
  authors: [{ name: "EsteraX Team", url: "https://www.esteraX.com" }],
  creator: "EsteraX",
  publisher: "EsteraX",
  metadataBase: new URL("https://www.esteraX.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "EsteraX",
    description:
      "EsteraX is a creative software company turning ideas into powerful digital experiences.",
    url: "https://www.esteraX.com",
    siteName: "EsteraX",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EsteraX - Creative Software Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EsteraX",
    description:
      "EsteraX is a creative software company turning ideas into powerful digital experiences.",
    creator: "@EsteraX",
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
