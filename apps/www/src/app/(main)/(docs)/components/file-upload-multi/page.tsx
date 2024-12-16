import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { FileUploadControlled } from "./examples/controlled";
import { FileUploadCustomized } from "./examples/customized";
import { FileUploadUsageValue } from "./examples/default-value";
import { FileUploadDisabled } from "./examples/disabled";
import { FileUploadRadius } from "./examples/radius";
import { FileUploadUsage } from "./examples/usage";

const title = "Multi File Upload";
const description =
  "An efficient and intuitive component designed to support seamless uploading of multiple files simultaneously.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["file-upload-multi"][number]>(
  variant: T,
) => readVariantCode("file-upload-multi", variant);

const FileUpload = () => {
  return (
    <VariantPage  heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <FileUploadUsage />
      </VariantWrapper>
      <VariantWrapper heading="Disabled" code={code("disabled")}>
        <FileUploadDisabled />
      </VariantWrapper>
      <VariantWrapper heading="Default Value" code={code("default-value")}>
        <FileUploadUsageValue />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <FileUploadRadius />
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
