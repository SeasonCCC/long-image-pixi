import bgImg from '../assets/bg.jpg'
import spritesheetImg from '../assets/spritesheet.png'

import loadingPointer from '../assets/loading-pointer.png'
import loadingProgress from '../assets/loading-progress.png'

const preload = {
  drawAnimate (callback) {
    let container = new PIXI.Container()
    this.app.stage.addChild(container)

    let mx = this.options.width / 2
    let my = this.options.height / 2

    // loading word
    const style = new PIXI.TextStyle({
      fontFamily: 'Microsoft Yahei',
      fontSize: 40,
      fill: '#637d12',
      align: 'center'
    })
    let progressWord = new PIXI.Text('政策说明书打开中……', style)
    progressWord.anchor.set(0.5, 0.5)
    progressWord.x = mx
    progressWord.y = my * 1
    container.addChild(progressWord)

    let loader = new PIXI.loaders.Loader()
    loader
      .add('loadingPointer', loadingPointer)
      .add('loadingProgress', loadingProgress)

    loader.load()

    loader.onComplete.add(() => {
      const loadingProgressSprite = new PIXI.Sprite(
        loader.resources.loadingProgress.texture
      )

      const bounds = loadingProgressSprite.getBounds()
      loadingProgressSprite.setTransform(
        mx - bounds.width * 0.4,
        my * 0.8,
        0.8,
        0.8
      )

      container.addChild(loadingProgressSprite)

      // loading pointer
      const loadingPointerSprite = new PIXI.Sprite(
        loader.resources.loadingPointer.texture
      )
      loadingPointerSprite.setTransform(
        mx - bounds.width * 0.4,
        my * 0.8,
        0.8,
        0.8
      )
      container.addChild(loadingPointerSprite)
      callback.call(this, {
        loadingPointerSprite: loadingPointerSprite,
        progressWidth: bounds.width * 0.8,
        container: container
      })
    })
  },

  loadQueue (progressHandel, handleComplete) {
    this.loader = new PIXI.loaders.Loader()
    this.loader.add('bg', bgImg).add('spritesheetImg', spritesheetImg)
    // this.loader
    //   .add('press', pressImg)
    //   .add('finger', finger)
    //   .add('policy', policy)
    //   .add('factory', factory)
    //   .add('fountain', fountain)
    //   .add('bulb', bulb)
    //   .add('protect', protect)
    //   .add('right', right)
    //   .add('up', up)
    //   .add('link', link)
    //   .add('update', update)
    //   .add('price', price)
    //   .add('bg', bgImg)
    // let id = this.loader.resources['../assets/spritesheet.json'].textures
    // console.log(spritesheetJson)
    // this.loader.add(spritesheetJson)
    this.loader.load()
    this.loader.onProgress.add(progressHandel)
    this.loader.onComplete.add(handleComplete)
  }
}

export default preload
