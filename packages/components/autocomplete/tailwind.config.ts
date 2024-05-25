import { sharedConfig, type Config } from "@jamsr-ui/tailwind-config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};
export default config;
