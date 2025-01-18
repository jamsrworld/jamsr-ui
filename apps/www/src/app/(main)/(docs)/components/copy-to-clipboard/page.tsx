import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { type Metadata } from "next";
import { CopyToClipboardEvents } from "./examples/events";
import { CopyToClipboardUsage } from "./examples/usage";
import { CopyToClipboardWithChildren } from "./examples/with-children";
import { CopyToClipboardWithoutButton } from "./examples/without-button";
import { CopyToClipboardSoundEffect } from "./examples/sound-effect";
import { CopyToClipboardGlobalConfig } from "./examples/global-config";

const title = "Copy To Clipboard";
const description = "";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["copy-to-clipboard"][number]>(
  variant: T,
) => readVariantCode("copy-to-clipboard", variant);

const CopyToClipboard = () => {
  return (
    <VariantPage heading="Copy To Clipboard" description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <CopyToClipboardUsage />
      </VariantWrapper>
      <VariantWrapper heading="With Children" code={code("with-children")}>
        <CopyToClipboardWithChildren />
      </VariantWrapper>
      <VariantWrapper heading="Without Button" code={code("without-button")}>
        <CopyToClipboardWithoutButton />
      </VariantWrapper>
      <VariantWrapper heading="Events" code={code("events")}>
        <CopyToClipboardEvents />
      </VariantWrapper>
      <VariantWrapper heading="Sound Effect" code={code("sound-effect")}>
        <CopyToClipboardSoundEffect />
      </VariantWrapper>
      <VariantWrapper heading="Global Config" code={code("global-config")}>
        <CopyToClipboardGlobalConfig />
      </VariantWrapper>
    </VariantPage>
  );
};
export default CopyToClipboard;
