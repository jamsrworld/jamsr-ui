import { CodeExample } from "@/components/code-example";
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
      <CodeExample title="Usage" url={resolvePath("usage.tsx")}>
        <InputUsage />
      </CodeExample>
      <CodeExample title="With Label" url={resolvePath("with-label.tsx")}>
        <InputWithLabel />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Description"
        url={resolvePath("with-description.tsx")}
      >
        <InputWithDescription />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <InputControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Error State"
        url={resolvePath("error-state.tsx")}
      >
        <InputErrorState />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <InputDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Prefix & Suffix"
        url={resolvePath("prefix-suffix.tsx")}
      >
        <InputPrefixSuffix />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Icon"
        url={resolvePath("with-icon.tsx")}
      >
        <InputWithIcon />
      </CodeExample>
      <CodeExample
        title="Password Toggle"
        url={resolvePath("password-toggle.tsx")}
        isCentered
      >
        <InputPasswordToggle />
      </CodeExample>
    </DocsPage>
  );
};

export default Input;
