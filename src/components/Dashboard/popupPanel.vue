<template>
  <transition name="popup-panel--slide">
    <div class="popup-panel" v-if="checkboxSelected">
      <div class="popup-panel--total">
      <span>
        Отмечено:
        <span class="color-black">
          {{ checkboxSelected }} / {{ total }}
        </span>
      </span>
        <span>
        Всего:
        <span class="color-black">{{ total }}</span>
      </span>
      </div>
      <div>
        <button class="btn black">
          <img src="../../assets/upload.svg" alt="">
          Выгрузить в файл
        </button>
        <button class="btn black">
          <img src="../../assets/combine-orders.svg" alt="">
          Объединить заказы
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "popupPanel",
    props: {
      total: {
        type: Number,
        default: null
      },
      checkboxSelected: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
.popup-panel {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  padding: 20px;
  min-height: 94px;
  border-top: 2px solid #DBDBDB;
  &--slide-enter-active,
  &--slide-leave-active {
    transform: translateY(0%);
    transition: transform 0.35s ease;
  }
  &--slide-enter,
  &--slide-leave-to {
    transform: translateY(100%);
  }
  &--total {
    color: #8a8a8a;
    font-size: 12px;
    margin-bottom: 14px;
    > span {
      margin-right: 30px;
    }
  }
  .btn {
    font-size: 13px;
    height: 28px;
    margin-right: 10px;
    img {
      margin-right: 6px;
      vertical-align: middle;
    }
  }
}
</style>
