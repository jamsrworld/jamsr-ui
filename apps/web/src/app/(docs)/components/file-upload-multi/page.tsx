import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { FileUploadDefault } from "./variants/default";
import { FileUploadDisabled } from "./variants/disabled";
import { FileUploadDefaultValue } from "./variants/default-value";
import { FileUploadControlled } from "./variants/controlled";
import { FileUploadCustomized } from "./variants/customize";

export const metadata: Metadata = {
  title: "Multi File Upload",
};

const FileUpload = () => {
  return (
    <VariantPage heading="Multi File Upload">
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
