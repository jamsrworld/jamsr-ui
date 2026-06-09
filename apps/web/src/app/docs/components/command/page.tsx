import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CommandDialogDemo } from "./examples/dialog";
import { CommandUsage } from "./examples/usage";
import { CommandWithGroups } from "./examples/with-groups";

const title = "Command";
const description =
  "A fast, composable command menu for searching and executing actions.";

export const metadata: Metadata = {
  title,
  description,
};

const CommandPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={CommandUsage}
      />
      <CodeExampleV2
        title="Dialog"
        url={resolvePath("dialog.tsx")}
        component={CommandDialogDemo}
      />
      <CodeExampleV2
        title="With Groups"
        url={resolvePath("with-groups.tsx")}
        component={CommandWithGroups}
      />
    </DocsPage>
  );
};

export default CommandPage;
