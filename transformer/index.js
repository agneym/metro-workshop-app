const fare = require("./fare");

async function init() {
  const fareDetails = await fare();
}

init();
