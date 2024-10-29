import { CodeSnippet } from "@/components/code-snippet";
import { VariantPage } from "@/components/variant-page";
import { Alert, Badge, Divider, Tab, Tabs, Typography } from "@jamsr-ui/react";
import { Metadata } from "next";
import { NpmIcon, PnpmIcon, YarnIcon } from "./assets/icons";

const title = "Installation";
const description = "How to install and setup Jamsr UI in your project.";

export const metadata: Metadata = {
  title: "Installation",
  description,
};

const items: { heading: string; content: React.ReactNode }[] = [
  {
    heading: "Install Packages",
    content: (
      <div className="flex flex-col gap-4">
        <Typography as="p">
          To Install JamsrUI, run one of the following commands in your
          terminal:
        </Typography>
        <Tabs variant="underlined" defaultValue="pnpm">
          <Tab startContent={<NpmIcon />} value="npm" heading="npm">
            <CodeSnippet>npm install @jamsr-ui/react framer-motion</CodeSnippet>
          </Tab>
          <Tab startContent={<YarnIcon />} value="yarn" heading="yarn">
            <CodeSnippet>yarn add @jamsr-ui/react framer-motion</CodeSnippet>
          </Tab>
          <Tab startContent={<PnpmIcon />} value="pnpm" heading="pnpm">
            <CodeSnippet>pnpm add @jamsr-ui/react framer-motion</CodeSnippet>
          </Tab>
        </Tabs>
      </div>
    ),
  },
  {
    heading: "Hoisted Dependencies Setup",
    content: (
      <div className="flex flex-col gap-4">
        <Alert variant="solid" severity="default">
          <div>
            <strong>Note:</strong> This step is only for those who use pnpm to
            install. If you install JamsrUI using other package managers, please
            skip this step.
          </div>
        </Alert>
        <Typography as="p">
          If you are using pnpm, you need to add the following line to your
          .npmrc file to hoist our packages to the root node_modules.
        </Typography>
        <CodeSnippet>public-hoist-pattern[]=*@jamsr-ui/*</CodeSnippet>
        <Typography as="p">
          After modifying the .npmrc file, you need to run pnpm install again to
          ensure that the dependencies are installed correctly
        </Typography>
      </div>
    ),
  },
  {
    heading: "Tailwind CSS Setup",
    content: (
      <div className="flex flex-col gap-4">
        <Typography as="p">
          JamsrUI is built on top of Tailwind CSS, so you need to install
          Tailwind CSS first. You can follow the official installation guide to
          install Tailwind CSS. Then you need to add the following code to your
          tailwind.config.js file:
        </Typography>
        <Alert variant="solid" severity="default">
          <div>
            <strong>Note:</strong> If you are using pnpm and monorepo
            architecture, please make sure you are pointing to the ROOT
            node_modules
          </div>
        </Alert>
        <CodeSnippet>
          {`// tailwind.config.js
const {withJamsrUI} = require("@jamsr-ui/react");

/** @type {import('tailwindcss').Config} */
module.exports = withJamsrUI({
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@jamsr-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
});`}
        </CodeSnippet>
      </div>
    ),
  },
  {
    heading: "Provider Setup",
    content: (
      <div className="flex flex-col gap-4">
        <Typography as="p">
          It is essential to add the JamsrUIProvider at the root of your
          application.
        </Typography>
        <CodeSnippet>
          {`import * as React from "react";

// 1. import \`JamsrUIProvider\` component
import {JamsrUIProvider} from "@jamsr-ui/react";

function App() {
  // 2. Wrap JamsrUIProvider at the root of your app
  return (
    <JamsrUIProvider>
      <YourApplication />
    </JamsrUIProvider>
  );
}`}
        </CodeSnippet>
      </div>
    ),
  },
];

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <Alert variant="solid" severity="default">
        Jamsr UI is only supported in Next.js
      </Alert>
      <div className="flex flex-col my-8 gap-8 relative">
        <Divider
          orientation="vertical"
          className="absolute h-full top-0 left-4 -z-1"
        />
        {items.map((item, idx) => {
          const { content, heading } = item;
          const count = idx + 1;
          return (
            <div key={count} className="flex flex-row gap-4">
              <div>
                <Badge
                  size="lg"
                  isRounded
                  className="z-1 text-sm font-extrabold"
                >
                  {count}
                </Badge>
              </div>
              <div className="flex grow flex-col gap-4">
                <Typography as="p" variant="h6">
                  {heading}
                </Typography>
                {content}
              </div>
            </div>
          );
        })}
      </div>
    </VariantPage>
  );
};

export default Page;
