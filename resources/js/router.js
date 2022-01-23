import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./Index.vue'),
            children: [
                // Dashboard
                {
                  name: 'Dashboard',
                  path: '',
                  component: () => import('./views/dashboard/Dashboard'),
                },

                {
                    name: 'Entities',
                    path: 'Entities',
                    component: () => import('./components/views/EntitiesBase'),
                    children: [
                        {
                            name: 'Animals',
                            path: 'Animals',
                            component: () => import('./components/views/Animals'),
                        },
                        {
                          name:'newDamRegistration',
                          path:'newDamRegistration',
                          component: () =>import('./components/views/newDamRegistration'),
                        },
                        {
                            name: 'Flocks',
                            path: 'Flocks',
                            component: () => import('./views/dashboard/component/Notifications'),
                        },
                        {
                            name: 'FlockTips',
                            path: 'FlockTips',
                            component: () => import('./views/dashboard/component/Notifications'),
                        },
                        {
                            name: 'Races',
                            path: 'Races',
                            component: () => import('./views/dashboard/component/Notifications'),
                        },
                        {
                            name: 'AgeRanges',
                            path: 'AgeRanges',
                            component: () => import('./views/dashboard/component/Notifications'),
                        },
                        {
                            name: 'Salons',
                            path: 'Salons',
                            component: () => import('./views/dashboard/component/Notifications'),
                        },
                    ],
                },

                // Pages
                {
                  name: 'User Profile',
                  path: 'pages/user',
                  component: () => import('./views/dashboard/pages/UserProfile'),
                },
                {
                  name: 'Notifications',
                  path: 'components/notifications',
                  component: () => import('./views/dashboard/component/Notifications'),
                },
                {
                  name: 'Icons',
                  path: 'components/icons',
                  component: () => import('./views/dashboard/component/Icons'),
                },
                {
                  name: 'Typography',
                  path: 'components/typography',
                  component: () => import('./views/dashboard/component/Typography'),
                },
                // Tables
                {
                  name: 'Regular Tables',
                  path: 'tables/regular-tables',
                  component: () => import('./views/dashboard/tables/RegularTables'),
                },
                // Maps
                {
                  name: 'Google Maps',
                  path: 'maps/google-maps',
                  component: () => import('./views/dashboard/maps/GoogleMaps'),
                },
                // Upgrade
                {
                  name: 'Upgrade',
                  path: 'upgrade',
                  component: () => import('./views/dashboard/Upgrade'),
                },
              ],
        },
    ],
  })