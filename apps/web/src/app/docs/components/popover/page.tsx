import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { PopoverAligns } from "./examples/aligns";
import { PopoverBackdrop } from "./examples/backdrop";
import { PopoverControlled } from "./examples/controlled";
import { PopoverOpenOnHover } from "./examples/open-on-hover";
import { PopoverSides } from "./examples/sides";
import { PopoverUsage } from "./examples/usage";
import { PopoverWithArrow } from "./examples/with-arrow";

const title = "Popover";
const description =
  "A popover is a non-modal dialog that floats around its disclosure. It's commonly used for displaying additional rich content on top of something.";

export const metadata: Metadata = {
  title,
  description,
};

const popoverVariants = {
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "transparent",
  },
};

const PopoverPage = () => {
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
        variants={popoverVariants}
        component={PopoverUsage}
      />
      <CodeExampleV2
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
        variants={popoverVariants}
        component={PopoverWithArrow}
      />
      <CodeExampleV2
        isCentered
        title="Sides"
        url={resolvePath("sides.tsx")}
        variants={popoverVariants}
        component={PopoverSides}
      />
      <CodeExampleV2
        isCentered
        title="Aligns"
        url={resolvePath("aligns.tsx")}
        variants={popoverVariants}
        component={PopoverAligns}
      />
      <CodeExampleV2
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
        variants={popoverVariants}
        component={PopoverBackdrop}
      />
      <CodeExampleV2
        isCentered
        title="Open On Hover"
        url={resolvePath("open-on-hover.tsx")}
        variants={popoverVariants}
        component={PopoverOpenOnHover}
      />
      <CodeExampleV2
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={popoverVariants}
        component={PopoverControlled}
      />
    </DocsPage>
  );
};

export default PopoverPage;
