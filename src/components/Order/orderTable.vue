<template>
  <div class="order-table">
    <div class="order-table--btn pt-10">
      <router-link
        :to="{
          name: 'SelectionId',
          params: {
            id: String(orderState.order)
          }
        }"
        class="btn black fw-normal"
        v-if="orderState"
      >
        <img src="@/assets/selection.svg" alt="">
        Подбор товаров
      </router-link>
      <router-link :to="{name: 'Selection'}" class="btn black fw-normal" v-else>
        <img src="@/assets/selection.svg" alt="">
        Подбор товаров
      </router-link>
      <button class="btn black fw-normal">
        <img src="@/assets/download.svg" alt="">
        Загрузить заказ из файла
      </button>
      <button class="btn black fw-normal" v-if="productsSelected.length">
        <img src="@/assets/upload-order.svg" alt="">
        Выгрузить заказ в файл
      </button>
      <div v-if="productsSelected.length">
        <button class="btn black fw-normal">
          <img src="@/assets/save.svg" alt="">
          Записать заказ
        </button>
        <button @click="delProducts" class="btn black fw-normal" v-if="delProdCount">
          <img src="@/assets/del.svg" alt="">
          Удалить из заказа
        </button>
      </div>
    </div>
    <div class="table-wrap">
      <table class="table">
        <tr class="head">
          <td rowspan="2" width="34" class="text-center">
            <div>
              <template v-if="productsSelected.length">
                <input
                  id="allCheckboxOrders"
                  type="checkbox"
                  class="style-checkbox"
                  v-model="allProd"
                >
                <label for="allCheckboxOrders"></label>
              </template>
            </div>
          </td>
          <td rowspan="2" width="34%"><div>Номенклатура</div></td>
          <td rowspan="2" width="8%"><div>Код</div></td>
          <td colspan="3" width="28%"><div>Количество</div></td>
          <td rowspan="2" width="8%"><div>Отстаток</div></td>
          <td rowspan="2" width="8%"><div>Цена</div></td>
          <td colspan="2" width="16%"><div>Сумма</div></td>
        </tr>
        <tr class="head">
          <td class="bg-none" width="8%"><div>Заказ</div></td>
          <td class="bg-none" width="8%"><div>Резерв</div></td>
          <td class="bg-none" width="8%"><div>На согласовании</div></td>
          <td class="bg-none"><div>Заказ</div></td>
          <td class="bg-none"><div>Резерв</div></td>
        </tr>

        <template v-if="productsSelected.length">
          <tr
            v-for="(item, index) in productsSelected"
            :key="item.id"
          >
            <td class="text-center">
              <input
                :id="`id-${index}`"
                type="checkbox"
                class="style-checkbox"
                @change="setCombineOrderSelected($event, item)"
                :value="item.combineOrderSelected"
                :checked="item.combineOrderSelected"
              >
              <label :for="`id-${index}`"></label>
            </td>
            <td><span @click="showModal(item.code)" class="prod-link">{{ item.title }}</span></td>
            <td>{{ item.code }}</td>
            <td>
              <input
                type="number"
                class="order-input"
                :value="item.order"
                @input="setOrderProd($event, item)"
              >
            </td>
            <td>{{ item.reserve }}</td>
            <td>{{ item.remainder }}</td>
            <td>{{ item.residue }}</td>
            <td>{{ item.priceBasic }}</td>
            <td>{{ item.orderPrice }}</td>
            <td>{{ item.reserve }}</td>
          </tr>
        </template>
        <template v-else>
          <tr class="td-placeholder">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr class="td-placeholder--bot">
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </template>
      </table>
    </div>
    <portal to="product-head" v-if="modal">
      <modalHead v-if="product" :title="product.title" />
    </portal>
    <portal to="product-body" v-if="modal">
      <modalProduct :product="product" />
    </portal>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from "vuex";
  import modalHead from '@/components/Catalog/modalHead.vue';
  import modalProduct from '@/components/Catalog/modalProduct.vue';

  export default {
    name: "Ordertable",
    components: {
      modalHead,
      modalProduct
    },
    props: {
      orderState: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapState('catalog', ['products', 'modal', 'product']),
      productsSelected() {
        return this.products.filter(item => item.combineOrder)
      },
      delProdCount() {
        return this.products.filter(item => item.combineOrderSelected).length;
      },
      allProd: {
        get() {
          return (this.productsSelected.length == this.delProdCount) ? true : false;
        },
        set(val) {
          for (let i = 0; i < this.products.length; i++) {
            this.setCombineOrderSel({
              index: i,
              value: val
            });
          }
        }
      }
    },
    methods: {
      ...mapMutations("catalog", ["setCombineOrderSel", "setCombineOrderName", "setOrder", "setModal"]),
      ...mapActions('catalog', ['getProduct']),
      setOrderProd(event, elem) {
        if (Number(event.target.value) < 0) {
          event.target.value = 0;
        }
        this.setOrder({
          index: this.products.findIndex(item => item.code === elem.code),
          value: Number(event.target.value)
        });
      },
      setCombineOrderSelected(val, elem) {
        this.setCombineOrderSel({
          index: this.products.findIndex(item => item.code === elem.code),
          value: val.target.checked
        });
      },
      delProducts() {
        for (let item of this.productsSelected) {
          if (item.combineOrderSelected) {
            this.setCombineOrderName({
              index: this.products.findIndex(el => el.code === item.code),
              value: false
            });
            this.setCombineOrderSel({
              index: this.products.findIndex(el => el.code === item.code),
              value: false
            });
          }
        }
        this.allProd = (this.productsSelected.length == this.delProdCount) ? true : false;
      },
      showModal(codeProduct) {
        this.getProduct(codeProduct);
        this.setModal(true);
      }
    }
  }
</script>

<style lang="scss" scoped>
.order-table {
  .td-placeholder {
    td {
      height: 180px;
    }
    &--bot {
      td {
        background-color: transparent !important;
        height: 30px;
      }
    }
  }
  &--btn {
    display: flex;
    margin-bottom: 16px;
    padding-top: 24px;
    &.pt-10 {
      padding-top: 10px;
    }
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
.order-input {
  border: 1px solid #ccc;
  background: transparent;
  font-size: 13px;
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
.prod-link {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.table-wrap {
  overflow: auto;
  max-height: calc(100vh - 348px);
  .table {
    position: relative;
    tr.head {
      &:nth-child(1) {
        td {
          &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(5), &:nth-child(6)  {
            > div {
              min-height: 58px;
            }
          }
          &:nth-child(4), &:nth-child(7) {
            > div {
              border-bottom-color: #fff;
            }
          }
        }
      }
      td {
        background: #fff;
        position: sticky;
        top: 0;
        padding: 0;
        z-index: 1;
        > div {
          padding: 5px 8px;
          margin: -1px -1px -1px 0;
          background: #fff;
          border: 1px solid #DBDBDB;
          border-left: none;
        }
      }
      &:nth-child(2) {
        td {
          top: 29px;
        }
      }
    }
    tr.selected {
      td {
        background: #ffc888;
      }
    }
  }
}
</style>
