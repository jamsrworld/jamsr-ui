import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/github.css";
import { AppProvider } from "./providers/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Jamsr UI",
    default: "Jamsr UI",
  },
  description:
    "A set of UI beautiful and customizable components created with tailwindcss and react.",
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
      </body>
    </html>
  );
}
