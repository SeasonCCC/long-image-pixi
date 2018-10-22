<template>
<div class="index">
  <div class="music" :class="[isPlaying ? '' : 'music-close']" @click="changeState">
    <img src="../assets/music.png" />
  </div>
  <audio preload="preload" ref="audio" src="../assets/music.mp3" loop="true" class="hidden"></audio>
  <canvas ref="stage" :width="canvasWidth" :height="canvasHeight"></canvas>
</div>
</template>

<script>
import {
  Game
} from '../game/game'

export default {
  data () {
    return {
      canvasWidth: document.body.clientWidth * 2,
      canvasHeight: document.body.clientHeight * 2,
      isPlaying: true
    }
  },
  mounted () {
    let that = this
    this.playAudio()
    document.addEventListener('WeixinJSBridgeReady', () => {
      WeixinJSBridge.invoke('getNetworkType', {}, (e) => {
        that.playAudio()
      })
    }, false)

    let game = new Game({
      stage: this.$refs.stage,
      width: this.canvasWidth,
      height: this.canvasHeight
    })

    return game
  },
  methods: {
    playAudio () {
      let audio = this.$refs.audio
      audio.play()
    },
    pauseAudio () {
      let audio = this.$refs.audio
      audio.pause()
    },
    changeState () {
      if (this.isPlaying) {
        this.pauseAudio()
      } else {
        this.playAudio()
      }
      this.isPlaying = !this.isPlaying
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0;

    canvas {
        position: absolute;
        width: 100%;
        height: 100%;
    }
}

.music {
    position: fixed;
    top: 8%;
    right: 3%;
    z-index: 100000;
    width: 30px;
    font-size: 0;
    -webkit-animation: myrotate 3s linear infinite;
    animation: myrotate 3s linear infinite;
}
.music.music-close {
    animation: none;
}
.music img {
    width: 100%;
    height: 100%;
}
@-webkit-keyframes myrotate {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
@-moz-keyframes myrotate {
    0% {
        -moz-transform: rotate(0deg);
    }
    100% {
        -moz-transform: rotate(360deg);
    }
}
@-ms-keyframes myrotate {
    0% {
        -ms-transform: rotate(0deg);
    }
    100% {
        -ms-transform: rotate(360deg);
    }
}
@-o-keyframes myrotate {
    0% {
        -o-transform: rotate(0deg);
    }
    100% {
        -o-transform: rotate(360deg);
    }
}
@keyframes myrotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
