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
a {
  color: #f6921e;
  text-decoration: none;
}
.table {
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  tr:nth-child(even) {
    td {
      background-color: #F8F8F8;
    }
  }
  td, td {
    padding: 10px 8px;
    margin: 0;
    vertical-align: top;
    border-collapse: collapse;
    border: 1px solid #DBDBDB;
    border-spacing: 0;
    font-weight: normal;
    font-size: 12px;
    color: #313131;
  }
  th {
    font-size: 14px;
    color: #8A8A8A;
    padding: 12px 8px;
  }
}
.text-right {
  text-align: right;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
</style>
