const constants = require("../../../../constants");
module.exports = require('augmented-cqrs/define').command(constants.VERSION, 
  'createRoute', (data, aggregate) => {
  data.createdAt = new Date().getTime();

  aggregate.apply('routeCreated', data, constants.VERSION);
});