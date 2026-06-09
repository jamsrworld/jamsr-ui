import { Menu } from "jamsrui/menu";
import { CodeExampleV2 } from "@/components/code-example-v2";
import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Metadata } from "next";
import { VariantOptions } from "@/types";
import { MenuAligns } from "./examples/aligns";
import { MenuBackdrop } from "./examples/backdrop";
import { MenuCheckboxItemsExample } from "./examples/checkbox-items";
import { MenuControlled } from "./examples/controlled";
import { MenuGroupExample } from "./examples/group";
import { MenuNested } from "./examples/nested";
import { MenuOffset } from "./examples/offset";
import { MenuRadioItemsExample } from "./examples/radio-items";
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

const menuVariants: VariantOptions<Menu.Variants> = {
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
  radius: {
    options: ["none", "sm", "md", "lg"],
    defaultValue: "md",
  },
  backdrop: {
    options: ["transparent", "opaque", "blur"],
    defaultValue: "transparent",
  },
};

const MenuPage = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage
      title={title}
      description={description}
    >
      <CodeExampleV2
        title="Usage"
        url={resolvePath("usage.tsx")}
        variants={menuVariants}
        component={MenuUsage}
      />
      <CodeExampleV2
        title="Nested"
        url={resolvePath("nested.tsx")}
        variants={menuVariants}
        component={MenuNested}
      />
      <CodeExampleV2
        title="Radio Items"
        url={resolvePath("radio-items.tsx")}
        variants={menuVariants}
        component={MenuRadioItemsExample}
      />
      <CodeExampleV2
        title="Checkbox Items"
        url={resolvePath("checkbox-items.tsx")}
        variants={menuVariants}
        component={MenuCheckboxItemsExample}
      />
      <CodeExampleV2
        title="Group"
        url={resolvePath("group.tsx")}
        variants={menuVariants}
        component={MenuGroupExample}
      />
      <CodeExampleV2
        title="Start & End Content"
        url={resolvePath("start-end-content.tsx")}
        variants={menuVariants}
        component={MenuStartEndContent}
      />
      <CodeExampleV2
        title="With Arrow"
        url={resolvePath("with-arrow.tsx")}
        variants={menuVariants}
        component={MenuWithArrow}
      />
      <CodeExampleV2
        title="Sides"
        url={resolvePath("sides.tsx")}
        variants={menuVariants}
        component={MenuSides}
      />
      <CodeExampleV2
        title="Aligns"
        url={resolvePath("aligns.tsx")}
        variants={menuVariants}
        component={MenuAligns}
      />
      <CodeExampleV2
        title="Offset"
        url={resolvePath("offset.tsx")}
        variants={menuVariants}
        component={MenuOffset}
      />
      <CodeExampleV2
        title="Backdrop"
        url={resolvePath("backdrop.tsx")}
        variants={menuVariants}
        component={MenuBackdrop}
      />
      <CodeExampleV2
        title="Controlled"
        url={resolvePath("controlled.tsx")}
        variants={menuVariants}
        component={MenuControlled}
      />
    </DocsPage>
  );
};

export default MenuPage;
