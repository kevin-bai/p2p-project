import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const myHome = r => require.ensure([], () => r(require('../page/myHome/myHome.vue')), 'myHome')
const news = r => require.ensure([], () => r(require('../page/news/news.vue')), 'news')
const userCenter = r => require.ensure([], () => r(require('../page/userCenter/userCenter.vue')), 'userCenter')
const community = r => require.ensure([], () => r(require('../page/community/community.vue')), 'community')




export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/myHome'
        },
      {
        path:'/myHome',
        component: myHome
      },
      {
        path:'/news',
        component:news
      },
      {
        path:'/userCenter',
        component:userCenter
      },
      {
        path:'/community',
        component:community
      }
    ]
}]
