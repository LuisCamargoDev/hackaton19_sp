const request = require('request-promise-native');

const GMAPS_URL = (address) => `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GMAPS_API_KEY}`;

module.exports = async (address) => {
  const result = await request(GMAPS_URL(address));
  return JSON.parse(result);
}