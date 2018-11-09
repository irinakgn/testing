const TDAS = [
  "tristate",
  "greaterny",
  "tristateeast",
  "midwest",
  "central",
  "denver",
  "pacificnorthwest",
  "upstateny",
  "connecticut"
];

const citiesMap = {
  tristate: 'Tristate',
  greaterny: 'Greater NY',
  tristateeast: 'Tristate East',
  central: 'Kansas City',
  denver: 'Denver',
  pacificnorthwest: 'Portland',
  upstateny: 'Upstate NY',
  connecticut: 'Connecticut',
  midwest: 'Chicago'
}


const vehicleCodes = ["4runner", "avalon", "avalonhybrid", "camry", "camryhybrid", "corolla", "highlander", " highlanderhybrid", "landcruiser", "rav4", "rav4hybrid", "sequoia", "sienna", "tacoma", "tundra", "yaris", "priusc", "prius", "86", "corollaim", "yarisia", "priusprime", "c-hr", "mirai", "corollahatchback", "yarisliftback"];
// from BATWs series code list
const offers = ["tristate", "greaterny", "tristateeast", "midwest", "central", "denver", "pacificnorthwest", "upstateny", "connecticut"];

const mobileOffers = ["tristate", "greaterny", "tristateeast", "midwest", "central", "denver", "pacificnorthwest", "upstateny", "connecticut"];

module.exports = {
  TDAS,
  citiesMap,
  offers,
  mobileOffers,
  vehicleCodes,
};