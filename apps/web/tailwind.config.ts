import { sharedConfig } from "@jamsr-ui/tailwind-config";
import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "../../packages/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
  plugins: [...jamsrui()],
};
export default config;
