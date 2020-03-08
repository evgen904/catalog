<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'authLayout'
  }
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
  height: 100%;
  min-height: 100%;
  &:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
}
</style>
