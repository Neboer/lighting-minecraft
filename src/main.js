import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MainPage from './MainPage.vue'
import {router} from './route'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
    render: h => h(MainPage),
    router
}).$mount('#app')
