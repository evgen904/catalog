<template>
  <div>
    <template v-if="folders.length">
      <div class="catalog-table">
        <div class="catalog-menu--head">
          <div>
            <div>Наименование</div>
            <div>Код</div>
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
            <div>Дилерская</div>
            <div>Базовая</div>
            <div></div>
            <div></div>
          </div>
        </div>
        <ul class="catalog-menu select-first" ref="catalogMenu" @click="selectProd($event)">
          <CatalogMenu
            v-for="item in folders"
            :key="item.id"
            :item="item"
          ></CatalogMenu>
        </ul>
      </div>
    </template>
    <baseLoader v-else />
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from "vuex";
  import CatalogMenu from "./catalogMenu";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "catalogTable",
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
      this.activeComponent = true

      if (this.activeComponent) {
        window.addEventListener("keydown", this.onKeyUp);
      } else {
        window.removeEventListener("keydown", this.onKeyUp);
      }
    },
    destroyed() {
      this.activeComponent = false
      window.removeEventListener("keydown", this.onKeyUp);
      this.setModal(false)
    },
    computed: {
      ...mapState('catalog', ['folders', 'products', 'modal'])
    },
    data() {
      return {
        selectItem: 0,
        activeComponent: false
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
      ...mapActions('catalog', ['getFolders', 'getProducts']),
      selectProd(event) {
        if (this.$refs.catalogMenu.classList.contains('select-first')) {
          this.$refs.catalogMenu.classList.remove('select-first')
        }
        let indexTr = 0
        for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
          this.$refs.catalogMenu.querySelectorAll('li')[i].classList.remove('selected')
          indexTr++
        }
        if (indexTr == this.$refs.catalogMenu.querySelectorAll('li').length) {
          event.target.closest('li').classList.add('selected')

          let indexActiveLi = 0
          for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
            if (this.$refs.catalogMenu.querySelectorAll('li')[i].classList.contains('selected')) {
              indexActiveLi = i
              break
            }
          }
          this.selectItem = indexActiveLi
        }
      },
      onKeyUp(event) {
        let key = event.which;

        if (key == 13) {
          if (this.$refs.catalogMenu.classList.contains('select-first')) {
            this.$refs.catalogMenu.classList.remove('select-first')
            this.$refs.catalogMenu.querySelectorAll('li')[0].classList.add('selected')
          }

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
          if (this.$refs.catalogMenu.classList.contains('select-first')) {
            this.$refs.catalogMenu.classList.remove('select-first')
          }

          if (this.selectItem === null || this.selectItem <= 0) {
            this.selectItem = 0;
            this.$refs.catalogMenu.querySelectorAll('li')[0].classList.add('selected')
          } else {
            this.selectItem--

            for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
              if (this.selectItem == i) {
                this.$refs.catalogMenu.querySelectorAll('li')[i].classList.add('selected')
              } else {
                this.$refs.catalogMenu.querySelectorAll('li')[i].classList.remove('selected')
              }
            }
          }
        }
        if (key == 40) {
          if (this.$refs.catalogMenu.classList.contains('select-first')) {
            this.$refs.catalogMenu.classList.remove('select-first')
          }

          if (this.selectItem === null) {
            this.selectItem = 0;
            this.$refs.catalogMenu.querySelectorAll('li')[0].classList.add('selected')
          } else {

            if (this.selectItem < this.$refs.catalogMenu.querySelectorAll('li').length-1) {
              this.selectItem++

              for (let i = 0; i < this.$refs.catalogMenu.querySelectorAll('li').length; i++) {
                if (this.selectItem == i) {
                  this.$refs.catalogMenu.querySelectorAll('li')[i].classList.add('selected')
                } else {
                  this.$refs.catalogMenu.querySelectorAll('li')[i].classList.remove('selected')
                }
              }
            }
          }
        }

      }
    }
  }
</script>

<style lang="scss" scoped>
.loader {
  height: 100px;
}
.catalog-table {
  font-size: 14px;
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
    width: 7px;
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
      z-index: 1;
      background: #fff;
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
          padding: 5px 8px;
          &:nth-child(1) {
            width: 36%;
          }
          &:nth-child(2) {
            width: 8%;
          }
          &:nth-child(3) {
            width: 10%;
          }
          &:nth-child(4) {
            width: 10%;
          }
          &:nth-child(5) {
            width: 8%;
          }
          &:nth-child(6) {
            width: 8%;
          }
          &:nth-child(7) {
            width: 10%;
          }
          &:nth-child(8) {
            width: 10%;
            margin-right: 0;
          }
        }
        &:nth-child(1) {
          > div {
            &:nth-child(6) {
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
              width: 8%;
            }
            &:nth-child(6) {
              width: 8%;
            }
            &:nth-child(7) {
              width: 10%;
              margin-right: -1px;
              border-top-color: #fff;
            }
            &:nth-child(8) {
              width: 10%;
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
