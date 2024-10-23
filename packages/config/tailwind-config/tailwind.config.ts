import { withJamsrUI } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
export const sharedConfig: Omit<Config, "content"> = withJamsrUI({
  content: [],
});
export type { Config };
