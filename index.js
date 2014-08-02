#!/usr/bin/env node

var bmw = require('./bmw')
  , pkgJson = require('./package.json')
  , lipsum = require('./cmd/lipsum')
  , randString = require('./cmd/randString')
  , shorten = require('./cmd/shorten')
  ;

bmw
.version(pkgJson.version)
.addCommand(lipsum)
.addCommand(randString)
.addCommand(shorten)
.parse(process.argv)
;

