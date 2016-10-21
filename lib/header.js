
module.exports = (key) => {
  var statics = require('./statics')
  return {
    browser: (userid, authid, auth, expire_time) => {
      return {
        [statics.user_id]: userid,
        [statics.auth_id]: authid,
        [statics.auth]: auth,
        [statics.expire_time]: expire_time
      }
    },
    server: () => {
      var encode = require('./encode')(key)
      return {
        [statics.server_key]: encode('admin')
      }
    }
  }
}
