import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  minify: true,
  format: ["cjs", "esm"],
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: false,
});
