import getStationCodes from "./station-codes";

async function init() {
  const stationCodes = await getStationCodes();
  return stationCodes;
}

export default init;
