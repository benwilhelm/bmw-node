var command = require('commander')
  , async = require('async')
  , promptly = require('promptly')
  , request = require('request')
  ;

module.exports = {
  usage: 'github-create-repo <user> <repo-name>',
  description: 'Does nothing. Meant as a template for other commands.',

  options: [
    { def: "-p, --private", description: "Create private repository" }
    // { def: "-f, --foo [bar|bif|baz]", description: 'foo option blah blah'},
  ], 

  action: function(username, name, options) {
    async.series({
      desc: function(done) {
        promptly.prompt("Repository Description: ", done);
      },
      pw: function(done) {
        promptly.password("Github Password: ", done);
      }
    },
    function(err, rslt){
       var data = {
         "name": name,
         "description": rslt.desc,
         "private": !!options.private
       };

       var reqOpts = {
         method: "POST",
         url: "https://api.github.com/user/repos",
         headers: { 'User-Agent': 'benwilhelm' },
         form: JSON.stringify(data),
         json: true,
         auth: {
           'username': username,
           'pass': rslt.pw
         }
       }
       request.post(reqOpts, function(err, resp, body){
         if (err) console.error(err);
         if (resp.statusCode > 299) {
           throw resp.statusCode + ": " + body.message;
         } else {
           console.log(body.ssh_url);
         }
       });
    });
  }
}
