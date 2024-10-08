// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig({
  entry: ["src"],
  minify: true,
  format: ["esm", "cjs"],
  clean: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"'
    };
  },
  dts: true
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2phbXNyd29ybGQvRG9jdW1lbnRzL2NvZGUvbnBtLXBhY2thZ2VzL0BqYW1zci11aS9wYWNrYWdlcy90aGVtZS90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvamFtc3J3b3JsZC9Eb2N1bWVudHMvY29kZS9ucG0tcGFja2FnZXMvQGphbXNyLXVpL3BhY2thZ2VzL3RoZW1lXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9qYW1zcndvcmxkL0RvY3VtZW50cy9jb2RlL25wbS1wYWNrYWdlcy9AamFtc3ItdWkvcGFja2FnZXMvdGhlbWUvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidHN1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnRyeTogW1wic3JjXCJdLFxuICBtaW5pZnk6IHRydWUsXG4gIGZvcm1hdDogW1wiZXNtXCIsIFwiY2pzXCJdLFxuICBjbGVhbjogdHJ1ZSxcbiAgZXNidWlsZE9wdGlvbnMob3B0aW9ucykge1xuICAgIG9wdGlvbnMuYmFubmVyID0ge1xuICAgICAganM6ICdcInVzZSBjbGllbnRcIicsXG4gICAgfTtcbiAgfSxcbiAgZHRzOiB0cnVlLFxuICBcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxTQUFTLG9CQUFvQjtBQUU3WCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPLENBQUMsS0FBSztBQUFBLEVBQ2IsUUFBUTtBQUFBLEVBQ1IsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLEVBQ3JCLE9BQU87QUFBQSxFQUNQLGVBQWUsU0FBUztBQUN0QixZQUFRLFNBQVM7QUFBQSxNQUNmLElBQUk7QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUVQLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
