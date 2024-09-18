import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import AddrList from '../pages/shop-address/list'
import AddrAdd from '../pages/shop-address/addOrUpdate'
import Order from '../pages/shop-order/list'
import OrderConfirm from '../pages/shop-order/confirm'
import Cart from '../pages/shop-cart/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import yiliaofenleiList from '../pages/yiliaofenlei/list'
import yiliaofenleiDetail from '../pages/yiliaofenlei/detail'
import yiliaofenleiAdd from '../pages/yiliaofenlei/add'
import shangpinfenleiList from '../pages/shangpinfenlei/list'
import shangpinfenleiDetail from '../pages/shangpinfenlei/detail'
import shangpinfenleiAdd from '../pages/shangpinfenlei/add'
import chongwuzhongleiList from '../pages/chongwuzhonglei/list'
import chongwuzhongleiDetail from '../pages/chongwuzhonglei/detail'
import chongwuzhongleiAdd from '../pages/chongwuzhonglei/add'
import chongwushangpinList from '../pages/chongwushangpin/list'
import chongwushangpinDetail from '../pages/chongwushangpin/detail'
import chongwushangpinAdd from '../pages/chongwushangpin/add'
import yiliaofuwuList from '../pages/yiliaofuwu/list'
import yiliaofuwuDetail from '../pages/yiliaofuwu/detail'
import yiliaofuwuAdd from '../pages/yiliaofuwu/add'
import meirongfuwuList from '../pages/meirongfuwu/list'
import meirongfuwuDetail from '../pages/meirongfuwu/detail'
import meirongfuwuAdd from '../pages/meirongfuwu/add'
import meirongleixingList from '../pages/meirongleixing/list'
import meirongleixingDetail from '../pages/meirongleixing/detail'
import meirongleixingAdd from '../pages/meirongleixing/add'
import fuwuyuyueList from '../pages/fuwuyuyue/list'
import fuwuyuyueDetail from '../pages/fuwuyuyue/detail'
import fuwuyuyueAdd from '../pages/fuwuyuyue/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'
import systemintroList from '../pages/systemintro/list'
import systemintroDetail from '../pages/systemintro/detail'
import systemintroAdd from '../pages/systemintro/add'
import discusschongwushangpinList from '../pages/discusschongwushangpin/list'
import discusschongwushangpinDetail from '../pages/discusschongwushangpin/detail'
import discusschongwushangpinAdd from '../pages/discusschongwushangpin/add'
import discussyiliaofuwuList from '../pages/discussyiliaofuwu/list'
import discussyiliaofuwuDetail from '../pages/discussyiliaofuwu/detail'
import discussyiliaofuwuAdd from '../pages/discussyiliaofuwu/add'
import discussmeirongfuwuList from '../pages/discussmeirongfuwu/list'
import discussmeirongfuwuDetail from '../pages/discussmeirongfuwu/detail'
import discussmeirongfuwuAdd from '../pages/discussmeirongfuwu/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
                {
                    path: 'shop-address/list',
                    component: AddrList
                },
                {
                    path: 'shop-address/addOrUpdate',
                    component: AddrAdd
                },
				{
					path: 'shop-order/order',
					component: Order
				},
				{
					path: 'cart',
					component: Cart
				},
				{
					path: 'shop-order/orderConfirm',
					component: OrderConfirm
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'yiliaofenlei',
					component: yiliaofenleiList
				},
				{
					path: 'yiliaofenleiDetail',
					component: yiliaofenleiDetail
				},
				{
					path: 'yiliaofenleiAdd',
					component: yiliaofenleiAdd
				},
				{
					path: 'shangpinfenlei',
					component: shangpinfenleiList
				},
				{
					path: 'shangpinfenleiDetail',
					component: shangpinfenleiDetail
				},
				{
					path: 'shangpinfenleiAdd',
					component: shangpinfenleiAdd
				},
				{
					path: 'chongwuzhonglei',
					component: chongwuzhongleiList
				},
				{
					path: 'chongwuzhongleiDetail',
					component: chongwuzhongleiDetail
				},
				{
					path: 'chongwuzhongleiAdd',
					component: chongwuzhongleiAdd
				},
				{
					path: 'chongwushangpin',
					component: chongwushangpinList
				},
				{
					path: 'chongwushangpinDetail',
					component: chongwushangpinDetail
				},
				{
					path: 'chongwushangpinAdd',
					component: chongwushangpinAdd
				},
				{
					path: 'yiliaofuwu',
					component: yiliaofuwuList
				},
				{
					path: 'yiliaofuwuDetail',
					component: yiliaofuwuDetail
				},
				{
					path: 'yiliaofuwuAdd',
					component: yiliaofuwuAdd
				},
				{
					path: 'meirongfuwu',
					component: meirongfuwuList
				},
				{
					path: 'meirongfuwuDetail',
					component: meirongfuwuDetail
				},
				{
					path: 'meirongfuwuAdd',
					component: meirongfuwuAdd
				},
				{
					path: 'meirongleixing',
					component: meirongleixingList
				},
				{
					path: 'meirongleixingDetail',
					component: meirongleixingDetail
				},
				{
					path: 'meirongleixingAdd',
					component: meirongleixingAdd
				},
				{
					path: 'fuwuyuyue',
					component: fuwuyuyueList
				},
				{
					path: 'fuwuyuyueDetail',
					component: fuwuyuyueDetail
				},
				{
					path: 'fuwuyuyueAdd',
					component: fuwuyuyueAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
				{
					path: 'systemintro',
					component: systemintroList
				},
				{
					path: 'systemintroDetail',
					component: systemintroDetail
				},
				{
					path: 'systemintroAdd',
					component: systemintroAdd
				},
				{
					path: 'discusschongwushangpin',
					component: discusschongwushangpinList
				},
				{
					path: 'discusschongwushangpinDetail',
					component: discusschongwushangpinDetail
				},
				{
					path: 'discusschongwushangpinAdd',
					component: discusschongwushangpinAdd
				},
				{
					path: 'discussyiliaofuwu',
					component: discussyiliaofuwuList
				},
				{
					path: 'discussyiliaofuwuDetail',
					component: discussyiliaofuwuDetail
				},
				{
					path: 'discussyiliaofuwuAdd',
					component: discussyiliaofuwuAdd
				},
				{
					path: 'discussmeirongfuwu',
					component: discussmeirongfuwuList
				},
				{
					path: 'discussmeirongfuwuDetail',
					component: discussmeirongfuwuDetail
				},
				{
					path: 'discussmeirongfuwuAdd',
					component: discussmeirongfuwuAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
