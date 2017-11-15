export default {
  createDiv: function () {
    return {
      obj: null,
      left: 0,
      top: 0,
      oldX: 0,
      oldY: 0,
      isMouseDown: false,
      init: function (obj) {
        let that = this
        this.obj = obj
        this.obj.addEventListener('touchstart', function () {
          let evt = event.changedTouches[0]
          this.style.zindex = 100
          that.isMouseDown = true
          that.oldX = evt.clientX
          that.oldY = evt.clientY
          console.log(evt.clientX)
          console.log(that.currentStyle)
          if (that.currentStyle) {
            that.left = parseInt(that.currentStyle.left)
            that.top = parseInt(that.currentStyle.top)
            console.log('tr')
          } else {
            let divStyle = document.defaultView.getComputedStyle(this, null)
            that.left = parseInt(divStyle.left)
            that.top = parseInt(divStyle.top)
            console.log('fa')
          }
        }, false)
        this.obj.addEventListener('touchmove', function () {
          that.move()
        }, false)
        this.obj.addEventListener('touchend', function () {
          that.isMouseDown = false
          this.style.zindex = 0
        }, false)
      },
      move: function () {
        if (this.isMouseDown) {
          let dx = parseInt(event.changedTouches[0].clientX - this.oldX)
          let dy = parseInt(event.changedTouches[0].clientY - this.oldY)
          this.obj.style.left = (this.left + dx) + 'px'
          this.obj.style.top = (this.top + dy) + 'px'
        }
      }
    }
  }
}
