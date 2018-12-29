import camelCase from 'lodash/camelCase'

const requireModule = require.context('.', false, /\.js$/)
const modules       = {}

// Auto loader vuex modules
requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js')
    return

  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  }
})

export default modules
