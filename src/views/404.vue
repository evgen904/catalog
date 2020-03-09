<template>
  <div class="page-404">
    <h4>Страница не найдена</h4>
    <p>
      Возможно, вы ошиблись в адресе<br>
      или страница была перемещена
    </p>
    <div>
      <router-link :to="{name: 'Order'}">Вернуться на главную</router-link>
    </div>
    <h1>404</h1>
    <div>
      <router-link :to="{name: 'Catalog'}">Каталог</router-link>
      <router-link :to="{name: 'Order'}">Создать заказ</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page404'
  }
</script>

<style lang="scss" scoped>
.page-404 {
  text-align: center;
}
</style>
