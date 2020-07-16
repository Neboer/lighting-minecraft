import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MainPage from './MainPage.vue'
import {router} from './route'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import VueImg from 'v-img';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(VueImg);
Vue.use(VueSidebarMenu)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
    render: h => h(MainPage),
    router
}).$mount('#app')
