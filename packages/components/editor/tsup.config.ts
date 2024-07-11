import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src"],
  format: ["cjs", "esm"],
  dts: true,
  minify: true,
  splitting: true,
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
