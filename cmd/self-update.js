var command = require('commander')
  , path = require('path')
  ;

require('shelljs/global');

module.exports = {
  usage: 'self-update',
  description: 'Checks git-hook symlinks and performs git pull on source code',

  options: [], 

  action: function(arg, options) {
    var root = path.resolve(__dirname + "/..");
    console.log(root);
    cd(root);

    console.log("Linking post-merge git hook");
    ln('-s', 'git-hooks/post-merge', '.git/hooks/post-merge');
    
    console.log("Linking post-commit git hook");
    ln('-s', 'git-hooks/post-commit', '.git/hooks/post-commit');
    
    exec('git checkout master');
    exec('git pull');
  }
}
