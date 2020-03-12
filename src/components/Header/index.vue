<template>
  <div class="header">
    <div class="header--logo">
      <router-link :to="{name: 'Dashboard'}">
        <img src="../../assets/logo-head.svg" alt="">
      </router-link>
    </div>
    <div class="header--exit">
      <a href="tel:+7 (499) 747-57-58">
        <img src="../../assets/phone.svg" alt="">
        +7 (499) 747-57-58
      </a>
      <span @click="logout">
        <img src="../../assets/exit.svg" alt="">
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

  }
  &--exit {
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
