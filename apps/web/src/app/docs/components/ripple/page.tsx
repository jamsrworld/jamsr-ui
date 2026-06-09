import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Ripple } from "jamsrui/ripple";
import { Metadata } from "next";
import { RippleUsage } from "./examples/usage";

const title = "Ripple";
const description =
  "Ripple is a visual effect that creates a wave-like animation when a user interacts with a UI element, such as a button or a link. It is often used to provide feedback to users, indicating that the element has been activated.";

export const metadata: Metadata = {
  title,
  description,
};

const rippleVariants: VariantOptions<Ripple.Variants> = {
  isCentered: {
    options: ["true", "false"],
    defaultValue: "false",
  },
};

const RipplePage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={rippleVariants}
        component={RippleUsage}
      />
    </DocsPage>
  );
};

export default RipplePage;
