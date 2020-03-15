<template>
  <div class="order-table">
    <table class="table">
      <tr class="head">
        <td rowspan="2" width="34" class="text-center">
          <input
            id="allCheckboxOrders"
            type="checkbox"
            class="style-checkbox"
          >
          <label for="allCheckboxOrders"></label>
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

      <tr
        v-for="(index) in 4"
        :key="index"
      >
        <td class="text-center">
          <input
            :id="`id-${index}`"
            type="checkbox"
            class="style-checkbox"
          >
          <label :for="`id-${index}`"></label>
        </td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
        <td>sdf</td>
      </tr>
    </table>
    <div class="order-table--btn">
      <button class="btn black">
        <img src="../../assets/save.svg" alt="">
        Записать заказ
      </button>
      <button class="btn black">
        <img src="../../assets/del.svg" alt="">
        Удалить из заказа
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Ordertable"
  }
</script>

<style lang="scss" scoped>
.order-table {
  &--btn {
    display: flex;
    margin-bottom: 16px;
    padding-top: 24px;
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
