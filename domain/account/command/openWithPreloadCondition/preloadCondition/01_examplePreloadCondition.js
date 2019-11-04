//should we use open? or create?
//maybe worth trying to avoid CRUD terms, find other words (if any equivalent / synonym)
//we just want to shy away from CRUD

const constants = require("../../../../../constants");

console.log("====>>> JUNGJA 01 ", require('augmented-cqrs/define').preloadCondition)
module.exports = require('augmented-cqrs/define').preloadCondition(constants.VERSION, 
  'openWithPreloadCondition', (payload, callback, dependencies) => {
  console.log("PRELOADCONDITION openWithPreloadCondition: ", JSON.stringify({
    payload, dependencies
  }));
  
  return callback(
    new (require('cqrs-domain').errors).BusinessRuleError("Certain preload-condition is not satisfied", {
      code: 1
    })
  );
});