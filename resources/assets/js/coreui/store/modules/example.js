const state = { config: {} }

const mutations = {
  set (state, { key, value }) {
    _.set(state, key, value)
  },
}

const actions = {
  getConfig ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('config')
        .then((response) => {
          commit('set', {
            key  : 'config',
            value: response.data,
          })
          resolve()
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
