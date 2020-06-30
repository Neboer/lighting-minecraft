<template>
    <div class="about-container">
        <img src="../assets/lighting.jpg" alt="灵动mc的logo" class="about-image"/>
        <div class="about-text">
            <h2>关于我们</h2>
            <div style="line-height: 2.5em">
                灵动minecraft是由wsbz和Neboer两人搭建的一个minecraft多人游戏平台。通过插件、网站、玩家聊天等等互动，希望能营造一种全新的Minecraft游戏体验。<br>
                服务器里的玩家几乎都了解游戏中的彼此，我们一起创造一个世界，从分工生存到合作建筑，外城拓展，主城开发，红石大佬把这里作为实验室，建筑大师把这里变成了想象力的天堂<br>
                这种真诚的感情，是我们乐意在游戏中见到的，欢迎加入灵动minecraft大家族！
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    .about-text {
        margin-left: 2em;
    }

    .about-container {
        margin: 1rem;
        display: flex;
    }

    @media (max-width: 800px) {
        .about-container {
            display: block;
        }

        .about-image {
            width: 100%;
        }

        .about-text {
            margin-left: 0;
        }
    }
</style>