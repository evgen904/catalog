<template>
  <div class="head">
    <div class="head--path">
      <span @click="linkPush('Dashboard')">Главная</span> /
      <span @click="linkPush('Catalog')">Каталог товаров</span> /
      {{ title }}
    </div>
    <div class="head--title">
      {{ title }}
    </div>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    name: "modalHead",
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      ...mapMutations("catalog", ["setModal"]),
      linkPush(link) {
        this.$router.push({ name: link })
        this.setModal(false)
      }
    }
  }
</script>

<style lang="scss" scoped>
.head {
  margin-bottom: 10px;
  &--path {
    font-size: 13px;
    color: #a1a1a1;
    margin-bottom: 20px;
    span {
      cursor: pointer;
      color: #f6921e;
    }
  }
  &--title {
    font-weight: normal;
    font-size: 20px;
    color: #313131;
  }
}
</style>
