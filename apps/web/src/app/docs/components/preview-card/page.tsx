import { PreviewCard } from "ui/preview-card";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { PreviewCardAligns } from "./examples/aligns";
import { PreviewCardBackdrop } from "./examples/backdrop";
import { PreviewCardControlled } from "./examples/controlled";
import { PreviewCardOpenOnHover } from "./examples/open-on-hover";
import { PreviewCardSides } from "./examples/sides";
import { PreviewCardUsage } from "./examples/usage";
import { PreviewCardWithArrow } from "./examples/with-arrow";

const title = "Preview Card";
const description =
  "Preview Card is a non-modal dialog that floats around its disclosure. It's commonly used for displaying additional rich content on top of something.";

export const metadata: Metadata = {
  title,
  description,
};

const previewCardVariants: VariantOptions<PreviewCard.Variants> = {
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "transparent",
  },
};

const PreviewCardPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={previewCardVariants}
        component={PreviewCardUsage}
      />
      <CodeExampleV2
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
        variants={previewCardVariants}
        component={PreviewCardWithArrow}
      />
      <CodeExampleV2
        title="Sides"
        url={resolvePath("sides.tsx")}
        variants={previewCardVariants}
        component={PreviewCardSides}
      />
      <CodeExampleV2
        title="Aligns"
        url={resolvePath("aligns.tsx")}
        variants={previewCardVariants}
        component={PreviewCardAligns}
      />
      <CodeExampleV2
        title="Trigger On Hover"
        url={resolvePath("open-on-hover.tsx")}
        variants={previewCardVariants}
        component={PreviewCardOpenOnHover}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={previewCardVariants}
        component={PreviewCardControlled}
      />
      <CodeExampleV2
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
        variants={previewCardVariants}
        component={PreviewCardBackdrop}
      />
    </DocsPage>
  );
};

export default PreviewCardPage;
