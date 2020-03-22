<template>
  <div class="selection">
    <div class="selection--title">
      Подбор: Хорошие замки - Стройсервис (04.02.2020 10:40:48)
    </div>
    <Search />
    <div class="selection--btn">
      <router-link class="btn black fw-normal" :to="{name: 'OrderId', params: { id: id }}" v-if="id">
        <img src="@/assets/done.svg" alt="">
        Завершить подбор
      </router-link>
      <router-link class="btn black fw-normal" :to="{name: 'Order'}" v-else>
        <img src="@/assets/done.svg" alt="">
        Завершить подбор
      </router-link>
    </div>
    <SelectProducts />
  </div>
</template>

<script>
  import Search from '@/components/Search';
  import SelectProducts from '@/components/Order/selectProducts.vue';

  export default {
    name: 'Selection',
    props: {
      id: {
        type: String
      }
    },
    components: {
      Search,
      SelectProducts
    }
  }
</script>

<style lang="scss" scoped>
.selection {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  width: 100%;
  padding: 20px 10px 20px 20px;
  margin-bottom: 30px;
  overflow: auto;
  max-height: 900px;
  &--title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  &--btn {
    display: flex;
    margin-bottom: 12px;
    .btn {
      font-size: 13px;
      height: 28px;
      margin-right: 10px;
      img {
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }
}
</style>
