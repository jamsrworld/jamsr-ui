import { CodeExample, DocsPageSection } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertCustomIcon } from "./examples/custom-icon";
import { AlertStatus } from "./examples/status";
import { AlertUsage } from "./examples/usage";
import { AlertVariantBordered } from "./examples/variants/bordered";
import { AlertVariantFlat } from "./examples/variants/flat";
import { AlertVariantSolid } from "./examples/variants/solid";
import { AlertWithAction } from "./examples/with-action";
import { AlertWithTitle } from "./examples/with-title";
import { AlertWithoutIcon } from "./examples/without-icon";

const title = "Alert";
const description =
  "A modal dialog that interrupts the user with important content and expects a response.";

export const metadata: Metadata = {
  title,
  description,
};

const Alert = () => {
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
        <AlertUsage />
      </CodeExample>
      <CodeExample
        title="With Title"
        url={resolvePath("with-title.tsx")}
      >
        <AlertWithTitle />
      </CodeExample>
      <CodeExample
        title="Status"
        url={resolvePath("status.tsx")}
      >
        <AlertStatus />
      </CodeExample>
      <DocsPageSection title="Variants">
        <CodeExample
          title="Solid"
          url={resolvePath("variants/solid.tsx")}
        >
          <AlertVariantSolid />
        </CodeExample>
        <CodeExample
          title="Bordered"
          url={resolvePath("variants/bordered.tsx")}
        >
          <AlertVariantBordered />
        </CodeExample>
        <CodeExample
          title="Flat"
          url={resolvePath("variants/flat.tsx")}
        >
          <AlertVariantFlat />
        </CodeExample>
      </DocsPageSection>
      <CodeExample
        title="With Action"
        url={resolvePath("with-action.tsx")}
      >
        <AlertWithAction />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Icon"
        url={resolvePath("custom-icon.tsx")}
      >
        <AlertCustomIcon />
      </CodeExample>
      <CodeExample
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
      >
        <AlertWithoutIcon />
      </CodeExample>
    </DocsPage>
  );
};

export default Alert;
