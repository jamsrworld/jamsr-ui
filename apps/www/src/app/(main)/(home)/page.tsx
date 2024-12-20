import { type Metadata } from "next";
import { Hero } from "./_components/hero";

export const metadata: Metadata = {
  title: {
    absolute: "JamsrUI - A Next.js UI Components Library for Developers",
  },
};

const Page = () => {
  return (
    <div className="relative flex h-[calc(100dvh-4rem)] w-screen flex-col items-center gap-12 overflow-hidden">
      <Hero />
    </div>
  );
};

export default Page;
