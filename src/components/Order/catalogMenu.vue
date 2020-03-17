<template>
  <li :class="`level-${item.level}`">
    <div class="tr">
      <div>
        <span
            class="link-folder"
            :class="{'child':item.children && item.children.length || productsFolder.length}"
            @click="toggle"
            @dblclick="makeFolder"
        >
          <span class="ico-arrow" :class="{'open': isOpen}"></span>
          <img class="ico-folder" src="../../assets/folder.svg" alt="">
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
      <div></div>
      <div></div>
    </div>
    <template v-if="productsFolder.length">
      <div
        class="tr product"
        v-for="prod in productsFolder"
        :key="prod.id"
        v-show="isOpen"
      >
        <div>
          <input
            :id="`id-order-${prod.code}`"
            type="checkbox"
            class="style-checkbox"
            @change="setCombineOrder($event, prod)"
            :value="prod.combineOrder"
            :checked="prod.combineOrder"
          >
          <label :for="`id-order-${prod.code}`"></label>
          <span @click="showModal(prod.code)" class="prod-title">
            {{ prod.title }}
          </span>
        </div>
        <div>{{ prod.code }}</div>
        <div>
          <input
              type="text"
              class="order-input"
              :value="prod.order"
              @input="setOrderProd($event, prod)"
          >
        </div>
        <div>{{ prod.reserve }}</div>
        <div>{{ prod.remainder }}</div>
        <div>{{ prod.byAgreement }}</div>
        <div>{{ prod.priceDealer | sum }}</div>
        <div>{{ prod.priceBasic | sum }}</div>
        <div>{{ prod.minibox }}</div>
        <div class="text-right">{{ prod.packaging }}</div>
      </div>
    </template>
    <ul v-show="isOpen" v-if="isFolder">
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
      ...mapState('catalog', ['products', 'modal', 'product']),
      productsFolder() {
        return this.products.filter(el => el.idFolder == this.item.idFolder);
      },
      isFolder: function () {
        return this.item.children &&
            this.item.children.length || this.productsFolder.length
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal", "setCombineOrderName", "setOrder"]),
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
      setCombineOrder(val, elem) {
        this.setCombineOrderName({
          index: this.products.findIndex(item => item.code === elem.code),
          value: val.target.checked
        });
      },
      showModal(codeProduct) {
        this.getProduct(codeProduct);
        this.setModal(true);
      },
      setOrderProd(event, elem) {
        this.setOrder({
          index: this.products.findIndex(item => item.code === elem.code),
          value: event.target.value
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 12px;
  color: #313131;
  li {
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
.prod-title {
  cursor: pointer;
  padding-left: 16px;
  &:hover {
    text-decoration: underline;
  }
}
  .order-input {
    border: none;
    background: transparent;
    font-size: 13px;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
