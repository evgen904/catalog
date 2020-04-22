<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <vue-extend-layouts/>
    </transition>
    <BaseModal v-if="user.loggedIn" ref="modalProduct">
      <div slot="head">
        <portal-target name="product-head" />
      </div>
      <div slot="body">
        <portal-target name="product-body" />
      </div>
    </BaseModal>
  </div>
</template>

<script>
  import VueExtendLayouts from 'vue-extend-layout'
  import Сookie from 'cookie'
  import { mapState, mapMutations } from "vuex";
  import BaseModal from '@/components/Base/baseModal.vue';

  export default {
    name: 'App',
    components: {
      VueExtendLayouts,
      BaseModal
    },
    mounted() {
      const cookies = Сookie.parse(document.cookie);
      if (cookies.auth) {
        this.setLoggedIn(true);
      }
      // откл. скролл у body по нажатию вверх, вниз
      let NAVIGATION = [38, 40]
      document.body.addEventListener("keydown", function(event) {
        if (-1 != NAVIGATION.indexOf(event.keyCode))
          event.preventDefault();
      })
    },
    computed: {
      ...mapState('catalog', ['modal']),
      ...mapState(['user'])
    },
    methods: {
      ...mapMutations(['setLoggedIn']),
      ...mapMutations("catalog", ["setModal"])
    },
    watch: {
      modal(val) {
        if (val) {
          this.$refs.modalProduct.show();
        } else {
          this.$refs.modalProduct.close();
        }
      }
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
::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  // border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  width: 3px;
  background: transparent;
  // border-radius: 10px;

  box-shadow: inset 0 0 0 2px #C4C4C4;
  border: 3px solid transparent;
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
  &:not(.no-bg) {
    tr {
      &:nth-child(even) {
        td {
          background-color: #F8F8F8;
          &.bg-none {
            background-color: transparent;
          }
        }
      }
      &.head {
        td {
          font-weight: 500;
          font-size: 14px;
          color: #8A8A8A;
        }
      }
    }
  }
  td, th {
    padding: 5px 8px;
    margin: 0;
    vertical-align: top;
    border-collapse: collapse;
    border: 1px solid #DBDBDB;
    border-spacing: 0;
    font-weight: normal;
    font-size: 14px;
    color: #313131;
  }
  th {
    font-size: 16px;
    color: #8A8A8A;
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
.color-black {
  color: #000000 !important;
}
.style-checkbox {
  vertical-align:top;
  width:0;
  height:12px;
  padding: 0;
  margin: 0;
  + label {
    cursor:pointer;
  }
  &:not(checked) {
    opacity:0;
  }
  &:not(checked) + label {
    position:relative;
  }
  &:not(checked) + label:before {
    content:'';
    position:absolute;
    display: block;
    top:50%;
    margin-top: -4px;
    left:-6px;
    width: 12px;
    height: 12px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 2px;
  }
  &:not(checked) + label:after {
    content:'';
    position:absolute;
    display: block;
    top:50%;
    margin-top: -4px;
    left:-6px;
    width: 12px;
    height: 12px;
    background:#F6921E url('./assets/checkbox.svg') 50% 50% no-repeat;
    opacity:0;
    transition:all .2s;
    border-radius: 2px;
  }
  &:checked + label:after {
    opacity:1;
  }
}
.btn {
  outline-style: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  border-radius: 2px;
  padding: 8px 14px;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  border: none;
  &.fw-normal {
    font-weight: normal;
  }
  &.c-default {
    cursor: default;
    pointer-events: none;
  }
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
    background: linear-gradient(255.53deg, #FF8900 13.86%, #FFAB2D 86.44%), #FFA133;
    border-radius: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    padding: 10px 18px;
    &:hover {
      background: linear-gradient(255.53deg, #FF8900 13.86%, #FFAB2D 86.44%), #FFA133;
    }
    &:active {
      background: linear-gradient(255.53deg, #FF8900 13.86%, #FFAB2D 86.44%), #FFA133;
    }
    img {
      vertical-align: middle;
      margin-right: 4px;
    }
  }
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 250px;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    cursor: pointer;

    &:before {
      content: "";
      display: block;
      background: #fff;
      width: 1px;
      height: 14px;
      position: absolute;
      margin: 8px;
      transform: rotate(-45deg);
      top: 1px;
      left: 7px;
    }

    &:after {
      content: "";
      display: block;
      background: #fff;
      width: 1px;
      height: 14px;
      position: absolute;
      margin: 8px;
      transform: rotate(45deg);
      top: 1px;
      left: 7px;
    }
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #444;

    .popover-inner {
      background: $color;
      color: #fff;
      padding: 14px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
