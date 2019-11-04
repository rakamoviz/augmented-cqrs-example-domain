const constants = require("../../../constants");
module.exports = require('augmented-cqrs/define').event(constants.VERSION, 
  'accountOpened', (payload, aggregate, dependencies) => {
  aggregate.set({
    owner: payload.owner,
    balance: payload.initialBalance
  });
});