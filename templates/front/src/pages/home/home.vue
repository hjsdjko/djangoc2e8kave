<template>
<div class="home-preview" :style='{"padding":"0 10%","margin":"0px auto","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"space-between"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"63px 20px 20px","margin":"20px 0 20px 0","background":"#fff","flex":"1","width":"70%","position":"relative","height":"auto","order":"5"}'>
		  <div :style='{"padding":"0 24px","margin":"0px auto","borderColor":"#fb3f52","color":"#fb3f52","textAlign":"left","top":"0","left":"0","background":"none","borderWidth":"0 0 4px","width":"auto","fontSize":"22px","lineHeight":"44px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"48px","zIndex":"9"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"left","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"width":"100%","padding":"0","flexWrap":"wrap","display":"none","height":"200px"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"none","height":"100%"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"20px 0 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"#fff","width":"100%","fontSize":"14px","lineHeight":"30px","height":"300px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"borderColor":"#ddd","top":"0","left":"0","background":"none","borderWidth":"0 0 2px","display":"block","width":"100%","position":"absolute","borderStyle":"solid","height":"48px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0px solid #1d8001","cursor":"pointer","padding":"0 10px","margin":"0px 0 0","textAlign":"center","display":"block","right":"10px","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		    <span class="icon iconfont icon-jiantou09" :style='{"color":"#1d8001","fontSize":"14px","display":"none"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"63px 20px 20px ","margin":"20px 0 0 5%","flexWrap":"wrap","background":"none","flexDirection":"row-reverse","display":"block","width":"25%","position":"relative","height":"auto","order":"10"}'>
		  <div :style='{"padding":"0 24px","margin":"0","borderColor":"#fb3f52","color":"#fb3f52","top":"0","left":"0","background":"none","borderWidth":"0 0 4px","width":"auto","fontSize":"22px","lineHeight":"44px","position":"absolute","borderStyle":"solid","fontWeight":"600","height":"48px","zIndex":"9"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 30px","color":"#888","textAlign":"right","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"width":"100%","padding":"0","flexWrap":"wrap","display":"none","height":"310px","order":"2"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"20px 0 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"#fff","width":"100%","lineHeight":"30px","fontSize":"14px","textIndent":"2em","height":"360px","order":"2"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"borderColor":"#ddd","top":"0","background":"none","borderWidth":"0 0 2px","display":"block","width":"100%","position":"absolute","right":"0","borderStyle":"solid","height":"48px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0px solid #1d8001","cursor":"pointer","padding":"0 10px","margin":"0px auto","textAlign":"right","display":"flex","right":"10px","justifyContent":"center","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute","order":"8"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		    <span class="icon iconfont icon-jiantou09" :style='{"color":"#1d8001","fontSize":"14px","display":"none"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"width":"100%","padding":"0","margin":"20px auto 10px","position":"relative","background":"url(),#fff","order":"1"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","padding":"0","margin":"0 auto","background":"#b4ebcc","display":"block","height":"40px"}'>
			<span :style='{"padding":"0 20px","color":"#fff","background":"url(http://codegen.caihongy.cn/20231012/60342d12bcdc4697b6c8dfdd2afa8617.jpg) no-repeat left center","display":"block","fontSize":"18px","lineHeight":"40px","fontWeight":"500"}'>公告资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
		








		<div v-if="newsList.length" class="list list19 index-pv1" :style='{"padding":"0","margin":"20px 0 0","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		  <div :style='{"width":"calc(100% - 432px)","padding":"0px","background":"none","justifyContent":"space-between","display":"flex","height":"auto"}' class="left">
			<template v-for="(item,index) in newsList">
		    <div v-if="index < 2" :style='{"cursor":"pointer","width":"49%","padding":"0 0 10px","background":"#fff","height":"auto"}' class="item list-item animation-box" @click="toDetail('newsDetail', item)">
		      <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"275px"}' :src="baseUrl + item.picture">
		      <div class="title">{{item.title}}</div>
		      <div :style='{"padding":"0px 10px","overflow":"hidden","color":"#666","width":"100%","lineHeight":"30px","fontSize":"14px","height":"90px"}' class="desc">{{item.introduction}}</div>
		    </div>
			</template>
		  </div>
		  <div :style='{"width":"410px","padding":"68px 20px 10px","background":"url(http://codegen.caihongy.cn/20231012/eed72714b2d1454ba7d12c6a15c2a96a.jpg) no-repeat center top / 100% auto,#fff","height":"auto"}' class="right">
			<template v-for="(item,index) in newsList">
		    <div v-if="index > 1" :style='{"cursor":"pointer","width":"100%","alignItems":"center","display":"flex","height":"auto"}' class="item" @click="toDetail('newsDetail', item)">
		      <div class="dian"></div>
		      <div class="title">{{item.title}}</div>
		      <div class="time" :style='{"width":"112px","padding":"0 0px","textAlign":"right","display":"none"}'>
		        <span class="icon iconfont icon-shijian21"></span>
		        <span class="text" >{{item.addtime}}</span>
		      </div>
		    </div>
			</template>
		  </div>
		</div>



		<div @click="moreBtn('news')" :style='{"border":"0px solid #ddd","cursor":"pointer","padding":"0 10px","margin":"0px auto","top":"10px","textAlign":"center","background":"none","display":"block","width":"auto","lineHeight":"20px","position":"absolute","right":"10px"}'>
			<span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
			<i :style='{"color":"#1d8001","fontSize":"14px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->



<!-- 特价商品 -->
<div id="animate_listchongwushangpin" class="lists animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"0","margin":"20px 0","background":"#fff","width":"100%","position":"relative","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto","borderColor":"#ddd","background":"none","borderWidth":"0 0 2px","width":"100%","borderStyle":"solid","height":"48px"}'>
	  <span :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"#fb3f52","background":"none","borderWidth":"0 0 4px","display":"inline-block","fontSize":"22px","lineHeight":"44px","borderStyle":"solid","fontWeight":"600","font":"\"宋体\""}'>宠物商品展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="chongwushangpinList.length" class="list list16 index-pv1" :style='{"padding":"0 0px 0 2%","margin":"20px 0 0","color":"#999","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div v-for="item,index in chongwushangpinList" :key="index"  @click="toDetail('chongwushangpinDetail', item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #ddd","width":"50%","padding":"10px","overflow":"hidden","height":"200px"}' class="img-box">
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="preHttp(item.shangpintupian)" :src="item.shangpintupian.split(',')[0]" alt="" />
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.shangpintupian?item.shangpintupian.split(',')[0]:'')" alt="" />
			</div>
		    <div :style='{"padding":"0 0px","overflow":"hidden","flex":"1","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"10px 0px 0 0"}'>
				<div class="title">{{item.shangpinmingcheng}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('chongwushangpin')" :style='{"border":"0px solid #1d8001","cursor":"pointer","padding":"0 10px","margin":"0px auto 10px","textAlign":"center","display":"block","right":"10px","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		<i :style='{"color":"#1d8001","fontSize":"14px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listyiliaofuwu" class="lists animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"0","margin":"20px 0","background":"#fff","width":"100%","position":"relative","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto","borderColor":"#ddd","background":"none","borderWidth":"0 0 2px","width":"100%","borderStyle":"solid","height":"48px"}'>
	  <span :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"#fb3f52","background":"none","borderWidth":"0 0 4px","display":"inline-block","fontSize":"22px","lineHeight":"44px","borderStyle":"solid","fontWeight":"600","font":"\"宋体\""}'>医疗服务展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="yiliaofuwuList.length" class="list list16 index-pv1" :style='{"padding":"0 0px 0 2%","margin":"20px 0 0","color":"#999","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div v-for="item,index in yiliaofuwuList" :key="index"  @click="toDetail('yiliaofuwuDetail', item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #ddd","width":"50%","padding":"10px","overflow":"hidden","height":"200px"}' class="img-box">
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="preHttp(item.xiangmutupian)" :src="item.xiangmutupian.split(',')[0]" alt="" />
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.xiangmutupian?item.xiangmutupian.split(',')[0]:'')" alt="" />
			</div>
		    <div :style='{"padding":"0 0px","overflow":"hidden","flex":"1","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"10px 0px 0 0"}'>
				<div class="title">{{item.xiangmumingcheng}}</div>
				<div class="title">{{item.yiliaofenlei}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('yiliaofuwu')" :style='{"border":"0px solid #1d8001","cursor":"pointer","padding":"0 10px","margin":"0px auto 10px","textAlign":"center","display":"block","right":"10px","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		<i :style='{"color":"#1d8001","fontSize":"14px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	

</div>
<!-- 特价商品 -->

<!-- 特价商品 -->
<div id="animate_listmeirongfuwu" class="lists animate__animated" :style='{"border":"0px solid #e9e9e9","padding":"0","margin":"20px 0","background":"#fff","width":"100%","position":"relative","order":"4"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto","borderColor":"#ddd","background":"none","borderWidth":"0 0 2px","width":"100%","borderStyle":"solid","height":"48px"}'>
	  <span :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"#fb3f52","background":"none","borderWidth":"0 0 4px","display":"inline-block","fontSize":"22px","lineHeight":"44px","borderStyle":"solid","fontWeight":"600","font":"\"宋体\""}'>美容服务展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="meirongfuwuList.length" class="list list16 index-pv1" :style='{"padding":"0 0px 0 2%","margin":"20px 0 0","color":"#999","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","fontSize":"14px","height":"auto"}'>
		  <div v-for="item,index in meirongfuwuList" :key="index"  @click="toDetail('meirongfuwuDetail', item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #ddd","width":"50%","padding":"10px","overflow":"hidden","height":"200px"}' class="img-box">
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-if="preHttp(item.xiangmutupian)" :src="item.xiangmutupian.split(',')[0]" alt="" />
				<img class="image" :style='{"width":"100%","objectFit":"cover","display":"block","height":"100%"}' v-else :src="baseUrl + (item.xiangmutupian?item.xiangmutupian.split(',')[0]:'')" alt="" />
			</div>
		    <div :style='{"padding":"0 0px","overflow":"hidden","flex":"1","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"10px 0px 0 0"}'>
				<div class="title">{{item.xiangmumingcheng}}</div>
				<div class="title">{{item.meirongleixing}}</div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0 10px","borderColor":"#ddd","borderStyle":"solid","borderWidth":"0 0 0px 0","display":"inline-block"}' class="collect">
		          <span class="icon iconfont icon-shoucang10"></span>
		          <span class="text">{{item.storeupnum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('meirongfuwu')" :style='{"border":"0px solid #1d8001","cursor":"pointer","padding":"0 10px","margin":"0px auto 10px","textAlign":"center","display":"block","right":"10px","top":"16px","borderRadius":"20px","background":"none","width":"auto","lineHeight":"20px","position":"absolute"}'>
		<span :style='{"color":"#666","fontSize":"14px"}'>更多>></span>
		<i :style='{"color":"#1d8001","fontSize":"14px","display":"none"}' class="icon iconfont icon-jiantou09"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],

        chongwushangpinList: [],
        yiliaofuwuList: [],
        meirongfuwuList: [],




      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
















































































			setTimeout(()=>{








































			},250)
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__'},
				{id:'about',css:'animate__'},
				{id:'system',css:'animate__'},
				{id:'animate_listchongwushangpin',css:'animate__'},
				{id:'animate_listyiliaofuwu',css:'animate__'},
				{id:'animate_listmeirongfuwu',css:'animate__'},
				{id:'animate_newsnews',css:'animate__'},
				{id:'msgs',css:'animate__'},
				{id:'friendly',css:'animate__'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 13,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
			
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('chongwushangpin/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.chongwushangpinList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('yiliaofuwu/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.yiliaofuwuList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
			data = {
				page: 1,
				limit: 6,
			}
			this.$http.get('meirongfuwu/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.meirongfuwuList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 0px;
			padding: 0 30px 0 10px;
			color: #666;
			width: 180px;
			font-size: 14px;
			height: 40px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0px solid #ddd;
			border-radius: 0px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: #666;
			width: 350px;
			font-size: 14px;
			height: 40px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	





	.home-preview .news .list19 .left .item .title {
				padding: 0px 10px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				font-weight: 600;
				width: 100%;
				font-size: 16px;
				line-height: 40px;
				text-overflow: ellipsis;
			}
	
	.home-preview .news .list19 .left .item .title:hover {
				color: #2dc16e;
			}
	
	.home-preview .news .list19 .right .item .dian {
				border-radius: 100%;
				margin: 0 6px;
				background: #999;
				width: 4px;
				height: 4px;
			}
	.home-preview .news .list19 .right .item:hover .dian {
				background: #2dc16e;
			}
	
	.home-preview .news .list19 .right .item .title {
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				flex: 1;
				width: calc(100% - 0px);
				font-size: 14px;
				line-height: 34px;
				text-overflow: ellipsis;
				transition: 0.3s;
			}
	.home-preview .news .list19 .right .item:hover .title {
				color: #2dc16e;
			}
	
	.home-preview .news .list19 .right .item .time .icon {
				color: #999;
				font-size: 14px;
				line-height: 32px;
			}
	.home-preview .news .list19 .right .item:hover .time .icon {
				color: #009def;
			}
	
	.home-preview .news .list19 .right .item .time .text {
				color: #999;
				font-size: 14px;
				line-height: 32px;
			}
	.home-preview .news .list19 .right .item:hover .time .text {
				color: #009def;
			}



	.home-preview .recommend .list16 .list-item {
				border: 1px solid #eee;
				padding: 10px;
				margin: 0 0 30px;
				background: none;
				display: flex;
				width: 32%;
				font-size: 0;
				position: relative;
				height: auto;
			}
	
	.home-preview .recommend .list16 .list-item:hover {
				border: 1px solid #b4ebcc;
				cursor: pointer;
				background: #b4ebcc;
			}
	
	.home-preview .recommend .list16 .list-item .title {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				font-size: 14px;
				border-color: #ddd;
				border-width: 0 0 0px 0;
				line-height: 30px;
				text-overflow: ellipsis;
				border-style: solid;
			}
	
	.home-preview .recommend .list16 .list-item:hover .title {
				color: #333;
			}
	
	.home-preview .recommend .list16 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .time .icon {
				color: #666;
			}
	.home-preview .recommend .list16 .list-item .time .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .time .text {
				color: #666;
			}
	
	.home-preview .recommend .list16 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .publisher .icon {
				color: #666;
			}
	.home-preview .recommend .list16 .list-item .publisher .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .publisher .text {
				color: #666;
			}
	
	.home-preview .recommend .list16 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .like .icon {
				color: #666;
			}
	.home-preview .recommend .list16 .list-item .like .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .like .text {
				color: #666;
			}
	
	.home-preview .recommend .list16 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .collect .icon {
				color: #666;
			}
	.home-preview .recommend .list16 .list-item .collect .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .collect .text {
				color: #666;
			}
	
	.home-preview .recommend .list16 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .view .icon {
				color: #666;
			}
	.home-preview .recommend .list16 .list-item .view .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .recommend .list16 .list-item:hover .view .text {
				color: #666;
			}
	
	.home-preview .recommend .list16 .list-item .desc {
				color: #666;
				flex: 1;
				display: none;
				font-size: 12px;
				line-height: 1.5;
			}
	.home-preview .recommend .list16 .list-item:hover .desc {
				color: #fff;
			}


	.home-preview .lists .list16 .list-item {
				border: 1px solid #eee;
				cursor: pointer;
				padding: 0px;
				margin: 0 2% 30px 0;
				background: none;
				display: flex;
				width: 31.3%;
				font-size: 0;
				position: relative;
				height: auto;
			}
	
	.home-preview .lists .list16 .list-item:hover {
				border: 1px solid #b4ebcc;
				background: #b4ebcc;
			}
	
	.home-preview .lists .list16 .list-item .title {
				padding: 0 10px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				width: 100%;
				font-size: 14px;
				border-color: #ddd;
				border-width: 0 0 0px 0;
				line-height: 30px;
				text-overflow: ellipsis;
				border-style: solid;
			}
	
	.home-preview .lists .list16 .list-item:hover .title {
				color: #333;
			}
	
	.home-preview .lists .list16 .list-item .time .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .time .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .time .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .publisher .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .publisher .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 4px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .like .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .like .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .collect .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .collect .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .icon {
				color: #666;
			}
	.home-preview .lists .list16 .list-item .view .text {
				color: inherit;
				font-size: 14px;
				line-height: 28px;
			}
	.home-preview .lists .list16 .list-item:hover .view .text {
				color: #666;
			}
	
	.home-preview .lists .list16 .list-item .desc {
				color: #666;
				flex: 1;
				display: none;
				font-size: 12px;
				line-height: 1.5;
			}
	.home-preview .lists .list16 .list-item:hover .desc {
				color: #fff;
			}
</style>
