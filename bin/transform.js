#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}

try {
  // Read file content once and store it
  let fileContent = fs.readFileSync(filePath, "utf-8");

  // Function to transform imports
  function transformImports(content) {
    const importRegex = /import\s+(['"])(.+\.css)\1\s*;/gi;
    const importMatch = content.match(importRegex);

    if (importMatch) {
      const entireImportStatement = importMatch[0];
      const importPath = path.dirname(entireImportStatement.replace(/import\s+(['"])/, '').replace(/['"];/, ''));
      const importFileName = path.basename(entireImportStatement).replace(".css", ".module.css");
      const relativePath = path.relative(path.dirname(filePath), importPath);
      const newImport = `import styles from '${path.join(relativePath, importFileName)}`;
      return content.replace(importRegex, newImport);
    } else {
      console.error("CSS import statement not found.");
      return content; // Return original content if no import found
    }
  }

  // Function to transform class names
  function transformClassNames(content) {
    const regex = /className\s*=\s*["']([^"']+)["']/g;
    return content.replace(regex, (match, className) => {
      return `className={styles${className.includes("-") ? `["${className}"]` : `.${className}`}}`;
    });
  }

  // Apply transformations
  fileContent = transformImports(fileContent);
  fileContent = transformClassNames(fileContent);

  // Write the transformed content to the file
  fs.writeFileSync(filePath, fileContent, "utf-8");
  console.log(`Imports and class names in ${filePath} have been transformed.`);
} catch (error) {
  console.error("Error during file transformation:", error);
}
