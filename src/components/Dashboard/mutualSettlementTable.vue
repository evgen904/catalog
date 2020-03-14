<template>
  <div class="mutual-settlement">
    <h2>Взаиморассчеты</h2>
    <table class="table" v-if="mutualSettlement.length">
      <tr class="head">
        <td width="30%">Дата</td>
        <td width="70%">Сумма</td>
      </tr>
      <tr v-for="item in mutualSettlement" :key="item.id">
        <td width="30%">{{ item.date | date }}</td>
        <td width="70%" class="text-right">{{ item.sum | sum }}</td>
      </tr>
    </table>
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
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "mutualSettlementTable",
    computed: {
      ...mapState('dashboard', ['mutualSettlement', 'legendMutualSettlements'])
    }
  }
</script>

<style lang="scss" scoped>
.mutual-settlement {
  margin-bottom: 50px;
  h2 {
    padding-top: 34px;
    margin-bottom: 26px;
  }
  &--legend {
    font-weight: 500;
    font-size: 12px;
    color: #313131;
    padding: 24px 0 0;
  }
}
</style>
