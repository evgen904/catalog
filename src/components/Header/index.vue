<template>
  <div class="header">
    Header
    <span @click="logout">Выход</span>
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
  height: 60px;
  border-bottom: 1px solid #ccc;
}
</style>
