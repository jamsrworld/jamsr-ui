/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: ["@jamsrworld/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
