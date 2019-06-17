const fare = require("./fare");
const stations = require("./stations");
const output = require("./output");

async function init() {
  const fareDetails = await fare();
  const stationDetails = await stations();
  await output(
    { name: "fareDetail", value: fareDetails },
    { name: "stations", value: stationDetails }
  );
}

init();
