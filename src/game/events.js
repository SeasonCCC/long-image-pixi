// import render from './render'
const events = {
  pressEvent (obj) {
    obj.on('pointerdown', e => {
      this.beginMove = true
    })

    obj.on('pointerup', e => {
      this.beginMove = false
    })
  },

  tickEvent () {
    this.app.ticker.add(delta => {
      if (this.beginMove && this.container) {
        let heightLimit = this.rate * 10726 - this.options.height
        if (
          this.container.y < heightLimit &&
          this.container.y + 5 < heightLimit
        ) {
          this.container.y += 5
        } else {
          this.container.y = heightLimit
        }
      }
    })
  }
}

export default events
