import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ToastUsage } from "./examples/usage";

const title = "Toast";
const description =
  "A Toast component is a temporary, non-disruptive notification that appears on the screen to provide feedback, alerts, or information. It disappears automatically or can be dismissed by the user.";

export const metadata: Metadata = {
  title,
  description,
};

const toastVariants: VariantOptions<{
  type: "default" | "success" | "error" | "info" | "warning";
}> = {
  type: {
    options: ["default", "success", "error", "info", "warning"],
    defaultValue: "default",
  },
};

const ToastPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={toastVariants}
        component={ToastUsage}
      />
    </DocsPage>
  );
};

export default ToastPage;
