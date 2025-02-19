import * as fs from "fs";
import * as path from "path";

const componentsDir = path.join(
  __dirname,
  "..",
  "apps",
  "www",
  "src",
  "app",
  "(main)",
  "(docs)",
  "components",
);
const chartsDir = path.join(componentsDir, "charts");
const nextDir = path.join(componentsDir, "next");

// Recursively get all files from a directory
function getFiles(dir: string, prefix = ""): { [key: string]: string[] } {
  const result: { [key: string]: string[] } = {};
  fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      const key = `${prefix}${file.name}`;
      result[key] = [];
      try {
        const files = fs
          .readdirSync(`${filePath}/examples`)
          .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));
        files.forEach((f) => {
          result[key].push(f.replace(/\.(ts|tsx)$/, ""));
        });
      } catch (err) {
        //
      }
    }
  });

  return result;
}

function generateTypes(fileStructure: { [key: string]: string[] }) {
  let typeDefinition = "export type VariantTypes = {\n";
  Object.entries(fileStructure).forEach(([key, files]) => {
    const formattedFiles = files.map((file) => `"${file}"`).join(", ");
    typeDefinition += `  "${key}": [${formattedFiles}];\n`;
  });
  typeDefinition += "};\n";
  return typeDefinition;
}

function createFileTypes() {
  const fileStructure = getFiles(componentsDir);
  const chartFileStructure = getFiles(chartsDir);
  const nextFiles = getFiles(nextDir, "next-");

  const allFileStructure = {
    ...fileStructure,
    ...chartFileStructure,
    ...nextFiles,
  };
  const types = generateTypes(allFileStructure);

  const outputPath = path.join(
    __dirname,
    "..",
    "apps",
    "www",
    "src",
    "types",
    "variants.d.ts",
  );
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  fs.writeFileSync(outputPath, types);
  console.log(`FileTypes generated successfully at ${outputPath}`);
}

createFileTypes();
