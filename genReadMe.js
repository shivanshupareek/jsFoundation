// genReadMe.js
const fs = require("fs");
const path = require("path");

const targetDir = __dirname; // Gets the directory of this script file

fs.readdirSync(targetDir).forEach((file) => {
  if (
    file.endsWith(".js") &&
    file !== "genReadMe.js" // Avoid generating README for this script itself
  ) {
    const baseName = path.basename(file, ".js");
    const readmeName = `${baseName}.README.md`;

    const content = `# ${file}

This file contains JavaScript logic for **${baseName}**.

## Description
_Add a description of what this script does here._

## How to Run
\`\`\`bash
node ${file}
\`\`\`
`;

    fs.writeFileSync(path.join(targetDir, readmeName), content);
    console.log(`✅ Created ${readmeName}`);
  }
});
