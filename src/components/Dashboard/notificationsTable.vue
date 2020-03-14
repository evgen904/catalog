<template>
  <div>
    <h2>Уведомления</h2>
    <table class="table" v-if="notifications.length">
      <tr>
        <td width="30%">Дата</td>
        <td width="70%">Сообщение</td>
      </tr>
      <tr v-for="item in notifications" :key="item.id">
        <td width="30%">{{ item.date | date }}</td>
        <td width="70%" class="text-right">{{ item.message }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    name: "notificationsTable",
    computed: {
      ...mapState('dashboard', ['notifications'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
