import fs from "fs";
import path from "path";
import { getPackageInfos } from "workspace-tools";
import { parse as parsePackageName } from "parse-package-name";

async function resolveInRepo(pkg, specifier, allPackages) {
    const parsedInfo = parsePackageName(specifier);

    if (parsedInfo.name === ".") {
        parsedInfo.name = pkg;
    }

    const info = allPackages[parsedInfo.name];

    if (info) {
        return path.join(path.dirname(info.packageJsonPath), parsedInfo.path);
    }
}

async function shouldUpdate(mine, theirs) {
    if (!theirs) {
        return false;
    }

    if (!mine) {
        return true;
    }

    let result = false;

    for (const [key, value] of Object.entries(theirs)) {
        if (mine[key] !== value) {
            result = true;
        }
    }

    return result;
}

export async function generateInheritedPackageJson(cwd) {
    const allPackages = getPackageInfos(cwd);
    const modifiedPackages = [];
    const keys = ["devDependencies", "dependencies", "scripts"];

    for (const [pkg, info] of Object.entries(allPackages)) {
        if (info.inherits) {

            let mergedInheritInfo = {};

            for (const specifier of info.inherits) {
                const file = await resolveInRepo(pkg, specifier, allPackages);

                if (!file) {
                    throw new Error(`${file} does not exist`);
                }

                const inheritInfo = JSON.parse(fs.readFileSync(file, "utf8"));

                // Merge inheritInfo for given pacake together before checking shouldUpdate. This allows for symmetric inheritance
                // and ensuring if multiple herits are used, the package.json is updated with the latest version of the package.
                for (const key of keys) {
                    mergedInheritInfo[key] = { ...mergedInheritInfo[key], ...inheritInfo[key] };
                }
            }

            for (const key of keys) {
                if (await shouldUpdate(info[key], mergedInheritInfo[key])) {
                    info[key] = { ...(info[key]), ...mergedInheritInfo[key] };
                    modifiedPackages.push(pkg);
                }
            }
        }
    }

    return { allPackages, modifiedPackages };
}