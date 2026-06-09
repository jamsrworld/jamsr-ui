import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { OtpInput6Digits } from "./examples/6-digits";
import { OtpInputControlled } from "./examples/controlled";
import { OtpInputCustomization } from "./examples/customization";
import { OtpInputDisabled } from "./examples/disabled";
import { OtpInputInvalid } from "./examples/invalid";
import { OtpInputOnComplete } from "./examples/on-complete";
import { OtpInputUsage } from "./examples/usage";
import { OtpInputWithPatterns } from "./examples/with-patterns";
import { OtpInputWithSeparators } from "./examples/with-separators";

const title = "Otp Input";
const description =
  "The One-Time Password (OTP) component is designed to facilitate secure, user-friendly and enhancing the user experience during multi-factor authentication.";

export const metadata: Metadata = {
  title,
  description,
};

const otpInputVariants = {
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "md",
  },
};

const OtpInputPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        isCentered
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={otpInputVariants}
        component={OtpInputUsage}
      />
      <CodeExampleV2
        isCentered
        title="6 Digits"
        url={resolvePath("6-digits.tsx")}
        variants={otpInputVariants}
        component={OtpInput6Digits}
      />
      <CodeExampleV2
        isCentered
        title="With Separators"
        url={resolvePath("with-separators.tsx")}
        variants={otpInputVariants}
        component={OtpInputWithSeparators}
      />
      <CodeExampleV2
        isCentered
        title="On Complete"
        url={resolvePath("on-complete.tsx")}
        variants={otpInputVariants}
        component={OtpInputOnComplete}
      />
      <CodeExampleV2
        isCentered
        title="With Patterns"
        url={resolvePath("with-patterns.tsx")}
        variants={otpInputVariants}
        component={OtpInputWithPatterns}
      />
      <CodeExampleV2
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={otpInputVariants}
        component={OtpInputControlled}
      />
      <CodeExampleV2
        isCentered
        title="Invalid"
        url={resolvePath("invalid.tsx")}
        variants={otpInputVariants}
        component={OtpInputInvalid}
      />
      <CodeExampleV2
        isCentered
        title="Disabled"
        url={resolvePath("disabled.tsx")}
        variants={otpInputVariants}
        component={OtpInputDisabled}
      />
      <CodeExampleV2
        isCentered
        title="Customization"
        url={resolvePath("customization.tsx")}
        variants={otpInputVariants}
        component={OtpInputCustomization}
      />
    </DocsPage>
  );
};

export default OtpInputPage;
