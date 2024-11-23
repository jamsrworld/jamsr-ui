import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { DialogPopoverItems } from "./variants/popover-items";
import { DialogUsage } from "./variants/usage";
import { DialogWithoutCloseBtn } from "./variants/without-close-btn";

export const metadata: Metadata = {
  title: "Dialog",
};

const code = <T extends VariantTypes["dialog"][number]>(variant: T) =>
  readVariantCode("dialog", variant);

const Dialog = () => {
  return (
    <VariantPage heading="Dialog">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DialogUsage />
      </VariantWrapper>
      <VariantWrapper heading="Popover Items" code={code("popover-items")}>
        <DialogPopoverItems />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Close Btn"
        code={code("without-close-btn")}
      >
        <DialogWithoutCloseBtn />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Dialog;
