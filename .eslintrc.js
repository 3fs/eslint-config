var customNodeConfig = require('./configs/node-es5');

customNodeConfig.rules['quote-props'] = ['error', 'consistent'];

module.exports = customNodeConfig;
