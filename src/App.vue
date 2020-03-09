<template>
  <div id="app">
    <vue-extend-layouts/>
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  import Сookie from 'cookie'
  import { mapMutations } from "vuex";

  export default {
    name: 'App',
    components: {
      VueExtendLayouts
    },
    mounted() {
      const cookies = Сookie.parse(document.cookie);
      if (cookies.auth) {
        this.setLoggedIn(true);
      }
    },
    methods: {
      ...mapMutations(['setLoggedIn']),
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
