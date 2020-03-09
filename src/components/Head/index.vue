<template>
  <div class="head">
    <div>
      <h4>{{ title }}</h4>
      <PathHead />
    </div>
    <div class="head--link">
      <router-link :to="{name:'Catalog'}">Каталог</router-link>
    </div>
  </div>
</template>

<script>
  import PathHead from './PathHead';

  export default {
    name: 'Head',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    components: {
      PathHead
    }
  }
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  &--link {

  }
}
</style>
