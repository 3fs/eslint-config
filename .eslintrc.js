const defaultRules = require('./configs/defaults').rules;
const env = require('./configs/node-es5').env;

module.exports = {
  env: env,
  rules: {
    ...defaultRules,
    'quote-props': ['error', 'consistent'],
  },
};
