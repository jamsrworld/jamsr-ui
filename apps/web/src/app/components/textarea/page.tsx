import { VariantPage } from "@/components/variant-page";
import { VariantWrapper } from "@/components/variant-wrapper";
import { type Metadata } from "next";
import { TextareaControlled } from "./variants/controlled";
import { TextareaDefault } from "./variants/default";
import { TextareaDisabled } from "./variants/disabled";
import { TextareaErrorState } from "./variants/error-state";
import { TextareaHelperText } from "./variants/helper-text";
import { TextareaLabelHelper } from "./variants/label-helper";
import { TextareaPlaceholder } from "./variants/placeholder";
import { TextareaSizes } from "./variants/sizes";
import { TextareaVariants } from "./variants/variants";
import { TextareaWithEndContent } from "./variants/with-end-content";
import { TextareaWithIcon } from "./variants/with-icon";
import { TextareaWithPlaceholder } from "./variants/with-placeholder";
import { TextareaWithStartContent } from "./variants/with-start-content";
import { TextareaWithoutLabel } from "./variants/without-label";

export const metadata: Metadata = {
  title: "Textarea",
};

const Textarea = () => {
  return (
    <VariantPage heading="Textarea">
      <VariantWrapper heading="Default">
        <TextareaDefault />
      </VariantWrapper>
      <VariantWrapper heading="Controlled">
        <TextareaControlled />
      </VariantWrapper>
      <VariantWrapper heading="Helper Text">
        <TextareaHelperText />
      </VariantWrapper>
      <VariantWrapper heading="Error State">
        <TextareaErrorState />
      </VariantWrapper>
      <VariantWrapper heading="Disabled">
        <TextareaDisabled />
      </VariantWrapper>
      <VariantWrapper heading="With Placeholder">
        <TextareaWithPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="WithoutLabel">
        <TextareaWithoutLabel />
      </VariantWrapper>
      <VariantWrapper heading="With Start Content">
        <TextareaWithStartContent />
      </VariantWrapper>
      <VariantWrapper heading="With End Content">
        <TextareaWithEndContent />
      </VariantWrapper>
      <VariantWrapper heading="WithIcon">
        <TextareaWithIcon />
      </VariantWrapper>
      <VariantWrapper heading="Sizes">
        <TextareaSizes />
      </VariantWrapper>
      <VariantWrapper heading="Placeholder">
        <TextareaPlaceholder />
      </VariantWrapper>
      <VariantWrapper heading="Variant">
        <TextareaVariants />
      </VariantWrapper>
      <VariantWrapper heading="LabelHelper">
        <TextareaLabelHelper />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Textarea;
