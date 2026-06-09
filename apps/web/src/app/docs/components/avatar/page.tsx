import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AvatarFallbacks } from "./examples/fallbacks";
import { AvatarIndicatorExample } from "./examples/indicator";
import { AvatarUsage } from "./examples/usage";

const title = "Avatar";
const description =
  "Avatar is used to represent a user and displays the profile picture.";

export const metadata: Metadata = {
  title,
  description,
};

const avatarVariants = {
  size: {
    options: ["xs", "sm", "md", "lg", "xl"],
    defaultValue: "md",
  },
  color: {
    options: [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ],
    defaultValue: "default",
  },
  isBordered: {
    options: ["true", "false"],
    defaultValue: "false",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "full"],
    defaultValue: "full",
  },
};

const AvatarPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={avatarVariants}
        component={AvatarUsage}
      />
      <CodeExampleV2
        title="Fallbacks"
        url={resolvePath("fallbacks.tsx")}
        variants={avatarVariants}
        component={AvatarFallbacks}
      />
      <CodeExampleV2
        title="Indicator"
        url={resolvePath("indicator.tsx")}
        variants={avatarVariants}
        component={AvatarIndicatorExample}
      />
    </DocsPage>
  );
};

export default AvatarPage;
