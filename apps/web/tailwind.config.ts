import { type Config } from "@jamsr-ui/tailwind-config";
import { jamsrui } from "../../packages/theme/src/index";
// import { jamsrui } from "@jamsr-ui/theme";

const config: Config = {
  darkMode: "class",
  content: [
    "../../packages/components/*/src/**/*.{ts,tsx}",
    "../../packages/utils/src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        jamsr: "blue",
      },
    },
  },
  plugins: [...jamsrui()],
};
export default config;
