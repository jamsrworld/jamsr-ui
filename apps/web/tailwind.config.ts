import sharedConfig from "@jamsrworld/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@jamsrworld/ui/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};
export default config;
