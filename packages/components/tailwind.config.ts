import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "../../packages/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [...jamsrui()],
};
export default config;
