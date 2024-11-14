import { CodeBlock } from "@/components/code-block";
import { Button, Typography } from "@jamsr-ui/react";
import { type Metadata } from "next";
import Link from "next/link";
import { BgGradients } from "./bg-gradients";
import { LanguagesUsed } from "./languages-used";

export const metadata: Metadata = {
  title: {
    absolute: "JamsrUI - A Next.js UI Components Library for Developers",
  },
};

const Page = () => {
  return (
    <div className="relative flex h-[calc(100dvh-4rem)] w-screen flex-col items-center justify-center gap-12 overflow-hidden py-24">
      <BgGradients />
      <div className="flex max-w-screen-xl flex-col items-center gap-8 text-center">
        <Typography
          as="h1"
          variant="body7"
          className="text-balance font-semibold"
          gradient="foreground"
        >
          Boost & Build your world class websites with JamsrUI
        </Typography>
        <Typography as="p" variant="body2" className="text-balance">
          Leverage an open-source component library and Optimize your time and
          focus on what truly matters—creating remarkable websites that engage
          and captivate your audience.
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            as={Link}
            href="/guides/installation"
            size="lg"
            color="primary"
          >
            Start Building
          </Button>
          <CodeBlock language="shell" copyPosition="right">
            pnpm add @jamsr-ui/react framer-motion
          </CodeBlock>
        </div>
        <LanguagesUsed />
      </div>
    </div>
  );
};

export default Page;
