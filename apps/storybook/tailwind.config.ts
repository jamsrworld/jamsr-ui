import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../packages/components/*/src/*.ts",
    "../../packages/components/*/src/**/*.ts",
    "../../packages/components/*/src/**/*.tsx",
    "../../packages/components/*/stories/**/*.tsx",
  ],
  plugins: [...jamsrui()],
};

export default config;
