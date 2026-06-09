import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { TooltipControlled } from "./examples/controlled";
import { TooltipUsage } from "./examples/usage";
import { TooltipWithArrow } from "./examples/with-arrow";
import { TooltipWithGroup } from "./examples/with-group";

const title = "Tooltip";
const description =
  "A Tooltip component provides a small pop-up box that appears when a user hovers over an element. It is typically used to provide additional information or context about a UI element without cluttering the interface.";

export const metadata: Metadata = {
  title,
  description,
};

const tooltipVariants: VariantOptions<{
  radius: "none" | "sm" | "md" | "lg" | "full";
  showArrow: "true" | "false";
}> = {
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
  showArrow: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const TooltipPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={tooltipVariants}
        component={TooltipUsage}
      />
      <CodeExampleV2
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
        variants={tooltipVariants}
        component={TooltipWithArrow}
      />
      <CodeExampleV2
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={tooltipVariants}
        component={TooltipControlled}
      />
      <CodeExampleV2
        isCentered
        title="With Group"
        url={resolvePath("with-group.tsx")}
        variants={tooltipVariants}
        component={TooltipWithGroup}
      />
    </DocsPage>
  );
};

export default TooltipPage;
