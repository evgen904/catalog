<template>
  <div class="mutual-settlement">
    <h2>Взаиморасчеты</h2>
    <template v-if="mutualSettlement.length">
      <div class="table-wrap">
        <table class="table" >
          <tr class="head">
            <td width="30%"><div>Дата</div></td>
            <td width="70%"><div>Сумма</div></td>
          </tr>
          <tr v-for="(item) in mutualSettlement" :key="item.id">
            <td width="30%">{{ item.date | date }}</td>
            <td width="70%" class="text-right">{{ item.sum | sum }}</td>
          </tr>
          <tr>
            <td width="30%"><div></div></td>
            <td width="70%" class="text-right"><div>Итог: 100 000 00</div></td>
          </tr>
        </table>
      </div>
      <div class="mutual-settlement--legend" v-if="legendMutualSettlements">
        Легенда:
        <span
          :class="{
            'color-red': !legendMutualSettlements.val,
            'color-green': legendMutualSettlements.val
          }"
        >
          {{ legendMutualSettlements.status }}
        </span>
      </div>
    </template>
    <baseLoader v-else />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "mutualSettlementTable",
    components: {
      baseLoader
    },
    computed: {
      ...mapState('dashboard', ['mutualSettlement', 'legendMutualSettlements'])
    }
  }
</script>

<style lang="scss" scoped>
.mutual-settlement {
  h2 {
    padding-top: 50px;
    margin-bottom: 10px;
  }
  .loader {
    height: 200px;
  }
  &--legend {
    font-weight: 500;
    font-size: 12px;
    color: #313131;
    padding: 14px 0 0;
  }
  .table-wrap {
    height: calc(50vh - 190px);
    overflow: auto;
    .table {
      position: relative;
      tr {
        &:first-child {
          td {
            position: sticky;
            top: 0;
            padding: 0;
            border-bottom: none;
            &:first-child {
              > div {
                border-left: none;
                border-right: none;
                margin-right: 0;
              }
            }
            &:last-child {
              > div {
                border-left: none;
              }
            }
            > div {
              padding: 5px 8px;
              background: #fff;
              border: 1px solid #DBDBDB;
              margin: -1px -1px -1px 0;
            }
          }
        }
        &:last-child {
          td {
            position: sticky;
            z-index: 1;
            bottom: 0;
            padding: 0;
            border-bottom: none;
            &:first-child {
              > div {
                border-left: none;
                border-right: none;
                margin-right: 0;
              }
            }
            &:last-child {
              > div {
                border-left: none;
              }
            }
            > div {
              padding: 5px 8px;
              margin: 0 -1px 0 0;
              background: #fff;
              border: 1px solid #DBDBDB;
              min-height: 29px;
            }
          }
        }
      }
    }
  }
}
</style>
