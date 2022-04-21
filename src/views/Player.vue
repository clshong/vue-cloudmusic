/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
<template>
   <div class="player">
    <div class="left">
      <img class='disc' src="../assets/img/disc.png" alt="" >
      <img class='cover' src="../assets/img/cover.png" alt="">
    </div>
    <div class="right">
      <div class="title"><img src="../assets/img/tag.png" alt=""><span>放个大招给你看</span> </div>
      <div class="singer">歌手: <span>尼古拉斯赵四</span></div>
      <div class="album">所属专辑: <span>我就是我</span></div>
      <audio class='audio' controls
      :src="srcMusic"
      autoplay></audio>
      <ul class='lyric-container'>
       <li class="lyric" v-for="(item,index) in lyric" :key="'lyric'+ index">
         {{item.split(']')[1]}}
       </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      // 歌曲播放的url地址
      srcMusic: '',
      // 歌词
      lyric: '',
      // 歌曲封面
      picSrc: ''
    }
  },
  // 在created 的时候发出 axios 请求 获取歌曲的信息
  async created () {
    // eslint-disable-next-line no-unused-vars
    const res = await this.$axios.get('/song/url?id=' + this.$route.params.id)
      .then(res => {
        // console.log(res)
        this.srcMusic = res.data.data[0].url
      })
    // 获取歌词
    // eslint-disable-next-line no-unused-vars
    const resa = await this.$axios.get('/lyric?id=' + this.$route.params.id)
      .then(resa => {
        const ly = resa.data.lrc.lyric
        const lyArr = ly.split('\n')
        this.lyric = lyArr
      })
      // 获取歌曲封面
      // eslint-disable-next-line no-unused-vars
    const resb = await this.$axios.get('/song/detail?ids=' + this.$route.params.id)
      .then(resb => {
        this.picSrc = resb.data.songs[0].al.picUrl
      })
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/player.css';
</style>
