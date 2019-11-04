const constants = require("../../../constants");
module.exports = require('augmented-cqrs/define').event(constants.VERSION, 
  'routeCreated', (data, aggregate) => {
  aggregate.set(data);
});