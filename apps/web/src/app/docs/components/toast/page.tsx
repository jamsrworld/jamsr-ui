import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import ToastUsage from "./examples/usage";
import ToastVariants from "./examples/variants";

const title = "Toast";
const description =
  "A Toast component displays brief, non-intrusive notifications that appear on the screen to inform users about an event, such as a successful action or an error message, and typically disappears after a few seconds.";

export const metadata: Metadata = {
  title,
  description,
};

const Toast = () => {
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
        <ToastUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Variants"
        url={resolvePath("variants.tsx")}
      >
        <ToastVariants />
      </CodeExample>
    </DocsPage>
  );
};

export default Toast;
