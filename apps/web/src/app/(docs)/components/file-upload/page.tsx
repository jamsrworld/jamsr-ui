import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { FileUploadControlled } from "./variants/controlled";
import { FileUploadCustomized } from "./variants/customize";
import { FileUploadDefault } from "./variants/default";
import { FileUploadDefaultValue } from "./variants/default-value";
import { FileUploadDisabled } from "./variants/disabled";

export const metadata: Metadata = {
  title: "Single File Upload",
};

const FileUpload = () => {
  return (
    <VariantPage heading="Single File Upload">
      <VariantWrapper heading="Default">
        <FileUploadDefault />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <FileUploadDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value">
        <FileUploadDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <FileUploadControlled />
      </VariantWrapper>
      <VariantWrapper heading="Customized">
        <FileUploadCustomized />
      </VariantWrapper>
    </VariantPage>
  );
};
export default FileUpload;
