/* eslint-disable no-unused-vars */
<template>
   <div class="video">
    <div class="title-wrapper">
      <span class='tag'>MV</span>
      <span class='title'>冲动的惩罚</span>
      <span class='artist'>刀郎</span>
    </div>
    <video :src="mvsrc" controls></video>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      mvsrc: ''
    }
  },
  async created () {
    console.log(this.$route.params.id)
    // eslint-disable-next-line no-unused-vars
    const res = await this.$axios.get('/mv/url?id=' + this.$route.params.id).then(res => {
      console.log(res)
      this.mvsrc = res.data.data.id
    })
  }
}
</script>
<style scoped lang="scss">
@import '../assets/css/video.css'
</style>
