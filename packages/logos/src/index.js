/**
 * Relucent Logos Package.
 *
 * @package   Relucent\Logos
 * @license   Proprietary
 * @copyright 2022 Relucent Ltd
 * @link      https://relucent.dev
 * @since     1.0.0
 */

const path = require("path");
const fs = require("fs-extra");
const sharp = require("sharp");

const srcDir = path.resolve(__dirname);
const outDir = path.resolve(__dirname, "..", "dist");

// Clear output directory
fs.emptyDirSync(outDir);

const outputMapping = {
  png: {
    fileName: (fileName) => `${outDir}/${fileName}.png`,
    options: {},
  },
  gif: {
    fileName: (fileName) => `${outDir}/${fileName}.gif`,
    options: {},
  },
  webp: {
    fileName: (fileName) => `${outDir}/${fileName}.webp`,
    options: {},
  },
  // No JPEG due to lack of transparency
};

fs.readdirSync(srcDir).forEach((file) => {
  if (/.js$/.test(file)) {
    console.error(`Skipped "${file}"`);
    return;
  }

  console.log(`Processing "${file}"`);
  const resolvedFilePath = `${srcDir}/${file}`;

  fs.copy(resolvedFilePath, `${outDir}/${file}`).catch((err) =>
    console.error(err)
  );

  const unclarifiedFilename = file.replace(/\..*$/, "");

  const sharpProcessedFile = sharp(resolvedFilePath);

  Object.keys(outputMapping).forEach((outputFormat) => {
    const outputConfig = outputMapping[outputFormat];
    const calculatedFilename = outputConfig.fileName(unclarifiedFilename);

    sharpProcessedFile
      .toFormat(outputFormat, outputConfig.options)
      .toFile(calculatedFilename)
      .then(() => {
        console.info(`Saved: "${calculatedFilename}"`);
      })
      .catch((err) => console.error(err));
  });
});
