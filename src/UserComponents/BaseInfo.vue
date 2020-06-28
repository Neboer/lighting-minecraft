<template>
    <div>
        <table class="user-base-info">
            <tbody>
            <tr>
                <td>头像</td>
                <td><div class="block"><el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar></div></td>
                <td><el-button type="primary" icon="el-icon-edit"></el-button></td>
            </tr>
            <tr>
                <td>昵称</td>
                <td>好人</td>
                <td><el-button type="primary" icon="el-icon-edit"></el-button></td>
            </tr>
            <tr>
                <td>游戏名</td>
                <td>Neboer</td>
            </tr>
            <tr>
                <td>手机</td>
                <td>12345678911</td>
            </tr>
            <tr>
                <td>创建日期</td>
                <td>2020-10-22</td>
            </tr>
            <tr>
                <td>邀请人</td>
                <td>wsbz</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo"
    }
</script>

<style scoped>
    @import "../style/BaseInfo.css";
</style>