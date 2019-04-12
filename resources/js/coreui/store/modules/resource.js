import { defaultMutations } from 'vuex-easy-access'
import { index, edit, update, create, destroy, show, store } from '../actions-resource'

const state = {
  request        : {},
  resourceLoading: false,
}

const mutations = {
  ...defaultMutations(state),
  requestReset: (state) => {
    state.request         = {}
    state.resourceLoading = false
  },
}

const actions = {
  index,
  edit,
  update,
  create,
  destroy,
  show,
  store,
}

export default {
  state,
  mutations,
  actions,
}
