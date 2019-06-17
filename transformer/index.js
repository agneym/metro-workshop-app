const fare = require("./fare");
const stations = require("./stations");

async function init() {
  const fareDetails = await fare();
  const stationDetails = await stations();
  console.log(stationDetails);
}

init();
