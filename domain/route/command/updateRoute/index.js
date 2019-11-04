const constants = require("../../../../constants");
module.exports = require('augmented-cqrs/define').command(constants.VERSION, 
  'updateRoute', (data, aggregate) => {
  data.createdAt = new Date().getTime();

  aggregate.apply('routeUpdated', data, constants.VERSION);
});