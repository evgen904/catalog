<template>
  <div>
    <Head title="Добро пожаловать! Campaign name" />
    <div class="dashboard">
      <div class="dashboard--left">
        <OrdersTable />
      </div>
      <div class="dashboard--right">
        <MutualSettlementTable />
        <NotificationsTable />
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import MutualSettlementTable from '@/components/Dashboard/mutualSettlementTable.vue';
  import NotificationsTable from '@/components/Dashboard/notificationsTable.vue';
  import OrdersTable from '@/components/Dashboard/ordersTable.vue';
  import { mapActions } from "vuex";


  export default {
    name: 'Dashboard',
    components: {
      Head,
      MutualSettlementTable,
      NotificationsTable,
      OrdersTable
    },
    mounted() {
      this.getNotifications();
      this.getMutualSettlement();
      this.getOrders();
      this.getLegendOrders();
      this.getLegendMutualSettlements();
    },
    methods: {
      ...mapActions("dashboard", ["getNotifications", "getMutualSettlement", "getOrders", "getLegendOrders", "getLegendMutualSettlements"])
    }
  }
</script>

<style lang="scss" scoped>
.dashboard {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  width: 100%;
  padding: 20px;
  &--left {
    width: 65%;
    padding-right: 10px;
  }
  &--right {
    width: 35%;
    padding-left: 10px;
  }
  &--title {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #313131;
  }
}
</style>
