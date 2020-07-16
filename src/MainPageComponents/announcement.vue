<template>
  <div class="container-box">
    <div style="flex: 10;">
      <div class="announcement-list">
        <el-tabs v-model="display_mod" type="card">
          <el-tab-pane label="系统通知" name="system"></el-tab-pane>
          <el-tab-pane label="玩家公告" name="player"></el-tab-pane>
        </el-tabs>
        <card v-for="ann in display_announces" :key="ann.id" :time="ann.time" :content="ann.content"
              :issuer="ann.publisher"></card>
        <el-pagination
            layout="prev, pager, next"
            :current-page.sync="current_page"
            :total="10">
        </el-pagination>
      </div>
    </div>
    <div style="flex: 2" class="side-bar">
      <div  v-for="admin in admins" :key="admin.name" class="admin-card">
        <el-avatar style="vertical-align: middle" :src="admin.avatar"></el-avatar>
        <div style="display: inline-block;margin: 0 0 2rem 1rem">{{ admin.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import card from './subComponents/ann-card'

export default {
  name: "announcement",
  components: {card},
  methods: {
    on_page_index_changed(new_page) {
      console.log(new_page)
    }
  },
  data: function () {
    return {
      display_mod: 'system',
      current_page: 1,
      admins: [{name: 'Neboer', avatar: require('../assets/neboeravatar.jpg')}, {
        name: 'wsbz', avatar: require('../assets/wsbzavatar.jpg')
      }],
      display_announces: [
        {
          id: 123456,
          time: '2014-03-12T13:37:27+00:00',
          publisher: 'Neboer',
          content: '实例内容。'
        },
        {
          id: 12345,
          time: '2014-03-12T13:37:27+00:00',
          publisher: 'wsbz',
          content: '新的示例。'
        },
        {
          id: 1234,
          time: '2014-03-12T13:37:27+00:00',
          publisher: 'groundhog',
          content: '不要踩我的甜浆果'
        },
        {
          id: 123,
          time: '2014-03-12T13:37:27+00:00',
          publisher: 'Scarasol',
          content: '快给大资本家来打工'
        }
      ]
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