<template>
  <div>
    <h2>Уведомления</h2>
    <table class="table">
      <tr v-for="item in notifications" :key="item.id">
        <td>{{ item.date | date }}</td>
        <td class="text-right">{{ item.message }}</td>
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
