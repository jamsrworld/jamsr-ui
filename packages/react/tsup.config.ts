import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/styles/global.css",
    "src/**/*@(ts|tsx)",
    "!src/**/*.stories.tsx",
    "!src/**/*.d.ts",
  ],
  minify: true,
  format: ["esm"],
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
});
