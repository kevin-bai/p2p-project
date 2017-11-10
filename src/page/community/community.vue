<template>
<div>
  <x-header>讨论社区
    <a slot="right" v-model="showMessageFlag">
      <a @click="showMessagePanel">消息</a>
    </a>
  </x-header>

  <div v-transfer-dom>
    <popup v-model="showMessageFlag" position="right" width="80%">
      <div class="position-vertical-demo" style="width: 100%">
        <group>
          <cell :title="'消息'" is-link></cell>
          <cell :title="'设置'" is-link>
            <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
          </cell>
          <cell :title="'通知'" is-link><badge text="1"></badge></cell>
        </group>
      </div>
    </popup>
  </div>

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
  import {Tab,TabItem,Swiper,SwiperItem,XHeader,TransferDom ,Popup ,Group, Cell,Badge} from 'vux'
    export default{
      directives: {
        TransferDom
      },
      components:{
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        XHeader,
        TransferDom,
        Popup,
        Group,
        Cell,
        Badge,
      },
      data() {
        return {
          demo2: '新闻',
          list2 : ['推荐', '最新', '关注'],
          index:0,
          showMessageFlag : false
        }
      },
      methods:{
        showMessagePanel(){
          console.log('1111')
          this.showMessageFlag = true;
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
