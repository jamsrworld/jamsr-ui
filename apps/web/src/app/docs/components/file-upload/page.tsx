import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { FileUploadAvatarUpload } from "./examples/avatar-upload";
import { FileUploadListUpload } from "./examples/list-upload";
import { FileUploadUsage } from "./examples/usage";

export const metadata = {
  title: "File Upload",
  description: "File Upload",
} satisfies Metadata;

const Page = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={metadata.title}
      description={metadata.description}
    >
      <CodeExample
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <FileUploadUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Avatar Upload"
        url={resolvePath("avatar-upload.tsx")}
      >
        <FileUploadAvatarUpload />
      </CodeExample>
      <CodeExample
        title="List Upload"
        url={resolvePath("list-upload.tsx")}
      >
        <FileUploadListUpload />
      </CodeExample>
    </DocsPage>
  );
};

export default Page;
