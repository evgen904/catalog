<template>
  <div>
    <router-link :to="{name:'Orders'}">Главная</router-link> |
    <router-link :to="{name:'Order'}">Заказ</router-link> |
    <router-link :to="{name:'Catalog'}">Каталог</router-link> |
    <router-link :to="{name:'Selection'}">Подбор</router-link> |
    <router-link :to="{path:'/404'}">404</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PathHead'
  }
</script>

<style lang="scss" scoped>

</style>
