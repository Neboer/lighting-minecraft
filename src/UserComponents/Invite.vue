<template>
    <div>
        <h1>邀请码（点击复制）</h1>
        <div>
            <el-button type="primary" plain>Aj5p01</el-button>
            <el-popover
                    placement="top-start"
                    content="kamisama"
                    trigger="hover">
                <el-button type="info" slot="reference" plain>DF3exz</el-button>
            </el-popover>
            <el-button type="primary" plain>98w2AA</el-button>
        </div>
        <h1>邀请码使用记录</h1>
        <el-table
                :data="invite_history">
            <el-table-column
                    prop="num"
                    label="序号">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="注册日期">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="受邀人">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Invite",
        data(){
            return {
                visible: false,
                invite_history:[{num:1,date:(new Date()).toDateString(),name:'kamisama'}]
            }
        }
    }
</script>

<style scoped>

</style>