import { CodeExample } from "@/components/code-example";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { InputControlled } from "./examples/controlled";
import { InputDisabled } from "./examples/disabled";
import { InputErrorState } from "./examples/error-state";
import { InputPasswordToggle } from "./examples/password-toggle";
import { InputPrefixSuffix } from "./examples/prefix-suffix";
import { InputUsage } from "./examples/usage";
import { InputWithDescription } from "./examples/with-description";
import { InputWithIcon } from "./examples/with-icon";
import { InputWithLabel } from "./examples/with-label";

const title = "Input";
const description =
  "A form element that allows users to input and submit data, supporting various types such as text, numbers, and more for seamless data entry.";

export const metadata: Metadata = {
  title,
  description,
};

const Input = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <CodeExampleV2 title="Usage" url={resolvePath("usage.tsx")}>
        <InputUsage />
      </CodeExampleV2>
      <CodeExampleV2 title="With Label" url={resolvePath("with-label.tsx")}>
        <InputWithLabel />
      </CodeExampleV2>
      <CodeExampleV2
        title="With Description"
        url={resolvePath("with-description.tsx")}
      >
        <InputWithDescription />
      </CodeExampleV2>
      <CodeExampleV2 title="Controlled" url={resolvePath("controlled.tsx")}>
        <InputControlled />
      </CodeExampleV2>
      <CodeExampleV2 title="Error State" url={resolvePath("error-state.tsx")}>
        <InputErrorState />
      </CodeExampleV2>
      <CodeExampleV2 title="Disabled" url={resolvePath("disabled.tsx")}>
        <InputDisabled />
      </CodeExampleV2>
      <CodeExampleV2
        title="Prefix & Suffix"
        url={resolvePath("prefix-suffix.tsx")}
      >
        <InputPrefixSuffix />
      </CodeExampleV2>
      <CodeExampleV2 title="With Icon" url={resolvePath("with-icon.tsx")}>
        <InputWithIcon />
      </CodeExampleV2>
      <CodeExampleV2
        title="Password Toggle"
        url={resolvePath("password-toggle.tsx")}
      >
        <InputPasswordToggle />
      </CodeExampleV2>
    </DocsPage>
  );
};

export default Input;
