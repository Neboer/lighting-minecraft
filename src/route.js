import home from './MainPageComponents/home'
import announcement from "./MainPageComponents/announcement";
import game from "./MainPageComponents/game"
import User from './PlayerControl';
import BaseInfo from "./UserComponents/BaseInfo";
import VueRouter from 'vue-router'
import about from "./MainPageComponents/about";
import register from "./MainPageComponents/register";

const routes = [
    {path: '/', component: home},
    {path: '/announcement', component: announcement},
    {path: '/game', component: game},
    {path: '/about', component: about},
    {path: '/register', component: register},
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