<template>
  <div id="app">
    <vue-extend-layouts/>
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  export default {
    name: 'App',
    components: {
      VueExtendLayouts
    }
  }
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
