var bmw = module.exports = require('commander');

bmw.addCommand = function(cmdModule) {
  var prog = this;
  this.command(cmdModule.usage)
      .description(cmdModule.description)
      .action(cmdModule.action);
  return prog;
}

