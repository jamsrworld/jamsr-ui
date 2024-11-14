import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { FileUploadDefault } from "./variants/default";
import { FileUploadDisabled } from "./variants/disabled";
import { FileUploadDefaultValue } from "./variants/default-value";
import { FileUploadControlled } from "./variants/controlled";
import { FileUploadCustomized } from "./variants/customized";

export const metadata: Metadata = {
  title: "Multi File Upload",
};

const code = <T extends VariantTypes["file-upload-multi"][number]>(
  variant: T,
) => readVariantCode("file-upload-multi", variant);

const FileUpload = () => {
  return (
    <VariantPage heading="Multi File Upload">
      <VariantWrapper heading="Default" code={code("default")}>
        <FileUploadDefault />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <FileUploadDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value" code={code("default-value")}>
        <FileUploadDefaultValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <FileUploadControlled />
      </VariantWrapper>
      <VariantWrapper heading="Customized" code={code("customized")}>
        <FileUploadCustomized />
      </VariantWrapper>
    </VariantPage>
  );
};
export default FileUpload;
