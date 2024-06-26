import { sharedConfig } from "@jamsr-ui/tailwind-config";
import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "../../packages/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
  theme: {
    fontFamily: {},
  },
  plugins: [...jamsrui()],
};
export default config;
