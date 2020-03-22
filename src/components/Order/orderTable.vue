<template>
  <div class="order-table">
    <div class="order-table--btn pt-10">
      <router-link :to="{name: 'Selection'}" class="btn black fw-normal">
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
    </div>
    <table class="table">
      <tr class="head">
        <td rowspan="2" width="34" class="text-center">
          <template v-if="productsSelected.length">
            <input
              id="allCheckboxOrders"
              type="checkbox"
              class="style-checkbox"
              v-model="allProd"
            >
            <label for="allCheckboxOrders"></label>
          </template>
        </td>
        <td rowspan="2" width="34%">Номенклатура</td>
        <td rowspan="2" width="8%">Код</td>
        <td colspan="3" width="28%">Количество</td>
        <td rowspan="2" width="8%">Отстаток</td>
        <td rowspan="2" width="8%">Цена</td>
        <td colspan="2" width="16%">Сумма</td>
      </tr>
      <tr class="head">
        <td class="bg-none" width="8%">Заказ</td>
        <td class="bg-none" width="8%">Резерв</td>
        <td class="bg-none" width="8%">На согласовании</td>
        <td class="bg-none">Заказ</td>
        <td class="bg-none">Резерв</td>
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
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td>{{ item.order }}</td>
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
    <div class="order-table--btn" v-if="productsSelected.length">
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
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    name: "Ordertable",
    computed: {
      ...mapState('catalog', ['products']),
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
      ...mapMutations("catalog", ["setCombineOrderSel", "setCombineOrderName"]),
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
</style>
