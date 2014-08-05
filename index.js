#!/usr/bin/env node

var bmw = require('./bmw')
  , fs = require('fs')
  , commandPaths = fs.readdirSync(__dirname + '/cmd')
  , pkgJson = require('./package.json')
  ;

bmw.version(pkgJson.version);


commandPaths.forEach(function(path){
  if (path.substr(-3) === '.js') {
    command = require('./cmd/' + path);
    bmw.addCommand(command);
  }
});

bmw.parse(process.argv);

