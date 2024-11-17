import { Code } from "@/components/code";
import { CodeBlock } from "@/components/code-block";
import { VariantPage } from "@/components/docs/variant-page";
import { JAMSR_UI_TEMPLATE_GITHUB_URL, TAILWIND_WEB_URL } from "@/config";
import {
  Alert,
  Badge,
  Divider,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@jamsr-ui/react";
import { type Metadata } from "next";
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
            <CodeBlock>npm install @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
          <Tab startContent={<YarnIcon />} value="yarn" heading="yarn">
            <CodeBlock>yarn add @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
          <Tab startContent={<PnpmIcon />} value="pnpm" heading="pnpm">
            <CodeBlock>pnpm add @jamsr-ui/react framer-motion</CodeBlock>
          </Tab>
        </Tabs>
      </div>
    ),
  },
  {
    heading: "Hoisted Dependencies Setup",
    content: (
      <div className="flex flex-col gap-4">
        <Alert variant="solid" status="default">
          <div>
            <strong>Note:</strong> This step is only for those who are using
            pnpm to install.
          </div>
        </Alert>
        <Typography as="p">
          If you are using pnpm, you need to add the following line to your
          <Code>.npmrc</Code> file to hoist our packages to the root
          node_modules.
        </Typography>
        <CodeBlock>public-hoist-pattern[]=*@jamsr-ui/*</CodeBlock>
        <Typography as="p">
          After modifying the <Code>.npmrc</Code> file, you need to delete the
          previous node_modules and reinstall again to ensure that the
          dependencies are installed correctly
        </Typography>
      </div>
    ),
  },
  {
    heading: "Tailwind CSS Setup",
    content: (
      <div className="flex flex-col gap-4">
        <Typography as="p">
          JamsrUI is built on top of{" "}
          <Link target="_blank" href={TAILWIND_WEB_URL}>
            Tailwind CSS
          </Link>
          , so you need to install{" "}
          <Link target="_blank" href={TAILWIND_WEB_URL}>
            Tailwind CSS
          </Link>{" "}
          first. You can follow the official installation guide to install
          Tailwind CSS. Then you need to add the following code to your
          tailwind.config.js file:
        </Typography>
        <Alert variant="solid" status="default">
          <div>
            <strong>Note:</strong> If you are using pnpm and monorepo
            architecture, please make sure you are pointing to the ROOT
            node_modules
          </div>
        </Alert>
        <CodeBlock>
          {`// tailwind.config.ts
import { withJamsrUI } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config = withJamsrUI({
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@jamsr-ui/*/dist/*.js",
  ],
  ...
});
export default config;

`}
        </CodeBlock>
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
        <CodeBlock>
          {`import { UIProvider } from "@jamsr-ui/react";
          
function App() {
  return (
    <UIProvider>
      <YourApplication />
    </UIProvider>
  );
}`}
        </CodeBlock>
      </div>
    ),
  },
];

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <Alert variant="outlined" status="danger">
        JamsrUI is currently in development and it is not stable.
      </Alert>
      <Alert variant="solid" status="default">
        JamsrUI is only supported in Next.js
      </Alert>

      <Typography as="p" variant="body1">
        Get started with{" "}
        <Link href={JAMSR_UI_TEMPLATE_GITHUB_URL} target="_blank">
          JamsrUI Next.js template
        </Link>{" "}
      </Typography>

      <Divider>OR</Divider>
      <div className="relative my-8 flex flex-col gap-8">
        <Divider
          orientation="vertical"
          className="absolute left-4 top-0 -z-1 h-full"
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
