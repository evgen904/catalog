<template>
  <div>
    <h2>Взаиморассчеты</h2>
    <table class="table">
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2</td>
      </tr>
    </table>
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
