<template>
<div class="cove animated bounceInDown r share" @click="closeShare">
  <img src="../assets/share.png" width="50%" />
</div>
</template>
<script>
export default {
  methods: {
    closeShare () {
      this.$emit('closeShare')
    }
  }
}
</script>

<style lang="scss" scoped>
.share {
    left: 0;
}
</style>
