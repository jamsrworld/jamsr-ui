/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@jamsr-ui/eslint-config/react-library.js"],
  parserOptions: {
    project: true,
  },
};