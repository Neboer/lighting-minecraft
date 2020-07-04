<template>
    <el-container class="container">
        <sidebar-menu :menu="[
                    {
                        href: '/player/baseinfo',
                        title: '基本信息',
                        icon:{
                            element: 'i',
                            class: 'el-icon-info'
                        }
                    },
                    {
                        title: '游戏信息',
                        icon: {
                            element: 'img',
                            class: 'icon',
                            attributes: {src: an_ic}
                        },
                        child :[
                            {href:'/player/gameinfo/status', title:'游戏状态',icon:{element:'i',class:'el-icon-s-claim'}},
                            {href:'/player/gameinfo/home', title:'家',icon:{element:'i',class:'el-icon-s-home'}},
                            {href:'/player/gameinfo/build',title:'建设',icon:{element:'i',class:'el-icon-coin'}},
                            {href:'/player/gameinfo/explore',title:'探索',icon:{element:'i',class:'el-icon-discover'}}
                        ]
                    },
                    {
                        href: '/player/log',
                        title: '日志',
                        icon:{
                            element: 'i',
                            class: 'el-icon-document'
                        }
                    },
                    {
                        href: '/player/invite',
                        title: '邀请',
                        icon:{
                            element: 'i',
                            class: 'el-icon-user'
                        }
                    }
                ]" :relative="true" theme="white-theme" @toggle-collapse="onToggleCollapse">
            <i slot="toggle-icon" :class="toggle_class"></i>
            <i slot="dropdown-icon" class="el-icon-caret-right"></i>
        </sidebar-menu>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                fold: false,
                an_ic: require('./assets/minecraftaxe.svg'),
                toggle_class: 'el-icon-s-fold'
            }
        },
        methods: {
            onToggleCollapse() {
                if (this.toggle_class === "el-icon-s-unfold") {
                    this.toggle_class = 'el-icon-s-fold';
                } else {
                    this.toggle_class = 'el-icon-s-unfold'
                }
            }
        }
    }
</script>

<style>
    @scope true {
        .container {
            margin: 0;
        }
    }

    .icon {
        background-color: unset !important;
    }

    @media (max-width: 800px) {
        .container {
            margin: 0;
        }

        .aside-menu {
            max-width: 8em;
        }
    }
</style>