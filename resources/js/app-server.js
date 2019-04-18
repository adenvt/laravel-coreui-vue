/* global context, dispatch */

import render from 'vue-server-renderer/basic'
import app from './coreui/core/main-server.js'

app.$router.push(context.url)

render(app, (error, html) => {
  if (error)
    throw new Error(error)

  dispatch(html)
})
