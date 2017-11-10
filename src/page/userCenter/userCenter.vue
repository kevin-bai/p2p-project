<template>
  <div>
    <x-header>用户中心</x-header>

    <div class="moneyPanel">
      <p class="line1">可提现余额（元）</p>
      <p class="line2">0.00</p>
      <a class="btn">提现</a>
    </div>
    <grid :cols="2">
      <grid-item class="menuItem" v-for="item in menuList" :link="item.link">
        <img class="icon" :src="item.imgSrc" alt="">
        <div class="grid-item-content">
          <p>{{item.name}}</p>
          <span>查看{{item.name}}</span>
        </div>
      </grid-item>
    </grid>

    <grid :cols="2" class="menuList2">
      <grid-item class="menuItem" v-for="item in menuList2" :link="item.link">
        <img class="icon" :src="item.imgSrc" alt="">
        <div class="grid-item-content">
          <p>{{item.name}}</p>
          <span>查看{{item.name}}</span>
        </div>
      </grid-item>
    </grid>

  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader, Grid, GridItem} from 'vux';
  export default{
    components: {
      XHeader,
      Grid,
      GridItem
    },
    data(){
      return {
        menuList: [
          {
            name: '我的平台',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/myHome'
          }, {
            name: '投资记录',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/news'
          }, {
            name: '直投卡券',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/community'
          }, {
            name: '我的奖励',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/news'
          }, {
            name: '资金流水',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/news'
          }
          , {
            name: '提现记录',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/news'
          }
        ],
        menuList2: [
          {
            name: '我的收藏',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/myHome'
          }, {
            name: '个人主页',
            imgSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            link: '/myHome'
          },
        ]
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/mixin";
  .moneyPanel{
    position: relative;
    width: 100%;
    background: #35495e;
    height: 5rem;
    padding: 1rem;
    .line1{
      margin-top: .5rem;
      color: #cccccc;
      font-size: .5rem;
    }
    .line2{
      color: $fc;
      font-size: 1.5rem;
    }
    .btn{
      padding: .1rem;
      text-align: center;
      color: $fc;
      font-size: .5rem;
      position: absolute;
      right: 1rem;
      bottom: 1.5rem;
      width: 2rem;
      border-radius: .5rem;
      border: 1px solid $fc;
    }
  }
  .menuItem {
    background: $fc;
    .icon {
      width: 40px;
      height: 40px;
      float: left;
      margin-right: 10px;
    }
    .grid-item-content {
      font-size: .5rem;
      width: 70%;
      float: left;
    }
  }
  .menuList2 {
    margin-top: 10px;
  }

</style>
