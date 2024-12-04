import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { DefaultToast } from "./examples/usage";

export const metadata: Metadata = {
  title: "Toast",
};

const code = <T extends VariantTypes["toast"][number]>(variant: T) =>
  readVariantCode("toast", variant);

const Toast = () => {
  return (
    <VariantPage heading="Toast">
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DefaultToast />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Toast;
