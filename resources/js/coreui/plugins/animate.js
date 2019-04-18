$.fn.extend({
  animateCss: function (animationName, callback) {
    const animationEnd = (function (element) {
      const animations = {
        animation      : 'animationend',
        OAnimation     : 'oAnimationEnd',
        MozAnimation   : 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      }

      for (const t in animations) {
        if (element.style[t] !== undefined)
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
