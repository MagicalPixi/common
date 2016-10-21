
module.exports = (key) => {
  return text => {
    var crypto = require('crypto')
    return crypto.createHash('md5').update(text + key).digest('hex')
  }
}
