import NextLink from "next/link";

const components = [
  "accordion",
  "alert",
  "autocomplete",
  "avatar",
  "badge",
  "button",
  "card",
  "checkbox",
  "chip",
  "confirmation",
  "data-table",
  "dialog",
  "divider",
  "drawer",
  "editor",
  "file-upload",
  "header",
  "input",
  "link",
  "menu",
  "otp-input",
  "popover",
  "progress",
  "radio",
  "rating",
  "repeater",
  "ripple",
  "select",
  "skeleton",
  "switch",
  "tab",
  "table",
  "textarea",
  "toast",
  "tooltip",
  "typography",
];

export const ComponentsSidebar = () => {
  return (
    <div className="bg-background-tertiary flex min-w-[240px] flex-col gap-1 rounded-lg p-2 py-12">
      {components.map((item) => {
        return (
          <NextLink
            key={item}
            href={`/components/${item}` as any}
            className="px-1 py-2 text-sm font-normal capitalize hover:bg-background-secondary rounded-lg"
          >
            {item}
          </NextLink>
        );
      })}
    </div>
  );
};
