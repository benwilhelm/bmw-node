var command = require('commander')
  , request = require('request');

module.exports = {
  usage: 'lipsum [numPars]',
  description: 'fetches lorem ipsum text from loripsum.net',

  options: [
    { def: "-l, --len [short|medium|long|verylong]", description: 'Average length of paragraph'},
    { def: "-d, --decorate", description: "Decorate the text with bold, italic, and marked text" },
    { def: "-p, --plaintext", description: "Return plaintext with no HTML" },
    { def: "-h, --headings", description: "Add headings" },
    { def: "-u, --ul", description: "Add unordered lists" },
    { def: "-o, --ol", description: "Add ordered lists" },
    { def: "-f, --dl", description: "Add definition lists" },
    { def: "-b, --bq", description: "Add blockquotes" },
    { def: "-c, --code", description: "Add code samples" }
  ], 

  action: function(numPars, options) {
    var pars = numPars || 3;
    var opts = [pars];
    if (options.len) opts.push(options.len);      
    if (options.decorate) opts.push('decorate');
    if (options.plaintext) opts.push('plaintext');
    if (options.headings) opts.push('headers'); // <-- not a typo
    if (options.ul) opts.push('ul');
    if (options.ol) opts.push('ol');
    if (options.dl) opts.push('dl');
    if (options.bq) opts.push('bq');
    if (options.code) opts.push('code'); 

    var reqUrl = "http://loripsum.net/api/";
    reqUrl += opts.join('/');
    request(reqUrl, function(err, resp, body){
      console.log(body);
    });
  }
}
