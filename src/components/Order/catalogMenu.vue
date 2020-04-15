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
        </div>
        <div>{{ prod.code }}</div>
        <div>
          <input
            type="number"
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
      </li>
    </ul>
    <ul v-if="isFolder && isOpen">
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
        if (Number(event.target.value) < 0) {
          event.target.value = 0;
        }

        let selectedProduct = (Number(event.target.value) > 0) ? true : false;
        this.setCombineOrderName({
          index: this.products.findIndex(item => item.code === elem.code),
          value: selectedProduct
        });

        this.setOrder({
          index: this.products.findIndex(item => item.code === elem.code),
          value: Number(event.target.value)
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
  font-size: 14px;
  color: #313131;
  &.select-first {
    > li:first-child {
      > div {
        &:nth-child(1).tr {
          background: #F8F8F8;
        }
      }
    }
  }
  li {
    &.selected {
      > div {
        &:nth-child(1).tr {
          background: #F8F8F8;
        }
      }
    }
    &.tr.product.selected {
      background: #F8F8F8;
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
.prod-link {
  padding-left: 16px;
}
.prod-title {
  cursor: pointer;
  padding-left: 16px;
  &:hover {
    text-decoration: underline;
  }
}
.order-input {
  border: 1px solid #ccc;
  background: transparent;
  font-size: 14px;
  padding: 0 6px;
  margin: 0;
  width: 100%;
  height: 100%;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover,
  &:focus {
    -moz-appearance: textfield;
  }
}
</style>
