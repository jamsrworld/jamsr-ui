import { sharedConfig, type Config } from "@jamsr-ui/tailwind-config";

const config: Config = {
  darkMode: "class",
  content: [
    "../../packages/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
};
export default config;
