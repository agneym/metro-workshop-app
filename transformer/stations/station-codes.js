const fs = require("fs").promises;
const PapaParse = require("papaparse");

/**
 * Station Details
 * @typedef {Object[]} StationDetails
 * @property {string} stop_id
 * @property {string} stop_name
 */
/**
 * Make JSON for station id and name
 * @returns {StationDetails}
 */
async function getStationDetails() {
  const stopData = await fs.readFile("../data/stops.csv", {
    encoding: "utf8",
  });
  const parsedData = PapaParse.parse(stopData, {
    header: true,
  });
  if (!!parsedData.errors.length) {
    return parsedData.data;
  } else {
    console.warn("Could not retrieve data", parsedData.errors);
    return [];
  }
}

module.exports = getStationDetails;
