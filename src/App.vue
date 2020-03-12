<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <vue-extend-layouts/>
    </transition>
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
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
* {
  box-sizing: border-box;
}
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  background: #F1F1F1;
  font-family: 'Roboto', sans-serif;
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}
  .text-left {
    text-align: left;
  }
</style>
