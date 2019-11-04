const constants = require("../../../../constants");
module.exports = require('augmented-cqrs/define').command(constants.VERSION, 
  'withdrawMoney', (data, aggregate, dependencies) => {
  aggregate.apply('moneyWithdrawn', data, constants.VERSION);
});