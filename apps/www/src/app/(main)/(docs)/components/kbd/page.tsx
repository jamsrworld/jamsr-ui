import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { KdbKeys } from "./examples/keys";
import { KbdRadius } from "./examples/radius";
import { KbdUsage } from "./examples/usage";

const title = "Kbd";
const description =
  "A component that displays keyboard keys or key combinations, typically used to indicate shortcuts or key actions within an interface.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["kbd"][number]>(variant: T) =>
  readVariantCode("kbd", variant);

const Page = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <KbdUsage />
      </VariantWrapper>
      <VariantWrapper heading="Keys" code={code("keys")}>
        <KdbKeys />
      </VariantWrapper>
      <VariantWrapper heading="Radius" code={code("radius")}>
        <KbdRadius />
      </VariantWrapper>
    </VariantPage>
  );
};

export default Page;
