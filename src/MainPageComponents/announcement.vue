<template>
    <div class="container-box">
        <div style="flex: 10;">
            <div class="announcement-list">
                <el-button-group>
                    <el-button type="plain">系统通知</el-button>
                    <el-button type="plain">玩家公告</el-button>
                </el-button-group>
                <card></card>
                <card></card>
            </div>
        </div>
        <div style="flex: 2" class="side-bar">
            <el-date-picker
                    v-model="value"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>
        </div>
    </div>
</template>

<script>
    import card from './ann-card'

    export default {
        name: "announcement",
        components: {card},
        data: function () {
            return {
                value: new Date()
            };
        }
    }
</script>

<style scoped>
    .container-box {
        display: flex;
        margin: 1rem;
    }

    @media (max-width: 800px) {
        .container-box {
            flex-direction: column-reverse;
            margin: 1rem 0;
        }

        .side-bar {
            /*margin: 1rem;*/
        }
    }
</style>