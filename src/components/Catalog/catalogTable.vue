<template>
  <div class="catalog-table" v-if="folders.length">
    <table class="table no-bg">
      <tr class="head">
        <td rowspan="2" width="36%">Наименование</td>
        <td rowspan="2" width="8%">Код</td>
        <td rowspan="2" width="10%">Отстаток</td>
        <td rowspan="2" width="10%">По согласованию </td>
        <td colspan="2" width="16%">Цена</td>
        <td rowspan="2" width="10%">Минибокс</td>
        <td rowspan="2" width="10%">Упаковка</td>
      </tr>
      <tr class="head">
        <td class="bg-none">Дилерская</td>
        <td class="bg-none">Базовая</td>
      </tr>

      <tr
          v-for="item in folders" :key="item.id">
        <td>
          <span
            class="link-folder"
            :class="{'child': item.childrens.length}"
            @click="openFolder"
          >
            <img class="ico-arrow" src="../../assets/arrow.svg" alt="">
            <img class="ico-folder" src="../../assets/folder.svg" alt="">
            {{ item.title }}
          </span>
        </td>
        <td>{{ item.code }}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    name: "catalogTable",
    mounted() {
      this.getFolders();
      this.getProducts();
    },
    computed: {
      ...mapState('catalog', ['folders'])
    },
    methods: {
      ...mapActions('catalog', ['getFolders', 'getProducts']),
      openFolder() {

      }
    }
  }
</script>

<style lang="scss" scoped>
.catalog-table {
  margin-bottom: 18px;
  .link-folder {
    &.child {
      cursor: pointer;
    }
    .ico-arrow {
      margin-right: 6px;
      vertical-align: middle;
    }
    .ico-folder {
      margin-right: 6px;
      vert-align: middle;
    }
  }
}
</style>
