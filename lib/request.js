
module.exports = (domin)=> {
  var axios = require('axios')
  var pluralize = require('pluralize')
  return (scheme, name) => {
    var request = {}
    var names = pluralize.plural(name)
    request.name = name
    request.create = (data, header) => {
      var url = domin + '/' + scheme + '/' + name
      return axios.post(url, data, {headers: header})
    }
    request.get = (query, header) => {
      var url = domin + '/' + scheme + '/' + name
      return axios.get(url, {params: query, headers: header})
    }
    request.getAll = (header) => {
      var url = domin + '/' + scheme + '/' + names
      return axios.get(url, {headers: header})
    }
    request.delete = (query, header) => {
      var url = domin + '/' + scheme + '/' + name
      return axios.get(url, {params: query, headers: header})
    }
    return request
  }
}
