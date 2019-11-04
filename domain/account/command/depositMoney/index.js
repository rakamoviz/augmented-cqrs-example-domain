const constants = require("../../../../constants");
module.exports = require('augmented-cqrs/define').command(constants.VERSION, 
  'depositMoney', (data, aggregate, dependencies) => {
  aggregate.apply('moneyDeposited', data, constants.VERSION);
});