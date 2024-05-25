import { jamsrui } from "@jamsr-ui/theme";
import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
export const sharedConfig: Omit<Config, "content"> = {
  plugins: [...jamsrui()],
};

export type { Config };
