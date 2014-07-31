#!/usr/bin/env node

var bmw = require('./bmw')
  , pkgJson = require('./package.json')
  , lipsum = require('./cmd/lipsum')
  , shorten = require('./cmd/shorten')
  ;

bmw
.version(pkgJson.version)
.addCommand(shorten)
.addCommand(lipsum)
.parse(process.argv)
;

