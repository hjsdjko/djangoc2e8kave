import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import meirongfuwu from '@/views/modules/meirongfuwu/list'
    import aboutus from '@/views/modules/aboutus/list'
    import chongwushangpin from '@/views/modules/chongwushangpin/list'
    import yiliaofuwu from '@/views/modules/yiliaofuwu/list'
    import chongwuzhonglei from '@/views/modules/chongwuzhonglei/list'
    import discussmeirongfuwu from '@/views/modules/discussmeirongfuwu/list'
    import yiliaofenlei from '@/views/modules/yiliaofenlei/list'
    import meirongleixing from '@/views/modules/meirongleixing/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import fuwuyuyue from '@/views/modules/fuwuyuyue/list'
    import orders from '@/views/modules/orders/list'
    import discusschongwushangpin from '@/views/modules/discusschongwushangpin/list'
    import config from '@/views/modules/config/list'
    import discussyiliaofuwu from '@/views/modules/discussyiliaofuwu/list'
    import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
    path: '/',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center', affix: true}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/meirongfuwu',
        name: '美容服务',
        component: meirongfuwu
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/chongwushangpin',
        name: '宠物商品',
        component: chongwushangpin
      }
      ,{
	path: '/yiliaofuwu',
        name: '医疗服务',
        component: yiliaofuwu
      }
      ,{
	path: '/chongwuzhonglei',
        name: '宠物种类',
        component: chongwuzhonglei
      }
      ,{
	path: '/discussmeirongfuwu',
        name: '美容服务评论',
        component: discussmeirongfuwu
      }
      ,{
	path: '/yiliaofenlei',
        name: '医疗分类',
        component: yiliaofenlei
      }
      ,{
	path: '/meirongleixing',
        name: '美容类型',
        component: meirongleixing
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
      ,{
	path: '/fuwuyuyue',
        name: '服务预约',
        component: fuwuyuyue
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/discusschongwushangpin',
        name: '宠物商品评论',
        component: discusschongwushangpin
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/discussyiliaofuwu',
        name: '医疗服务评论',
        component: discussyiliaofuwu
      }
      ,{
	path: '/newstype',
        name: '公告资讯分类',
        component: newstype
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
