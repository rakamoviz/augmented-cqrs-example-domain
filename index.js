module.exports = function create(
  config, msgbus, disconnectCallback, 
  {commandHandlingCallback, eventEmittingCallback} = {}
) {
  return require("augmented-cqrs/domain")(
    `${__dirname}/domain`, config, msgbus, disconnectCallback, 
    {commandHandlingCallback, eventEmittingCallback}
  );
}