<template>
  <div class="notifications">
    <h2>Уведомления</h2>
    <template v-if="notifications.length">
      <table class="table">
        <tr class="head">
          <td width="30%">Дата</td>
          <td width="70%">Сообщение</td>
        </tr>
        <tr v-for="item in notifications" :key="item.id">
          <td width="30%">{{ item.date | date }}</td>
          <td width="70%" class="text-right">{{ item.message }}</td>
        </tr>
      </table>
    </template>
    <div class="notifications--loader" v-else>
      <baseLoader />
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import baseLoader from "../Base/baseLoader";

  export default {
    name: "notificationsTable",
    components: {
      baseLoader
    },
    computed: {
      ...mapState('dashboard', ['notifications'])
    }
  }
</script>

<style lang="scss" scoped>
.notifications {
  &--loader {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  }
}
</style>
