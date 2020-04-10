<template>
  <div class="catalog-table" ref="catalogTable">
    <div class="catalog-table--in" v-if="folders.length">
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
      <ul class="catalog-menu" ref="catalogMenu">
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
      if (!this.products.length) {
        this.getProducts();
      }
      this.setModal(false);

      // откл. скролл у body по нажатию вверх, вниз
      let NAVIGATION = [38, 40]
      document.body.addEventListener("keydown", function(event) {
        if (-1 != NAVIGATION.indexOf(event.keyCode))
          event.preventDefault();
      })

      // по нажатию вверх, вниз, появляется возможность открывать папки, управлять таблицей
      document.onkeyup = (e) => {
        let key = window.event.keyCode;

        if (key == 13) {
          if (this.selectItem !== null) {
            let linkFolder = this.$refs.catalogMenu.querySelectorAll('li')[this.selectItem].querySelector('.link-folder');
            let prodTitle = this.$refs.catalogMenu.querySelectorAll('li')[this.selectItem].querySelector('.products .prod-title');

            if (linkFolder) {
              linkFolder.dispatchEvent(new Event("click"));
              if (this.modal) {
                this.setModal(false);
              }
            }
            if (prodTitle && !linkFolder) {
              prodTitle.dispatchEvent(new Event("click"));
            }
          }
        }
        if (key == 38) {
          e.preventDefault();
          if (this.selectItem === null || this.selectItem <= 0) {
            this.selectItem = 0;
            this.$refs.catalogMenu.querySelectorAll('li')[0].classList.add('selected')
          } else {
            this.selectItem--

            for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
              if (this.selectItem == i) {
                this.$refs.catalogMenu.querySelectorAll('li')[i].classList.add('selected')
                this.$refs.catalogTable.scrollTop = this.$refs.catalogMenu.querySelectorAll('li')[i].offsetTop-80;
              } else {
                this.$refs.catalogMenu.querySelectorAll('li')[i].classList.remove('selected')
              }
            }
          }
        }
        if (key == 40) {
          e.preventDefault();
          if (this.selectItem === null) {
            this.selectItem = 0;
            this.$refs.catalogMenu.querySelectorAll('li')[0].classList.add('selected')
          } else {

            if (this.selectItem < this.$refs.catalogMenu.querySelectorAll('li').length-1) {
              this.selectItem++

              for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
                if (this.selectItem == i) {
                  this.$refs.catalogMenu.querySelectorAll('li')[i].classList.add('selected')
                  this.$refs.catalogTable.scrollTop = this.$refs.catalogMenu.querySelectorAll('li')[i].offsetTop-80;
                } else {
                  this.$refs.catalogMenu.querySelectorAll('li')[i].classList.remove('selected')
                }
              }
            }
          }
        }
      }
    },
    destroyed() {
      this.setModal(false);
    },
    computed: {
      ...mapState('catalog', ['folders', 'products', 'modal'])
    },
    data() {
      return {
        selectItem: null
      }
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
  font-size: 14px;
  max-height: 300px;
  overflow: auto;
  padding-bottom: 1px;
  padding-right: 10px;
  &--in {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background: #fff;
      width: 9px;
    }
  }
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
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 2;
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
