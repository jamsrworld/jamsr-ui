import { Code } from "@/components/code";
import { VariantPage } from "@/components/docs/variant-page";
import { VariantWrapper } from "@/components/docs/variant-wrapper";
import { type Metadata } from "next";
import { type VariantTypes } from "@/types/variants";
import { readVariantCode } from "@/utils/read-code";
import { AlertCustomIcon } from "./variants/custom-icon";
import { AlertDefault } from "./variants/default";
import { AlertStatus } from "./variants/status";
import { AlertVariants } from "./variants/variants";
import { AlertWithAction } from "./variants/with-action";
import { AlertWithDescription } from "./variants/with-description";
import { WithoutIcon } from "./variants/without-icon";

const title = "Alert";
const description =
  "A modal dialog that interrupts the user with important content and expects a response.";

export const metadata: Metadata = {
  title,
  description,
};

const code = <T extends VariantTypes["alert"][number]>(variant: T) =>
  readVariantCode("alert", variant);

const Alert = () => {
  return (
    <VariantPage heading="Alert" description={description}>
      <VariantWrapper heading="Default" code={code("default")}>
        <AlertDefault />
      </VariantWrapper>
      <VariantWrapper
        heading="With Description"
        description={
          <div>
            Use the <Code>children</Code> prop to provide additional context to
            the alert. This will be displayed below the alert message.
          </div>
        }
        code={code("with-description")}
      >
        <AlertWithDescription />
      </VariantWrapper>
      <VariantWrapper
        heading="With Action"
        description={
          <div>
            Use the <Code>isMultiple</Code> prop to allow multiple items to be
            expanded at once.
          </div>
        }
        code={code("with-action")}
      >
        <AlertWithAction />
      </VariantWrapper>

      <VariantWrapper
        heading="Custom Icon"
        description={
          <div>
            Use the <Code>icon</Code> prop to override the Alert's icon.
          </div>
        }
        code={code("custom-icon")}
      >
        <AlertCustomIcon />
      </VariantWrapper>
      <VariantWrapper
        heading="Without Icon"
        description={
          <div>
            Use the <Code>icon={`{null}`}</Code> prop to override the Alert's
            icon.
          </div>
        }
        code={code("without-icon")}
      >
        <WithoutIcon />
      </VariantWrapper>
      <VariantWrapper
        heading="Status"
        description={
          <div>
            Use the <Code>status</Code> prop for different states::{" "}
            <Code>success</Code>(the default), <Code>info</Code>,{" "}
            <Code>warning</Code> and <Code>danger</Code> with corresponding icon
            and color combinations for each.
          </div>
        }
        code={code("status")}
      >
        <AlertStatus />
      </VariantWrapper>
      <VariantWrapper
        heading="Variants"
        description={
          <div>
            Use the <Code>variant</Code> prop to change the visual style of the
            alert. Values can be <Code>outlined</Code> or <Code>solid</Code>
          </div>
        }
        code={code("variants")}
      >
        <AlertVariants />
      </VariantWrapper>
    </VariantPage>
  );
};
export default Alert;
