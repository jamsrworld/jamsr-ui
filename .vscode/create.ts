/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { mkdirSync, writeFileSync, readFileSync } from "fs";

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
  "dialog",
  "divider",
  "header",
  "image",
  "image-upload",
  "link",
  "menu",
  "input",
  "otp-input",
  "popover",
  "progress",
  "radio",
  "ripple",
  "select",
  "skeleton",
  "switch",
  "tab",
  "tooltip",
  "typography",
];

for (const component of components) {
  mkdirSync(component);
  const srcFolder = `./${component}/src`;
  const testFolder = `./${component}/__test__`;
  const storiesFolder = `./${component}/stories`;

  mkdirSync(srcFolder);
  mkdirSync(testFolder);
  mkdirSync(storiesFolder);

  // capital case
  const Component = component.slice(0, 1).toUpperCase() + component.slice(1);
  console.log("Component:->", Component);
  const rep = (content: string) =>
    content.replace(/Button/g, Component).replace(/button/g, component);

  const mainFile = `./${component}/src/${component}.tsx`;
  const mainFileContent = rep(readFileSync("./c/src/Button.tsx", "utf-8"));
  writeFileSync(mainFile, mainFileContent, "utf-8");

  const testFile = `./${component}/__test__/${component}.test.tsx`;
  const testFileContent = rep(readFileSync("./c/__tests__/button.test.tsx", "utf-8"));
  writeFileSync(testFile, testFileContent, "utf-8");

  const storyFile = `./${component}/stories/${component}.stories.tsx`;
  const storyFileContent = rep(readFileSync("./c/stories/button.stories.tsx", "utf-8"));
  writeFileSync(storyFile, storyFileContent, "utf-8");

  const indexFile = `./${component}/index.ts`;
  const indexFileContent = `export {${Component}} from "./src/${component}";`;
  writeFileSync(indexFile, indexFileContent, "utf-8");
}
