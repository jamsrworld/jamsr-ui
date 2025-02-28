/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const sharedConfig = {
  plugins: ["prettier-plugin-tailwindcss"],
  arrowParens: "always",
  bracketSameLine: false,
  singleQuote: false,
  trailingComma: "all",
  singleAttributePerLine: true,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  semi: true,
};

module.exports = { sharedConfig };
