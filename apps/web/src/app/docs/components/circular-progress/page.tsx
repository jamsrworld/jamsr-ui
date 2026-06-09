import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CircularProgressCustomized } from "./examples/customized";
import { CircularProgressUsage } from "./examples/usage";
import { CircularProgressWithLabel } from "./examples/with-label";

const title = "Circular Progress";
const description =
  "A visually engaging component that provides a clear indication of ongoing processes or tasks, allowing users to track progress in real time with a circular animation.";

export const metadata: Metadata = {
  title,
  description,
};

const circularProgressVariants = {
  color: {
    options: [
      "current",
      "default",
      "primary",
      "danger",
      "success",
      "secondary",
      "warning",
    ],
    defaultValue: "primary",
  },
  isIntermediate: {
    options: ["true", "false"],
    defaultValue: "true",
  },
};

const CircularProgressPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={circularProgressVariants}
        component={CircularProgressUsage}
      />
      <CodeExampleV2
        title="With Label"
        url={resolvePath("with-label.tsx")}
        variants={circularProgressVariants}
        component={CircularProgressWithLabel}
      />
      <CodeExampleV2
        title="Customized"
        url={resolvePath("customized.tsx")}
        variants={circularProgressVariants}
        component={CircularProgressCustomized}
      />
    </DocsPage>
  );
};

export default CircularProgressPage;
