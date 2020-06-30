<template>
    <div>
        <div style="display: flex" class="table-container">
            <div style="flex:1;">
                <table class="info-block">
                    <caption>基本信息</caption>
                    <tbody>
                    <tr>
                        <td>服务器域名</td>
                        <td>ldgame.fun</td>
                    </tr>
                    <tr>
                        <td>服务器地址</td>
                        <td>168.255.255.0</td>
                    </tr>
                    <tr>
                        <td>端口</td>
                        <td>25565 默认</td>
                    </tr>
                    <tr>
                        <td>游戏版本</td>
                        <td>java版 1.15.1</td>
                    </tr>
                    <tr>
                        <td>创建时间</td>
                        <td>2020-11-9</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style="flex:1;">
                <table class="info-block">
                    <caption>服务器</caption>
                    <tbody>
                    <tr>
                        <td>处理器</td>
                        <td>Intel Xeon Opew</td>
                    </tr>
                    <tr>
                        <td>物理内存</td>
                        <td>16GiB</td>
                    </tr>
                    <tr>
                        <td>硬盘</td>
                        <td>HDD</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <table class="info-block">
                <caption>游戏信息</caption>
                <tbody>
                <tr>
                    <td>服务器软件</td>
                    <td>spigot 1.5</td>
                </tr>
                <tr>
                    <td>世界创建时间</td>
                    <td>2020-11-9 23:00:00</td>
                </tr>
                <tr>
                    <td>游戏模式</td>
                    <td>生存模式</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
    export default {
        name: "game-server-intro"
    }
</script>

<style scoped>
    tr:first-child {
        border-top: none;
    }

    tr:last-child {
        border-bottom: none;
    }

    table {
        border-collapse: collapse;
    }

    tr {
        border: solid;
        border-width: 1px 0;
        border-color: grey;
    }

    td {
        padding: 0.5em;
    }

    .info-block {
        border: black 1px dashed;
        margin: 1rem auto;
    }

    @media (max-width: 800px){
        .table-container {
            flex-direction: column;
        }
    }

</style>