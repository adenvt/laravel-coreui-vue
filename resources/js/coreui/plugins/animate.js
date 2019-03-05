$.fn.extend({
  animateCss: function (animationName, callback) {
    const animationEnd = (function (el) {
      const animations = {
        animation      : 'animationend',
        OAnimation     : 'oAnimationEnd',
        MozAnimation   : 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      }

      for (const t in animations) {
        if (el.style[t] !== undefined)
          return animations[t]
      }
    })(document.createElement('div'))

    this.addClass(`animated ${animationName}`).one(animationEnd, function () {
      $(this).removeClass(`animated ${animationName}`)

      if (typeof callback === 'function') callback()
    })

    return this
  },
})
