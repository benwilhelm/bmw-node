var bmw = module.exports = require('commander');

bmw.addCommand = function(cmdModule) {
  var prog = this;
  var cmd = this.command(cmdModule.usage)

  if (cmdModule.options) {
    cmdModule.options.forEach(function(option){
      cmd.option(option.def, option.description);
    });
  }
    
  cmd.description(cmdModule.description);
  cmd.action(cmdModule.action);
  return prog;
}

