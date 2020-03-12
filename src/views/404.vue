<template>
  <div class="page-404">
    <h4>Страница не найдена</h4>
    <p>
      Возможно, вы ошиблись в адресе<br>
      или страница была перемещена
    </p>
    <div>
      <router-link class="btn black" :to="{name: 'Dashboard'}">Вернуться на главную</router-link>
    </div>
    <div class="img-404">
      <img src="../assets/404.jpg" alt="">
    </div>
    <div>
      <router-link class="btn white" :to="{name: 'Catalog'}">Каталог</router-link>
      <router-link class="btn orange" :to="{name: 'Order'}">
        <img src="../assets/plus.svg" alt="">
        Создать заказ
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Page404'
  }
</script>

<style lang="scss" scoped>
.page-404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  text-align: center;
  margin: 30px 0 0;
  padding: 20px 0;
  min-height: calc(100vh - 210px);
  h4 {
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;
    color: #313131;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #313131;
  }
  .img-404 {
    min-height: 455px;
    img {
      vertical-align: top;
    }
  }
  .btn {
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    border-radius: 2px;
    padding: 8px 14px;
    margin: 0 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    &.black {
      background: #313131;
      color: #FFFFFF;
    }
    &.white {
      background: #FFFFFF;
      border: 2px solid #F6921E;
      border-radius: 2px;
      font-size: 13px;
      line-height: 15px;
      color: #F6921E;
      padding: 8px 18px;
    }
    &.orange {
      background: linear-gradient(250.8deg, #FF8900 14.93%, #FFAB2D 86.64%), #FFA133;
      border-radius: 2px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: #FFFFFF;
      padding: 10px 18px;
      img {
        vertical-align: middle;
        margin-right: 4px;
      }
    }
  }
}
</style>
