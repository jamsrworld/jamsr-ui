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
      colors: {},
    },
  },
  plugins: [
    ...jamsrui({
      colors: {
        light: {
          primary: {
            DEFAULT: "#000",
            foreground: "#fff",
          },
        },
      },
    }),
  ],
};
export default config;
