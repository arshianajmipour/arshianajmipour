<template>

  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="300"
    v-bind="$attrs"
  >
    <template #img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
      <v-list-item>
          <!-- <v-list-item-avatar
            class="align-self-center"
            color="white"
            contain
          >
            <v-img
              src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"
              max-height="30"
            />
          </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title
            style="font-size: large;font-weight:800;"
            v-text="profile.title"
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />

    
      <v-list
        expand
        nav
      >
        <!-- Style cascading bug  -->
        <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
        <div />

        <template v-for="(item, i) in computedItems">
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          >
            <!--  -->
          </base-item-group>

          <base-item
            v-else
            :key="`item-${i}`"
            :item="item"
          />
        </template>

        <!-- Style cascading bug  -->
        <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
        <div />
      </v-list>
    

    <!-- <template #append>
      <base-item
        :item="{
          title: $t('upgrade'),
          icon: 'mdi-package-up',
          to: '/upgrade',
        }"
      />
    </template> -->
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {
          // icon: 'mdi-view-dashboard',
          title: 'تعریف موجودیت',
          // to: '/',
          group: '',
          children: [
            {
              icon: '',
              title: 'تعریف دام',
              to: 'Animals',
            },
            {
              // icon: 'mdi-view-dashboard',
              title: 'تعریف گله',
              to: 'Flocks',
            },
            {
              // icon: 'mdi-view-dashboard',
              title: 'تعریف تیپ گله',
              to: 'FlockTips',
            },
            {
              // icon: 'mdi-view-dashboard',
              title: 'تعریف نژاد',
              to: 'Races',
            },
            {
              // icon: 'mdi-view-dashboard',
              title: 'تعریف رنج سنی',
              to: 'AgeRanges',
            },
            {
              // icon: 'mdi-view-dashboard',
              title: 'تعریف سالن',
              to: 'Salons',
            },
          ],
           
        },
        {
          // icon: 'mdi-view-dashboard',
          title: "عملیات های دام",
          // to: '/',
          group: '',
          children: [
            {
              // icon: 'mdi-view-dashboard',
              title: 'عملیات وزن کشی',
              to: 'weights',
            },
            {
              // icon: 'mdi-view-dashboard',
              title:'عملیات زایش',
              to: 'newBirth',
            },            
          ],
           
        },
                {
          // icon: 'mdi-view-dashboard',
          title: "گزارش های دامداری",
          // to: '/',
          group: '',
          children: [
            {
              title: 'آمار ماهیانه دام',
              to: 'monthlyAnimalreport',
            },
            {
              title: 'شجره دام',
              to: 'AnimalbirthTree',
            },
            {
              title: 'تلفات هنگام زایش',
              to: 'lostChildrenOfBirth',
            },
            {
              title: 'گزارش زایش ها',
              to: 'BirthReport',
            },
          ],
           
        },
        // {
        //   icon: 'mdi-account',
        //   title: 'user',
        //   // to: '/pages/user',
        // },
        // {
        //   title: 'rtables',
        //   icon: 'mdi-clipboard-outline',
        //   // to: '/tables/regular-tables',
        // },
        // {
        //   title: 'typography',
        //   icon: 'mdi-format-font',
        //   // to: '/components/typography',
        // },
        // {
        //   title: 'icons',
        //   icon: 'mdi-chart-bubble',
        //   // to: '/components/icons',
        // },
        // {
        //   title: 'google',
        //   icon: 'mdi-map-marker',
        //   // to: '/maps/google-maps',
        // },
        // {
        //   title: 'notifications',
        //   icon: 'mdi-bell',
        //   // to: '/components/notifications',
        // },
      ],
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
      profile () {
        return {
          avatar: true,
          // title: this.$t('avatar'),
          title: 'سیستم مدیریت اطلاعات دام'
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          // title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="css">
  * {
    font-family: iranyekan;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  a:hover {
    text-decoration: none;
  }

  .theme--dark.v-navigation-drawer {
    background-color: #4CAF50;
  }

  .v-list-item__icon.v-list-item__icon--text {
    visibility: hidden;
  }

</style>
