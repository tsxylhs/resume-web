import crud from './builder'
import request from './request'

var API = {}

API.serviceBusiness = crud('v1/serviceBusiness')


API.login = function(param) {
  return request.post('v1/web/login', param)
}

API.logout = function() {
  return request.post('v1/logout')
}

API.fs = {}

API.fs.filter = function(filter) {
  return request.get('v1/files', {
    params: filter
  })
}
export default API
