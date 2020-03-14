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
    margin: 0 5px;
  }
}
</style>
