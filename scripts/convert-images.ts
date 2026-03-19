import fs from "fs";
import path from "path";
import sharp from "sharp";

const INPUT_DIR = path.resolve("public/projects");
const OUTPUT_DIR = path.resolve("public/projectsWebp");

async function convertFolder(inputDir: string, outputDir: string) {
    fs.mkdirSync(outputDir, { recursive: true });

    const entries = fs.readdirSync(inputDir, { withFileTypes: true });

    for (const entry of entries) {
        const inputPath = path.join(inputDir, entry.name);
        const outputPath = path.join(outputDir, entry.name);

        if (entry.isDirectory()) {
            await convertFolder(inputPath, outputPath);
            continue;
        }

        if (entry.name.endsWith(".png")) {
            const webpName = entry.name.replace(".png", ".webp");
            const webpPath = path.join(outputDir, webpName);

            console.log("Convert:", inputPath);

            await sharp(inputPath)
                .webp({ quality: 82 })
                .toFile(webpPath);
        }
    }
}

async function run() {
    console.log("Start image conversion...");
    await convertFolder(INPUT_DIR, OUTPUT_DIR);
    console.log("Done.");
}

run();