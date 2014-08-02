var config = require('../lib/config')
  , crypto = require('crypto')
  ;

module.exports = {
  usage: "rand-string [length]",
  description: "Returns a cryptographically secure random string of the specified length",
  action: function(length) {
    // translates bytes to hex, so length is doubled
    length = length ? length / 2 : 12;
    crypto.randomBytes(length, function(err, bytes){
      console.log(bytes.toString('hex'));
    }) 
  }
}
