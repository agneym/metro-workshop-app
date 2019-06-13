const getFareAttributes = require("./fare-attributes");
const getFareRules = require("./fare-rules");

async function fare() {
  const fareAttributes = await getFareAttributes();
  const fareRules = await getFareRules();
  return fareRules.map(fareRule => {
    const fareId = fareRule.fare_id;
    const matchFare = fareAttributes.find(
      attribute => attribute.fareId === fareId
    );
    if (matchFare) {
      return {
        originId: fareRule.origin_id,
        destId: fareRule.destination_id,
        fare: matchFare.price,
      };
    } else {
      throw new Error("Matching Fare not found for", fareId, fareRule);
    }
  });
}

module.exports = fare;
