import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
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

export const metadata: Metadata = {
  title: "React Hook Form",
};

const DragDropDndKit = () => {
  return (
    <VariantPage heading="React Hook Form">
      <VariantWrapper heading="Input">
        <RHFDemoInput />
      </VariantWrapper>
      <VariantWrapper heading="Textarea">
        <RHFDemoTextarea />
      </VariantWrapper>
      <VariantWrapper heading="Switch">
        <RHFDemoSwitch />
      </VariantWrapper>
      <VariantWrapper heading="Checkbox">
        <RHFDemoCheckbox />
      </VariantWrapper>
      <VariantWrapper heading="Radio Group">
        <RHFDemoRadioGroup />
      </VariantWrapper>
      <VariantWrapper heading="Otp Input">
        <RHFDemoOtpInput />
      </VariantWrapper>
      <VariantWrapper heading="Tags Input">
        <RHFDemoTagsInput />
      </VariantWrapper>
      <VariantWrapper heading="Rating">
        <RHFDemoRating />
      </VariantWrapper>
      <VariantWrapper heading="Select">
        <RHFDemoSelect />
      </VariantWrapper>
      <VariantWrapper heading="Editor">
        <RHFDemoEditor />
      </VariantWrapper>
      <VariantWrapper heading="Single File Upload">
        <RHFDemoFileUploadSingle />
      </VariantWrapper>
      <VariantWrapper heading="Multi File Upload">
        <RHFDemoFileUploadMulti />
      </VariantWrapper>
      <VariantWrapper heading="Multi File Upload Default Value">
        <RHFDemoFileUploadMultiDefaultValue />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
