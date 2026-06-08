import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { OtpInput6Digits } from "./examples/6-digits";
import { OtpInputControlled } from "./examples/controlled";
import { OtpInputCustomization } from "./examples/customization";
import { OtpInputDisabled } from "./examples/disabled";
import { OtpInputOnComplete } from "./examples/on-complete";
import { OtpInputRadius } from "./examples/radius";
import { OtpInputSizes } from "./examples/sizes";
import { OtpInputUsage } from "./examples/usage";
import { OtpInputWithPatterns } from "./examples/with-patterns";
import { OtpInputWithSeparators } from "./examples/with-separators";
import { OtpInputInvalid } from "./examples/invalid";

const title = "Otp Input";
const description =
  "The One-Time Password (OTP) component is designed to facilitate secure, user-friendly and enhancing the user experience during multi-factor authentication.";

export const metadata: Metadata = {
  title,
  description,
};

const OtpInput = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExample
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
      >
        <OtpInputUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="6 Digits"
        url={resolvePath("6-digits.tsx")}
      >
        <OtpInput6Digits />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Separators"
        url={resolvePath("with-separators.tsx")}
      >
        <OtpInputWithSeparators />
      </CodeExample>
      <CodeExample
        isCentered
        title="On Complete"
        url={resolvePath("on-complete.tsx")}
      >
        <OtpInputOnComplete />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Patterns"
        url={resolvePath("with-patterns.tsx")}
      >
        <OtpInputWithPatterns />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <OtpInputControlled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Invalid"
        url={resolvePath("invalid.tsx")}
      >
        <OtpInputInvalid />
      </CodeExample>
      <CodeExample
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
      >
        <OtpInputDisabled />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sizes"
        url={resolvePath("sizes.tsx")}
      >
        <OtpInputSizes />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <OtpInputRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Customization"
        url={resolvePath("customization.tsx")}
      >
        <OtpInputCustomization />
      </CodeExample>
    </DocsPage>
  );
};

export default OtpInput;
