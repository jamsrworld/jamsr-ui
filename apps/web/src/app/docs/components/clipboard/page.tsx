import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { VariantOptions } from "@/types";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { Clipboard } from "ui/clipboard";
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
        component={ClipboardUsage}
      />
      <CodeExampleV2
        title="With Content"
        url={resolvePath("with-content.tsx")}
        component={ClipboardWithContent}
      />
      <CodeExampleV2
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
        component={ClipboardWithoutIcon}
      />
      <CodeExampleV2
        title="Events"
        url={resolvePath("events.tsx")}
        component={ClipboardEvents}
      />
      <CodeExampleV2
        title="Sound Effect"
        url={resolvePath("sound-effect.tsx")}
        component={ClipboardSoundEffect}
      />
    </DocsPage>
  );
};

export default ClipboardPage;
