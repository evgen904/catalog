<template>
  <div class="head">
    <div class="head--path">
      <router-link :to="{name:'Dashboard'}">Главная</router-link> /
      <router-link :to="{name:'Catalog'}">Каталог товаров</router-link> /
      {{ title }}
    </div>
    <div class="head--title">
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "modalHead",
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.head {
  margin-bottom: 10px;
  &--path {
    font-size: 13px;
    color: #a1a1a1;
    margin-bottom: 20px;
  }
  &--title {
    font-weight: normal;
    font-size: 20px;
    color: #313131;
  }
}
</style>
