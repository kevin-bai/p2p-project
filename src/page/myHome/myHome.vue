<template>


  <scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}"  @on-pulldown-loading="load2" v-model="status1">
    <div class="box2">
      <div class="myHome">
        <form class="search_form">
          <input type="search" name="search" placeholder="搜索平台、动态、新闻" class="search_input" >
          <input type="submit" name="submit" class="search_submit" >
        </form>
        <swiper :options="swiperOption" class="swiper-box">
          <swiper-slide class="swiper-item"><img src="./2.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="./3.jpg" alt=""></swiper-slide>
          <swiper-slide class="swiper-item"><img src="./4.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="botContent">
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

          <card>
            <div slot ="header" >
              <group>
                <cell title="平台新闻" value="查看更多" :link="{path:'/news'}">
                  <img slot="icon" width="20" style="display:block;margin-right:5px;" src="./icon5.png">
                </cell>
              </group>
            </div>
            <div slot="content" class="card-demo-content01">
              <p style="font-size: .7rem">果树财富-果树有车贷-西安17110939</p>
              <p><span style="color: #f74c31;font-size: 1.5rem">12%</span> <span style="color: #12b7f5;font-size: 1.5rem">+4%</span></p>
              <div class="buyBtn">立即抢购</div>
            </div>
          </card>

          <card>
            <div slot ="header" >
              <group>
                <cell title="热门平台" value="查看更多" :link="{path:'/news'}">
                  <img slot="icon" width="20" style="display:block;margin-right:5px;" src="./icon5.png">
                </cell>
              </group>
            </div>
            <div slot="content" class="card-demo-content02">
              <panel :footer="footer" :list="list" :type="type">
                <div slot="header">22</div>
              </panel>
            </div>
          </card>

          <divider class="divider"> 网贷有风险</divider>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Group, Cell } from 'vux'
  import { Scroller, Divider, Spinner , Card , Panel} from 'vux'
  export default{
    components:{
      swiper,
      swiperSlide,
      Group,
      Cell,
      Scroller,
      Divider,
      Spinner,
      Card,
      Panel
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          direction: 'horizontal',
          autoplay:'2000',
          loop:'true'

        },
        status1: {
          pulldownStatus: 'default'
        },
        type: '1',
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }, {
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题二',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: {
            path: '/component/radio',
            replace: false
          },
          meta: {
            source: '来源信息',
            date: '时间',
            other: '其他信息'
          }
        }]
      }
    },
    methods:{
      load2 () {
        setTimeout(() => {
          this.status1.pulldownStatus = 'default'
        }, 2000)
      },
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


  .box1 {
    height: 100px;
    position: relative;
    width: 1490px;
  }
  .box1-item {
    width: 200px;
    height: 100px;
    background-color: #ccc;
    display:inline-block;
    margin-left: 15px;
    float: left;
    text-align: center;
    line-height: 100px;
  }
  .box1-item:first-child {
    margin-left: 0;
  }
  .botContent {
    height: auto;
    overflow: hidden;

    padding-bottom: 60px;
  }
  .rotate {
    transform: rotate(-180deg);
  }
  .pulldown-arrow {
    display: inline-block;
    transition: all linear 0.2s;
    color: #666;
    font-size: 25px;
  }

  .card-demo-content01{
    text-align: center;
    padding: 1rem;
    line-height: 1.5rem;
  }
  .divider{
    width: 80%;
    margin-left: 10%;
    margin-top: 1rem;
    font-size: .5rem;
  }
  .buyBtn{
    margin-top: .3rem;
    font-size: .6rem;
    background: #12b7f5;
    width: 40%;
    margin-left: 30%;
    border-radius: .7rem;
    color: #ffffff;
  }
  .card-demo-content02{
    .weui-panel__hd{
      height: 0;
    }
  }
</style>
