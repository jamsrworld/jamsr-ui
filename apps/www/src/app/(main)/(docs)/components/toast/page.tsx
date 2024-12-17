import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { readVariantCode } from "@/utils/read-code";
import { type VariantTypes } from "@/types/variants";
import { DefaultToast } from "./examples/usage";

const title = "Toast";
const description =
  "A Toast component displays brief, non-intrusive notifications that appear on the screen to inform users about an event, such as a successful action or an error message, and typically disappears after a few seconds.";

  export const metadata: Metadata = {
    title,
    description,
  };
const code = <T extends VariantTypes["toast"][number]>(variant: T) =>
  readVariantCode("toast", variant);

const Toast = () => {
  return (
    <VariantPage heading={title} description={description}>
      <VariantWrapper heading="Usage" code={code("usage")}>
        <DefaultToast />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Toast;
