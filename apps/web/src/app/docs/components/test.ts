import { writeFileSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const items = [
  "alert",
  "autocomplete",
  "avatar",
  "breadcrumb",
  "button",
  "card",
  "charts",
  "checkbox",
  "chip",
  "circular-progress",
  "clipboard",
  "collapsible",
  "confirmation",
  "data-table",
  "date-picker",
  "dialog",
  "divider",
  "drawer",
  "editor",
  "header",
  "icon-button",
  "input",
  "kbd",
  "linear-progress",
  "link",
  "menu",
  "number-input",
  "otp-input",
  "pagination",
  "popover",
  "radio",
  "rating",
  "ripple",
  "scroll-area",
  "select",
  "sidebar",
  "skeleton",
  "slider",
  "switch",
  "table",
  "tabs",
  "tags-input",
  "text",
  "textarea",
  "toast",
  "toggle",
  "tooltip",
];

const template = `import { DocsPage } from "@/components/docs-page";
import { readMetaUrl } from "@/utils/code";
import { Text } from "ui/text";
import { Metadata } from "next";

const title = "{{title}}";
const description = "{{title}}";

export const metadata: Metadata = {
  title,
  description,
};

const {{title}} = () => {
  const resolvePath = readMetaUrl(import.meta.url, "/examples/");
  return (
    <DocsPage title={title} description={description}>
      <Text>Coming Soon!</Text>
    </DocsPage>
  );
};

export default {{title}};
`;

const kebabToPascal = (str: string) =>
  str.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase());

for (const item of items) {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fullPath = `${basePath}/${item}`;

  const pageContent = template.replaceAll("{{title}}", kebabToPascal(item));
  writeFileSync(`${fullPath}/page.tsx`, pageContent, "utf-8");
}
