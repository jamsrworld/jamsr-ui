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
import { FileUploadHorizontal } from "./examples/horizontal";
import { FileUploadRadius } from "./examples/radius";
import { FileUploadUsage } from "./examples/usage";

const title = "Single File Upload";
const description =
  "A streamlined and user-friendly component designed for uploading a single file.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["file-upload-single"][number]>(
  variant: T,
) => readVariantCode("file-upload-single", variant);

const FileUpload = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <FileUploadUsage />
      </VariantWrapper>
      <VariantWrapper heading="Avatar" code={code("avatar")}>
        <FileUploadAvatar />
      </VariantWrapper>
      <VariantWrapper heading="Horizontal" code={code("horizontal")}>
        <FileUploadHorizontal />
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
