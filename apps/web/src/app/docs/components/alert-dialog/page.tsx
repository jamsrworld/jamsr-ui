import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertDialogBackdrop } from "./examples/backdrop";
import { AlertDialogControlled } from "./examples/controlled";
import { AlertDialogCustomized } from "./examples/customized";
import { AlertDialogRadius } from "./examples/radius";
import { AlertDialogUsage } from "./examples/usage";

const title = "Alert Dialog";
const description =
  "A clear and concise component designed to prompt users for confirmation before proceeding with critical actions, ensuring better decision-making and reducing errors.";

export const metadata: Metadata = {
  title,
  description,
};

const Confirmation = () => {
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
        <AlertDialogUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <AlertDialogBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <AlertDialogRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <AlertDialogControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customized"
        url={resolvePath("customized.tsx")}
      >
        <AlertDialogCustomized />
      </CodeExample>
    </DocsPage>
  );
};

export default Confirmation;
