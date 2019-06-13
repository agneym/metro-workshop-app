const fs = require("fs").promises;
const PapaParse = require("papaparse");

const parseFare = require("./parse-fare");

/**
 * Fare Rules
 * @typedef {Object[]} FareRules
 * @property {string} fare_id
 * @property {string} origin_id
 * @property {string} destination_id
 */
/**
 * Make JSON for fare data.
 * @returns {FareRules}
 */
async function makeFareRules() {
  const fareAttributes = await fs.readFile("../data/fare_rules.csv", {
    encoding: "utf8",
  });
  const parsedData = PapaParse.parse(fareAttributes, {
    header: true,
  });
  if (!!parsedData.errors.length) {
    return parsedData.data;
  } else {
    console.warn("Could not retrieve data", parsedData.errors);
    return [];
  }
}

module.exports = makeFareRules;
