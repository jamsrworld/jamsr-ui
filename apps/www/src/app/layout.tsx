import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/github.css";
import "../styles/globals.css";
import { AppProvider } from "./providers/app";
import { SchemaDts } from "./providers/SchemaDts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | JamsrUI",
    default: "JamsrUI",
  },
  description:
    "A professionally crafted React component library that helps you build modern web applications faster. Fully customizable, accessible, and production-ready.",
  applicationName: "JamsrUI",
  category: "technology",
  publisher: "jamsrworld",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Next.js UI components",
    "UI components library",
    "React UI components",
    "JamsrUI",
    "JavaScript UI library",
  ],
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-base`}>
        <AppProvider>{children}</AppProvider>
        <SchemaDts />
      </body>
      <GoogleAnalytics gaId="G-8JVSXK3JQL" />
    </html>
  );
}
