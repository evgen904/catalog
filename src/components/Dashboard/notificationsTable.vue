<template>
  <div class="notifications">
    <h2>Уведомления</h2>
    <div class="table-wrap">
      <template v-if="notifications.length">
        <table class="table">
          <tr class="head">
            <td width="30%"><div>Дата</div></td>
            <td width="70%"><div>Сообщение</div></td>
          </tr>
          <tr v-for="(item, index) in notifications" :key="item.id">
            <td width="30%">{{ item.date | date }}</td>
            <td width="70%">
              <div class="toggle-block">
              <span @click="toggleNote(item, index)" class="toggle-block--btn">
                {{ item.message }}
              </span>
                <div v-if="item.visibleNote" class="toggle-block--note">
                  {{ item.note }}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </template>
      <baseLoader v-else />
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "notificationsTable",
    components: {
      baseLoader
    },
    data() {
      return {
        notificationsLocal: []
      }
    },
    computed: {
      ...mapState('dashboard', ['notifications']),
    },
    methods: {
      ...mapMutations("dashboard", ["setNotificationsVisible"]),
      toggleNote(item, index) {
        this.setNotificationsVisible({
          index: index,
          value: !item.visibleNote
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.notifications {
  .loader {
    height: 200px;
  }
  .table-wrap {
    height: calc(50vh - 152px);
    overflow: auto;
    padding-bottom: 1px;
    .table {
      position: relative;
      tr {
        &:first-child {
          td {
            position: sticky;
            z-index: 1;
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
      }
    }
  }
  .toggle-block {
    margin-bottom: -10px;
    &--btn {
      display: inline-block;
      vertical-align: top;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    &--note {
      padding: 10px 0;
    }
  }
}
</style>
