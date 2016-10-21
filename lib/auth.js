
module.exports = key => {
  var encode = require('./encode')(key)
  var statics = require('./statics')
  return {
    check: (obj) => {
      var authid = obj[statics.auth_id]
      var auth = obj[statics.auth]
      var user_id = obj[statics.user_id]
      var expire_time = obj[statics.expire_time]
      var current = new Date().getTime()
      return encode(authid + user_id + expire_time) == auth && expire_time > current
    },
    generate: (uid, expire, authid) => {
      authid = authid || require('shortid').generate()
      var expire_time = new Date().getTime() + expire
      var auth = encode(authid + uid + expire_time)
      return {
        [statics.auth_id]: authid,
        [statics.auth]: auth,
        [statics.expire_time]: expire_time,
        [statics.user_id]: uid
      }
    }
  }
}
