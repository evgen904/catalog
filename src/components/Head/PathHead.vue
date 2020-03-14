<template>
  <div class="path">
    <router-link :to="{name:'Dashboard'}">Главная</router-link> /
    <span>{{ path }}</span>
  </div>
</template>

<script>
  export default {
    name: 'PathHead',
    props: {
      path: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style lang="scss" scoped>
.path {
  font-size: 12px;
  line-height: 14px;
  color: #a1a1a1;
}
</style>
