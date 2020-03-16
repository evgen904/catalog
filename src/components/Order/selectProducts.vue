<template>
  <div class="catalog-table">
    <div v-if="folders.length">
      <div class="catalog-menu--head">
        <div>
          <div>Наименование</div>
          <div>Код</div>
          <div>Заказ</div>
          <div>Резерв</div>
          <div>Отстаток</div>
          <div>По согласованию</div>
          <div>Цена</div>
          <div></div>
          <div>Минибокс</div>
          <div>Упаковка</div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>Дилерская</div>
          <div>Базовая</div>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul class="catalog-menu">
        <CatalogMenu
          v-for="item in folders"
          :key="item.id"
          :item="item"
        ></CatalogMenu>
      </ul>
    </div>
    <baseLoader v-else />
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from "vuex";
  import CatalogMenu from "./catalogMenu";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "selectProducts",
    components: {
      CatalogMenu,
      baseLoader
    },
    mounted() {
      if (!this.folders.length) {
        this.getFolders();
      }
      if (!this.products) {
        this.getProducts();
      }
      this.setModal(false);
    },
    destroyed() {
      this.setModal(false);
    },
    computed: {
      ...mapState('catalog', ['folders', 'products'])
    },
    methods: {
      ...mapActions('catalog', ['getFolders', 'getProducts']),
      ...mapMutations("catalog", ["setModal"]),
    }
  }
</script>

<style lang="scss" scoped>
.loader {
  height: 100px;
}
.catalog-table {
  font-size: 12px;
  max-height: 300px;
  overflow: auto;
  padding-bottom: 1px;
  padding-right: 10px;
  .link-folder {
    &.child {
      cursor: pointer;
    }
    .ico-arrow {
      margin-right: 6px;
      vertical-align: middle;
    }
    .ico-folder {
      margin-right: 6px;
      vert-align: middle;
    }
  }
  .catalog-menu {
    padding: 0;
    margin: 0;
    list-style: none;
    &--head {
      > div {
        display: flex;
        width: 100%;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #8A8A8A;
        > div {
          border: 1px solid #ccc;
          margin-right: -1px;
          margin-bottom: -1px;
          padding: 12px 8px;
          &:nth-child(1) {
            width: 33%;
          }
          &:nth-child(2) {
            width: 7%;
          }
          &:nth-child(3) {
            width: 8%;
          }
          &:nth-child(4) {
            width: 8%;
          }
          &:nth-child(5) {
            width: 8%;
          }
          &:nth-child(6) {
            width: 8%;
          }
          &:nth-child(7) {
            width: 6%;
          }
          &:nth-child(8) {
            width: 6%;
          }
          &:nth-child(9) {
            width: 8%;
          }
          &:nth-child(10) {
            width: 8%;
            margin-right: 0;
          }
        }
        &:nth-child(1) {
          > div {
            &:nth-child(8) {
              border-left-color: #fff;
            }
          }
        }
        &:nth-child(2) {
          > div {
            padding: 5px 8px;
            &:nth-child(1) {
              border-top-color: #fff;
            }
            &:nth-child(2) {
              border-top-color: #fff;
            }
            &:nth-child(3) {
              border-top-color: #fff;
            }
            &:nth-child(4) {
              border-top-color: #fff;
            }
            &:nth-child(5) {
              border-top-color: #fff;
            }
            &:nth-child(6) {
              border-top-color: #fff;
            }
            &:nth-child(7) {
              width: 6%;
            }
            &:nth-child(8) {
              width: 6%;
            }
            &:nth-child(9) {
              width: 8%;
              margin-right: -1px;
              border-top-color: #fff;
            }
            &:nth-child(10) {
              width: 8%;
              margin-right: 0;
              border-top-color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
