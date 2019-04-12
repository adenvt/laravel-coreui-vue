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

const index = function ({ commit, dispatch }, resource, params = null) {
  return Vue.http({
    url   : resource,
    params: params,
    method: 'GET',
  })
}

const create = function (resource) {
  return Vue.http({
    url   : `${resource}/create`,
    method: 'GET',
  })
}

const store = function (resource, data) {
  return Vue.http({
    url   : resource,
    method: 'POST',
    body  : data,
  })
}

const show = function (resource, id, params) {
  return Vue.http({
    url   : `${resource}/${id}`,
    params: params,
    method: 'GET',
  })
}

const edit = function (resource, id, params) {
  return Vue.http({
    url   : `${resource}/${id}/edit`,
    params: params,
    method: 'GET',
  })
}

const update = function (resource, id, data) {
  return Vue.http({
    url   : `${resource}/${id}`,
    body  : data,
    method: 'PUT',
  })
}

const destroy = function (resource, id) {
  return Vue.http({
    url   : `${resource}/${id}`,
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
