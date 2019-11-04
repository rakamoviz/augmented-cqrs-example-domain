//should we use open? or create?
//maybe worth trying to avoid CRUD terms, find other words (if any equivalent / synonym)
//we just want to shy away from CRUD

const constants = require("../../../constants");

module.exports = require('augmented-cqrs/define').businessRule(constants.VERSION, 
  'exampleBusinessRule', (changed, previous, events, command, callback, dependencies) => {
  console.log("BUSINESSRULE exampleBusinessRule: ", JSON.stringify({
    changed, previous, events, command, dependencies
  }));

  return callback(
    new (require('cqrs-domain').errors).BusinessRuleError("Certain business-rule is not satisfied", {
      code: 1
    })
  )
});