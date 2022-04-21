<template>
<div class="index">
<div class="block">
    <el-carousel height="350px">
      <el-carousel-item v-for="(item,index) in imgList" :key="'banner' + index">
        <img :src="item.imageUrl" alt="" >
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      imgList: []
    }
  },
  created () {
    this.$axios.get('/banner').then(res => {
      console.log(res)
      this.imgList = res.data.banners
    })
  }
}
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
