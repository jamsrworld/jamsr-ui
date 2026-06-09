import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { ClipboardEvents } from "./examples/events";
import { ClipboardSoundEffect } from "./examples/sound-effect";
import { ClipboardUsage } from "./examples/usage";
import { ClipboardWithContent } from "./examples/with-content";
import { ClipboardWithoutIcon } from "./examples/without-icon";

const title = "Clipboard";
const description = "Clipboard";

export const metadata: Metadata = {
  title,
  description,
};

const clipboardVariants = {
  variant: {
    options: ["solid", "bordered", "text", "light", "soft"],
    defaultValue: "solid",
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
  size: {
    options: ["sm", "md", "lg"],
    defaultValue: "md",
  },
  radius: {
    options: ["none", "sm", "md", "lg", "xl", "full"],
    defaultValue: "lg",
  },
};

const ClipboardPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={clipboardVariants}
        component={ClipboardUsage}
      />
      <CodeExampleV2
        title="With Content"
        url={resolvePath("with-content.tsx")}
        variants={clipboardVariants}
        component={ClipboardWithContent}
      />
      <CodeExampleV2
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
        variants={clipboardVariants}
        component={ClipboardWithoutIcon}
      />
      <CodeExampleV2
        title="Events"
        url={resolvePath("events.tsx")}
        variants={clipboardVariants}
        component={ClipboardEvents}
      />
      <CodeExampleV2
        title="Sound Effect"
        url={resolvePath("sound-effect.tsx")}
        variants={clipboardVariants}
        component={ClipboardSoundEffect}
      />
    </DocsPage>
  );
};

export default ClipboardPage;
