import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DialogDefault } from "./variants/default";

export const metadata: Metadata = {
  title: "Dialog",
};

const code = <T extends VariantTypes["dialog"][number]>(variant: T) =>
  readVariantCode("dialog", variant);

const Dialog = () => {
  return (
    <VariantPage heading="Dialog">
      <VariantWrapper heading="Default" code={code("default")}>
        <DialogDefault />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Dialog;
