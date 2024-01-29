# css-modules-transformer
[![npm version](https://badge.fury.io/js/css-module-transformer-beta.svg)](https://www.npmjs.com/package/css-module-transformer-beta)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Easily transition your codebase to CSS Modules for modular, maintainable styles!
**Say goodbye to messy, global styles and hello to the power of CSS Modules!** This handy NPM package seamlessly transforms your JavaScript files to utilize scoped styles, making your codebase cleaner, more maintainable, and conflict-free. Managing CSS in larger projects can become cumbersome. Traditional CSS often leads to style bleed, where styles intended for one component affect others unintentionally. Additionally, manually handling CSS imports  and class names across multiple files can be tedious and error-prone.
## ✨ What it does:
- Automatically converts `className="example"` to `className={styles.example}` for static class names.
- Smartly handles dynamic class names: `className={dynamic-ClassName}` or `className="dynamic-ClassName"` becomes`className={styles[dynamic-ClassName]}` .
- Updates regular CSS imports to module-specific ones for proper integration, Ensures correct file paths and extensions for seamless usage.
- No more manual replacements! Sit back and relax while `css-modules-transformer` does the heavy lifting.

## 🌐 Example
**Before:**
``` js
import react from 'react';
import { render } from 'react-dom';
import './long/relative/path/styles.css';

const DummyComponent = () => {
    return (
        <div className="container">
            <div className="header-text">
            <h1>Hello, World!</h1>
            </div>
        </div>
    );
};

export default DummyComponent;
```
**After:**
``` js
import react from 'react';
import styles from './long/relative/path/styles.module.css'; 

const DummyComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles["header-text"]}>
            <h1>Hello, World!</h1>
            </div>
        </div>
    );
};

export default DummyComponent;
```
## 🛠️ Getting Started: 
1. Install css-modules-transformer globally
   ``` sh
   npm install -g css-modules-transformer
   ```
2. Transform a file:
   ``` sh
   npx transform ./path/to/your-file.jsx
   ```
3. Witness the magic! ✨

## Benefits:

- **Modular Styles:** Each component owns its styles, preventing bleed and unintended conflicts.
- **Improved Maintainability:** Easier to find and update styles specific to individual components.
- **Scalable Codebase:** Manage large projects with confidence, thanks to organized and isolated styles.

## 🚀 Upcoming Features:
We're actively working on expanding the package's capabilities:

- Recursive Directory Handling: Transform multiple files within directories for effortless codebase-wide conversion.
- Customize transformations with configuration options
- Build Tool Integration: Seamlessly integrate with popular build tools like Webpack and Rollup for streamlined workflows.
- Customizable Class Name Formatting: Control how generated class names are formatted for greater flexibility and alignment with project conventions.

## 📝 Additional Notes
- Remember to rename your CSS files with the .module.css extension to ensure compatibility with CSS Modules.
- Adjust your build process to handle CSS Modules appropriately, typically using a plugin or loader.
- Thoroughly test your transformed components to guarantee styles function as expected.

## 📝 Limitations and Edge Cases:

- Currently supports single-file transformation.
- Doesn't handle nested imports or complex directory structures (yet!).
- Manual adjustments might be required for intricate codebases.


## 🌍 Support
- If you encounter any issues or have questions, feel free to open an issue 

