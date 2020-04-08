<template>
  <div class="mutual-settlement">
    <h2>Взаиморасчеты</h2>
    <template v-if="mutualSettlement.length">
      <div class="table-wrap">
        <table class="table" >
          <tr class="head">
            <td width="30%">Дата</td>
            <td width="70%">Сумма</td>
          </tr>
          <tr v-for="item in mutualSettlement" :key="item.id">
            <td width="30%">{{ item.date | date }}</td>
            <td width="70%" class="text-right">{{ item.sum | sum }}</td>
          </tr>
          <tr>
            <td width="30%"></td>
            <td width="70%" class="text-right">Итог: 100 000 00</td>
          </tr>
        </table>
      </div>
      <div class="mutual-settlement--legend" v-if="legendMutualSettlements">
        Легенда:
        <span
          :class="{
            'color-red': !legendMutualSettlements.val,
            'color-green': legendMutualSettlements.val
          }"
        >
          {{ legendMutualSettlements.status }}
        </span>
      </div>
    </template>
    <baseLoader v-else />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "mutualSettlementTable",
    components: {
      baseLoader
    },
    computed: {
      ...mapState('dashboard', ['mutualSettlement', 'legendMutualSettlements'])
    }
  }
</script>

<style lang="scss" scoped>
.mutual-settlement {
  h2 {
    padding-top: 50px;
    margin-bottom: 10px;
  }
  .loader {
    height: 200px;
  }
  &--legend {
    font-weight: 500;
    font-size: 12px;
    color: #313131;
    padding: 14px 0 0;
  }
  .table-wrap {
    height: calc(50vh - 190px);
    overflow: auto;
  }
}
</style>
