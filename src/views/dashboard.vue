<template>
  <div>
    <Head />
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
    },
    methods: {
      ...mapActions("dashboard", ["getNotifications", "getMutualSettlement", "getOrders"])
    }
  }
</script>

<style lang="scss" scoped>
.dashboard {
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  width: 100%;
  height: calc(100vh - 124px);
  padding: 20px 16px 20px 20px;
  overflow: auto;
  &--left {
    width: 65%;
    padding-right: 4px;
  }
  &--right {
    width: 35%;
    padding-left: 16px;
    .block-1 {
      margin-bottom: 24px;
      padding-right: 4px;
    }
    .block-2 {
      padding-right: 4px;
    }
  }
  &--title {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #313131;
  }
  /deep/ .table {
    td, th {
      padding: 5px 8px;
    }
  }
}
</style>
