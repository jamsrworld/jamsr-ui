import { Card } from "ui/card";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { CardUsage } from "./examples/usage";

const title = "Card";
const description =
  "A card presents focused content and actionable items related to a single subject.";

export const metadata: Metadata = {
  title,
  description,
};

const cardVariants: VariantOptions<Card.Variants> = {
  bg: {
    options: ["default", "secondary", "tertiary", "quaternary"],
    defaultValue: "default",
  },
  isBordered: {
    options: ["true", "false"],
    defaultValue: "false",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
  contentPadding: {
    options: ["none", "x", "y", "both"],
    defaultValue: "both",
  },
  shadow: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "sm",
  },
  surface: {
    options: ["card", "content"],
    defaultValue: "card",
  },
};

const CardPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={cardVariants}
        component={CardUsage}
      />
    </DocsPage>
  );
};

export default CardPage;
