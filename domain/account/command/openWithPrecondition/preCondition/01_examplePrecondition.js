//should we use open? or create?
//maybe worth trying to avoid CRUD terms, find other words (if any equivalent / synonym)
//we just want to shy away from CRUD

const constants = require("../../../../../constants");

module.exports = require('augmented-cqrs/define').precondition(constants.VERSION, 
  'openWithPrecondition', (payload, aggregate, callback, dependencies) => {
  console.log("PRECONDITION openWithPrecondition: ", JSON.stringify({
    payload, aggregate, dependencies
  }));

  return callback(
    new (require('cqrs-domain').errors).BusinessRuleError("Certain precondition is not satisfied", {
      code: 1
    })
  );
});