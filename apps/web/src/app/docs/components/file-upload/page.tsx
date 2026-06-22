import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { FileUploadAvatarUpload } from "./examples/avatar-upload";
import { FileUploadListUpload } from "./examples/list-upload";
import { FileUploadUsage } from "./examples/usage";

const title = "File Upload";
const description = "A simple, hook-based file uploading utility.";

export const metadata: Metadata = {
  title,
  description,
};

const FileUploadPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        component={FileUploadUsage}
      />
      <CodeExampleV2
        title="Avatar Upload"
        url={resolvePath("avatar-upload.tsx")}
        component={FileUploadAvatarUpload}
      />
      <CodeExampleV2
        title="List Upload"
        url={resolvePath("list-upload.tsx")}
        component={FileUploadListUpload}
      />
    </DocsPage>
  );
};

export default FileUploadPage;
