import { mkdirSync, readFileSync, writeFileSync } from "fs";

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

components.forEach((item) => {
  const folderPath = `./test/${item}`;
  const filePath = `${folderPath}/page.tsx`;
  mkdirSync(folderPath);

  // read template file
  const data = readFileSync("./Avatar.tsx", "utf-8");

  // item to capitalize
  const componentName = item.charAt(0).toUpperCase() + item.slice(1);
  const pageData = data.replaceAll("Avatar", componentName);
  writeFileSync(filePath, pageData);
});
