import events from './events'
import spritesheetJson from '../assets/spritesheet.json'

const render = {
  renderStage () {
    this.container = new PIXI.Container()
    this.rate = this.options.width / 750
    this.container.setTransform(0, 0, this.rate, this.rate)
    this.app.stage.addChild(this.container)

    // render background
    const bgSprite = new PIXI.Sprite(this.loader.resources.bg.texture)
    const stageY = -10726 + this.options.height / this.rate
    bgSprite.setTransform(0, stageY)
    this.container.addChild(bgSprite)
  },

  renderElement () {
    const stageY = this.options.height / this.rate

    // render texture
    const spritesheet = new PIXI.Spritesheet(
      this.loader.resources.spritesheetImg.texture.baseTexture,
      spritesheetJson
    )
    spritesheet.parse(textures => {
      // render fountain
      let textureArray = [textures['fountain1.png'], textures['fountain2.png']]
      // console.log(textureArray)
      this.fountainSprite = new PIXI.extras.AnimatedSprite(textureArray)
      // console.log(this.fountainSprite)
      this.fountainSprite.setTransform(-150, -1338 + stageY)
      // console.log(this.fountainSprite.currentFrame)
      this.fountainSprite.animationSpeed = 0.05
      this.fountainSprite.gotoAndStop(0)
      this.container.addChild(this.fountainSprite)

      // render policy
      const policySprite = new PIXI.Sprite(textures['policy.png'])
      policySprite.setTransform(700, -1338 + stageY)
      this.container.addChild(policySprite)

      // render finger btn
      this.pressImg = new PIXI.Sprite(textures['press-btn.png'])
      this.pressImg.setTransform(
        this.options.width * 0.72,
        this.options.height * 0.55
      )
      this.pressImg.interactive = true
      events.pressEvent.call(this, this.pressImg)
      this.app.stage.addChild(this.pressImg)
    })
  }
}

export default render
