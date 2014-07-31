var config = require('../config.json');

module.exports = {
  get: function(key) {
    return config.hasOwnProperty(key) ? config[key] : '';
  },

  set: function(key, val) {
    config[key] = val;
  }
}
