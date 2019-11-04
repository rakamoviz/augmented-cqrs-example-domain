//should we use open? or create?
//maybe worth trying to avoid CRUD terms, find other words (if any equivalent / synonym)
//we just want to shy away from CRUD

const constants = require("../../../../constants");
module.exports = require('augmented-cqrs/define').command(constants.VERSION, 
  'openWithPrecondition', (payload, aggregate, dependencies) => {
  aggregate.apply('accountOpened', payload, constants.VERSION);
});