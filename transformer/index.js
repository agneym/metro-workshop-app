const manageFare = require("./fare/manage-fare");

async function init() {
  const fareAttributes = await manageFare();
  console.log(fareAttributes);
}

init();
