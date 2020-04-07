<template>
  <div class="head">
    <div>
      <h2 v-if="title != ''">{{ title }}</h2>
      <PathHead v-if="path && path != ''" :path="path" />
    </div>
    <div>
      <router-link class="btn white" :to="{name:'Catalog'}" target="_blank">Каталог</router-link>
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
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  h2 {
    font-size: 18px;
    line-height: 21px;
    color: #313131;
    font-weight: normal;
    margin-bottom: 12px;
    padding-top: 6px;
  }
  .btn {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    border-radius: 2px;
    padding: 8px 14px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    &.white {
      background: #FFFFFF;
      border: 2px solid #F6921E;
      border-radius: 2px;
      font-size: 13px;
      line-height: 15px;
      color: #F6921E;
      padding: 8px 18px;
    }
  }
}
</style>
