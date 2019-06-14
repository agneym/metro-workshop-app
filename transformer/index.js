const fare = require("./fare");
const station = require("./stations");

async function init() {
  const fareDetails = await fare();
  const stations = await stations();
}

init();
