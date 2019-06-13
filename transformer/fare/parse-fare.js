/**
 * Parse data, remove unrequired data and format types
 * @param {FareAttributes} data
 */
function parseFareAttributes(data) {
  return data.map(item => ({
    fareId: item.fare_id,
    price: Number(item.price),
  }));
}

module.exports = parseFareAttributes;
