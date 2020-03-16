<template>
  <div>
    <Head title="Добро пожаловать! Campaign name" path="Заказ" />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <div class="order">
      <div class="order--title">Заказ: Хорошие замки - Самостоятельная заявка </div>
      <div class="order--fields">
        <div class="row">
          <div class="title">Код:</div>
          <div class="input">
            <input class="code" type="text">
          </div>
        </div>
        <div class="row">
          <div class="title">Номер:</div>
          <div class="input">
            <input class="number" type="text">
          </div>
        </div>
        <div class="row">
          <div class="title">Наименование:</div>
          <div class="input">
            <input class="name-field" type="text">
          </div>
        </div>
        <div class="row">
          <div class="title">Срок резервирования:</div>
          <div class="input">
            <input class="period" type="text">
          </div>
        </div>
        <div class="row">
          <div class="title">Надпись на наклейке:</div>
          <div class="input">
            <input class="sticker" type="text">
          </div>
        </div>
      </div>
      <OrderTable />
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import OrderTable from '@/components/Order/orderTable.vue';

  export default {
    name: 'Order',
    components: {
      Head,
      OrderTable
    }
  }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.order {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  width: 100%;
  height: calc(100vh - 270px);
  padding: 20px;
  overflow: auto;
  &--title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  &--fields {
    margin-bottom: 20px;
    .row {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      .title {
        font-weight: 500;
        font-size: 12px;
        color: #313131;
        width: 134px;
        margin-right: 10px;
      }
      .input {
        input[type="text"] {
          outline-style: none;
          padding: 4px 10px;
          margin: 0;
          border: 1px solid #DBDBDB;
          height: 24px;
          font-size: 12px;
          color: #313131;
          &.code {
            width: 125px;
          }
          &.number {
            width: 150px;
          }
          &.name-field {
            width: 336px;
          }
          &.period {
            width: 78px;
          }
          &.sticker {
            width: 290px;
          }
        }
      }
    }
  }
}
</style>
