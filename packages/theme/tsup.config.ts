import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  minify: true,
  format: ["esm", "cjs"],
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  dts: true,
});
