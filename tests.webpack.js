var context = require.context('./scripts', true, /-test\.jsx?$/); 

context.keys().forEach(context);

module.exports = context;