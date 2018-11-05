const TDAS = ["tristate", "greaterny", "tristateeast", "midwest", "central", "denver", "pacificnorthwest", "upstateny", "connecticut"];

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


//const seriesCodeOffer =["camry", "corolla", "prius", "rav4", "rav4hybrid", "highlander", "4runner", "sienna", "tundra", "tacoma", "avalon", "sequoia", "landcruiser","yaris", "priusc", "priusv", "priusplug-in Hybrid", "Camry Hybrid", "Avalon Hybrid", "Highlander Hybrid", "Prius Prime", "Corolla iM", "Yaris iA"];


//const Vehicle = ["camry", "corolla", "highlander", "prius", "rav4", ""sienna", "4runner", "rav4hybrid", "tacoma", "86", "avalon", "corollaim", "yarisia", "avalonhybrid", "camryhybrid", " highlanderhybrid", "priusc",priusv","priusprime","sequoia","landcruiser"];


//const vehicles = ["4runner", "avalon", "avalonhybrid", "camry", "camryhybrid", "corolla", "highlander", " highlanderhybrid", "landcruiser", "rav4", "rav4hybrid", "sequoia", "sienna", "tacoma" , "tundra", "yaris" , "priusc", "prius", "86", "corollaim", "yarisia", "priusprime", "c-hr", "mirai", "corollahatchback", "yarisliftback"];
// from BATWs series code list
const offers = ["tristate", "greaterny", "tristateeast", "midwest", "central", "denver", "pacificnorthwest", "upstateny", "connecticut"];

const mobileOffers = ["tristate", "greaterny", "tristateeast", "midwest", "central", "denver", "pacificnorthwest", "upstateny", "connecticut"];

module.exports = {
  TDAS,
  citiesMap,
  offers,
  mobileOffers,
};