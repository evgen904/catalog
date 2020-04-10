<template>
  <div>
    <Head path="Каталог товаров" />
    <div class="catalog">
      <div class="catalog--title">
        Каталог товаров
      </div>
      <Search />
      <div class="catalog--table">
        <CatalogTable />
      </div>
      <router-link class="btn orange" :class="{'c-default': !selectProducts}" :to="{name: 'Order'}">
        <img src="@/assets/plus.svg" alt="">
        Создать заказ
      </router-link>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import Search from '@/components/Search';
  import CatalogTable from '@/components/Catalog/catalogTable.vue';
  import { mapMutations, mapState } from "vuex";

  export default {
    name: 'Catalog',
    components: {
      Head,
      Search,
      CatalogTable
    },
    computed: {
      ...mapState('catalog', ['products']),
      selectProducts() {
        let count = 0;
        for (let i=0; i < this.products.length; i++) {
          if (this.products[i]['combineOrder']) {
            count++;
          }
        }
        return count;
      }
    },
    mounted() {
      this.setModal(false);
    },
    destroyed() {
      this.setModal(false);
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
    }
  }
</script>

<style lang="scss" scoped>
.catalog {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  width: 100%;
  height: calc(100vh - 180px);
  padding: 20px;
  overflow: auto;
  &--title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  &--table {
    overflow: auto;
    max-height: calc(100vh - 360px);
    margin-bottom: 18px;
    padding-bottom: 1px;
  }
}
</style>
