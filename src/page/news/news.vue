<template>
<div>

  <x-header>新闻咨询
    <a slot="right" v-model="show1">
      <a @click="showMessagePanel">消息</a>
    </a>
  </x-header>

  <div v-transfer-dom>
    <popup v-model="show1" position="right" width="80%">
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
</div>
</template>

<script type="text/ecmascript-6">
  import { Scroller, Divider, Spinner ,XHeader ,TransferDom ,Popup ,Group, Cell,Badge } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Scroller,
      Divider,
      Spinner,
      XHeader,
      Popup,
      Group,
      Cell,
      Badge
    },
    methods: {
      showMessagePanel(){
        console.log('1111')
        this.show1 = true;
      }
    },
    data () {
      return {
        show:false,
        show1: false,
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
