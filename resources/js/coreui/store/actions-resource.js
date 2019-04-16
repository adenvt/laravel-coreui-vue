/**
 * Resource:
 *
 *  Method    Verb          Path                           Action  Route Name
 *
 *  index()   GET           /resource                      index   resource.index
 *  create()  GET           /resource/create               create  resource.create
 *  store()   POST          /resource                      store   resource.store
 *  show()    GET           /resource/{resource}           show    resource.show
 *  edit()    GET           /resource/{resource}/edit      edit    resource.edit
 *  update()  PUT|PATCH     /resource/{resource}           update  resource.update
 *  delete()  DELETE        /resource/{resource}           destroy resource.destroy
 */

import Vue from 'vue'
import VueResource from 'vue-resource'
import storeVuex from '../store'

Vue.use(VueResource)

/**
 *  Config your api root path
 */
Vue.http.options.root = '/'

Vue.http.interceptors.push(function (request, next) {
  storeVuex.set('resource/resourceLoading', true)
  next(function (request) {
    storeVuex.set('resource/request', request)
    storeVuex.set('resource/resourceLoading', false)
  })
})

const index = function (request) {
  return Vue.http({
    url   : request.resource,
    params: request.params,
    method: 'GET',
  })
}

const create = function (request) {
  return Vue.http({
    url   : `${request.resource}/create`,
    method: 'GET',
  })
}

const store = function (request) {
  return Vue.http({
    url   : request.resource,
    method: 'POST',
    body  : request.data,
  })
}

const show = function (request) {
  return Vue.http({
    url   : `${request.resource}/${request.id}`,
    params: request.params,
    method: 'GET',
  })
}

const edit = function (request) {
  return Vue.http({
    url   : `${request.resource}/${request.id}/edit`,
    params: request.params,
    method: 'GET',
  })
}

const update = function (resource, request) {
  return Vue.http({
    url   : `${request.resource}/${request.id}`,
    body  : request.data,
    method: 'PUT',
  })
}

const destroy = function (request) {
  return Vue.http({
    url   : `${request.resource}/${request.id}`,
    method: 'DELETE',
  })
}

export {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
}
