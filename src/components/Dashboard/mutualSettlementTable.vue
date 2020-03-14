<template>
  <div>
    <h2>Взаиморассчеты</h2>
    <table class="table" v-if="mutualSettlement.length">
      <tr>
        <td width="30%">Дата</td>
        <td width="70%">Сумма</td>
      </tr>
      <tr v-for="item in mutualSettlement" :key="item.id">
        <td width="30%">{{ item.date | date }}</td>
        <td width="70%" class="text-right">{{ item.sum | sum }}</td>
      </tr>
    </table>
    <div v-if="legendMutualSettlements">
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

</style>
