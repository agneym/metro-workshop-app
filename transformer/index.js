const fare = require("./fare");

async function init() {
  const fareAttributes = await fare();
  console.log(fareAttributes);
}

init();
