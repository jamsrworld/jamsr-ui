import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { VariantPage } from "@/components/docs/variant-page";
import { GithubDarkIcon } from "@/components/icons";
import {
  JAMSR_UI_REACT_TEMPLATE_GITHUB_URL,
  TAILWIND_VITE_URL,
  VITE_WEB_URL,
} from "@/config";
import {
  Card,
  CardContent,
  Chip,
  Divider,
  Link,
  Tab,
  Tabs,
  Text,
} from "@jamsr-ui/react";
import { type Metadata } from "next";
import NextLink from "next/link";
import { NpmIcon, PnpmIcon, YarnIcon } from "../assets/icons";

const title = "Vite Installation";
const description = "Install and Configure JamsrUI in your Vite project.";

export const metadata: Metadata = {
  title,
  description,
};

const items: { heading: string; content: React.ReactNode }[] = [
  {
    heading: "Install Vite",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          Start by creating a new React project using{" "}
          <Link target="_blank" href={VITE_WEB_URL}>
            Vite
          </Link>
        </Text>
      </div>
    ),
  },
  {
    heading: "Add Tailwind CSS and its configuration",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          Install{" "}
          <Link target="_blank" href={TAILWIND_VITE_URL}>
            Tailwind CSS
          </Link>{" "}
          and its peer dependencies, then generate your{" "}
          <Code>tailwind.config.js</Code> and <Code>postcss.config.js</Code>
          files.
        </Text>
      </div>
    ),
  },
  {
    heading: "Install Packages",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          Use your preferred package manager to install JamsrUI:
        </Text>
        <Tabs variant="underlined" defaultValue="pnpm">
          <Tab startContent={<PnpmIcon />} value="pnpm" heading="pnpm">
            <CodeBlock>pnpm add @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
          <Tab startContent={<NpmIcon />} value="npm" heading="npm">
            <CodeBlock>npm install @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
          <Tab startContent={<YarnIcon />} value="yarn" heading="yarn">
            <CodeBlock>yarn add @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
        </Tabs>
      </div>
    ),
  },
  {
    heading: "Configure Hoisted Dependencies (pnpm users only)",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          If you're using <Code>pnpm</Code>, ensure that JamsrUI packages are
          hoisted to the root <Code> node_modules</Code>
        </Text>
        <div>
          <ul className="flex list-disc flex-col gap-4">
            <li className="space-y-4">
              <div>
                Create <Code>.npmrc</Code> file at the root directory of your
                project:
              </div>
              <CodeBlock>public-hoist-pattern[]=*@jamsr-ui/*</CodeBlock>
            </li>
            <li className="space-y-4">
              <div>
                Delete the existing <Code> node_modules</Code> directory and
                reinstall dependencies:
              </div>
              <CodeBlock>pnpm install</CodeBlock>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    heading: "Edit tailwind.config.js file",
    content: (
      <div className="flex flex-col gap-4">
        <CodeBlock>
          {`// tailwind.config.ts
import { withJamsrUI } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config = withJamsrUI({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Ensure it points to the ROOT node_modules
    "./node_modules/@jamsr-ui/*/dist/*.js",
  ],
}) satisfies Config;
export default config;

`}
        </CodeBlock>
      </div>
    ),
  },
  {
    heading: "Wrap Your Application with UIProvider",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          To enable JamsrUI components, wrap your application with the{" "}
          <Code>UIProvider</Code>.
        </Text>
        <CodeBlock>
          {`// app/layout.tsx
import { UIProvider } from "@jamsr-ui/react";
          
function App() {
  return (
    <html lang="en">
      <body>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}`}
        </CodeBlock>
      </div>
    ),
  },
  {
    heading: " Enjoy and Explore JamsrUI Components",
    content: (
      <div className="flex flex-col gap-4">
        <Text as="p">
          You're all set! Start using JamsrUI components in your project. Here's
          an example of implementing a button component:
        </Text>
        <CodeBlock>
          {`import { Button } from "@jamsr-ui/react";

export const ButtonExample = () => {
  return (
    <div className="flex gap-4">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  );
};

`}
        </CodeBlock>
      </div>
    ),
  },
];

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <Card
        isBordered
        radius="2xl"
        as={NextLink}
        href={JAMSR_UI_REACT_TEMPLATE_GITHUB_URL}
        target="_blank"
      >
        <CardContent>
          <Text as="p" variant="body1">
            Kickstart with our Vite Starter 🚀
          </Text>
          <Text as="p" className="text-foreground-tertiary">
            Everything is setup to use JamsrUI
          </Text>
          <GithubDarkIcon className="absolute -right-2 top-0 size-32 rotate-45" />
        </CardContent>
      </Card>

      <Divider>OR</Divider>
      <div className="relative my-8 flex flex-col gap-8">
        <Divider
          orientation="vertical"
          className="absolute left-4 top-0 h-full"
        />
        {items.map((item, idx) => {
          const { content, heading } = item;
          const count = idx + 1;
          return (
            <div key={count} className="flex flex-row gap-4">
              <div>
                <Chip size="lg" className="text-sm font-extrabold" isSquare>
                  {count}
                </Chip>
              </div>
              <div className="flex grow flex-col  gap-4 pt-1.5">
                <Text as="p" variant="h6">
                  {heading}
                </Text>
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
