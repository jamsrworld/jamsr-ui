import { type Config } from "@jamsr-ui/tailwind-config";
import { jamsrui } from "../../packages/theme/src/index";

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
        // background: "red",
      },
    },
  },
  plugins: [
    ...jamsrui({
      
    }),
  ],
};
export default config;
