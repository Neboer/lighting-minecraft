import home from './MainPageComponents/home'
import announcement from "./MainPageComponents/announcement";
import User from './PlayerControl';
import BaseInfo from "./UserComponents/BaseInfo";
import VueRouter from 'vue-router'

const routes = [
    {path: '/', component: home},
    {path: '/announcement', component: announcement},
    {
        path: '/player', component: User, redirect: '/player/baseinfo',
        children: [
            {
                path: 'baseinfo',
                component: BaseInfo
            },
            {
                path: 'gameinfo',
                component: BaseInfo
            }
        ]
    }
];

export const router = new VueRouter({
    routes
});