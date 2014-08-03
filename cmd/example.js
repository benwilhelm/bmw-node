/**
 * This is only meant as a template for creating other commands.
 * If you want to run it, you need to uncomment the line that 
 * registers the command in index.js
 */

var command = require('commander');

module.exports = {
  usage: 'example [arg]',
  description: 'Does nothing. Meant as a template for other commands.',

  options: [
    { def: "-f, --foo [bar|bif|baz]", description: 'foo option blah blah'},
    { def: "-o, --optflag", description: "Just a flag" }
  ], 

  action: function(arg, options) {
    console.log("Pass argument '", arg, "'.");
    console.log("Passed " + options.foo + " to foo");
    var oVal = options.optflag ? 'true' : 'false';
    console.log("Value of optflag is " + oVal);
  }
}
