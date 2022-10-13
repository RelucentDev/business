const path = require('path');
const fs = require('fs-extra');
const sharp = require('sharp');
const { exit } = require('process');

const srcDir = path.resolve(__dirname);
const outDir = path.resolve(__dirname, '..', 'dist');

// Clear output directory
fs.emptyDirSync(outDir);

const outputMapping = {
  'png': {
    fileName: (fileName, currentOption) => `${outDir}/${fileName}${currentOption}.png`,
    options: {
      '': {

      },
      /*'@2x': {

      },*/
    },
  },
  'gif': {
    fileName: (fileName, currentOption) => `${outDir}/${fileName}${currentOption}.gif`,
    options: {
      '': {

      }
    },
  },
  'webp': {
    fileName: (fileName, currentOption) => `${outDir}/${fileName}${currentOption}.webp`,
    options: {
      '': {

      },
    },
  },
  // No JPEG due to lack of transparency
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

          Object.keys(outputConfig.options)
            .forEach(
              (formatOption) => {
                const formatOptionOptions = outputConfig.options[formatOption];

                sharpProcessedFile
                  .toFormat(
                    outputFormat,
                    formatOptionOptions
                  )
                  .toFile(
                    outputConfig.fileName(unclarifiedFilename, formatOption)
                  )
                  .catch(
                    (err) => console.error(err),
                  );
              }
            );
        }
      )
  }
);
