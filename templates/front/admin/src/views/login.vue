<template>
  <div>
    <div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231101/a7c636f5b2a0455d8f08899ab6e08582.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"bottom center","backgroundRepeat":"no-repeat","justifyContent":"flex-end"}'>
      <el-form :style='{"border":"0","padding":"100px 40px","boxShadow":"none","margin":"5% 4% 0 0","borderRadius":"10px 10px","background":"url(http://codegen.caihongy.cn/20231101/82632a780f5047e18aed0e5f9fbecdf1.png)","width":"38%","backgroundSize":"100% 100%","position":"relative","backgroundPosition":"center center","backgroundRepeat":"no-repeat","height":"auto","zIndex":"111"}'>
        <div v-if="true" :style='{"margin":"0 auto 60px","color":"#654B3C","textAlign":"left","width":"80%","lineHeight":"44px","fontSize":"30px","textShadow":"none","fontWeight":"bold"}' class="title-container">宠物服务管理系统登录</div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"80%","margin":"40px auto 0","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="false" class="lable" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>用户名：</div>
          <input :style='{"border":"2px solid #9B9B9B","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","color":"#000","borderRadius":"10px","width":"100%","fontSize":"16px","height":"60px"}' placeholder="请输入用户名" name="username" type="text" v-model="rulesForm.username">
        </div>
        <div v-if="loginType==1" class="list-item" :style='{"width":"80%","margin":"40px auto 0","alignItems":"center","flexWrap":"wrap","display":"flex"}'>
          <div v-if="false" class="lable" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
          <input :style='{"border":"2px solid #9B9B9B","padding":"0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","color":"#000","borderRadius":"10px","width":"100%","fontSize":"16px","height":"60px"}' placeholder="请输入密码" name="password" type="password" v-model="rulesForm.password">
        </div>

        <div :style='{"width":"60%","textAlign":"right","margin":"40px 10% 40px auto"}' v-if="roles.length>1" prop="loginInRole" class="list-type">
          <el-radio v-for="item in roles" v-bind:key="item.roleName" v-model="rulesForm.role" :label="item.roleName">{{item.roleName}}</el-radio>
        </div>

		
        <div :style='{"minHeight":"150px","boxShadow":"none","padding":"0 0","margin":"-70px auto 0","alignItems":"flex-start","borderRadius":"0 0 10px 10px","background":"none","flexDirection":"column","display":"flex","width":"80%","position":"relative","zIndex":"-1"}'>
          <el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0 0","margin":"0 0 0 auto","color":"#fff","bottom":"0","right":"0","outline":"none","borderRadius":"4px","background":"#654B3C","width":"130px","fontSize":"24px","position":"absolute","height":"70px","order":"3"}' type="primary" @click="login()" class="loginInBt">登录</el-button>
        </div>
      </el-form>

    </div>
  </div>
</template>
<script>

import menu from "@/utils/menu";
export default {
  data() {
    return {
		verifyCheck2: false,
		flag: false,
      baseUrl:this.$base.url,
      loginType: 1,
      rulesForm: {
        username: "",
        password: "",
        role: "",
      },
      menus: [],
      roles: [],
      tableName: "",
    };
  },
  mounted() {
    let menus = menu.list();
    this.menus = menus;

    for (let i = 0; i < this.menus.length; i++) {
      if (this.menus[i].hasBackLogin=='是') {
        this.roles.push(this.menus[i])
      }
    }

  },
  created() {

  },
  destroyed() {
	    },
  components: {
  },
  methods: {

    //注册
    register(tableName){
		this.$storage.set("loginTable", tableName);
		this.$router.push({path:'/register',query:{pageFlag:'register'}})
    },
    // 登陆
    login() {

		if (!this.rulesForm.username) {
			this.$message.error("请输入用户名");
			return;
		}
		if (!this.rulesForm.password) {
			this.$message.error("请输入密码");
			return;
		}
		if(this.roles.length>1) {
			if (!this.rulesForm.role) {
				this.$message.error("请选择角色");
				return;
			}

			let menus = this.menus;
			for (let i = 0; i < menus.length; i++) {
				if (menus[i].roleName == this.rulesForm.role) {
					this.tableName = menus[i].tableName;
				}
			}
		} else {
			this.tableName = this.roles[0].tableName;
			this.rulesForm.role = this.roles[0].roleName;
		}
		
		this.loginPost()
    },
	loginPost() {
		this.$http({
			url: `${this.tableName}/login?username=${this.rulesForm.username}&password=${this.rulesForm.password}`,
			method: "post"
		}).then(({ data }) => {
			if (data && data.code === 0) {
				this.$storage.set("Token", data.token);
				this.$storage.set("role", this.rulesForm.role);
				this.$storage.set("sessionTable", this.tableName);
				this.$storage.set("adminName", this.rulesForm.username);
				this.$router.replace({ path: "/" });
			} else {
				this.$message.error(data.msg);
			}
		});
	},
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
      background: url(http://codegen.caihongy.cn/20231101/a7c636f5b2a0455d8f08899ab6e08582.png);
        
  .list-item /deep/ .el-input .el-input__inner {
		border: 2px solid #9B9B9B;
		border-radius: 10px;
		padding: 0 10px;
		box-shadow: 0 0 0px rgba(64, 158, 255, .5);
		color: #000;
		width: 100%;
		font-size: 16px;
		height: 60px;
	  }
  
  .list-item.select /deep/ .el-select .el-input__inner {
		border: 1px solid rgba(64, 158, 255, 1);
		padding: 0 10px;
		box-shadow: 0 0 6px rgba(64, 158, 255, .5);
		outline: 1px solid #efefef;
		color: rgba(64, 158, 255, 1);
		width: 288px;
		font-size: 14px;
		outline-offset: 4px;
		height: 44px;
	  }
  
  .list-code /deep/ .el-input .el-input__inner {
  	  	border: 0px solid #9B9B9B;
  	  	padding: 0 10px;
  	  	outline: none;
  	  	color: #000;
  	  	width: calc(100% - 80px);
  	  	font-size: 14px;
  	  	height: 60px;
  	  }

  .list-type /deep/ .el-radio__input .el-radio__inner {
		background: rgba(53, 53, 53, 0);
		border-color: #666666;
	  }
  .list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
        background: #654B3C;
        border-color: #654B3C;
      }
  .list-type /deep/ .el-radio__label {
		color: #666666;
		font-size: 14px;
	  }
  .list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
        color: #654B3C;
        font-size: 14px;
      }
}

</style>
