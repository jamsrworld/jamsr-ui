import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { StepperControlled } from "./variants/controlled";
import { StepperEvents } from "./variants/events";
import { StepperMinMaxValue } from "./variants/min-max-value";
import { StepperUsage } from "./variants/usage";

const title = "Stepper";

export const metadata: Metadata = {
  title,
  description:
    "Stepper is a component that allows users to increment or decrement a value.",
};

const code = <T extends VariantTypes["stepper"][number]>(variant: T) =>
  readVariantCode("stepper", variant);

const Page = () => {
  return (
    <VariantPage heading={title}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <StepperUsage />
      </VariantWrapper>
      <VariantWrapper heading="Min. Max. Value" code={code("min-max-value")}>
        <StepperMinMaxValue />
      </VariantWrapper>
      <VariantWrapper heading="Controlled" code={code("controlled")}>
        <StepperControlled />
      </VariantWrapper>
      <VariantWrapper heading="Events" code={code("events")}>
        <StepperEvents />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
