<template>
  <div class="header">
    <div class="header--logo">
      <router-link :to="{name: 'Dashboard'}">
        <img src="@/assets/logo-head.svg" alt="">
      </router-link>
      <h2>
        Campaign name
      </h2>
    </div>
    <div class="header--exit">
      <router-link class="btn white" :to="{name:'Catalog'}" target="_blank">Каталог</router-link>
      <span @click="logout">
        <img src="@/assets/exit.svg" alt="">
        Выход
      </span>
    </div>
  </div>
</template>

<script>
  import Сookies from 'js-cookie'
  import { mapMutations } from "vuex";

  export default {
    name: 'Header',
    methods: {
      ...mapMutations(['setLoggedIn']),
      logout() {
        Сookies.remove('auth');
        this.setLoggedIn(false);
        this.$router.push({
          name: 'Login'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 0 20px 0;
  &--logo {
    display: flex;
    align-items: center;
    h2 {
      font-size: 18px;
      line-height: 21px;
      color: #313131;
      font-weight: normal;
      padding: 6px 0 0 26px;
    }
  }
  &--exit {
    display: flex;
    align-items: center;
    .btn {
      cursor: pointer;
      display: inline-block;
      vertical-align: top;
      border-radius: 2px;
      padding: 8px 14px;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      &.white {
        background: #FFFFFF;
        border: 2px solid #F6921E;
        border-radius: 2px;
        font-size: 13px;
        line-height: 15px;
        color: #F6921E;
        padding: 8px 18px;
      }
    }
    a {
      font-size: 16px;
      line-height: 19px;
      color: #313131;
      text-decoration: none;
      margin-right: 40px;
      img {
        vertical-align: text-top;
        margin-right: 12px;
      }
    }
    span {
      cursor: pointer;
      font-size: 13px;
      line-height: 15px;
      color: #313131;
      img {
        vertical-align: text-top;
        margin-right: 12px;
      }
    }
  }
}
</style>
