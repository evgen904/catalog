<template>
  <div class="footer">
    <div class="footer--copy-site">
      © Апекс Секьюрити.
    </div>
    <div class="footer--address">
      108803, г. Москва, п. Сосенское, д. Сосенки, ул. Сосновая, д. 1Б, этаж 7, офис 701-727
    </div>
    <div class="footer--copy">
      Создание сайта: <a target="_blank" href="https://www.webreforma.ru/">WebReforma</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  background: #fff;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #313131;
  padding: 0 20px;
}
</style>
