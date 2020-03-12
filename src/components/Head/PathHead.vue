<template>
  <div class="path">
    <router-link :to="{name:'Dashboard'}">Главная</router-link> /
    <router-link :to="{name:'Order'}">Заказ</router-link> /
    <router-link :to="{name:'Catalog'}">Каталог</router-link> /
    <router-link :to="{name:'Selection'}">Подбор</router-link> /
    <router-link :to="{path:'/404'}">404</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PathHead'
  }
</script>

<style lang="scss" scoped>
.path {
  font-size: 12px;
  line-height: 14px;
  color: #a1a1a1;
}
</style>
