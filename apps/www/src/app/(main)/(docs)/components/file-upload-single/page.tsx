import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { FileUploadAvatar } from "./examples/avatar";
import { FileUploadControlled } from "./examples/controlled";
import { FileUploadCustomized } from "./examples/customized";
import { FileUploadUsageValue } from "./examples/default-value";
import { FileUploadDisabled } from "./examples/disabled";
import { FileUploadRadius } from "./examples/radius";
import { FileUploadUsage } from "./examples/usage";

export const metadata: Metadata = {
  title: "File Upload Single",
};

const code = <T extends VariantTypes["file-upload-single"][number]>(
  variant: T,
) => readVariantCode("file-upload-single", variant);

const FileUpload = () => {
  return (
    <VariantPage heading="Single File Upload">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <FileUploadUsage />
      </VariantWrapper>
      <VariantWrapper heading="Avatar" code={code("avatar")}>
        <FileUploadAvatar />
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
