<template>
   <div id="player">
      <h2 class="title">云音乐</h2>
      <div class="search">
        <input type="text" v-model.trim="key" @keyup.enter="gotoSearch"/>
        <button >
          <span class="iconfont icon-search" @click="gotoSearch"></span>
        </button>
      </div>
      <div class="tab-wrapper">
        <!-- tab栏 -->
        <!-- <div class="tab-bar">
          <router-link to="/results" class="bar-item" active-class="active" exact>搜索结果</router-link>
          <router-link to="/player" class="bar-item" active-class="active" exact>歌曲播放</router-link>
          <router-link to="/mv" class="bar-item" active-class="active" exact>mv</router-link>
          <router-link to="/comments" class="bar-item" active-class="active" exact>歌曲评论</router-link>
        </div> -->
        <!-- 对应的内容区域 -->
        <div class="tab-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      // 搜索的关键字
      key: ''
    }
  },
  methods: {
    // 跳转到搜索页面 输入enter键 或者点击搜索按钮
    gotoSearch () {
      if (this.key === '') {
        alert('歌曲关键字不允许为空')
        return
      }
      this.$router.push('/results/' + this.key)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/search.css'
</style>
