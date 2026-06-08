import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DialogBackdrop } from "./examples/backdrop";
import { DialogBordered } from "./examples/bordered";
import { DialogCustomCloseButton } from "./examples/custom-close-button";
import { DialogNonDismissible } from "./examples/non-dismissible";
import { DialogRadius } from "./examples/radius";
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

const Dialog = () => {
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
        <DialogUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <DialogRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Close"
        url={resolvePath("with-close.tsx")}
      >
        <DialogWithClose />
      </CodeExample>
      <CodeExample
        isCentered
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <DialogBordered />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <DialogBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Scroll Behavior"
        url={resolvePath("scroll-behavior.tsx")}
      >
        <DialogScrollBehavior />
      </CodeExample>
      <CodeExample
        isCentered
        title="Non Dismissible"
        url={resolvePath("non-dismissible.tsx")}
      >
        <DialogNonDismissible />
      </CodeExample>
      <CodeExample
        isCentered
        title="Custom Close Button"
        url={resolvePath("custom-close-button.tsx")}
      >
        <DialogCustomCloseButton />
      </CodeExample>
    </DocsPage>
  );
};

export default Dialog;
