#!/usr/bin/env node

var bmw = require('./bmw')
  , pkgJson = require('./package.json')
  , shorten = require('./cmd/shorten')
  ;

bmw
.version(pkgJson.version)
.addCommand(shorten)
.parse(process.argv)
;

