<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer :expandOnHover="expandOnHover"/>

    <dashboard-core-view />

    <!-- <dashboard-core-settings /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'DashboardIndex',

    components: {
      DashboardCoreAppBar: () => import('./components/core/AppBar'),
      DashboardCoreDrawer: () => import('./components/core/Drawer'),
      // DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreView: () => import('./components/core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>

<style lang="css" scoped>
  v-app {
    background: #E8F5E9;
  }
</style>
