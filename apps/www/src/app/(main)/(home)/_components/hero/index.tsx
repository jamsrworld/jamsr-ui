import { CodeBlock } from "@/components/code-block";
import { ArrowRightIcon } from "@/components/icons";
import { Button, Text } from "@jamsr-ui/react";
import Link from "next/link";
import { HeroFeatures } from "./hero-features";

export const HeroSection = () => {
  return (
    <section className="container relative mx-auto flex  flex-col  md:h-dvh md:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_180%_at_top,color-mix(in_srgb,var(--color-blue-500)_20%,transparent),_transparent,_transparent)] from-blue-500/20 via-transparent to-transparent" />
      <div className="relative flex flex-col items-center  gap-8 py-24 text-center">
        <Text
          as="h1"
          className="mb-6 max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          Build beautiful websites{" "}
          <Text
            as="span"
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text leading-tight text-transparent"
          >
            regardless of experience
          </Text>
        </Text>
        <Text as="p" variant="body2" className="max-w-prose text-balance">
          A professionally crafted React component library that helps you build
          modern web applications faster. Fully customizable, accessible, and
          production-ready.
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            as={Link}
            href="/introduction"
            size="lg"
            color="primary"
            radius="full"
            className="group"
            endContent={
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            }
          >
            Start Building
          </Button>
          <CodeBlock radius="full" language="shell" copyPosition="right">
            pnpm add @jamsr-ui/react motion
          </CodeBlock>
        </div>
        <HeroFeatures />
      </div>
    </section>
  );
};
