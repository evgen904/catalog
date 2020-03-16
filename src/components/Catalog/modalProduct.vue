<template>
  <div>
    <template v-if="product">
      <div class="product">
        <div class="product--code">
          Код товара: {{ product.code }}
        </div>
        <div class="product--pack">
          Шт. в упаковке: {{ product.piecesPerPack }}<br>
          Шт. в минибоксе: {{ product.piecesInMinibox }}
        </div>
        <div class="product--body">
          <div class="product--left" v-if="product.media.length">
            <div class="img-product">
              <img :src="product.media[activeImg]['url']" alt="">
            </div>
            <div class="list-img-product">
              <div
                v-for="(item, index) in product.media"
                :key="index"
                @click="activeImg = index"
              >
                <img :src="item.url" alt="">
              </div>
            </div>
          </div>
          <div class="product--right">
            <h2>Технические характеристики:</h2>
            <div class="warranty">
              Гарантия — {{ product.warranty }}
            </div>
            <table class="table" v-if="product.specifications.length">
              <tr
                v-for="(item, index) in product.specifications"
                :key="index"
              >
                <td>{{ item.title }}</td>
                <td>{{ item.value }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </template>
    <baseLoader v-else />
  </div>
</template>

<script>
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "modalProduct",
    components: {
      baseLoader
    },
    props: {
      product: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        activeImg: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
.loader {
  height: 520px;
}
.product {
  &--code {
    color: #313131;
    font-size: 14px;
    margin-bottom: 10px;
  }
  &--pack {
    font-size: 12px;
    line-height: 16px;
    color: #313131;
    margin-bottom: 12px;
  }
  &--body {
    display: flex;
    width: 100%;
  }
  &--left {
    width: 425px;
    min-width: 425px;
    margin-right: 20px;
    .img-product {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #DBDBDB;
      width: 425px;
      height: 344px;
      margin-bottom: 12px;
      img {
        max-width: 100%;
        max-height: 340px;
      }
    }
    .list-img-product {
      display: flex;
      flex-wrap: wrap;
      > div {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95px;
        height: 81px;
        border: 1px solid #DBDBDB;
        margin: 0 15px 10px 0;
        &:nth-child(4n) {
          margin-right: 0;
        }
        img {
          max-width: 100%;
          max-height: 78px;
        }
      }
    }
  }
  &--right {
    flex: auto;
    .warranty {
      font-size: 14px;
      ccolor: #313131;
      padding: 4px 0 0;
      margin-bottom: 20px;
    }
  }
}
</style>
