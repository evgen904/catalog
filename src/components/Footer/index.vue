<template>
  <div class="footer">
    <div class="footer--copy-site">
      © Апекс Секьюрити.
    </div>
    <div class="footer--address">
      108803, г. Москва, п. Сосенское, д. Сосенки, ул. Сосновая, д. 1Б, этаж 7, офис 701-727
    </div>
    <div class="footer--tel">
      <a href="tel:+7 (499) 747-57-58">
        <img src="@/assets/phone.svg" alt="">
        +7 (499) 747-57-58
      </a>
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
  &--tel {
    a {
      text-decoration: none;
      color: #000000;
      font-weight: bold;
      img {
        vertical-align: text-top;
        margin-right: 12px;
      }
    }
  }
}
</style>
