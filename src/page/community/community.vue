<template>
<div>

  <tab :animate="true" :line-width=2 active-color="#12b7f5" custom-bar-width="50px" v-model="index">
    <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
  </tab>
  <swiper v-model="index"  :show-dots="false">
    <swiper-item v-for="(item, index) in list2" :key="index">
      <div class="tab-swiper vux-center">{{item}}内容</div>
    </swiper-item>
  </swiper>
</div>
</template>

<script type="text/ecmascript-6">
  import {Tab,TabItem,Swiper,SwiperItem} from 'vux'
    export default{
      components:{
        Tab,
        TabItem,
        Swiper,
        SwiperItem
      },
      data() {
        return {
          demo2: '新闻',
          list2 : ['推荐', '最新', '关注'],
          index:0
        }
      },
      methods:{
        onItemClick(index){

        }
      }
    };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .vux-swiper{
    background: #ffffff;
    .vux-swiper-item{
      background: #ffffff;
      text-align: center;
      padding: 20px;
    }
  }
  .vux-tab{
    box-shadow: 1px 1px 1px #ccc;
  }
  .vux-slider{
    margin-top: 1px;
  }
</style>
