import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertDialogBackdrop } from "./examples/backdrop";
import { AlertDialogControlled } from "./examples/controlled";
import { AlertDialogCustomized } from "./examples/customized";
import { AlertDialogUsage } from "./examples/usage";

const title = "Alert Dialog";
const description =
  "A clear and concise component designed to prompt users for confirmation before proceeding with critical actions, ensuring better decision-making and reducing errors.";

export const metadata: Metadata = {
  title,
  description,
};

const alertDialogVariants = {
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  size: {
    options: ["sm", "md", "lg", "xl"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "opaque",
  },
};

const Confirmation = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={alertDialogVariants}
        component={AlertDialogUsage}
      />
      <CodeExampleV2
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
        variants={alertDialogVariants}
        component={AlertDialogBackdrop}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={alertDialogVariants}
        component={AlertDialogControlled}
      />
      <CodeExampleV2
        title="Customized"
        url={resolvePath("customized.tsx")}
        variants={alertDialogVariants}
        component={AlertDialogCustomized}
      />
    </DocsPage>
  );
};

export default Confirmation;
