import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RHFDemoCheckbox } from "./examples/checkbox";
import { RHFDemoEditor } from "./examples/editor";
import { RHFDemoInput } from "./examples/input";
import { RHFDemoFileUploadMulti } from "./examples/file-upload-multi";
import { RHFDemoOtpInput } from "./examples/otp-input";
import { RHFDemoRadioGroup } from "./examples/radio-group";
import { RHFDemoRating } from "./examples/rating";
import { RHFDemoSelect } from "./examples/select";
import { RHFDemoFileUploadSingle } from "./examples/file-upload-single";
import { RHFDemoSwitch } from "./examples/switch";
import { RHFDemoTagsInput } from "./examples/tags-input";
import { RHFDemoTextarea } from "./examples/textarea";
import { RHFDemoFileUploadMultiDefaultValue } from "./examples/file-upload-multi-default-value";
import { RHFDemoAutocomplete } from "./examples/autocomplete";

export const metadata: Metadata = {
  title: "React Hook Form",
};

const code = <T extends VariantTypes["react-hook-form"][number]>(variant: T) =>
  readVariantCode("react-hook-form", variant);

const DragDropDndKit = () => {
  return (
    <VariantPage heading="React Hook Form">
      <VariantWrapper heading="Input" code={code("input")}>
        <RHFDemoInput />
      </VariantWrapper>
      <VariantWrapper heading="Textarea" code={code("textarea")}>
        <RHFDemoTextarea />
      </VariantWrapper>
      <VariantWrapper heading="Switch" code={code("switch")}>
        <RHFDemoSwitch />
      </VariantWrapper>
      <VariantWrapper heading="Checkbox" code={code("checkbox")}>
        <RHFDemoCheckbox />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group" code={code("radio-group")}>
        <RHFDemoRadioGroup />
      </VariantWrapper>
      <VariantWrapper heading="Otp Input" code={code("otp-input")}>
        <RHFDemoOtpInput />
      </VariantWrapper>
      <VariantWrapper heading="Tags Input" code={code("tags-input")}>
        <RHFDemoTagsInput />
      </VariantWrapper>
      <VariantWrapper heading="Rating" code={code("rating")}>
        <RHFDemoRating />
      </VariantWrapper>
      <VariantWrapper heading="Select" code={code("select")}>
        <RHFDemoSelect />
      </VariantWrapper>
      <VariantWrapper heading="Autocomplete" code={code("autocomplete")}>
        <RHFDemoAutocomplete />
      </VariantWrapper>
      <VariantWrapper heading="Editor" code={code("editor")}>
        <RHFDemoEditor />
      </VariantWrapper>
      <VariantWrapper
        heading="Single File Upload"
        code={code("file-upload-single")}
      >
        <RHFDemoFileUploadSingle />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi File Upload"
        code={code("file-upload-multi")}
      >
        <RHFDemoFileUploadMulti />
      </VariantWrapper>
      <VariantWrapper
        heading="Multi File Upload Default Value"
        code={code("file-upload-multi-default-value")}
      >
        <RHFDemoFileUploadMultiDefaultValue />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
