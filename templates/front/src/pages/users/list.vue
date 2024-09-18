<template>
<div>
	<div :style='{"padding":"0","margin":"0px auto","borderColor":"#e7e7e7","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20231012/4cb66b61fe1d4cb09b72cf0a4768c7be.jpg) repeat-x center center","borderWidth":"0px","width":"80%","borderStyle":"solid"}' class="breadcrumb-preview">
		<el-breadcrumb :separator="'|'" :style='{"width":"auto","padding":"10px 30px 10px 0","fontSize":"18px","lineHeight":"1","background":"#fff","display":"inline-block"}'>
			<el-breadcrumb-item class="item1" to="/"><a>首页</a></el-breadcrumb-item>
			<el-breadcrumb-item class="item2" v-for="(item, index) in breadcrumbItem" :key="index"><a>{{item.name}}</a></el-breadcrumb-item>
		</el-breadcrumb>
	</div>
	<div v-if="centerType" :style='{"padding":"0","margin":"0px auto","borderColor":"#e7e7e7","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20231012/4cb66b61fe1d4cb09b72cf0a4768c7be.jpg) repeat-x center center","borderWidth":"0px","width":"80%","borderStyle":"solid"}'>
		<el-button size="mini" @click="backClick">返回</el-button>
	</div>
	<div class="list-preview" :style='{"padding":"30px 10% 0","margin":"0px auto","alignItems":"flex-start","flexWrap":"wrap","background":"#fff","display":"block","width":"100%","position":"relative","justifyContent":"space-between"}'>
		

	
    <el-form :inline="true" :model="formSearch" class="list-form-pv" :style='{"padding":"0 0 0px","margin":"0px 0 0","borderColor":"#ddd","alignItems":"center","display":"flex","clear":"both","float":"left","top":"50px","left":"10%","flexWrap":"wrap","background":"#fff","borderWidth":"0 0 0px","width":"calc(80% - 340px)","position":"absolute","borderStyle":"solid","height":"auto","order":"1"}'>
      <el-form-item :style='{"margin":"0 10px 0 0"}'>
	    <div class="lable" v-if="true" :style='{"width":"auto","padding":"0 0 0 10px","lineHeight":"42px","textAlign":"right","display":"inline-block"}'>用户名：</div>
        <el-input v-model="formSearch.username" placeholder="用户名" @keydown.enter.native="getList(1, curFenlei)" clearable></el-input>
      </el-form-item>
	  <el-button v-if=" true " :style='{"cursor":"pointer","border":"0","padding":"0px 15px","margin":"0px 10px 0 10px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"0px","background":"#ff777f","width":"100px","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="getList(1, curFenlei)"><i v-if="true" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-search"></i>查询</el-button>
	  <el-button v-if="btnAuth('users','新增')" :style='{"cursor":"pointer","border":"0px solid #ddd","padding":"0px 15px","margin":"0px 10px 0 0","color":"#fff","display":"inline-block","outline":"none","borderRadius":"0px","background":"#c5c5c5","width":"80px","fontSize":"14px","lineHeight":"36px","height":"36px"}' type="primary" @click="add('/index/usersAdd')"><i v-if="false" :style='{"color":"#fff","margin":"0 10px 0 0","fontSize":"14px"}' class="el-icon-circle-plus-outline"></i>添加</el-button>
    </el-form>
	<div class="sort_view" :style='{"padding":"20px 24px 0","margin":"30px 0 0","borderColor":"#e7e7e7","textAlign":"right","float":"left","overflow":"hidden","top":"110px","background":"#fff","borderWidth":"0px 0 0","width":"calc(80% - 340px)","position":"absolute","borderStyle":"solid","order":"5"}'>
		<el-button :style='{"padding":"0px 10px","margin":"0","borderColor":"#ddd","borderRadius":"0px","background":"none","borderWidth":"0","borderStyle":"solid"}' @click="sortClick('clicknum')">
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"18px","color":"#ff777f"}' class="icon iconfont icon-xiazai5" v-if="sortType!='clicknum'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"18px","color":"#ff777f"}' class="icon iconfont icon-jiantou23" v-else-if="sortType=='clicknum'&&sortOrder=='desc'"></span>
			<span :style='{"margin":"0 2px 0 0","lineHeight":"20px","fontSize":"18px","color":"#ff777f"}' class="icon iconfont icon-jiantou24" v-else-if="sortType=='clicknum'&&sortOrder=='asc'"></span>
			<span :style='{"color":"#999","lineHeight":"20px","fontSize":"16px"}'>点击量</span>
		</el-button>
	</div>
	<div class="list" :style='{"minHeight":"900px","border":"0px solid #eee","padding":"0px","margin":"180px 0 10px","background":"#fff","width":"calc(100% - 340px)","float":"left","order":"6"}'>
		
		<!-- 样式三 -->
		<div class="list3 index-pv1" :style='{"width":"100%","padding":"20px 0 0 2%","flexWrap":"wrap","background":"#fff","display":"flex","height":"auto"}'>
		  <div v-for="(item, index) in dataList" :key="index" @click.stop="toDetail(item)" class="list-item animation-box">
		    <div :style='{"border":"0px solid #f6f6f6","width":"100%","padding":"0px","margin":"0 0px 0 0","overflow":"hidden","height":"320px"}' class="img-box">
			</div>
		    <div :style='{"width":"100%","padding":"0 0px","overflow":"hidden","alignItems":"center","display":"flex","height":"auto"}' class="item-info">
		      <div :style='{"width":"100%","padding":"0 0px 0 0","flex":"1"}'>
				<div v-if="item.price" class="price"><span :style='{"fontSize":"12px"}'>￥</span>{{item.price}}</div>
		        <div :style='{"padding":"2px 0px","borderColor":"#f0f0f0","borderStyle":"dashed","float":"right","borderWidth":"0 0 0px 0","display":"inline-block"}' class="time">
		          <span class="icon iconfont icon-shijian21"></span>
		          <span class="text">{{item.addtime}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>

	
	<el-pagination
	  background
	  id="pagination"
	  class="pagination"
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
      @size-change="sizeChange"
	  @prev-click="prevClick"
	  @next-click="nextClick"
	></el-pagination>

  </div>
  <el-dialog title="预览图" :visible.sync="previewVisible" width="50%">
  	<img :src="previewImg" alt="" style="width: 100%;">
  </el-dialog>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
	    layouts: '',
		swiperIndex: -1,
        baseUrl: '',
        breadcrumbItem: [
          {
            name: '管理员'
          }
        ],
        formSearch: {
          username: '',
        },
        fenlei: [],
		feileiColumn: '',
        dataList: [],
        total: 1,
        pageSize: 8,
		pageSizes: [10,20,30,50],
        totalPage: 1,
        curFenlei: '全部',
        isPlain: false,
        indexQueryCondition: '',
        timeRange: [],
		centerType:false,
		previewImg: '',
		previewVisible: false,
		sortType: 'id',
		sortOrder: 'desc',
      }
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
		this.indexQueryCondition = this.$route.query.indexQueryCondition ? this.$route.query.indexQueryCondition : '';
		this.baseUrl = this.$config.baseUrl;
      this.getFenlei();
      this.getList(1, '全部');
    },
    //方法集合
    methods: {
		add(path) {
			let query = {}
			if(this.centerType){
				query.centerType = 1
			}
			this.$router.push({path: path,query:query});
		},
      getFenlei() {
      },
      getList(page, fenlei, ref = '') {
        let params = {page, limit: this.pageSize};
        let searchWhere = {};
        if (this.formSearch.username != '') searchWhere.username = '%' + this.formSearch.username + '%';
		if (this.sortType) searchWhere.sort = this.sortType
		if (this.sortOrder) searchWhere.order = this.sortOrder
        this.$http.get(`users/${this.centerType?'page':'list'}`, {params: Object.assign(params, searchWhere)}).then(res => {
          if (res.data.code == 0) {
            this.dataList = res.data.data.list;
            this.total = Number(res.data.data.total);
            this.pageSize = Number(res.data.data.pageSize);
            this.totalPage = res.data.data.totalPage;
			
			this.pageSizes = [this.pageSize, this.pageSize*2, this.pageSize*3, this.pageSize*5];
          }
        });
      },
	  sortClick(type){
		  if(this.sortType==type){
			  if(this.sortOrder == 'desc'){
				  this.sortOrder = 'asc'
			  }else{
				  this.sortOrder = 'desc'
			  }
		  }else{
			  this.sortType = type
			  this.sortOrder = 'desc'
		  }
		  this.getList(1, '全部')
	  },
      curChange(page) {
        this.getList(page);
      },
      prevClick(page) {
        this.getList(page);
      },
      sizeChange(size){
        this.pageSize = size
        this.getList(1);
      },
      nextClick(page) {
        this.getList(page);
      },
	  imgPreView(url){
		  this.previewImg = url
		  this.previewVisible = true
	  },
      toDetail(item) {
		  let params = {
			  id: item.id
		  }
		  if(this.centerType){
			  params.centerType = 1
		  }
        this.$router.push({path: '/index/usersDetail', query: params});
      },
	btnAuth(tableName,key){
		if(this.centerType){
			return this.isBackAuth(tableName,key)
		}else{
			return this.isAuth(tableName,key)
		}
	},
	backClick() {
		this.$router.push({path: '/index/center'});
	},
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.list-preview .list-form-pv .el-input {
		width: auto;
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
	
	.category-1 .item {
		cursor: pointer;
		padding: 0 20px;
		margin: 0 10px;
		color: #666;
		display: inline-block;
		font-size: 14px;
		border-color: #e9e9e9;
		line-height: 50px;
		border-radius: 0px;
		background: none;
		width: calc(100% - 20px);
		border-width: 0 0 1px;
		border-style: solid;
		text-align: center;
	}
	
	.category-1 .item:hover {
		cursor: pointer;
		margin: 0 10px;
		color: #666;
		background: none;
		width: calc(100% - 20px);
		line-height: 50px;
		text-align: center;
	}
	
	.category-1 .item.active {
		border: 0px solid #e70012;
		border-radius: 0px;
		margin: 0 0 0px;
		color: #fff;
		background: url(http://codegen.caihongy.cn/20231013/9c22fb3231794db8964f7a2102d7dcda.jpg) no-repeat center top;
		width: 100%;
		font-size: 16px;
		line-height: 50px;
	}
	
	.category-2 .item {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item:hover {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-2 .item.active {
		cursor: pointer;
		border-radius: 4px;
		margin: 0 0 10px 0;
		color: #999;
		background: #efefef;
		width: 100%;
		font-size: 14px;
		line-height: 36px;
		text-align: center;
	}
	
	.category-3 .item {
		cursor: pointer;
		padding: 8px 20px;
		margin: 0 10px;
		color: #666;
		display: flex;
		border-color: #e9e9e9;
		line-height: 50px;
		flex-wrap: wrap;
		border-radius: 0px;
		background: none;
		width: calc(100% - 20px);
		justify-content: center;
		border-width: 0 0 1px;
		align-items: center;
		border-style: solid;
		text-align: center;
	}
	
	.category-3 .item:hover {
		padding: 8px 20px;
		margin: 0 10px;
		color: #fff;
		background: url(http://codegen.caihongy.cn/20231013/9c22fb3231794db8964f7a2102d7dcda.jpg) no-repeat center top / auto 100%;
		width: calc(100% - 20px);
		line-height: 50px;
	}
	
	.category-3 .item.active {
		color: #fff;
		background: url(http://codegen.caihongy.cn/20231013/9c22fb3231794db8964f7a2102d7dcda.jpg) no-repeat center top / auto 100%;
		width: calc(100% - 20px);
	}
	
	.list-form-pv .el-input /deep/ .el-input__inner {
		padding: 0 10px;
		margin: 0;
		color: #333;
		font-size: 14px;
		border-color: #eee;
		line-height: 36px;
		border-radius: 0px;
		outline: none;
		max-width: 160px;
		width: auto;
		border-width: 0 0 1px;
		border-style: solid;
		height: 36px;
	}
	
	.list-form-pv .el-select /deep/ .el-input__inner {
	}
	
	.list-form-pv .el-date-editor /deep/ .el-input__inner {
		padding: 0 30px;
		margin: 0;
		color: #333;
		display: inline-block;
		font-size: 14px;
		border-color: #eee;
		line-height: 36px;
		border-radius: 0px;
		outline: none;
		max-width: 160px;
		width: auto;
		border-width: 0 0 1px;
		border-style: solid;
		height: 36px;
	}
	
	.list .index-pv1 .animation-box {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		z-index: initial;
	}
	
	.list .index-pv1 .animation-box:hover {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
		z-index: 1;
	}
	
	.list .index-pv1 .animation-box img {
		transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
	}
	
	.list .index-pv1 .animation-box img:hover {
		transform: rotate(0deg) scale(1.05) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
		-webkit-perspective: 1000px;
		perspective: 1000px;
		transition: 0.3s;
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

	.list3 .list-item {
				border: 0px solid #eee;
				cursor: pointer;
				padding: 10px;
				margin: 0 2% 24px 0;
				background: #fff;
				display: flex;
				width: 48%;
				font-size: 0;
				position: relative;
				flex-wrap: wrap;
				height: auto;
			}
	
	.list3 .list-item:hover {
				border: 0px solid #b4ebcc;
				background: #b4ebcc;
			}
	
	.list3 .list-item .title {
				padding: 0 0px;
				overflow: hidden;
				color: #333;
				white-space: nowrap;
				background: none;
				width: 100%;
				font-size: 14px;
				border-color: #eee;
				border-width: 0 0 1px 0;
				line-height: 36px;
				text-overflow: ellipsis;
				border-style: solid;
			}
	
	.list3 .list-item:hover .title {
				color: #000;
				border-color: #d0fce3;
				border-width: 0 0 1px 0;
				border-style: solid;
			}
	.list3 .list-item .price {
				padding: 0 10px;
				color: #f00;
				font-size: 14px;
				border-color: #eee;
				border-width: 0 0 1px 0;
				line-height: 36px;
				border-style: solid;
			}
	
	.list3 .list-item:hover .price {
				color: #f00;
				border-color: #d0fce3;
				border-width: 0 0 1px 0;
				border-style: solid;
			}
	
	.list3 .list-item .time .icon {
				margin: 0 4px 0 0;
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .icon {
				color: #333;
			}
	.list3 .list-item .time .text {
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .time .text {
				color: #666;
			}
	
	.list3 .list-item .publisher .icon {
				margin: 0 2px 0 0;
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .icon {
				color: #666;
			}
	.list3 .list-item .publisher .text {
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .publisher .text {
				color: #666;
			}
	
	.list3 .list-item .like .icon {
				margin: 0 2px 0 0;
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .icon {
				color: #666;
			}
	.list3 .list-item .like .text {
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .like .text {
				color: #666;
			}
	
	.list3 .list-item .collect .icon {
				margin: 0 2px 0 0;
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .icon {
				color: #666;
			}
	.list3 .list-item .collect .text {
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .collect .text {
				color: #666;
			}
	
	.list3 .list-item .view .icon {
				margin: 0 2px 0 0;
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .icon {
				color: #666;
			}
	.list3 .list-item .view .text {
				color: #999;
				font-size: 14px;
				line-height: 28px;
			}
	.list3 .list-item:hover .view .text {
				color: #666;
			}
	
	.list3 .list-item .desc {
				margin: 0 0 0 5%;
				overflow: hidden;
				color: #999;
				text-indent: 2em;
				display: none;
				width: 45%;
				font-size: 14px;
				line-height: 24px;
				align-items: center;
				height: 172px;
			}
	.list3 .list-item:hover .desc {
				color: #fff;
			}
	
</style>
