const fs = require("fs").promises;

/**
 * Create output files in the app directory for frontend to consume.
 * @param {Object[]} values - values to write to files
 * @param {string} values.name - of file
 * @param {any} values.value - to be written
 */
async function output(...values) {
  const outputs = values.map(fileItem => {
    const value = `export default ${JSON.stringify(fileItem.value)}`;
    return fs.writeFile(`../app/src/data/${fileItem.name}.js`, value);
  });
  await Promise.all(outputs);
}

module.exports = output;
