const getFareAttributes = require("./fare-attributes");
const getFareRules = require("./fare-rules");

async function fare() {
  const fareAttributes = await getFareAttributes();
  const fareRules = await getFareRules();
}

module.exports = fare;
