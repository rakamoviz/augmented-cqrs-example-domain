const constants = require("../../../constants");
module.exports = require('augmented-cqrs/define').event(constants.VERSION, 
  'routeUpdated', (data, aggregate) => {
  aggregate.set(data);
});