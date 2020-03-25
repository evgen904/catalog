<template>
  <transition name="base-modal--slide">
    <div v-if="modal" class="base-modal">
      <div class="base-modal--head">
        <slot name="head"></slot>
      </div>
      <div class="base-modal--body">
        <slot name="body"></slot>
      </div>
      <div class="base-modal--close" @click="close">
        <img src="@/assets/close.svg" alt="">
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: "BaseModal",
    computed: {
      ...mapState('catalog', ['modal'])
    },
    methods: {
      ...mapMutations("catalog", ["setModal", "setProduct"]),
      show() {
        this.setModal(true);
      },
      close() {
        this.setModal(false);
        setTimeout(() => {
          this.setProduct(null);
        },500)
      },
    }
  }
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  right: 20px;
  top: 130px;
  z-index: 200;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  padding: 20px 4px 10px 20px;
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
    max-height: calc(100vh - 280px);
    overflow: auto;
    padding: 0 16px 0 0;
  }
}
</style>
