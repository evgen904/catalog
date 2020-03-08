<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper--main">
      <router-view/>
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
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &--main {
    flex: auto;
  }
}
</style>
