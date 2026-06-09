import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ChipUsage } from "./examples/usage";
import { ChipWithIcons } from "./examples/with-icons";

const title = "Chip";
const description =
  "A Chip is a small block of essential information that represent an input, attribute, or action.";

export const metadata: Metadata = {
  title,
  description,
};

const chipVariants = {
  variant: {
    options: ["solid", "bordered", "soft", "dot"],
    defaultValue: "solid",
  },
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "default",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "full",
  },
  isSquare: {
    options: ["true", "false"],
    defaultValue: "false",
  },
  isBordered: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const ChipPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={chipVariants}
        component={ChipUsage}
      />
      <CodeExampleV2
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
        variants={chipVariants}
        component={ChipWithIcons}
      />
    </DocsPage>
  );
};

export default ChipPage;
