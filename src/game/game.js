import preload from './preload'
import render from './render'
import events from './events'

class Game {
  constructor (options) {
    this.options = options
    this.app = new PIXI.Application(this.options.width, this.options.height, {
      view: this.options.stage,
      backgroundColor: 0xb7d45d,
      forceCanvas: true
    })
    // this.stage.begin = false

    this.baseSetting()
    this.init()
  }

  baseSetting () {
    // move event
    this.beginMove = false
    events.tickEvent.call(this)
  }

  init () {
    preload.drawAnimate.call(this, obj => {
      let beginX = obj.loadingPointerSprite.x
      preload.loadQueue.call(
        this,
        event => {
          obj.loadingPointerSprite.x =
            (obj.progressWidth * event.progress) / 100 + beginX
        },
        event => {
          this.app.stage.removeChild(obj.container)
          render.renderStage.call(this)
          render.renderElement.call(this)
        }
      )
    })
  }
}

export { Game }
