<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper--main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header/';
  import Footer from '@/components/Footer/';

  export default {
    name: 'defaultLayout',
    components: {
      Header,
      Footer
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
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &--main {
    flex: auto;
    padding: 0 20px 34px;
  }
}
</style>
