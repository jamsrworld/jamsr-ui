import { CodeExample } from "@/components/code-example";
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

const Clipboard = () => {
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
        <ClipboardUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Content"
        url={resolvePath("with-content.tsx")}
      >
        <ClipboardWithContent />
      </CodeExample>
      <CodeExample
        isCentered
        title="Without Icon"
        url={resolvePath("without-icon.tsx")}
      >
        <ClipboardWithoutIcon />
      </CodeExample>
      <CodeExample
        isCentered
        title="Events"
        url={resolvePath("events.tsx")}
      >
        <ClipboardEvents />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sound Effect"
        url={resolvePath("sound-effect.tsx")}
      >
        <ClipboardSoundEffect />
      </CodeExample>
    </DocsPage>
  );
};

export default Clipboard;
