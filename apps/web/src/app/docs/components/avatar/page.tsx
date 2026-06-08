import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { AvatarBordered } from "./examples/bordered";
import { AvatarColors } from "./examples/colors";
import { AvatarFallbacks } from "./examples/fallbacks";
import { AvatarIndicatorExample } from "./examples/indicator";
import { AvatarRadius } from "./examples/radius";
import { AvatarUsage } from "./examples/usage";

const title = "Avatar";
const description =
  "Avatar is used to represent a user and displays the profile picture.";

export const metadata: Metadata = {
  title,
  description,
};

const Avatar = () => {
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
        <AvatarUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <AvatarRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <AvatarColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Fallbacks"
        url={resolvePath("fallbacks.tsx")}
      >
        <AvatarFallbacks />
      </CodeExample>
      <CodeExample
        isCentered
        title="Bordered"
        url={resolvePath("bordered.tsx")}
      >
        <AvatarBordered />
      </CodeExample>
      <CodeExample
        isCentered
        title="Indicator"
        url={resolvePath("indicator.tsx")}
      >
        <AvatarIndicatorExample />
      </CodeExample>
    </DocsPage>
  );
};

export default Avatar;
