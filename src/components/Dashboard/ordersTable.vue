<template>
  <div class="orders">
    <h2>Заказы</h2>
    <div class="orders--btn">
      <router-link class="btn orange" :to="{name: 'Order'}" target="_blank">
        <img src="@/assets/plus.svg" alt="">
        Создать заказ
      </router-link>
    </div>
    <template v-if="orders.length">
      <div class="table-wrap" ref="tableOrders">
        <table class="table" v-if="orders.length">
          <tr class="head">
            <td rowspan="2" width="34" class="text-center">
              <div>
                <input
                  id="allCheckboxOrders"
                  type="checkbox"
                  class="style-checkbox"
                  :value="false"
                  v-model="allCheckboxOrders"
                >
                <label for="allCheckboxOrders"></label>
              </div>
            </td>
            <td rowspan="2" width="30%"><div>Заказ</div></td>
            <td rowspan="2" width="20%"><div>№ Заказа</div></td>
            <td colspan="2" width="30%"><div>Сумма</div></td>
            <td rowspan="2" width="16%"><div>Срок резервирования</div></td>
          </tr>
          <tr class="head">
            <td class="bg-none"><div>Заказ</div></td>
            <td class="bg-none"><div>Резерв</div></td>
          </tr>
          <tr
            v-for="(item, index) in orders"
            :key="item.id"
            :class="{'selected' : index == selectOrder}"
          >
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
            <td class="link-order">
              <router-link
                :to="{
                  name: 'OrderId',
                  params: { id: item.order },
                }"
                target="_blank"
              >
                {{ item.title }}
              </router-link>
            </td>
            <td>{{ item.idOrder }}</td>
            <td>{{ item.order | sum }}</td>
            <td :class="item.reserveStatus">{{ item.reserve | sum }}</td>
            <td class="text-right">{{ item.reservationPeriod | date }}</td>
          </tr>
        </table>
      </div>
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
    <baseLoader v-else />
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
      },
      allCheckboxOrders: {
        get() {
          return (this.checkboxSelected == this.orders.length) ? true : false;
        },
        set(val) {
          for (let i = 0; i < this.orders.length; i++) {
            this.setCombineOrderName({
              index: i,
              value: val
            });
          }
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
    },
    mounted() {
      document.onkeyup = () => {
        let key = window.event.keyCode;
        if (key == 13) {
          if (this.selectOrder !== null) {
            let routeData = this.$router.resolve({name: 'OrderId', params: { id: this.orders[this.selectOrder]['order'] }});
            window.open(routeData.href, '_blank');
          }
        }
        if (key == 38) {
          if (this.selectOrder === null || this.selectOrder <= 0) {
            this.selectOrder = 0;
          } else {
            this.selectOrder--
            this.$refs.tableOrders.scrollTop = this.$refs.tableOrders.querySelector(
                ".selected"
            ).offsetTop-60;
          }
        }
        if (key == 40) {
          if (this.selectOrder === null) {
            this.selectOrder = 0;
          } else {
            if (this.selectOrder < this.orders.length-1) {
              this.selectOrder++
              this.$refs.tableOrders.scrollTop = this.$refs.tableOrders.querySelector(
                  ".selected"
              ).offsetTop;
            }
          }
        }
      }
    },
    data() {
      return {
        selectOrder: null
      }
    }
  }
</script>

<style lang="scss" scoped>
.orders {
  .loader {
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
  .link-order {
    a {
      color: #313131;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .table-wrap {
    height: calc(100vh - 330px);
    overflow: auto;
    .table {
      position: relative;
      tr.head {
        &:nth-child(1) {
          td {
            &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(5)  {
              > div {
                min-height: 58px;
              }
            }
            &:nth-child(4) {
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
          background: #e4e4e4;
        }
      }
    }
  }
}
</style>
