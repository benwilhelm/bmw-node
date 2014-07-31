var config = require('../lib/config')
  , request = require('request')
  ;

module.exports = {
  usage: "shorten <url>",
  description: "Shortens the given URL using bit.ly's api",
  action: function(url) {
    var username = config.get('bitly_username');
    var bitlyKey = config.get('bitly_api_key');
    var encUrl = encodeURIComponent(url);
    var reqUrl = "https://api-ssl.bitly.com/v3/shorten?access_token=";
    reqUrl += bitlyKey;
    reqUrl += "&longUrl=";
    reqUrl += encUrl;

    request(reqUrl, function(err, resp, body){
      var obj = JSON.parse(body);
      if (obj.status_code === 200) {
        console.log(obj.data.url);
      } else {
        throw obj.status_code + ": " + obj.status_txt
      }
    });
  }
}
