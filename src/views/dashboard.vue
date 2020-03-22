<template>
  <div>
    <Head title="Добро пожаловать! Campaign name" />
    <div class="dashboard">
      <div class="dashboard--left">
        <OrdersTable />
      </div>
      <div class="dashboard--right">
        <div class="block-1">
          <MutualSettlementTable />
        </div>
        <div class="block-2">
          <NotificationsTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '@/components/Head';
  import MutualSettlementTable from '@/components/Dashboard/mutualSettlementTable.vue';
  import NotificationsTable from '@/components/Dashboard/notificationsTable.vue';
  import OrdersTable from '@/components/Dashboard/ordersTable.vue';
  import { mapActions, mapState } from "vuex";

  export default {
    name: 'Dashboard',
    components: {
      Head,
      MutualSettlementTable,
      NotificationsTable,
      OrdersTable
    },
    computed: {
        ...mapState('dashboard', ['orders'])
    },
    mounted() {
      this.getNotifications();
      this.getMutualSettlement();
      if (!this.orders.length) {
        this.getOrders();
      }
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
  height: calc(100vh - 260px);
  padding: 20px 16px 20px 20px;
  overflow: auto;
  &--left {
    width: 65%;
    padding-right: 4px;
    height: calc(100vh - 300px);
    overflow: auto;
  }
  &--right {
    width: 35%;
    padding-left: 16px;
    .block-1 {
      height: calc(50vh - 190px);
      overflow: auto;
      margin-bottom: 40px;
      padding-right: 4px;
    }
    .block-2 {
      height: calc(50vh - 150px);
      overflow: auto;
      padding-right: 4px;
    }
  }
  &--title {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #313131;
  }
}
</style>
