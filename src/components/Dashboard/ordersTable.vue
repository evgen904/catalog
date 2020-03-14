<template>
  <div>
    <h2>Заказы</h2>
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
    name: "ordersTable",
    computed: {
      ...mapState('dashboard', ['orders', 'legendOrders'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
