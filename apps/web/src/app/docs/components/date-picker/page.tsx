import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DatePickerUsage } from "./examples/usage";

const title = "Date Picker";
const description = "Date Picker";

export const metadata: Metadata = {
  title,
  description,
};

const DatePicker = () => {
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
        <DatePickerUsage />
      </CodeExample>
    </DocsPage>
  );
};

export default DatePicker;
