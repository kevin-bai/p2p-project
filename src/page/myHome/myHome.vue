<template>
  <div class="myHome">
    <form class="search_form">
      <input type="search" name="search" placeholder="搜索平台、动态、新闻" class="search_input" v-model="searchValue" @input="checkInput">
      <input type="submit" name="submit" class="search_submit" @click.prevent="searchTarget('')">
    </form>
    <swiper :options="swiperOption" class="swiper-box">
      <swiper-slide class="swiper-item"><img src="./2.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="./3.jpg" alt=""></swiper-slide>
      <swiper-slide class="swiper-item"><img src="./4.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>
      <ul class="titleList clear">
        <li>
          <img src="./icon1.png" alt="">
          <p>天天夺金</p>
        </li>
        <li>
          <img src="./icon2.png" alt="">
          <p>邀请好友</p>
        </li>
        <li>
          <img src="./icon3.png" alt="">
          <p>自动投标</p>
        </li>
        <li>
          <img src="./icon4.png" alt="">
          <p>任务大厅</p>
        </li>
      </ul>

      <group>
        <cell title="title" value="value">11</cell>
        <cell title="title" value="value">11</cell>
      </group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Group, Cell } from 'vux'

  export default{
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          direction: 'horizontal',
          autoplay:'2000',
          loop:'true'

        }
      }
    },
    components:{
      swiper,
      swiperSlide,
      Group,
      Cell
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../../style/mixin';

  .swiper-box {
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }
  .swiper-item {
    width: 100%;
    height: 150px;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .search_form{
    background-color: #ffffff;
    padding: 0.5rem;
    display: flex;
    input{
      height: 1.5rem;
    }
    .search_input{
      flex: 4;
      border: 0.025rem solid $bc;
      @include sc(0.65rem, #333);
      border-radius: 0.125rem;
      background-color: #F5F5F5;
      font-weight: bold;
      padding: 0 0.25rem;
    }
    .search_submit{
      flex: 1;
      border: 0.025rem solid $blue;
      margin-left: .2rem;
      @include sc(0.65rem, #fff);
      border-radius: 0.125rem;
      background-color: $blue;
      font-weight: bold;
      padding: 0 0.25rem;
    }
  }
  .titleList{
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background: $fc;
    li{
      float: left;
      width: 25%;
      text-align: center;
      @include sc(0.65rem, #333);
      img {
        width: 50%;
      }
    }
  }
</style>
