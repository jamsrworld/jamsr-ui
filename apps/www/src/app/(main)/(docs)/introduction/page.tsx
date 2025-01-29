import { VariantPage } from "@/components/docs/variant-page";
import { Text } from "@jamsr-ui/react";

import { type Route, type Metadata } from "next";

const title = "Introduction";
const description =
  "JamsrUI is designed to help developers build modern, fast, and visually appealing web applications with ease.";

export const metadata: Metadata = {
  title,
  description,
};

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <div className="flex flex-col gap-4">
        <Text as="h3" variant="h4">
          What is JamsrUI?
        </Text>
        <Text as="p" className="text-foreground-tertiary">
          JamsrUI is a React UI component library designed for developers, with
          Tailwind CSS integration for seamless styling.
        </Text>
        <Text as="p" className="text-foreground-tertiary">
          It is designed to help developers build modern, fast and visually
          appealing web applications with ease.
        </Text>
      </div>
      <div className="flex flex-col gap-4">
        <Text as="h3" variant="h4">
          {" "}
          Is JamsrUI a copy-paste library?
        </Text>
        <Text as="p" className="text-foreground-tertiary">
          No, JamsrUI is not a copy-paste library; all components are available
          via npm and can be installed individually or as a whole package,
          providing flexibility and modularity for developers.
        </Text>
      </div>
    </VariantPage>
  );
};

export default Page;
