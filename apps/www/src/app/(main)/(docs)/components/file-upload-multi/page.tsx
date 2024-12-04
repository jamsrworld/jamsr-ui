import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { FileUploadUsage } from "./examples/usage";
import { FileUploadDisabled } from "./examples/disabled";
import { FileUploadUsageValue } from "./examples/default-value";
import { FileUploadControlled } from "./examples/controlled";
import { FileUploadCustomized } from "./examples/customized";

export const metadata: Metadata = {
  title: "Multi File Upload",
};

const code = <T extends VariantTypes["file-upload-multi"][number]>(
  variant: T,
) => readVariantCode("file-upload-multi", variant);

const FileUpload = () => {
  return (
    <VariantPage heading="Multi File Upload">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <FileUploadUsage />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <FileUploadDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value" code={code("default-value")}>
        <FileUploadUsageValue />
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
