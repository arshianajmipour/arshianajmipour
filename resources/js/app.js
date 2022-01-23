/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap')
import Vue from 'vue'
window.Vue = Vue

Vue.config.ignoredElements = [
    /^ion-/
]

Vue.config.productionTip = false

import App from './App.vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import i18n from './i18n'


Vue.component('dashboard-component', require('./components/views/Dashboard.vue').default);

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');