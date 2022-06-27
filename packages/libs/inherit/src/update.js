import fs from 'fs';
import os from 'os';
import { detectNewline } from 'detect-newline';
import { generateInheritedPackageJson } from "./generatePackageJson.js";
import { exec } from 'child_process';

export async function update(cwd) {
    const updatedInfo = await generateInheritedPackageJson(cwd);
    if (updatedInfo.modifiedPackages.length > 0) {
        for (const pkg of updatedInfo.modifiedPackages) {
            const info = updatedInfo.allPackages[pkg];
            const { packageJsonPath, ...output } = info;

            const newLine = detectNewline(fs.readFileSync(info.packageJsonPath, 'utf-8')) || os.EOL;

            fs.writeFileSync(
                info.packageJsonPath,
                JSON.stringify(output, null, 2).replace(/\n/g, newLine) + newLine
            );

            exec(`pnpm --filter=${pkg} install`);
        }

        let updatedPackages = [...new Set(updatedInfo.modifiedPackages)];

        console.log(
            `Updated these packages: ${updatedPackages.join(", ")}`
        );
    } else {
        console.log("Nothing needs to be updated.");
    }
}