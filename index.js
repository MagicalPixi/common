var defOpt = {
  key : 'hello_key'
}

var key = defOpt.key
var common = {
  auth: require('./lib/auth')(key),
  encode: require('./lib/encode')(key),
  header: require('./lib/header')(key),
  request: require('./lib/request'),
  statics: require('./lib/statics'),
  StringUtil: require('./lib/StringUtils')
}

common.create = (opt) => {
  var key = opt.key || defOpt.key
  common.auth = require('./lib/auth')(key)
  common.encode = require('./lib/encode')(key)
  common.header = require('./lib/header')(key)
  common.request = require('./lib/request')
  common.statics = require('./lib/statics')
  common.StringUtil = require('./lib/StringUtils')
  return common
}

module.exports = common
