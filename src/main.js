import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MainPage from './MainPage.vue'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    render: h => h(MainPage),
}).$mount('#app')
