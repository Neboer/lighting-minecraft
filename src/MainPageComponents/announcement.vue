<template>
    <div class="container-box">
        <div style="flex: 10;">
            <div class="announcement-list">
                <el-tabs v-model="display_mod" type="card">
                    <el-tab-pane label="系统通知" name="system"></el-tab-pane>
                    <el-tab-pane label="玩家公告" name="player"></el-tab-pane>
                </el-tabs>
                <card></card>
                <card></card>
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </div>
        <div style="flex: 2" class="side-bar">
            <div class="admin-card">
                <el-avatar style="vertical-align: middle"></el-avatar>
                <div style="display: inline-block;margin: 0 0 2rem 1rem">管理圆1</div>
            </div>
            <div class="admin-card">
                <el-avatar style="vertical-align: middle"></el-avatar>
                <div style="display: inline-block;margin: 0 0 2rem 1rem">管理圆2</div>
            </div>
        </div>
    </div>
</template>

<script>
    import card from './subComponents/ann-card'

    export default {
        name: "announcement",
        components: {card},
        data: function () {
            return {
                display_mod: 'system'
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