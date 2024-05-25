const config = {
  root: true,
  extends: ["@jamsr-ui/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
