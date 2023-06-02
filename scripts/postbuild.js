const fs = require('fs');
const fastGlob = require('fast-glob');

// Delete sourcemaps
const mapFiles = fastGlob.sync('./dist/**/*.js.map');
mapFiles.forEach((filePath) => {
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    console.error('Fail Delete sourcemaps', err);
  }
});

// Delete sourcemaps refs
const jsFiles = fastGlob.sync('./dist/**/*.js');
jsFiles.forEach((filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    fs.writeFileSync(
      filePath,
      fileContent.replace(/\/\/# sourceMappingURL=\S+/g, '')
    );
  } catch (err) {
    console.error('Fail Delete sourcemaps refs', err);
  }
});
