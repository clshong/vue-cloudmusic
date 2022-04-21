<template>
<div class="result-wrapper">
      <div class="song" v-for="(item,index) in songList" :key="'song' + index" @dblclick="gotoPlayer(item.id)">
        <div class="name">
          <span class="iconfont icon-play" @click="gotoPlayer(item.id)"></span>
          {{item.name}}
          <span v-if="item.mvid !== 0" class="iconfont icon-editmedia"  @click="gotoMv(item.id)"></span>
        </div>
        <div class="singer">{{item.artists | formatArtists}}</div>
        <div class="album">{{item.alias[0]}}</div>
        <div class="time">{{item.duration | formatDuration }}</div>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      songList: []
    }
  },
  created () {
    // 在 created 生命周期钩子函数中 拿到传递过来的参数 key
    // console.log(this.$route.params.key)
    // 发出axios请求
    this.getSongList(this.$route.params.key)
  },
  watch: {
    // 监听路由变化
    // $route.params.key 和 data 中声明的响应式对象是一样的 也可以被watch进行监听 根据监听的结果触发对应的操作
    '$route.params.key': function (newVal) {
      this.getSongList(newVal)
    }
  },
  filters: {
    // 格式化歌唱家列表
    formatArtists (val) {
      // eslint-disable-next-line no-unused-vars
      let names = ''
      val.forEach(item => {
        // eslint-disable-next-line no-const-assign
        names += item.name + '|'
      })
      return names.slice(0, -1)
    },
    // 格式化时间
    formatDuration (val) {
      return parseInt((val / 1000) / 60) + '分' + parseInt(val / 1000) % 60 + '秒'
    }
  },
  methods: {
    // 根据关键字搜索对应的歌曲列表并注入到songList 渲染到页面上
    async getSongList (key) {
    // eslint-disable-next-line no-unused-vars
      const res = await this.$axios.get('/search?keywords=' + key)
        .then(res => {
          // console.log(res.data.result.songs)
          // 将请求的数据注入到songList中
          this.songList = res.data.result.songs
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击播放进入播放页面
    gotoPlayer (id) {
      this.$router.push('/player/' + id)
    },
    gotoMv (id) {
      this.$router.push('/mv/' + id)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/results.css'
</style>
