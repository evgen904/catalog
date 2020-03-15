<template>
  <transition name="base-modal--slide">
    <div v-if="visible" class="base-modal">
      <div class="base-modal--head">
        <slot name="head"></slot>
      </div>
      <div class="base-modal--body">
        <slot name="body"></slot>
      </div>
      <div class="base-modal--close" @click="close">
        <img src="../../assets/close.svg" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: "BaseModal",
    data() {
      return {
        visible: false
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
      show() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      },
    },
    watch: {
      visible(val) {
        this.setModal(val);
      }
    }
  }
</script>

<style lang="scss" scoped>
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
.base-modal {
  position: fixed;
  right: 20px;
  top: 130px;
  z-index: 200;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  padding: 20px 4px 20px 20px;
  width: 100%;
  max-width: 945px;
  &--slide-enter-active,
  &--slide-leave-active {
    transform: translateX(0%);
    transition: transform 0.35s ease;
  }
  &--slide-enter,
  &--slide-leave-to {
    transform: translateX(100%);
  }
  &--close {
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #DBDBDB;
    width: 40px;
    height: 40px;
    position: absolute;
    top: -1px;
    left: -40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &--head {
    margin-bottom: 10px;
  }
  &--body {
    max-height: calc(100vh - 260px);
    overflow: auto;
    padding: 0 16px 0 0;
  }
}
</style>
