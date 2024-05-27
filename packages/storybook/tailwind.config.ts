import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./node_modules/@jamsr-ui/**/dist/*.{js,jsx,mjs}"],
  plugins: [...jamsrui()],
};

export default config;
