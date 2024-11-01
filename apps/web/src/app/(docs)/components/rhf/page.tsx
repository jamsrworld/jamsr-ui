import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { RHFDemoCheckbox } from "./variants/checkbox";
import { RHFDemoInput } from "./variants/input";
import { RHFDemoOtpInput } from "./variants/otp-input";
import { RHFDemoRadioGroup } from "./variants/radio-group";
import { RHFDemoRating } from "./variants/rating";
import { RHFDemoSelect } from "./variants/select";
import { RHFDemoSwitch } from "./variants/switch";
import { RHFDemoTextarea } from "./variants/textarea";

export const metadata: Metadata = {
  title: "Drag and Drop (Dnd-Kit)",
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
      <VariantWrapper heading="Editor">
        <RHFDemoCheckbox />
      </VariantWrapper>
      <VariantWrapper heading="Otp Input">
        <RHFDemoOtpInput />
      </VariantWrapper>
      <VariantWrapper heading="Rating">
        <RHFDemoRating />
      </VariantWrapper>
      <VariantWrapper heading="Select">
        <RHFDemoSelect />
      </VariantWrapper>
    </VariantPage>
  );
};
export default DragDropDndKit;
