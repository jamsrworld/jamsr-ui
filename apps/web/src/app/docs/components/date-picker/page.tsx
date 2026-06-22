import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { DatePickerUsage } from "./examples/usage";

const title = "Date Picker";
const description = "A simple date picker to select dates and times.";

export const metadata: Metadata = {
  title,
  description,
};

const DatePickerPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={DatePickerUsage}
      />
    </DocsPage>
  );
};

export default DatePickerPage;
