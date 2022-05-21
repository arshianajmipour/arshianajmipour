<template>
  <v-content>
    <div id="dashboard-container">
      <router-view v-bind="myProps"/>
    </div>
    <dashboard-core-footer style="position: relative; bottom: 0"/>
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },

    computed: {
      myProps() {
        return { title: this.$t(this.$route.name) }
      }
    },
  }
</script>

<style lang="css" scoped>
  * {
    background: #F1F8E9;
  }

  #dashboard-container {
    width: 90%;
    background: white;
    border-radius: 0.5em;
    margin: auto;
    margin-top: 1em;
    /* box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px; */
    /* min-height: 80vh; */
    padding: 1em;
  }
</style>