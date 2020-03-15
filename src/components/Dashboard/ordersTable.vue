<template>
  <div class="orders">
    <h2>Заказы</h2>
    <div class="orders--btn">
      <router-link class="btn orange" :to="{name: 'Order'}">
        <img src="../../assets/plus.svg" alt="">
        Создать заказ
      </router-link>
    </div>
    <template v-if="orders.length">
      <table class="table" v-if="orders.length">
        <tr class="head">
          <td rowspan="2" width="34" class="text-center">
            <input
              id="allCheckboxOrders"
              type="checkbox"
              class="style-checkbox"
              :value="false"
              v-model="allCheckboxOrders"
            >
            <label for="allCheckboxOrders"></label>
          </td>
          <td rowspan="2" width="30%">Заказ</td>
          <td rowspan="2" width="20%">№ Заказа</td>
          <td colspan="2" width="30%">Сумма</td>
          <td rowspan="2" width="16%">Срок резервирования</td>
        </tr>
        <tr class="head">
          <td class="bg-none">Заказ</td>
          <td class="bg-none">Резерв</td>
        </tr>
        <tr v-for="item in orders" :key="item.id">
          <td class="text-center">
            <input
              :id="`id-order-${item.idOrder}`"
              type="checkbox"
              class="style-checkbox"
              @change="setCombineOrder($event, item)"
              :value="item.combineOrder"
              :checked="item.combineOrder"
            >
            <label :for="`id-order-${item.idOrder}`"></label>
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.idOrder }}</td>
          <td>{{ item.order | sum }}</td>
          <td :class="item.reserveStatus">{{ item.reserve | sum }}</td>
          <td class="text-right">{{ item.reservationPeriod | date }}</td>
        </tr>
      </table>
      <div class="orders--legend" v-if="legendOrders">
        Легенда:
        <span
          :class="{
            'color-red': !legendOrders.goodsOnAgreement.val,
            'color-green': legendOrders.goodsOnAgreement.val
          }"
        >
        {{ legendOrders.goodsOnAgreement.status }}
      </span>
        <span
          :class="{
            'color-red': !legendOrders.areOutstanding.val,
            'color-green': legendOrders.areOutstanding.val
          }"
        >
        {{ legendOrders.areOutstanding.status }}
      </span>
      </div>
      <PopupPanel :total="orders.length" :checkboxSelected="checkboxSelected" />
    </template>
    <div v-else class="orders--loader">
      <baseLoader />
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import PopupPanel from "./popupPanel";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "ordersTable",
    components: {
      PopupPanel,
      baseLoader
    },
    computed: {
      ...mapState('dashboard', ['orders', 'legendOrders']),
      checkboxSelected() {
        let count = 0;
        for (let i=0; i < this.orders.length; i++) {
          if (this.orders[i]['combineOrder']) {
            count++;
          }
        }
        return count;
      }
    },
    data() {
      return {
        allCheckboxOrders: false,
      }
    },
    watch: {
      allCheckboxOrders(val) {
        for (let i = 0; i < this.orders.length; i++) {
          this.setCombineOrderName({
            index: i,
            value: val
          });
        }
      }
    },
    methods: {
      ...mapMutations('dashboard', ['setCombineOrderName']),
      setCombineOrder(val, elem) {
        this.setCombineOrderName({
          index: this.orders.findIndex(item => item.idOrder === elem.idOrder),
          value: val.target.checked
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.orders {
  &--loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
  }
  &--btn {
    margin-bottom: 15px;
  }
  &--legend {
    font-weight: 500;
    font-size: 12px;
    color: #313131;
    padding: 24px 0 10px;
    span {
      margin-right: 10px;
    }
  }
}
</style>
