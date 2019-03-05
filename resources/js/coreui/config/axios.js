export default {
  baseURL: '/api',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },

  onCreate () {
    const token = document.head.querySelector('meta[name="csrf-token"]')

    if (token)
      this.defaults.headers.common['X-CSRF-TOKEN'] = token.content
    else
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
  },
}
