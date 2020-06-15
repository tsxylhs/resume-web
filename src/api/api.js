import crud from './builder'
import request from '@/utils/request'

var API = {}

API.serviceBusiness = crud('v1/serviceBusiness')

API.app = {
  login : function (param) {
    return request.post('/v1/web/login', param)
  },
  logout : function () {
    return request.post('/v1/web/logout')
  }
}
API.fs = {}

API.fs.filter = function(filter) {
  return request.get('v1/files', {
    params: filter
  })
}
export default API
