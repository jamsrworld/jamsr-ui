import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { FileUploadControlled } from "./variants/controlled";
import { FileUploadSingleCustomized } from "./variants/customise";
import { FileUploadSingleDefault } from "./variants/default";
import { FileUploadDefaultValue } from "./variants/default-value";
import { FileUploadSingleDisabled } from "./variants/disabled";

export const metadata: Metadata = {
  title: "File-upload",
};

const FileUpload = () => {
  return (
    <VariantPage heading="File Upload">
      <VariantWrapper heading="Single Upload">
        <FileUploadSingleDefault />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <FileUploadSingleDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value">
        <FileUploadDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <FileUploadControlled />
      </VariantWrapper>
      <VariantWrapper heading="Customized">
        <FileUploadSingleCustomized />
      </VariantWrapper>
    </VariantPage>
  );
};
export default FileUpload;
