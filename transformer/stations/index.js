const getStationCodes = require("./station-codes");

async function stations() {
  const stationCodes = await getStationCodes();
  return stationCodes;
}

module.exports = stations;
