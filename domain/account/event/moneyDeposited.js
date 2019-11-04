const constants = require("../../../constants");
module.exports = require('augmented-cqrs/define').event(constants.VERSION, 
  'moneyDeposited', (payload, aggregate, dependencies) => {
  const currentBalance = aggregate.get("balance");
  aggregate.set({
    balance: currentBalance + payload.amount
  });
});