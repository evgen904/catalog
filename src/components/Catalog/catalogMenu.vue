<template>
  <li
    :class="`level-${item.level}`"
    v-if="showFolder"
  >
    <div class="tr" @dblclick="toggle">
      <div>
        <span
          class="link-folder"
          :class="{'child':item.children && item.children.length || productsFolder.length}"
          @click="toggle"
          @dblclick="makeFolder"
        >
          <span class="ico-arrow" :class="{'open': isOpen || searchProducts.length}"></span>
          <img class="ico-folder" src="@/assets/folder.svg" alt="">
          {{ item.title }}
        </span>
      </div>
      <div>{{ item.code }}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <ul class="products" v-if="productsFolder.length && isOpen">
      <li
        class="tr product"
        v-for="prod in productsFolder"
        :key="prod.id"
      >
        <div>
          <div class="prod-link">
            <span @click="showModal(prod.code)" class="prod-title">
              {{ prod.title }}
            </span>
          </div>
        </div>
        <div>{{ prod.code }}</div>
        <div>{{ prod.remainder }}</div>
        <div>
          <img class="icon-status" :class="{'red': !prod.byAgreement}" :src="require(`../../assets/check-${prod.byAgreement}.svg`)" alt="">
        </div>
        <div>{{ prod.priceDealer | sum }}</div>
        <div>{{ prod.priceBasic | sum }}</div>
        <div>{{ prod.minibox }}</div>
        <div class="text-right">{{ prod.packaging }}</div>
      </li>
    </ul>
    <ul v-if="isFolder && (isOpen || searchProducts.length)">
      <catalogMenu
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
      ></catalogMenu>
    </ul>
    <portal to="product-head" v-if="modal">
      <modalHead v-if="product" :title="product.title" />
    </portal>
    <portal to="product-body" v-if="modal">
      <modalProduct :product="product" />
    </portal>
  </li>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import modalHead from '@/components/Catalog/modalHead.vue';
  import modalProduct from '@/components/Catalog/modalProduct.vue';

  export default {
    name: "catalogMenu",
    components: {
      modalHead,
      modalProduct
    },
    props: {
      item: Object,
    },
    data: function () {
      return {
        isOpen: false
      }
    },
    computed: {
      ...mapState('catalog', ['modal', 'product', 'searchText', 'searchProducts', 'searchFolders']),
      ...mapState('catalog', { productsState: 'products' }),
      showFolder() {
        if (this.searchFolders.length) {
          return this.searchFolders.find(folder => folder == this.item.idFolder) ? true : false
        } else {
          return true
        }
      },
      productsSelected() {
        if (this.searchProducts.length) {
          return this.searchProducts;
        } else {
          return this.productsState;
        }
      },
      productsFolder() {
        return this.productsSelected.filter(el => el.idFolder == this.item.idFolder);
      },
      isFolder: function () {
        return this.item.children &&
            this.item.children.length || this.productsFolder.length
      }
    },
    watch: {
      searchFolders(val) {
        if (val.length) {
          this.isOpen = true
        }
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
      ...mapActions('catalog', ['getProduct']),
      toggle: function () {
        if (this.isFolder) {
          this.isOpen = !this.isOpen
        }
      },
      makeFolder: function () {
        if (!this.isFolder) {
          this.$emit('make-folder', this.item);
          this.isOpen = true
        }
      },
      showModal(codeProduct) {
        this.getProduct(codeProduct);
        this.setModal(true);
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 14px;
    color: #313131;
    &.select-first {
      > li:first-child {
        > div {
          &:nth-child(1).tr {
            background: #ffc888;
          }
        }
      }
    }
    li {
      &.selected {
        > div {
          &:nth-child(1).tr {
            background: #ffc888;
          }
        }
      }
      &.tr.product.selected {
        background: #ffc888;
      }
      .link-folder {
        -moz-user-select: none;
        -khtml-user-select: none;
        user-select: none;
        &.child {
          cursor: pointer;
          .ico-arrow {
            opacity: 1;
          }
        }
        .ico-arrow {
          display: inline-block;
          vertical-align: middle;
          width: 6px;
          height: 6px;
          position: relative;
          margin-right: 10px;
          opacity: 0;
          &:after {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            background: url('../../assets/arrow.svg') 0 0 no-repeat;
            position: absolute;
            top: 0;
            left: 0;
          }
          &.open {
            &:after {
              top: -3px;
              transform: rotate(180deg);
            }
          }
        }
        .ico-folder {
          margin-right: 6px;
          vert-align: middle;
        }
      }
      &.level-1 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 14px;
            }
          }
        }
      }
      &.level-2 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 30px;
            }
          }
        }
      }
      &.level-3 {
        .tr {
          > div {
            &:nth-child(1) {
              padding-left: 46px;
            }
          }
        }
      }
      .tr {
        display: flex;
        width: 100%;
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
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
    }
  }
  .style-checkbox + label {
    &:after, &:before {
      margin-top: -6px;
      margin-left: 4px;
    }
  }
  .prod-link {
    padding-left: 16px;
  }
  .prod-title {
    cursor: pointer;
    padding-left: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
  .icon-status {
    margin-bottom: -4px;
    &.red {
      width: 14px;
    }
  }
</style>
