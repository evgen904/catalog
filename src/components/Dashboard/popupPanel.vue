<template>
  <div class="popup-panel">
    <div>
      <span>Отмечено: 5 / 9</span>
      <span>Всего: 9</span>
    </div>
    <div>
      <button>Выгрузить в файл</button>
      <button>Объединить заказы </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popupPanel"
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
}
</style>
