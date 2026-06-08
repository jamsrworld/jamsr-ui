import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { PreviewCardAligns } from "./examples/aligns";
import { PreviewCardBackdrop } from "./examples/backdrop";
import { PreviewCardControlled } from "./examples/controlled";
import { PreviewCardOpenOnHover } from "./examples/open-on-hover";
import { PreviewCardRadius } from "./examples/radius";
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

const PreviewCardPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <PreviewCardUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
      >
        <PreviewCardWithArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sides"
        url={resolvePath("sides.tsx")}
      >
        <PreviewCardSides />
      </CodeExample>
      <CodeExample
        isCentered
        title="Aligns"
        url={resolvePath("aligns.tsx")}
      >
        <PreviewCardAligns />
      </CodeExample>
      <CodeExample
        isCentered
        title="Trigger On Hover"
        url={resolvePath("open-on-hover.tsx")}
      >
        <PreviewCardOpenOnHover />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <PreviewCardRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <PreviewCardControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <PreviewCardBackdrop />
      </CodeExample>
    </DocsPage>
  );
};

export default PreviewCardPage;
