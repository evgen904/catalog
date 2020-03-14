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
::-webkit-scrollbar {
  width: 10px;
  background: transparent;
}
::-webkit-scrollbar-track {
  // -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  // border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  width: 3px;
  background: transparent;
  // border-radius: 10px;

  box-shadow: inset 0 0 0 2px #C4C4C4;
  border: 3px solid transparent;
}
.dashboard {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  width: 100%;
  height: calc(100vh - 260px);
  padding: 20px;
  overflow: auto;
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
