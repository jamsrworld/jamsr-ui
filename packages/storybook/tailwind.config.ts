import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["../components/**/*.@(js|jsx|mjs|ts|tsx)"],
  plugins: [...jamsrui()],
};

export default config;
