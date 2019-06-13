const fs = require("fs").promises;
const PapaParse = require("papaparse");

const parseFare = require("./parse-fare");

/**
 * Fare Attributes
 * @typedef {Object[]} FareAttributes
 * @property {string} fare_id
 * @property {string} price
 */
/**
 * Make JSON for fare data.
 * @returns {FareAttributes}
 */
async function makeFare() {
  const fareAttributes = await fs.readFile("../data/fare_attributes.csv", {
    encoding: "utf8",
  });
  const parsedData = PapaParse.parse(fareAttributes, {
    header: true,
  });
  if (!!parsedData.errors.length) {
    return parseFare(parsedData.data);
  } else {
    console.warn("Could not retrieve data", parsedData.errors);
    return [];
  }
}

module.exports = makeFare;
