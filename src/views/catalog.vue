<template>
  <div>
    <Head title="Добро пожаловать! Campaign name" path="Каталог товаров" />
    <div class="catalog">
      <div class="catalog--title">
        Каталог товаров
      </div>
      <Search />
      <CatalogTable />
      <router-link class="btn orange" :to="{name: 'Order'}">
        <img src="../assets/plus.svg" alt="">
        Создать заказ
      </router-link>
    </div>
    <BaseModal ref="modalProduct">
      <div slot="head">
        <portal-target name="product-head" />
      </div>
      <div slot="body">
        <portal-target name="product-body" />
      </div>
    </BaseModal>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import Search from '@/components/Search';
  import CatalogTable from '@/components/Catalog/catalogTable.vue';
  import BaseModal from '@/components/Base/baseModal.vue';
  import { mapState, mapMutations } from "vuex";

  export default {
    name: 'Catalog',
    components: {
      Head,
      Search,
      CatalogTable,
      BaseModal
    },
    mounted() {
      this.setModal(false);
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
    },
    computed: {
      ...mapState('catalog', ['modal'])
    },
    watch: {
      modal(val) {
        if (val) {
          this.$refs.modalProduct.show();
        } else {
          this.$refs.modalProduct.close();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  // border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  width: 3px;
  background: transparent;
  // border-radius: 10px;

  box-shadow: inset 0 0 0 2px #C4C4C4;
  border: 3px solid transparent;
}
.catalog {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  width: 100%;
  height: calc(100vh - 270px);
  padding: 20px;
  overflow: auto;
  &--title {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
