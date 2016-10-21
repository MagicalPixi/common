var common = require('./')({key: 'test_key'})
var staties = common.statics
var authObj = common.auth.generate('12', 3600 * 1000)
console.log('auth generated: >>>', authObj)

var check = common.auth.check(authObj)

console.log('auth checked: >>>', check ? 'success! ' : 'faild! ')

console.log('server header: >>>', common.header.server())
console.log('browser header: >>>', common.header.browser(authObj[staties.user_id], authObj[staties.auth_id], authObj[staties.auth], authObj[staties.expire_time]))
common.request('http://db.magicalpixi.com')('pixi', 'user').getAll().then(value => {
  console.log(value.data)
}).catch(reason => {
  console.log(reason)
})
