/* global context, dispatch */

import render from 'vue-server-renderer/basic'
import app from './coreui/core/main-server.js'

app.$router.push(context.url)

render(app, (err, html) => {
  if (err)
    throw new Error(err)

  dispatch(html)
})
