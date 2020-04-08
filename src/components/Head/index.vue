<template>
  <div class="head">
    <div>
      <h2 v-if="title != ''">{{ title }}</h2>
      <PathHead v-if="path && path != ''" :path="path" />
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
      },
      path: {
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
  padding: 18px 0;
}
</style>
