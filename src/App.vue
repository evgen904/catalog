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
  margin: 0 0 10px;
  font-weight: normal;
}
h1 {
  font-size: 28px;
}
h2 {
  font-size: 18px;
}
h3 {
  font-size: 16px;
}
h4 {
  font-size: 15px;
}
h5 {
  font-size: 12px;
}
h6 {
  font-size: 11px;
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
      &.bg-none {
        background-color: transparent;
      }
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
.color-red {
  color: #ff0000 !important;
}
.color-green {
  color: #217c01 !important;
}
.btn {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  border-radius: 2px;
  padding: 8px 14px;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  &.black {
    background: #313131;
    color: #FFFFFF;
  }
  &.white {
    background: #FFFFFF;
    border: 2px solid #F6921E;
    border-radius: 2px;
    font-size: 13px;
    line-height: 15px;
    color: #F6921E;
    padding: 8px 18px;
  }
  &.orange {
    background: linear-gradient(250.8deg, #FF8900 14.93%, #FFAB2D 86.64%), #FFA133;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    padding: 10px 18px;
    img {
      vertical-align: middle;
      margin-right: 4px;
    }
  }
}
</style>
