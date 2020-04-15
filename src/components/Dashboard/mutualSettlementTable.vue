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
            <td width="70%" class="text-right" :class="item.reserveStatus">
              <template v-if="item.reserveStatus=='color-red'">
                <span
                  v-tooltip="{
                    content: (item.reserveStatus=='color-red') ? 'Оплата просрочена' : ''
                  }"
                >
                  {{ item.sum | sum }}
                </span>
              </template>
              <template v-else>
                {{ item.sum | sum }}
              </template>
            </td>
          </tr>
          <tr>
            <td width="30%"><div></div></td>
            <td width="70%" class="text-right"><div>Итог: 100 000 00</div></td>
          </tr>
        </table>
      </div>
    </template>
    <baseLoader v-else />
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { VTooltip } from "v-tooltip";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "mutualSettlementTable",
    components: {
      baseLoader
    },
    directives: {
      tooltip: VTooltip
    },
    computed: {
      ...mapState('dashboard', ['mutualSettlement'])
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
  .table-wrap {
    height: calc(50vh - 152px);
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
