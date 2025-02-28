import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { RHFDemoAutocomplete } from "./examples/autocomplete";
import { RHFDemoCheckbox } from "./examples/checkbox";
import { RHFDemoEditor } from "./examples/editor";
import { RHFDemoFileUploadMulti } from "./examples/file-upload-multi";
import { RHFDemoFileUploadMultiDefaultValue } from "./examples/file-upload-multi-default-value";
import { RHFDemoFileUploadSingle } from "./examples/file-upload-single";
import { RHFDemoFileUploadSingleDefaultValue } from "./examples/file-upload-single-default-value";
import { RHFDemoInput } from "./examples/input";
import { RHFDemoOtpInput } from "./examples/otp-input";
import { RHFDemoRadioGroup } from "./examples/radio-group";
import { RHFDemoRating } from "./examples/rating";
import { RHFDemoSelect } from "./examples/select";
import { RHFDemoSelectMulti } from "./examples/select-multi";
import { RHFDemoSwitch } from "./examples/switch";
import { RHFDemoTagsInput } from "./examples/tags-input";
import { RHFDemoTextarea } from "./examples/textarea";
import { RHFDemoAutocompleteMulti } from "./examples/autocomplete-multi";
import { UIConfigProvider } from "@jamsr-ui/config";

const title = "React Hook Form";
const description =
  "React Hook Form is a library for managing form state and validation in React applications. It simplifies handling form inputs, validation, and submission, providing better performance and ease of use compared to traditional methods.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["react-hook-form"][number]>(variant: T) =>
  readVariantCode("react-hook-form", variant);

const DragDropDndKit = () => {
  return (
    <VariantPage heading={title} description={description}>
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
      <VariantWrapper heading="Select Multi" code={code("select-multi")}>
        <RHFDemoSelectMulti />
      </VariantWrapper>
      <VariantWrapper heading="Autocomplete" code={code("autocomplete")}>
        <RHFDemoAutocomplete />
      </VariantWrapper>
      <VariantWrapper
        heading="Autocomplete Multi"
        code={code("autocomplete-multi")}
      >
        <RHFDemoAutocompleteMulti />
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
        heading="Single File Upload Default Value"
        code={code("file-upload-single-default-value")}
      >
        <RHFDemoFileUploadSingleDefaultValue />
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
