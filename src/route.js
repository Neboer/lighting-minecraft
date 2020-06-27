import home from './MainPageComponents/home'
import announcement from "./MainPageComponents/announcement";
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component: home},
    {path: '/announcement', component: announcement}
];

export const router = new VueRouter({
    routes
});