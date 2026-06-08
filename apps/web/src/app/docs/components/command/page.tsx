import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { CommandUsage } from "./examples/usage";
import { CommandDialogDemo } from "./examples/dialog";
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
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <CommandUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Dialog"
        url={resolvePath("dialog.tsx")}
      >
        <CommandDialogDemo />
      </CodeExample>
      <CodeExample
        title="With Groups"
        url={resolvePath("with-groups.tsx")}
      >
        <CommandWithGroups />
      </CodeExample>
    </DocsPage>
  );
};

export default CommandPage;
