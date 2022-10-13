const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const { exit } = require('process');

const srcDir = path.resolve(__dirname);
const outDir = path.resolve(__dirname, '..', 'dist');

// Clear output directory
fs.emptyDirSync(outDir);

exit();

const outputMapping = {
  'png': {
    fileName: (fileName) => `${outDir}/${fileName}.png`,
    options: {

    },
  },
  'gif': {
    fileName: (fileName) => `${outDir}/${fileName}.gif`,
    options: {

    },
  }
};

fs.readdirSync(srcDir).forEach(
  (file) => {
    if (/.js$/.test(file)) {
      console.error(`Skipped "${file}"`);
      return;
    }

    console.log(`Processing "${file}"`)
    const resolvedFilePath = `${srcDir}/${file}`;

    fs.copy(resolvedFilePath, `${outDir}/${file}`)
      .catch(
        (err) => console.error(err),
      );

    const unclarifiedFilename = file.replace(/\..*$/, '');

    const sharpProcessedFile = sharp(resolvedFilePath);

    Object.keys(outputMapping)
      .forEach(
        (outputFormat) => {
          const outputConfig = outputMapping[outputFormat];

          sharpProcessedFile
            .toFormat(
              outputFormat,
              outputConfig.options
            )
            .toFile(
              outputConfig.fileName(unclarifiedFilename)
            )
            .catch(
              (err) => console.error(err),
            );
        }
      )
  }
);
