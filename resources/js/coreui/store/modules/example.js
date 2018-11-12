import { defaultMutations } from 'vuex-easy-access'

const state = { config: {} }

// add generate mutation vuex easy access
// https://mesqueeb.github.io/vuex-easy-access/setup.html#setup
const mutations = { ...defaultMutations(state) }

const actions = {
  getConfig ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('config')
        .then((response) => {
          commit('config', response.data)

          resolve(response)
        })
        .catch(reject)
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
