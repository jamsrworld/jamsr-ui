import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AlertCustomIcon } from "./examples/custom-icon";
import { AlertUsage } from "./examples/usage";
import { AlertWithAction } from "./examples/with-action";
import { AlertWithTitle } from "./examples/with-title";
import { AlertWithoutIcon } from "./examples/without-icon";
import { VariantOptions } from "@/types";
import { Alert } from "ui/alert";

const title = "Alert";
const description =
  "A modal dialog that interrupts the user with important content and expects a response.";

export const metadata: Metadata = {
  title,
  description,
};

const alertVariants: VariantOptions<Alert.Variants> = {
  variant: {
    options: ["solid", "bordered", "soft"],
    defaultValue: "solid",
  },
  status: {
    options: ["success", "warning", "info", "error", "neutral"],
    defaultValue: "success",
  },
};

const AlertPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={alertVariants}
        component={AlertUsage}
      />
      <CodeExampleV2
        title="With Title"
        url={resolvePath("with-title.tsx")}
        variants={alertVariants}
        component={AlertWithTitle}
      />
      <CodeExampleV2
        title="With Action"
        url={resolvePath("with-action.tsx")}
        variants={alertVariants}
        component={AlertWithAction}
      />
      <CodeExampleV2
        title="Custom Icon"
        url={resolvePath("custom-icon.tsx")}
        variants={alertVariants}
        component={AlertCustomIcon}
      />
      <CodeExampleV2
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
        variants={alertVariants}
        component={AlertWithoutIcon}
      />
    </DocsPage>
  );
};

export default AlertPage;
