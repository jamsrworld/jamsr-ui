import { withJamsrUI } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = withJamsrUI({
  content: [
    "../../packages/components/*/src/*.ts",
    "../../packages/components/*/src/**/*.ts",
    "../../packages/components/*/src/**/*.tsx",
    "../../packages/components/*/stories/**/*.tsx",
    "../../packages/theme/stories/**/*.tsx",
  ],
});

export default config;
