<template>
  <div>
    <h2>Заказы</h2>
    <router-link class="btn orange" :to="{name: 'Order'}">
      <img src="../../assets/plus.svg" alt="">
      Создать заказ
    </router-link>
    <table class="table" v-if="orders.length">
      <tr>
        <td rowspan="2">
          <input type="checkbox" :value="false">
        </td>
        <td rowspan="2">Заказ</td>
        <td rowspan="2">№ Заказа</td>
        <td colspan="2" align="center">Сумма</td>
        <td rowspan="2">Срок резервирования</td>
      </tr>
      <tr>
        <td class="bg-none">Заказ</td>
        <td class="bg-none">Резерв</td>
      </tr>
      <tr v-for="item in orders" :key="item.id">
        <td>
          <input type="checkbox" :value="false">
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.idOrder }}</td>
        <td>{{ item.order | sum }}</td>
        <td :class="item.reserveStatus">{{ item.reserve | sum }}</td>
        <td class="text-right">{{ item.reservationPeriod | date }}</td>
      </tr>
    </table>
    <div v-if="legendOrders">
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
    <PopupPanel />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import PopupPanel from "./popupPanel";

  export default {
    name: "ordersTable",
    components: {
      PopupPanel
    },
    computed: {
      ...mapState('dashboard', ['orders', 'legendOrders'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
