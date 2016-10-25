#mp_common

### install
```
npm install --save mp_common
```

### test
```
node test.js
```

### config

`mp_common` 暂时需要一个`encode`的秘钥来完成配置，含有一个默认的秘钥，但是不推荐使用默认

```javascript
var common = require('mp_common')
common.create({key: 'your secret key'})
```
或者
```javascript
var common = require('mp_common').create({key: 'your secret key'})
```
### modules

`create`:
```javascript
/**
 * @param  {[Obj]} opt [opt.key 是加密秘钥]
 * @return {[mp_common]} [common 的单利对象]
 */
create = (opt) => {
  // 配置单例common对象
  return common
}
```
`statics`: 申明了各种键名
```javascript
user_id // 用户Id键名
auth_id // cookie id键名
auth // 综合头部信息加密验证值的键名
expire_time // 身份验证过期时间值的键名
server_key // 服务器身份验证键名
```
`auth`:
```javascript
check = (obj) => {
  // 检查对象中键值并进行校验，看是否为合法的对象
  return Boolean
}

generate = (uid, expire, authid) => {
  // 生成auth信息并处理成键值对返回
  return authObj
}
```

`encode`:
```javascript
encode (text) => {
  // 通过加密算法获取到秘文, 不可逆
  return String
}
```

`header`:
```javascript
browser = (userid, authid, auth, expire_time) => {
  return Object
}

server = (server_key_seed) => {
  return Object
}

```

`request`:
```javascript
/**
 * 针对dbserver的请求
 * @param {[String]} scheme [对应dbserver的scheme]
 * @param {[String]} name   [对应dbserver的modelname]
 */
Request = (scheme, name) => {
  return RequestObject
}

//RequestObject 的 方法
create = (data, header) => {
  return PromiseObj
}
get = (query, header) => {
  return PromiseObj
}
getAll = (header) => {
  return PromiseObj
}
```
`StringUril`:
```javascript
addQuery = (url, params) => {
  // append params into url
  return String
}
```
