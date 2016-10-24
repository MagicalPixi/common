var addQuery = (url, params) => {
  if (!/\?/.test(url)) {
    url += '?'
  }
  var paramStr = Object.keys(params).map((k)=> {
    return `${k}=${params[k]}`;
  }).join('&');
  return url + encodeURI(paramStr)
}

module.exports = {
  addQuery: addQuery
}
