import { LinearProgress } from "jamsrui/linear-progress";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { LinearProgressControlled } from "./examples/controlled";
import { LinearProgressUsage } from "./examples/usage";

const title = "LinearProgress";
const description =
  "A visual indicator that displays the progress of an ongoing task in a linear format, providing users with a clear understanding of task completion in real time.";

export const metadata: Metadata = {
  title,
  description,
};

const linearProgressVariants: VariantOptions<LinearProgress.Variants> = {
  color: {
    options: ["primary", "secondary", "success", "warning", "error"],
    defaultValue: "primary",
  },
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "sm",
  },
  isIntermediate: {
    options: ["true", "false"],
    defaultValue: "true",
  },
};

const LinearProgressPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={linearProgressVariants}
        component={LinearProgressUsage}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={linearProgressVariants}
        component={LinearProgressControlled}
      />
    </DocsPage>
  );
};

export default LinearProgressPage;
