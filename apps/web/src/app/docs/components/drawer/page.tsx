import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DrawerCustomCloseBtn } from "./examples/custom-close-button";
import { DrawerNonDismissible } from "./examples/non-dismissible";
import { DrawerUsage } from "./examples/usage";
import { DrawerWithoutCloseButton } from "./examples/without-close-button";

const title = "Drawer";
const description =
  "A dynamic sliding panel that seamlessly transitions from the edge of the screen, offering supplementary content or contextual actions while preserving the primary user experience.";

export const metadata: Metadata = {
  title,
  description,
};

const drawerVariants: VariantOptions<{
  swipeDirection: "left" | "right" | "up" | "down";
  size:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";
  backdrop: "transparent" | "opaque" | "blur";
  radius: "none" | "sm" | "md" | "lg" | "full";
}> = {
  swipeDirection: {
    options: ["left", "right", "up", "down"],
    defaultValue: "down",
    label: "Swipe Direction",
  },
  size: {
    options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "opaque",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
};

const DrawerPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={drawerVariants}
        component={DrawerUsage}
      />
      <CodeExampleV2
        title="Custom Close Button"
        url={resolvePath("custom-close-button.tsx")}
        variants={drawerVariants}
        component={DrawerCustomCloseBtn}
      />
      <CodeExampleV2
        title="Without Close Button"
        url={resolvePath("without-close-button.tsx")}
        variants={drawerVariants}
        component={DrawerWithoutCloseButton}
      />
      <CodeExampleV2
        title="Non Dismissible"
        url={resolvePath("non-dismissible.tsx")}
        variants={drawerVariants}
        component={DrawerNonDismissible}
      />
    </DocsPage>
  );
};

export default DrawerPage;
