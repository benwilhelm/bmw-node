#!/usr/bin/env node

var bmw = require('./bmw')
  , pkgJson = require('./package.json')
  , githubCreateRepo = require('./cmd/github-create-repo')
  , lipsum = require('./cmd/lipsum')
  , randString = require('./cmd/randString')
  , shorten = require('./cmd/shorten')
  ;

bmw
.version(pkgJson.version)
//.addCommand(require('./cmd/example'))

.addCommand(githubCreateRepo)
.addCommand(lipsum)
.addCommand(randString)
.addCommand(shorten)
.parse(process.argv)
;

