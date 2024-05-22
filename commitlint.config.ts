export default {
  extends: ["@commitlint/config-conventional"],
  ignores: [(commit: string) => commit.startsWith("other: ")],
};
