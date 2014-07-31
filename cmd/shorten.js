var request = require('request');

module.exports = {
  usage: "shorten <url>",
  description: "Shortens the given URL using bit.ly's api",
  action: function(url) {
    console.log('here will I shorten %s', url);
  }
}
