import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { RHFDemoCheckbox } from "./variants/checkbox";
import { RHFDemoEditor } from "./variants/editor";
import { RHFDemoInput } from "./variants/input";
import { RHFDemoFileUploadMulti } from "./variants/file-upload-multi";
import { RHFDemoOtpInput } from "./variants/otp-input";
import { RHFDemoRadioGroup } from "./variants/radio-group";
import { RHFDemoRating } from "./variants/rating";
import { RHFDemoSelect } from "./variants/select";
import { RHFDemoFileUploadSingle } from "./variants/file-upload-single";
import { RHFDemoSwitch } from "./variants/switch";
import { RHFDemoTagsInput } from "./variants/tags-input";
import { RHFDemoTextarea } from "./variants/textarea";
import { RHFDemoFileUploadMultiDefaultValue } from "./variants/file-upload-multi-default-value";
import { RHFDemoAutocomplete } from "./variants/autocomplete";

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
