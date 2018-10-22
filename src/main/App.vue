<template>
<div id="app">
  <!-- <loading v-show="$root.loadingFlag"></loading> -->
  <transition
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
  mode="out-in">
    <router-view class="container"></router-view>
  </transition>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    // this.$router.push('/')
    // window.addEventListener('popstate', () => {
    //   this.$router.push('/')
    // })
  },
  // computed: {
  //   checkFans() {
  //     if (this.$projectOptions.fans == '') {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // },
  name: 'app'
}
</script>

<style lang="scss">
@import '../scss/mixin.scss';
</style>
