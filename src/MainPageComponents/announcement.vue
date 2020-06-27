<template>
    <el-row :gutter="2">
        <el-col :span="9">
            <div class="sort-text">系统公告</div>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
        </el-col>
        <el-col :span="9">
            <div class="sort-text">玩家通知</div>
            <card></card>
            <card></card>
            <card></card>
        </el-col>
        <el-col :span="6">
            <el-calendar v-model="value" class="calendar">
            </el-calendar>
        </el-col>
    </el-row>
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
    .calendar >>> .el-calendar-table .el-calendar-day {
        height: unset;
    }
</style>