import { EOL } from "node:os";

interface Manifest {
    name: string;
    version: string;
    license: string;
}

const jsr = Bun.file("./jsr.json", { type: "application/json" });
const pkg = Bun.file("./package.json", { type: "application/json" });
const pkgContent: Manifest = await pkg.json();
const jsrContent: Manifest = await jsr.json();

await Bun.write(
    jsr,
    `${JSON.stringify(
        {
            ...jsrContent,
            name: pkgContent.name,
            version: pkgContent.version,
            license: pkgContent.license,
        },
        null,
        2
    )}${EOL}`
);
