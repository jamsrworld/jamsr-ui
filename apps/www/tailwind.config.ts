import { type Config } from "@jamsr-ui/tailwind-config";
// import { withJamsrUI } from "@jamsr-ui/theme";
import { withJamsrUI } from "../../packages/theme/src/index";
// import { withJamsrUI } from "../../packages/theme/src/index";

const config = withJamsrUI({
  darkMode: "class",
  content: [
    "../../packages/components/*/src/**/*.{ts,tsx}",
    "../../packages/utils/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "!./node_modules",
  ],
}) satisfies Config;
export default config;
