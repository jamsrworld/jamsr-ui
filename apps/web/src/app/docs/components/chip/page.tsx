import { CodeExample, DocsPageSection } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ChipBordered } from "./examples/bordered";
import { ChipColors } from "./examples/colors";
import { ChipCustomized } from "./examples/customized";
import { ChipRadius } from "./examples/radius";
import { ChipSizes } from "./examples/sizes";
import { ChipUsage } from "./examples/usage";
import { ChipVariantBordered } from "./examples/variants/bordered";
import { ChipVariantDot } from "./examples/variants/dot";
import { ChipVariantFlat } from "./examples/variants/flat";
import { ChipVariantSolid } from "./examples/variants/solid";
import { ChipWithClose } from "./examples/with-close";
import { ChipWithIcons } from "./examples/with-icons";

const title = "Chip";
const description =
  "A Chip is a small block of essential information that represent an input, attribute, or action.";

export const metadata: Metadata = {
  title,
  description,
};

const Chip = () => {
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
        <ChipUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <ChipColors />
      </CodeExample>
      <DocsPageSection title="Variants">
        <CodeExample
          isCentered
          title="Solid"
          url={resolvePath("variants/solid.tsx")}
        >
          <ChipVariantSolid />
        </CodeExample>
        <CodeExample
          isCentered
          title="Flat"
          url={resolvePath("variants/flat.tsx")}
        >
          <ChipVariantFlat />
        </CodeExample>
        <CodeExample
          isCentered
          title="Bordered"
          url={resolvePath("variants/bordered.tsx")}
        >
          <ChipVariantBordered />
        </CodeExample>
        <CodeExample
          isCentered
          title="Dot"
          url={resolvePath("variants/dot.tsx")}
        >
          <ChipVariantDot />
        </CodeExample>
      </DocsPageSection>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <ChipSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <ChipRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icons"
        url={resolvePath("with-icons.tsx")}
      >
        <ChipWithIcons />
      </CodeExample>
      <CodeExample
        isCentered
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <ChipBordered />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Close"
        url={resolvePath("with-close.tsx")}
      >
        <ChipWithClose />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <ChipCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Chip;
