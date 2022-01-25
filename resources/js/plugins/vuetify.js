import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.green.base,
                secondary: '#696969',
                accent: '#8c9eff',
                error: '#b71c1c',
            },

            dark: {
                primary: colors.green.base,
                secondary: '#696969',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
    options: {
        customProperties: true
    },
    rtl: true,
})