/* global context, dispatch */

export function isClient () {
  return typeof context === 'undefined'
    && typeof dispatch === 'undefined'
}

export function isSsr () {
  return !isClient()
}
