import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { FileUploadDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "File-upload",
};

const FileUpload = () => {
  return (
    <VariantPage heading="File Upload">
      <VariantWrapper heading="Default">
        <FileUploadDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default FileUpload;
