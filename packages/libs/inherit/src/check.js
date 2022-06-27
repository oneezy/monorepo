import { generateInheritedPackageJson } from "./generatePackageJson.js";

export async function check(cwd) {
    const updatedInfo = generateInheritedPackageJson(cwd);
    if (updatedInfo.modifiedPackages.length > 0) {
        const recoveryCommand = options.recovery || "inherit update";
        console.error(
            `The inheritance of package.json is in an inconsistent state. These packages
            are inconsistent: ${updatedInfo.modifiedPackages.join(", ")} Please run the following command:
            > ${recoveryCommand}`
        );

        process.exit(1);
    }
}