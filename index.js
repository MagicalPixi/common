
module.exports = (opt) => {
  var key = opt.key || 'encode_key'
  return {
    auth: require('./lib/auth')(key),
    encode: require('./lib/encode')(key),
    header: require('./lib/header')(key),
    request: require('./lib/request'),
    statics: require('./lib/statics'),
    StringUtil: require('./lib/StringUtil')
  }
}
