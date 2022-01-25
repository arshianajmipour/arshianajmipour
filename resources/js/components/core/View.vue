<template>
  <v-content>
    <div id="dashboard-container">
      <router-view />
    </div>
    <!-- <dashboard-core-footer /> -->
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>

<style lang="css" scoped>
  #dashboard-container {
    width: 100%;
    background: white;
    border-radius: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
    min-height: 80vh;
    padding: 0;
  }
</style>