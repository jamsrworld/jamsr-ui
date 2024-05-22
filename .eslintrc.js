// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
const config = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@jamsrworld/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project:true
  },
  env: {
    es6: true,
  },
};

module.export = config;
