var command = require('commander')
  , request = require('request');

module.exports = {
  usage: 'lipsum [numPars]',
  description: 'fetches lorem ipsum text from loripsum.net',

  options: [
    { def: "-l, --length [short|medium|long|verylong]", description: 'Average length of paragraph'},
    { def: "-d, --decorate", description: "Decorate the text with bold, italic, and marked text" },
    { def: "-p, --plaintext", description: "Return plaintext with no HTML" }
  ], 

  action: function(numPars, options) {
    var pars = numPars || 3;
    var opts = [pars];
    if (options.length) opts.push(options.length);
    if (options.decorate) opts.push('decorate');
    if (options.plaintext) opts.push('plaintext');

    var reqUrl = "http://loripsum.net/api/";
    reqUrl += opts.join('/');
    
    request(reqUrl, function(err, resp, body){
      console.log(body);
    });
  }
}
