/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
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

module.exports = config;
