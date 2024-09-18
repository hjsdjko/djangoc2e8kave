<template>
<div>
	<div :style='{"padding":"0","margin":"0px auto","borderColor":"#e7e7e7","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20231012/4cb66b61fe1d4cb09b72cf0a4768c7be.jpg) repeat-x center center","borderWidth":"0px","width":"80%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'|'" :style='{"width":"auto","padding":"10px 30px 10px 0","fontSize":"18px","lineHeight":"1","background":"#fff","display":"inline-block"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index" to="/index/chongwushangpin"><a>{{item.name}}</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item3"><a href="javascript:void(0);">详情</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div :style='{"padding":"0","margin":"0px auto","borderColor":"#e7e7e7","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20231012/4cb66b61fe1d4cb09b72cf0a4768c7be.jpg) repeat-x center center","borderWidth":"0px","width":"80%","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="detail-preview" :style='{"padding":"10px 10% 0","margin":"10px auto","alignItems":"flex-start","flexWrap":"wrap","display":"flex","width":"100%","position":"relative","justifyContent":"space-between"}'>
		<div class="attr" :style='{"border":"0px solid #e9e9e9","padding":"0","margin":"0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","position":"relative","justifyContent":"space-between","order":"2"}'>

			<div class="info" :style='{"width":"100%","padding":"0px","margin":"0","background":"#fff","order":"2"}'>
				<div class="item" :style='{"padding":"0 20px 0 0px","margin":"0 0 10px 0","borderColor":"#ea0012","alignItems":"center","display":"flex","justifyContent":"space-between","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20231012/60342d12bcdc4697b6c8dfdd2afa8617.jpg) no-repeat left center / auto 100%,#b4ebcc","borderWidth":"0 0 0px","lineHeight":"43px","borderStyle":"solid","height":"43px"}'>
					<div :style='{"width":"auto","padding":"0 24px","fontSize":"20px","overflow":"hidden","color":"#fff","display":"inline-block"}'>
                    {{detail.shangpinmingcheng}}
                    </div>
					<div @click="storeup(1)" v-show="!isStoreup" :style='{"border":"0","cursor":"pointer","padding":"0 10px","borderRadius":"30px","top":"56px","background":"#fff","lineHeight":"32px","position":"absolute","right":"20px"}'><i v-if="true" :style='{"color":"#f95927","fontSize":"16px"}' class="el-icon-star-off"></i><span :style='{"color":"#666","fontSize":"15px"}'>点我收藏({{detail.storeupnum}})</span></div>
					<div @click="storeup(-1)" v-show="isStoreup" :style='{"border":"0","cursor":"pointer","padding":"0 10px","borderRadius":"30px","top":"56px","background":"#fff","lineHeight":"32px","position":"absolute","right":"20px"}'><i v-if="true" :style='{"color":"#f95927","fontSize":"16px"}' class="el-icon-star-on"></i><span :style='{"color":"#666","fontSize":"15px"}'>取消收藏({{detail.storeupnum}})</span></div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}' v-if="detail.price">
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>价格</div>
					<div style="font-weight: bold;" :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'><span :style='{"fontSize":"12px"}'>￥</span>{{detail.price}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}' v-if="detail.jf">
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>积分</div>
					<div style="color: red;font-weight: bold;" :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.jf}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>单次购买</div>
					<div :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.onelimittimes}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>库存</div>
					<div :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.alllimittimes}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>商品编号</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.shangpinbianhao}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>适合宠物</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.shihechongwu}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>商品分类</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.shangpinfenlei}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>品牌</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.pinpai}}</div>
				</div>
				<div class="item" :style='{"padding":"0 10px","margin":"0 0 4px 0","borderColor":"#f3f3f3","background":"#fff","borderWidth":"0 0 1px","display":"flex","borderStyle":"solid","justifyContent":"spaceBetween"}'>
					<div class="lable" :style='{"padding":"0 10px","color":"#999","textAlign":"right","width":"auto","fontSize":"14px","lineHeight":"36px","height":"36px"}'>规格</div>
					<div  :style='{"padding":"8px 10px 0","fontSize":"14px","lineHeight":"24px","color":"#666","flex":"1","height":"auto"}'>{{detail.guige}}</div>
				</div>
				<div class="btn" :style='{"padding":"10px 20px","flexWrap":"wrap","display":"flex"}'>
					<el-input-number :style='{"width":"140px","margin":"0 6px 0 0","lineHeight":"36px","position":"relative","display":"inline-block"}' v-if="detail.alllimittimes" :min=1 v-model="buynumber"></el-input-number>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#333","borderRadius":"2px","background":"#b4ebcc","width":"auto","lineHeight":"36px","fontSize":"14px","height":"36px"}' v-if="detail.alllimittimes" type="warning" size="small" @click="addCart">添加到购物车</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#333","borderRadius":"2px","background":"#009cf530","width":"auto","lineHeight":"36px","fontSize":"14px","height":"36px"}' v-if="detail.alllimittimes" type="warning" size="small" @click="buyNow">立即购买</el-button>

				</div>
				<div class="btn" :style='{"padding":"10px 20px","flexWrap":"wrap","display":"flex"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#333","borderRadius":"2px","background":"#009cf530","width":"auto","lineHeight":"36px","fontSize":"14px","height":"36px"}' v-if="btnAuth('chongwushangpin','修改')" @click="editClick">修改</el-button>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"0 5px 0 0","outline":"none","color":"#333","borderRadius":"2px","background":"#f5340030","width":"auto","lineHeight":"36px","fontSize":"14px","height":"36px"}' v-if="btnAuth('chongwushangpin','删除')" @click="delClick">删除</el-button>
					<!-- hasPay 否 -->
				</div>
			</div>
		</div>
		
			<div class="swiper3" v-if="detailBanner.length" :style='{"width":"100%","margin":"0 0 20px 0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
			  <div class="big" :style='{"border":"0px solid #1abc9e50","margin":"0 0 20px","background":"#fff","width":"49%","position":"relative","height":"480px","order":"1"}'>
				<img id="big" :style='{"border":"1px solid #eee","objectFit":"contain","top":"0px","left":"0px","display":"block","width":"100%","position":"absolute","height":"100%","zIndex":"1"}' :src="swiperBigUrl" class="image">
			  </div>
			  <div class="samll" :style='{"padding":"0px","overflow":"hidden","flexWrap":"wrap","background":"#fff","display":"flex","width":"49%","justifyContent":"space-between","height":"auto","order":"2"}'>
			    <div :style='{"border":"0px solid #1abc9e50","cursor":"pointer","margin":"0 0px 20px","background":"#fff","width":"49%","position":"relative","height":"230px"}' v-for="item in detailBanner" :key="item.id">
				  <img :style='{"border":"1px solid #eee","padding":"10px","objectFit":"cover","top":"0px","left":"0px","display":"block","width":"100%","position":"absolute","height":"100%","zIndex":"1"}' v-if="item.substr(0,4)=='http'" :src="item" @click="swiperClick3(item)" class="image">
				  <img :style='{"border":"1px solid #eee","padding":"10px","objectFit":"cover","top":"0px","left":"0px","display":"block","width":"100%","position":"absolute","height":"100%","zIndex":"1"}' v-else :src="baseUrl + item" @click="swiperClick3(baseUrl + item)" class="image">
			    </div>
			  </div>
			</div>


		

		<div class="detail2" :style='{"border":"0px solid #ddd","padding":"0px","margin":"40px 0","borderRadius":"0px","background":"#fff","flex":"1","width":"100%","order":"10"}'>
			<div :style='{"border":"1px solid #f6f6f6","padding":"0","margin":"0 0 16px 0","borderColor":"#eee","borderRadius":"0px","background":"none","borderWidth":"0 0 2px","borderStyle":"solid","height":"48px"}'>
				<div :style='{"padding":"0 24px","borderColor":"#fb3f52","color":"#fb3f52","borderWidth":"0 0 4px","display":"inline-block","fontSize":"22px","lineHeight":"44px","borderStyle":"solid","fontWeight":"600"}'>详细信息</div>
			</div>
			<div :style='{"color":"#666","padding":"0 24px","background":"#fff"}' v-html="detail.shangpinjieshao"></div>
			<el-form class="add comment" :style='{"border":"0px solid #eee","boxShadow":"none","padding":"20px","margin":"20px 0 20px","background":"none"}' :model="form" :rules="rules" ref="form">
				<el-form-item class="item" :style='{"width":"100%","display":"flex","height":"auto"}' label="评论" prop="content">
					<editor
						:style='{"minHeight":"150px","border":"1px solid #eee","boxShadow":"none","outline":"none","color":"#333","borderRadius":"4px","width":"100%","lineHeight":"32px","fontSize":"14px"}'
						v-model="form.content" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item class="item" :style='{"width":"100%","display":"flex","height":"auto"}' label="评分" prop="score">
					<el-rate
					  v-model="form.score"
					  :style='{"lineHeight":"40px","height":"40px"}'
					  :max='Number(5)'
					  :allow-half='false'
					  :low-threshold='Number(2)'
					  :high-threshold='Number(4)'
					  :show-text='false'
					  :texts='["极差", "失望", "一般", "满意", "惊喜"]'
					  text-color='#1F2D3D'
					  :colors='["#F7BA2A", "#F7BA2A", "#F7BA2A"]'
					  void-color='#C6D1DE'
					  disabled-void-color='#EFF2F7'
					  :icon-classes='["el-icon-star-on", "el-icon-star-on","el-icon-star-on"]'
					  void-icon-class='el-icon-star-off'
					  disabled-void-icon-class='el-icon-star-on'
					  :show-score='false'
					>
					</el-rate>
				</el-form-item>
				<el-form-item class="btn" :style='{"width":"100%","padding":"0 0 0 80px","margin":"10px 0 0","height":"auto"}'>
					<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#b4ebcc","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="submitForm('form')">立即提交</el-button>
					<el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#333","borderRadius":"0px","background":"#fff","width":"110px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="resetForm('form')">重置</el-button>
				</el-form-item>
			</el-form>
				
			<div v-if="infoList.length" :style='{"padding":"0 7%","margin":"40px 0 0"}' class="comment">
				<div :style='{"padding":"0px 0","margin":"0 0 20px","borderColor":"#999","alignItems":"center","borderWidth":"0 0 0px 0","background":"none","width":"100%","borderStyle":"solid","height":"auto"}' v-for="item in infoList" :key="item.id" @mouseenter="discussEnter(item.id)"
					@mouseleave="discussLeave">
					<div class="user" :style='{"width":"100%","alignItems":"center","display":"flex","height":"auto"}'>
						<el-image v-if="item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="baseUrl + item.avatarurl"></el-image>
						<el-image v-if="!item.avatarurl" :style='{"width":"40px","margin":"0 10px 0 0","borderRadius":"100%","objectFit":"cover","height":"40px"}' :size="50" :src="require('@/assets/touxiang.png')"></el-image>
						<div :style='{"color":"#333","fontSize":"16px"}' class="name">{{item.nickname}}</div>
					</div>
					<div :style='{"border":"0px solid #eee","padding":"0px","margin":"10px 0px 0px","color":"#999","borderRadius":"0px","background":"none","wordWrap":"break-word","lineHeight":"24px","fontSize":"14px"}' class="content-block-ask">
						<div v-html="item.content"></div>
						<el-rate
						  v-model="item.score"
						  disabled
						  :style='{"lineHeight":"40px","height":"40px"}'
						  :max='Number(5)'
						  :allow-half='false'
						  :low-threshold='Number(2)'
						  :high-threshold='Number(4)'
						  :show-text='false'
						  :texts='["极差", "失望", "一般", "满意", "惊喜"]'
						  text-color='#1F2D3D'
						  :colors='["#F7BA2A", "#F7BA2A", "#F7BA2A"]'
						  void-color='#C6D1DE'
						  disabled-void-color='#EFF2F7'
						  :icon-classes='["el-icon-star-on", "el-icon-star-on","el-icon-star-on"]'
						  void-icon-class='el-icon-star-off'
						  disabled-void-icon-class='el-icon-star-on'
						  :show-score='false'
						>
						</el-rate>
						<div class="btn" :style='{"width":"100%","margin":"0px 0 0 0","alignItems":"center","justifyContent":"flex-end","display":"flex","height":"32px"}'>
						  <!-- <el-button :style='{"border":"0","cursor":"pointer","padding":"0 20px","margin":"0 10px","outline":"none","color":"#333","borderRadius":"0px","background":"#b4ebcc","width":"auto","lineHeight":"30px","fontSize":"14px","height":"30px"}'>回复</el-button> -->
						  <el-button v-if="showIndex==item.id&&userid==item.userid" @click="discussDel(item.id)" :style='{"border":"1px solid #ff777f","cursor":"pointer","padding":"0 20px","margin":"0 10px","outline":"none","color":"#ff777f","borderRadius":"0px","background":"none","width":"auto","lineHeight":"32px","fontSize":"14px","height":"32px"}'>删除</el-button>
						</div>
					</div>
					<div :style='{"border":"0px solid #eee","padding":"0px","margin":"10px 0px 0px","color":"#999","borderRadius":"0px","background":"none","wordWrap":"break-word","lineHeight":"24px","fontSize":"14px"}' class="content-block-reply" v-if="item.reply">
						回复：<span v-html="item.reply"></span>
					</div>
				</div>
			</div>
				
			<el-pagination
			  background
			  id="pagination" class="pagination"
			  :pager-count="7"
			  :page-size="pageSize"
			  :page-sizes="pageSizes"
			  prev-text="<"
			  next-text=">"
			  :hide-on-single-page="false"
			  :layout='["total","prev","pager","next"].join()'
			  :total="total"
			  :style='{"padding":"5px 10%","margin":"20px auto","color":"#333","textAlign":"left","width":"100%","clear":"both","lineHeight":"40px","fontWeight":"500","height":"40px"}'
			  @current-change="curChange"
			  @prev-click="prevClick"
			  @next-click="nextClick"
			></el-pagination>
		</div>
		
		<el-tabs class="detail" :style='{"border":"0px solid #ddd","boxShadow":"none","margin":"20px auto","background":"#fff","display":"block","width":"100%","order":"50"}' v-model="activeName" type="border-card">
																		</el-tabs>
	</div>
	<div class="share_view" :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","position":"fixed","right":"0","bottom":"20%","background":"#fff","zIndex":"11"}'>
	</div>
</div>
</template>

<script>
  import CountDown from '@/components/CountDown';
  import axios from 'axios'
  import Swiper from "swiper";
  
  export default {
    //数据集合
    data() {
      return {
        tablename: 'chongwushangpin',
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '宠物商品'
          }
        ],
        title: '',
        detailBanner: [],
		id: 0,
        detail: {},
        activeName: 'first',
		userid: localStorage.getItem('userid'),
        form: {
          content: '',
          userid: localStorage.getItem('userid'),
          nickname: localStorage.getItem('username'),
          avatarurl: '',
		  score: 0,
        },
		showIndex: -1,
        infoList: [],
		colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        rules: {
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
		  score: [
            { required: true, message: '请选择评分', trigger: 'blur' }
          ],
        },
        total: 1,
        pageSize: 5,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        storeupParams: {
          name: '',
          picture: '',
          refid: 0,
          tablename: 'chongwushangpin',
          userid: localStorage.getItem('userid')
        },
        isStoreup: false,
        storeupInfo: {},
        buynumber: 1,
        cart: {
          buynumber: 0,
          discountprice: 0,
          goodid: 0,
          goodname: '',
          picture: '',
          price: 0,
          userid: localStorage.getItem('userid')
        },
        isInCart: false,
		centerType: false,
		shareUrl: location.href,
		swiperBigUrl: null,
      }
    },
    created() {
		if(this.$route.query.centerType) {
			this.centerType = true
		}
		this.id = this.$route.query.id
        this.init();
    },
	mounted() {
	},
    //方法集合
    methods: {
		swiperClick3(src) {
			this.swiperBigUrl = src
		},
        init() {
          this.baseUrl = this.$config.baseUrl;
          this.$http.get(this.tablename + '/detail/'  + this.id, {}).then(res => {
            if (res.data.code == 0) {
              this.detail = res.data.data;
              this.title = this.detail.shangpinmingcheng;
              this.detailBanner = this.detail.shangpintupian ? this.detail.shangpintupian.split(",") : [];
              this.$forceUpdate();

			  this.getDiscussList(1);
			  this.getStoreupStatus();
			  this.getCartList();

            }
			if (this.detailBanner.length) {
				if (this.detailBanner[0].substr(0,4)=='http') {
					this.swiperBigUrl = this.detailBanner[0]
				} else {
					this.swiperBigUrl = this.baseUrl + this.detailBanner[0]
				}
			}
          });
        },
      storeup(type) {
        if (type == 1 && !this.isStoreup) {
          this.storeupParams.name = this.title;
          this.storeupParams.picture = this.detailBanner[0];
          this.storeupParams.refid = this.detail.id;
          this.storeupParams.type = type;
          this.$http.post('storeup/add', this.storeupParams).then(res => {
            if (res.data.code == 0) {
              this.isStoreup = true;
			  this.detail.storeupnum++
			  this.$http.post('chongwushangpin/update', this.detail).then(res => {});
              this.$message({
                type: 'success',
                message: '收藏成功!',
                duration: 1500,
              });
            }
          });
        }
        if (type == -1 && this.isStoreup) {
          this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'chongwushangpin', userid: localStorage.getItem('userid')}}).then(res => {
            if (res.data.code == 0 && res.data.data.list.length > 0) {
              this.isStoreup = true;
              this.storeupInfo = res.data.data.list[0];
              let delIds = new Array();
              delIds.push(this.storeupInfo.id);
              this.$http.post('storeup/delete', delIds).then(res => {
                if (res.data.code == 0) {
                  this.isStoreup = false;
				  this.detail.storeupnum--
				  this.$http.post('chongwushangpin/update', this.detail).then(res => {});
                  this.$message({
                    type: 'success',
                    message: '取消成功!',
                    duration: 1500,
                  });
                }
              });
            }
          });
        }
      },
      getStoreupStatus(){
        if(localStorage.getItem("Token")) {
            this.$http.get('storeup/list', {params: {page: 1, limit: 1, type: 1, refid: this.detail.id, tablename: 'chongwushangpin', userid: localStorage.getItem('userid')}}).then(res => {
              if (res.data.code == 0 && res.data.data.list.length > 0) {
                this.isStoreup = true;
                this.storeupInfo = res.data.data.list[0];
              }
            });
        }
      },
      curChange(page) {
        this.getDiscussList(page);
      },
      prevClick(page) {
        this.getDiscussList(page);
      },
      nextClick(page) {
        this.getDiscussList(page);
      },
		// 返回按钮
		backClick(){
			history.back()
		},
		// 下载
		download(file){
			if(!file) {
				this.$message({
				  type: 'error',
				  message: '文件不存在',
				  duration: 1500,
				});
				return;
			}
		  let arr = file.replace(new RegExp('upload/', "g"), "")
		  axios.get(this.baseUrl + '/file/download?fileName=' + arr, {
		  	headers: {
		  		token: localStorage.getItem("Token")
		  	},
		  	responseType: "blob"
		  }).then(({
		  	data
		  }) => {
		  	const binaryData = [];
		  	binaryData.push(data);
		  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
		  		type: 'application/pdf;chartset=UTF-8'
		  	}))
		  	const a = document.createElement('a')
		  	a.href = objectUrl
		  	a.download = arr
		  	// a.click()
		  	// 下面这个写法兼容火狐
		  	a.dispatchEvent(new MouseEvent('click', {
		  		bubbles: true,
		  		cancelable: true,
		  		view: window
		  	}))
		  	window.URL.revokeObjectURL(data)
		  },err=>{
			  axios.get((location.href.split(this.$config.name).length>1 ? location.href.split(this.$config.name)[0] :'') + this.$config.name + '/file/download?fileName=' + arr, {
			  	headers: {
			  		token: localStorage.getItem("Token")
			  	},
			  	responseType: "blob"
			  }).then(({
			  	data
			  }) => {
			  	const binaryData = [];
			  	binaryData.push(data);
			  	const objectUrl = window.URL.createObjectURL(new Blob(binaryData, {
			  		type: 'application/pdf;chartset=UTF-8'
			  	}))
			  	const a = document.createElement('a')
			  	a.href = objectUrl
			  	a.download = arr
			  	// a.click()
			  	// 下面这个写法兼容火狐
			  	a.dispatchEvent(new MouseEvent('click', {
			  		bubbles: true,
			  		cancelable: true,
			  		view: window
			  	}))
			  	window.URL.revokeObjectURL(data)
			  })
		  })
      },
      getDiscussList(page) {
        this.$http.get('discusschongwushangpin/list', {params: {page, limit: this.pageSize, refid: this.detail.id}}).then(res => {
          if (res.data.code == 0) {
            this.infoList = res.data.data.list;
            this.total = res.data.data.total;
            this.pageSize = res.data.data.pageSize;this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
            this.totalPage = res.data.data.totalPage;
          }
        });
      },
	  discussEnter(index){
		  this.showIndex = index
	  },
	  discussLeave(){
		  this.showIndex = -1
	  },
	  discussDel(id){
		  this.$confirm('是否删除此评论？')
		    .then(_ => {
		      this.$http.post('discusschongwushangpin/delete',[id]).then(res=>{
				  if(res.data&&res.data.code==0){
					  this.addDiscussNum(1)
					  this.$message({
					    type: 'success',
					    message: '删除成功!',
					    duration: 1500,
						onClose: () => {
							this.getDiscussList(1);
						}
					  });
				  }
			  })
		    }).catch(_ => {});
	  },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get('orders/list', {params: {page: 1, limit: 1, status: '已完成', goodid: this.detail.id, userid: localStorage.getItem('userid')}}).then(res => {
                if (res.data.code == 0 && res.data.data.list.length == 0) {
                  this.$message({
                    type: 'success',
                    message: '请完成订单后再评论!',
                    duration: 1500
                  });
                  return false
                } else {
                    this.form.refid = this.detail.id;
                    this.form.avatarurl = localStorage.getItem('headportrait')?localStorage.getItem('headportrait'):'';
                    this.$http.post('discusschongwushangpin/add', this.form).then(res => {
						if (res.data.code == 0) {
							this.addDiscussNum(2)
							this.form.content = '';
							this.form.score = 0
							this.getDiscussList(1);
							this.$message({
								type: 'success',
								message: '评论成功!',
								duration: 1500,
							});
						}
                    });
                }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
	  addDiscussNum(type){
		  if(type==2){
			  this.detail.discussnum++
		  }else if(type==1){
			  if(this.detail.discussnum!=0){
				  this.detail.discussnum--
			  }else{
				  this.detail.discussnum = 0
			  }
		  }
		  this.$http.post('chongwushangpin/update',this.detail).then(res=>{
			  
		  })
	  },
      getCartList() {
        this.$http.get('cart/list', {params: {userid: localStorage.getItem('userid'), tablename: 'chongwushangpin', goodid: this.detail.id}}).then(res => {
          if (res.data.code == 0) {
            if (res.data.data.list.length > 0) {
              this.isInCart = true;
            } else {
              this.isInCart = false;
            }
          }
        });
      },
      addCart() {
            // 单次购买限制
            if (this.detail.onelimittimes > 0 && this.detail.onelimittimes < this.buynumber) {
                this.$message.error(`每人单次只能购买${this.detail.onelimittimes}件`);
                return
            }
            // 库存不够
            if (this.detail.alllimittimes <= 0 ) {
                this.$message.error(`商品已售罄`);
                return
            }
            // 库存限制
            if (this.detail.alllimittimes > 0 && this.detail.alllimittimes < this.buynumber) {
                this.$message.error(`库存不足`);
                return
            }
        if (this.isInCart) {
          this.$message.error('该商品已经添加到购物车');
          return;
        }

        this.cart.buynumber = this.buynumber;
        this.cart.goodid = this.detail.id;
        this.cart.goodname = this.title;
        this.cart.tablename = this.tablename;
        this.cart.picture = this.detailBanner[0];
        this.cart.price = this.detail.price;
        this.$http.post('cart/save', this.cart).then(res => {
          if (res.data.code === 0) {
            this.getCartList();
            this.$message({
              message: '添加成功',
              type: 'success',
              duration: 1500,
            });
          } else {
            this.$message.error(res.data.msg);
          }
        });
      },
        //立即购买
        buyNow() {
            // 单次购买限制
            if (this.detail.onelimittimes > 0 && this.detail.onelimittimes < this.buynumber) {
                this.$message.error(`每人单次只能购买${this.detail.onelimittimes}件`);
                return
            }
            // 库存不够
            if (this.detail.alllimittimes <= 0 ) {
                this.$message.error(`商品已售罄`);
                return
            }
            // 库存限制
            if (this.detail.alllimittimes > 0 && this.detail.alllimittimes < this.buynumber) {
                this.$message.error(`库存不足`);
                return
            }
            // 保存到storage中，在确认下单页面中获取要购买的商品
            localStorage.setItem('orderGoods', JSON.stringify([{
                tablename: this.tablename,
                goodid: this.detail.id,
                goodname: this.title,

                picture:this.detailBanner[0],
                buynumber: this.buynumber,
                userid: localStorage.getItem('userid'),
                price: this.detail.price,
                discountprice: this.detail.vipprice ? this.detail.vipprice : 0
            }]));
            // 跳转到确认下单页面
            let query = {
                type: 1,
            }
            this.$router.push({path: '/index/shop-order/orderConfirm', query: query});
        },


		// 权限判断
		btnAuth(tableName,key){
			if(this.centerType){
				return this.isBackAuth(tableName,key)
			}else{
				return this.isAuth(tableName,key)
			}
		},
		// 修改
		editClick(){
			this.$router.push(`/index/chongwushangpinAdd?type=edit&&id=${this.detail.id}`);
		},
		// 删除
		delClick(){
			this.$confirm('是否删除此宠物商品？')
			  .then(_ => {
			    this.$http.post('chongwushangpin/delete', [this.detail.id]).then(res => {
			      if (res.data.code == 0) {
			        this.$message({
			          type: 'success',
			          message: '删除成功!',
			          duration: 1500,
					  onClose: () => {
						  history.back()
					  }
			        });
			      }
			    });
			  }).catch(_ => {});
		},
    },
    components: {
      CountDown
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.editor /deep/ .avatar-uploader {
		height: 0;
		line-height: 0;
	}
	
	.detail-preview {
	
	  .attr {
	    .el-carousel /deep/ .el-carousel__indicator button {
	      width: 0;
	      height: 0;
	      display: none;
	    }
	
	    .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
	      border-color: none;
	    }
	  }
	
	  .detail {
	    & /deep/ .el-tabs__header .el-tabs__nav-wrap {
	      margin-bottom: 0;
	    }
	
	    & .add .el-textarea {
	      width: auto;
	    }
	  }
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: red;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: red;
	}

	.attr .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 0.7;
		height: 12px;
	}
	
	.attr .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 24px;
		opacity: 1;
		height: 12px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		border-radius: 0px 0 0 0px;
		top: 2px;
		left: 1px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 1px 0 0;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 32px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__decrease i {
		color: #666;
		font-size: 14px;
	}

	.attr .el-input-number /deep/ .el-input-number__increase {
		cursor: pointer;
		z-index: 1;
		display: flex;
		border-color: #DCDFE6;
		right: 1px;
		border-radius: 0 0px 0px 0;
		top: 2px;
		background: #f5f5f5;
		width: 40px;
		justify-content: center;
		border-width: 0 0 0 1px;
		align-items: center;
		position: absolute;
		border-style: solid;
		text-align: center;
		height: 32px;
	}
	
	.attr .el-input-number /deep/ .el-input-number__increase i {
		color: #666;
		font-size: 14px;
	}
	
	.attr .el-input-number /deep/ .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		border-radius: 0px;
		padding: 0 10px;
		outline: none;
		color: #666;
		background: #fff;
		display: inline-block;
		width: 100%;
		font-size: 14px;
		line-height: 34px;
		text-align: center;
		height: 34px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header {
		padding: 0;
		margin: 0;
		background: none;
		border-color: #ddd;
		border-width: 0 0 2px;
		line-height: 44px;
		border-style: solid;
		height: 48px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item {
		border: 0;
		padding: 0 24px;
		margin: 0 20px 0 0;
		color: #bbb;
		font-weight: 500;
		display: inline-block;
		font-size: 22px;
		line-height: 44px;
		transition: all 0s;
		background: none;
		position: relative;
		list-style: none;
		text-align: center;
		min-width: 100px;
		height: 48px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
		border: 0;
		color: #fb3f52;
		background: none;
		font-weight: 600;
		border-color: #fb3f52;
		border-width: 0 0 4px;
		border-style: solid;
		text-align: center;
		min-width: 100px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
		padding: 0 24px;
		margin: 0 20px 0 0;
		color: #fb3f52;
		font-weight: 600;
		font-size: 22px;
		border-color: #fb3f52;
		line-height: 44px;
		background: none;
		border-width: 0 0 4px;
		border-style: solid;
		text-align: center;
		min-width: 100px;
		height: 48px;
	}
	
	.detail-preview .detail.el-tabs /deep/ .el-tabs__content {
		padding: 15px;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-form-item__label {
		padding: 0 10px 0 0;
		color: #666;
		width: 80px;
		font-size: 14px;
		line-height: 40px;
		text-align: right;
	}
	
	.detail-preview .detail.el-tabs .add /deep/ .el-textarea__inner {
	}
	
	.breadcrumb-preview .el-breadcrumb /deep/ .el-breadcrumb__separator {
		margin: 0 9px;
		color: #ccc;
		font-weight: 500;
	}
	
	.breadcrumb-preview .el-breadcrumb .item1 /deep/ .el-breadcrumb__inner a {
		color: #333;
		display: inline-block;
	}
	
	.breadcrumb-preview .el-breadcrumb .item2 /deep/ .el-breadcrumb__inner a {
		color: #666;
		display: inline-block;
	}
		
	.breadcrumb-preview .el-breadcrumb .item3 /deep/ .el-breadcrumb__inner a {
		color: #999;
		display: inline-block;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__total {
		margin: 0 10px 0 0;
		color: #666;
		font-weight: 400;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next {
		border: none;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #666;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		min-width: 35px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-prev:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .btn-next:disabled {
		border: none;
		cursor: not-allowed;
		border-radius: 2px;
		padding: 0;
		margin: 0 5px;
		color: #C0C4CC;
		background: #f4f4f5;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager {
		padding: 0;
		margin: 0;
		display: inline-block;
		vertical-align: top;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #666;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #f4f4f5;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pager .number:hover {
		cursor: pointer;
		padding: 0 4px;
		margin: 0 5px;
		color: #fff;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #ff3d00;
		text-align: center;
		min-width: 30px;
		height: 28px;
}

#pagination.el-pagination /deep/ .el-pager .number.active {
		cursor: default;
		padding: 0 4px;
		margin: 0 5px;
		color: #FFF;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		border-radius: 2px;
		background: #ff3d00;
		text-align: center;
		min-width: 30px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes {
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input {
		margin: 0 5px;
		width: 100px;
		position: relative;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 25px 0 8px;
		color: #606266;
		display: inline-block;
		font-size: 13px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input span.el-input__suffix {
		top: 0;
		position: absolute;
		right: 0;
		height: 100%;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__sizes .el-input .el-input__suffix .el-select__caret {
		cursor: pointer;
		color: #C0C4CC;
		width: 25px;
		font-size: 14px;
		line-height: 28px;
		text-align: center;
	}

	#pagination.el-pagination /deep/ .el-pagination__jump {
		margin: 0 0 0 24px;
		color: #606266;
		display: inline-block;
		vertical-align: top;
		font-size: 13px;
		line-height: 28px;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input {
		border-radius: 3px;
		padding: 0 2px;
		margin: 0 2px;
		display: inline-block;
		width: 50px;
		font-size: 14px;
		line-height: 18px;
		position: relative;
		text-align: center;
		height: 28px;
	}
	
	#pagination.el-pagination /deep/ .el-pagination__jump .el-input .el-input__inner {
		border: 1px solid #DCDFE6;
		cursor: pointer;
		padding: 0 3px;
		color: #606266;
		display: inline-block;
		font-size: 14px;
		line-height: 28px;
		border-radius: 3px;
		outline: 0;
		background: #FFF;
		width: 100%;
		text-align: center;
		height: 28px;
	}
	.share_view{
		position: fixed;
		right:0;
		bottom: 20%;
		background: #fff;
		box-shadow: 0 4px 6px rgba(0,0,0,.1);
		.share{
			width: 40px;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #eee;
			cursor: pointer;
		}
		.share:last-of-type{
			border:none;
		}
	}


	.detail-preview .el-rate /deep/ .el-rate__item {
				cursor: pointer;
				display: inline-block;
				vertical-align: middle;
				font-size: 0;
				position: relative;
			}
	
	.detail-preview .el-rate /deep/ .el-rate__item .el-rate__icon {
				margin: 0 3px;
				display: block;
				font-size: 18px;
				position: relative;
				transition: .3s;
			}
</style>
