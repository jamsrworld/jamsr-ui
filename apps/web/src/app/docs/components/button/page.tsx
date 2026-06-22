import { Button } from "ui/button";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { ButtonDisabled } from "./examples/disabled";
import { ButtonLoading } from "./examples/loading";
import { ButtonUsage } from "./examples/usage";
import { ButtonWithIcons } from "./examples/with-icons";

const title = "Button";
const description =
  "Buttons allow users to take actions, and make choices, with a single tap.";

export const metadata: Metadata = {
  title,
  description,
};

const buttonVariants: VariantOptions<Button.Variants> = {
  variant: {
    options: ["solid", "bordered", "text", "light", "soft"],
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
    options: ["none", "sm", "md", "lg", "xl", "full"],
    defaultValue: "lg",
  },
};

const ButtonPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={buttonVariants}
        component={ButtonUsage}
      />
      <CodeExampleV2
        title="Loading"
        url={resolvePath("loading.tsx")}
        variants={buttonVariants}
        component={ButtonLoading}
      />
      <CodeExampleV2
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={buttonVariants}
        component={ButtonDisabled}
      />
      <CodeExampleV2
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
        variants={buttonVariants}
        component={ButtonWithIcons}
      />
    </DocsPage>
  );
};

export default ButtonPage;
