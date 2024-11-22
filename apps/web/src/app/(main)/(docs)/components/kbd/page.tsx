import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { KdbKeys } from "./variants/keys";
import { KbdUsage } from "./variants/usage";

const title = "Kbd";
export const metadata: Metadata = {
  title,
};

const code = <T extends VariantTypes["kbd"][number]>(variant: T) =>
  readVariantCode("kbd", variant);

const Page = () => {
  return (
    <VariantPage heading={title}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <KbdUsage />
      </VariantWrapper>
      <VariantWrapper heading="Keys" code={code("keys")}>
        <KdbKeys />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
