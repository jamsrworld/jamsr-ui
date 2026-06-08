import { CodeExample } from "@/components/code-example";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { MenuAligns } from "./examples/aligns";
import { MenuBackdrop } from "./examples/backdrop";
import { MenuCheckboxItemsExample } from "./examples/checkbox-items";
import { MenuColors } from "./examples/colors";
import { MenuControlled } from "./examples/controlled";
import { MenuGroupExample } from "./examples/group";
import { MenuNested } from "./examples/nested";
import { MenuOffset } from "./examples/offset";
import { MenuRadioItemsExample } from "./examples/radio-items";
import { MenuRadius } from "./examples/radius";
import { MenuSides } from "./examples/sides";
import { MenuStartEndContent } from "./examples/start-end-content";
import { MenuUsage } from "./examples/usage";
import { MenuWithArrow } from "./examples/with-arrow";

const title = "Menu";
const description =
  "A navigational component that displays a list of options or actions, allowing users to select from various choices within an interface in a structured manner.";

export const metadata: Metadata = {
  title,
  description,
};

const Menu = () => {
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
        <MenuUsage />
      </CodeExample>
      <CodeExample
        isCentered
        title="Nested"
        url={resolvePath("nested.tsx")}
      >
        <MenuNested />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radio Items"
        url={resolvePath("radio-items.tsx")}
      >
        <MenuRadioItemsExample />
      </CodeExample>
      <CodeExample
        isCentered
        title="Checkbox Items"
        url={resolvePath("checkbox-items.tsx")}
      >
        <MenuCheckboxItemsExample />
      </CodeExample>
      <CodeExample
        isCentered
        title="Group"
        url={resolvePath("group.tsx")}
      >
        <MenuGroupExample />
      </CodeExample>
      <CodeExample
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
        isCentered
      >
        <MenuStartEndContent />
      </CodeExample>
      <CodeExample
        isCentered
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
      >
        <MenuWithArrow />
      </CodeExample>
      <CodeExample
        isCentered
        title="Sides"
        url={resolvePath("sides.tsx")}
      >
        <MenuSides />
      </CodeExample>
      <CodeExample
        isCentered
        title="Aligns"
        url={resolvePath("aligns.tsx")}
      >
        <MenuAligns />
      </CodeExample>
      <CodeExample
        isCentered
        title="Offset"
        url={resolvePath("offset.tsx")}
      >
        <MenuOffset />
      </CodeExample>
      <CodeExample
        isCentered
        title="Radius"
        url={resolvePath("radius.tsx")}
      >
        <MenuRadius />
      </CodeExample>
      <CodeExample
        isCentered
        title="Colors"
        url={resolvePath("colors.tsx")}
      >
        <MenuColors />
      </CodeExample>
      <CodeExample
        isCentered
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
      >
        <MenuBackdrop />
      </CodeExample>
      <CodeExample
        isCentered
        title="Controlled"
        url={resolvePath("controlled.tsx")}
      >
        <MenuControlled />
      </CodeExample>
    </DocsPage>
  );
};

export default Menu;
