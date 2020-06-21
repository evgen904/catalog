<template>
  <div class="search">
    <form @submit.prevent="search">
      <label>
        <input
          type="text"
          placeholder="Введите название или код товара"
          v-model="searchVal"
        >
        <button>
          <img src="@/assets/search.svg" alt="">
        </button>
      </label>
    </form>
    <div v-if="searchProducts.length && searchVal.length >= 3">
      Найдено {{ searchProducts.length }}
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import _ from "lodash";

  export default {
    name: "Search",
    computed: {
      ...mapState('catalog', ['searchText', 'products', 'searchProducts', 'folders']),
      searchVal: {
        get() {
          return this.searchText;
        },
        set(val) {
          this.setSearchText(val);
          let resultSearch = [];
          let idFolders = [];

          if (val.length >= 3) {
            for (let prop in this.products) {
              if (
                  this.products[prop]['title'].toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                  this.products[prop]['code'].toLowerCase().indexOf(val.toLowerCase()) > -1
              ) {
                resultSearch.push(this.products[prop]);
                idFolders.push(this.products[prop]['idFolder']);
              }
            }
            this.setSearchProducts(resultSearch);

            // собираем список id категорий, которые нужно отобразить
            idFolders = _.sortedUniq(idFolders);
            const searchFolderId = []
            for (let folder of idFolders) {
              for (let folderLevelOne of this.folders) {
                if (folderLevelOne.idFolder == folder) {
                  searchFolderId.push(folder)
                }
                if (folderLevelOne.children && folderLevelOne.children.length) {
                  for (let folderLevelTwo of folderLevelOne.children) {
                    if (folderLevelTwo.idFolder == folder) {
                      searchFolderId.push(folderLevelOne.idFolder)
                      searchFolderId.push(folder)
                    }
                    if (folderLevelTwo.children && folderLevelTwo.children.length) {
                      for (let folderLevelThree of folderLevelTwo.children) {
                        if (folderLevelThree.idFolder == folder) {
                          searchFolderId.push(folderLevelOne.idFolder)
                          searchFolderId.push(folderLevelTwo.idFolder)
                          searchFolderId.push(folder)
                        }
                      }
                    }
                  }
                }
              }
            }
            // полученный список передаем в store/modules/catalog => state.searchFolders
            this.setSearchFolders(_.uniq(searchFolderId))

          } else {
            this.setSearchProducts([]);
          }
        }
      }
    },
    watch: {
      searchProducts(val) {
        if (!val.length) {
          this.setSearchFolders([])
        }
      }
    },
    methods: {
      ...mapMutations("catalog", ["setSearchText", "setSearchProducts", "setSearchFolders"])
    }
  }
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 20px;
  form {
    padding: 0;
    margin: 0;
    label {
      display: flex;
      padding: 0;
      margin: 0;
      background: #FFFFFF;
      border: 1px solid #313131;
      box-sizing: border-box;
      border-radius: 2px;
      width: 246px;
      input[type="text"] {
        display: block;
        outline-style: none;
        font-size: 12px;
        height: 22px;
        width: 100%;
        background: none;
        border: none;
        padding: 5px 10px;
        margin: 0;
      }
      button {
        cursor: pointer;
        display: block;
        outline-style: none;
        width: 30px;
        height: 22px;
        padding: 0;
        margin: 0;
        background: none;
        border: none;
      }
    }
  }
}
</style>
