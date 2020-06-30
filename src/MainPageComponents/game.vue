<template>
    <div>
        <div style="display: flex" class="game-god-container">
            <div style="flex: 1;"><h1>
                1.15.1生存服务器 ldgame.fun
            </h1>
                <Carousel :autoplay="true" :perPage="1" class="display-box">
                    <Slide v-for="it in 4" :key="it">
                        <img :src="ld_img[it - 1]" alt="picture" class="display-image">
                    </Slide>
                </Carousel>
            </div>
            <div style="flex: 1;margin: auto">
                <gameserverinfo></gameserverinfo>
            </div>
        </div>
        <div>
            服务器简介：<br/>灵动服务器的第一个生存服，完善的主城建筑群，公寓，小洋楼，地下空间……和朋友一起在矿洞里探险，在海洋里冲浪，在地狱刷猪人，回主城打装备
            或者登上世界之巅，从高处一跃而下，滑翔到遥远的人家；或者只带着一身铠甲和一把剑就出门探险，被卫道士追杀……
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';
    import gameserverinfo from './subComponents/game-server-intro'

    export default {
        name: "game",
        components: {Carousel, Slide, gameserverinfo},
        data() {
            return {
                ld_img: [
                    require("../assets/display/bad dealer lockoct.png"),
                    require("../assets/display/big steve wool.png"),
                    require("../assets/display/command block head.png"),
                    require("../assets/display/grandiose palace.png")
                ]
            }
        }
    }
</script>

<style scoped>
    .display-box {
        /*width: 800px;*/
    }

    .display-image {
        width: 100%;
    }

    @media (max-width: 800px) {
        .game-god-container {
            flex-direction: column;
        }
    }


</style>