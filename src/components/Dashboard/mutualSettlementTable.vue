<template>
  <div class="mutual-settlement">
    <h2>Взаиморасчеты</h2>
    <template v-if="mutualSettlement.length">
      <table class="table" >
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
    </template>
    <div class="mutual-settlement--loader" v-else>
      <baseLoader />
    </div>
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
    padding-top: 34px;
    margin-bottom: 26px;
  }
  &--loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  &--legend {
    font-weight: 500;
    font-size: 12px;
    color: #313131;
    padding: 24px 0 0;
  }
}
</style>
