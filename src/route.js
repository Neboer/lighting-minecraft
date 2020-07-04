import home from './MainPageComponents/home'
import announcement from "./MainPageComponents/announcement";
import game from "./MainPageComponents/game"
import User from './PlayerControl';
import BaseInfo from "./UserComponents/BaseInfo";
import VueRouter from 'vue-router'
import about from "./MainPageComponents/about";
import register from "./MainPageComponents/register";
import Invite from "./UserComponents/Invite";
import status from "./UserComponents/gameinfo/status";
import player_home from './UserComponents/gameinfo/home'
import building from "./UserComponents/gameinfo/building";
import explore from "./UserComponents/gameinfo/explore";

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
                path: 'gameinfo/status',
                component: status
            },
            {
                path: 'gameinfo/home',
                component: player_home
            },
            {
                path: 'gameinfo/build',
                component: building
            },
            {
                path: 'gameinfo/explore',
                component: explore
            },
            {
                path: 'invite',
                component: Invite
            }
        ]
    }
];

export const router = new VueRouter({
    routes
});