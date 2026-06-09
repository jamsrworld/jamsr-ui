import { Dialog } from "ui/dialog";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { DialogBackdrop } from "./examples/backdrop";
import { DialogBordered } from "./examples/bordered";
import { DialogCustomCloseButton } from "./examples/custom-close-button";
import { DialogNonDismissible } from "./examples/non-dismissible";
import { DialogScrollBehavior } from "./examples/scroll-behavior";
import { DialogUsage } from "./examples/usage";
import { DialogWithClose } from "./examples/with-close";

const title = "Dialog";
const description =
  "A flexible and interactive component that presents content or actions in a modal window, allowing users to focus on critical information or decisions without distractions.";

export const metadata: Metadata = {
  title,
  description,
};

const dialogVariants: VariantOptions<Dialog.Variants> = {
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "opaque",
  },
  isBordered: {
    options: ["true", "false"],
    defaultValue: "false",
  },
  scrollBehavior: {
    options: ["inside", "outside"],
    defaultValue: "inside",
  },
};

const DialogPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={dialogVariants}
        component={DialogUsage}
      />
      <CodeExampleV2
        title="With Close"
        url={resolvePath("with-close.tsx")}
        variants={dialogVariants}
        component={DialogWithClose}
      />
      <CodeExampleV2
        title="Bordered"
        url={resolvePath("bordered.tsx")}
        variants={dialogVariants}
        component={DialogBordered}
      />
      <CodeExampleV2
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
        variants={dialogVariants}
        component={DialogBackdrop}
      />
      <CodeExampleV2
        title="Scroll Behavior"
        url={resolvePath("scroll-behavior.tsx")}
        variants={dialogVariants}
        component={DialogScrollBehavior}
      />
      <CodeExampleV2
        title="Non Dismissible"
        url={resolvePath("non-dismissible.tsx")}
        variants={dialogVariants}
        component={DialogNonDismissible}
      />
      <CodeExampleV2
        title="Custom Close Button"
        url={resolvePath("custom-close-button.tsx")}
        variants={dialogVariants}
        component={DialogCustomCloseButton}
      />
    </DocsPage>
  );
};

export default DialogPage;
