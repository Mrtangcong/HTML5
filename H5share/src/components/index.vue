<template>
  <div class="hello">
  <img :src="img1">
  <img :src="img2">
  <img :src="img3">
  <img :src="img4">
    <el-button type="primary" class="el-button" @click="detail()" round>查看详情</el-button>
     <!-- 登录浮框 -->
    <div class="login" v-show="login" @click="loginCancel()">
    	<div class="login-land" @click="event()">
    		<div class="login-title">
    			欢迎使用“米小二”
    		</div>
    		<div class="login-title-land">
    			请先登录
    		</div>
    		<div class="login-phone">
    			<img class="icon-login-phone" :src="phone">
    			<input class="input-login-phone" v-model="phoneinp" type="number" placeholder="请输入您的手机号" name="phone" oninput="if(value.length>11)value=value.slice(0,11)">
    		</div>
    		<div class="login-password">
    			<img class="icon-login-password" :src="password" >
    			<input class="input-login-password" v-model="passwordinp" type="password"  placeholder="请输入登陆密码" name="password" >
    		</div>
    		<el-button type="primary" class="login-button" @click="land()">登&nbsp;录</el-button>
    		<div class="login-register">
    			<div>没有账号 <span class="login-register-span" @click="goregister()"> 注册</span></div>
    			<div class="login-forget" @click="forgetC()">
    				忘记密码?
    			</div>
    		</div>
    	</div>
    </div>
     <!-- 修改密码浮框 -->
    <div class="login" v-show="forget" @click="forgetCancel()" v-loading.fullscreen.lock="fullscreenLoading">    	
    	<div class="login-land" @click="event()">
    		<div class="login-title">
    			欢迎使用“米小二”
    		</div>
    		<div class="login-title-land">
    			找回密码
    		</div>
    		<div class="login-verification">
    			<div>
    				<img class="icon-login-phone" :src="verification">
    				<input class="input-login-verification" type="number" v-model="verificationinp" placeholder="请输入短信验证码" name="verification" oninput="if(value.length>4)value=value.slice(0,4)">
    			</div>
    			<span class="login-verification-button" @click="verificationflag && verificationbutton()">{{verificationbut}}</span>
    		</div>
    		<div class="login-password">
    			<img class="icon-login-password" :src="password">
    			<input class="input-login-password" type="password" v-model="newpassword" placeholder="设置新密码（6~16位数字和字母组合）" name="newpassword">
    		</div>
    		<el-button type="primary" class="login-button" @click="goland()">确&nbsp;定</el-button>
    		<div class="login-register">
    		</div>
    	</div>
    </div>
    <!-- 注册浮框 -->
     <div class="login" v-show="register" @click="registerCancel()" v-loading.fullscreen.lock="fullscreenLoading">    	
    	<div class="login-land" @click="event()">
    		<div class="login-title">
    			欢迎使用“米小二”
    		</div>
    		<div class="login-title-land">
    			请先注册
    		</div>
    		<div class="login-phone">
    			<img class="icon-login-phone" :src="phone">
    			<input class="input-login-phone" v-model="registerphone" type="number" placeholder="请输入您的手机号" name="phone" oninput="if(value.length>11)value=value.slice(0,11)">
    		</div>
    		<div class="login-password">
    			<img class="icon-login-password" :src="password">
    			<input class="input-login-password" type="password" v-model="registerpassword" placeholder="设置登录密码（6~16位数字和字母组合）" name="newpassword">
    		</div>
    		<div class="login-verification">
    			<div>
    				<img class="icon-login-phone" :src="verification">
    				<input class="input-login-verification" type="number" v-model="registerverification" placeholder="请输入短信验证码" name="verification" oninput="if(value.length>4)value=value.slice(0,4)">
    			</div>
    			<span class="login-verification-button" @click="verificationflag && verificationbuttonlogin()">{{verificationbut}}</span>
    		</div>
    		<el-button type="primary" class="login-button" @click="registerbutton()">注&nbsp;册</el-button>
    		<div class="login-register">
    			<div>已有账号 <span class="login-register-span" @click="gologin()"> 登录</span></div>
    			
    		</div>
    	</div>
    </div>
    
  </div>
</template>

<script>
import img2 from '@/assets/tab.png';
import img4 from '@/assets/list.png';
import phone from '@/assets/phne.png';
import img1 from '@/assets/title.png';
import img3 from '@/assets/QR code.png';
import password from '@/assets/password.png';
import verification  from '@/assets/verification.png';
import md5 from 'js-md5';
import axios from 'axios';
export default {
  name: 'index',
  data () {
    return {
      img1:img1,
      img2:img2,
      img3:img3,
      img4:img4,//背景图
      phone:phone,
      password:password,
      verification:verification,//图标
      register:false,//注册阴影层
      login:false,//登录阴影层
      forget:false,//忘记密码阴影层
      fullscreenLoading: false,//验证码弹出框
      phoneinp:'',//\手机号
      phonereg:/^[1][3,4,5,7,8][0-9]{9}$/,//手机号正则
      passwordinp:'',//密码
      passwordreg:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/,//密码正则
      verificationinp:'',//验证码
      verificationbut:'获取验证码',//获取验证码按钮
      verificationnumber:60,//倒计时
      verificationflag:true,//验证码点击事件开关
      newpassword:'',//新密码
      registerphone:'',//注册手机号
      registerpassword:'',//注册密码
      registerverification:'',//注册验证码
    }
  },mounted(){
     var proid =this.$route.query.proid
     console.log(proid)
      localStorage.setItem("proid",proid)
  },methods:{
  	detail(){//查看详情按钮禁止滚动条
  		this.login  = !this.login
  		var top = $(document).scrollTop();
	    $(document).on('scroll.unable',function (e) {
	        $(document).scrollTop(top);
	    })
  	},event(){//组织事件冒泡
  		event.cancelBubble = true
  	},land(){//登陆按钮
  		var that = this
  		if(this.phoneinp==''){
  			this.toast('请输入您的手机号')
  		}else if(!this.phonereg.test(this.phoneinp)){
  			this.toast('请输入正确手机号')
  		}else if(this.passwordinp==''){
  			this.toast('请输入您的密码')
  		}else if(!this.passwordreg.test(this.passwordinp)){
  			this.toast('密码格式错误')
  		}else{//前端认证后发送验证
  			this.ajax('user/login',
  				(res)=>{
  					if(res.data.code==0){
                $(document).unbind("scroll.unable");
                localStorage.setItem("token",res.data.data.token)
                localStorage.setItem("id",res.data.data.id)
                localStorage.setItem("mobile",res.data.data.mobile)
                localStorage.setItem("userName",res.data.data.userName)
                this.relationship()
                this.addUserGuideInfo(1)
                
  					}else{
  						this.toast(res.data.message)
  					}
  				},
  				"iou_registertype","1",
  				"iou_registerwaytype",'4',
  				"mobile",this.phoneinp,
  				"password",md5(this.passwordinp).toUpperCase(),
  				"registerArea",'h5'
  				)

  		}
  	},goregister(){//注册
  		this.login  = !this.login
  		this.register = !this.register
  	},gologin(){
  		this.login  = !this.login
  		this.register = !this.register
  	},registerbutton(){//注册按钮
  		if(this.registerphone==''){
  			this.toast('请输入您的手机号')
  		}else if(!this.phonereg.test(this.registerphone)){
  			this.toast('请输入正确手机号')
  		}else if(this.registerpassword==''){
  			this.toast('请输入您的密码')
  		}else if(!this.passwordreg.test(this.registerpassword)){
  			this.toast('密码格式错误')
  		}else if(this.registerverification==''){
  			this.toast('请输入验证码')
  		}else{
  			this.ajax('/user/register',
  				(res)=>{
  					if(res.data.code==0){
                $(document).unbind("scroll.unable");
                localStorage.setItem("token",res.data.data.token)
                localStorage.setItem("id",res.data.data.id)
                localStorage.setItem("mobile",res.data.data.mobile)
                localStorage.setItem("userName",res.data.data.userName)
                this.relationship()
                this.addUserGuideInfo(0)
                
  					}else{
  						this.toast(res.data.message)
  					}
  				},
  				"registerArea","h5",
  				"mobile",this.registerphone,
  				"password",md5(this.newpassword).toUpperCase(),
  				"verifyCode",this.registerverification
  				)
  		}
  	},forgetC(){//忘记密码 输入手机号之后进入忘记密码页面
  		if(this.phoneinp==''){
  			this.toast('请输入您的手机号')
  		}else if(!this.phonereg.test(this.phoneinp)){
  			this.toast('请输入正确手机号')
  		}else{
  			this.login  = !this.login
  			this.forget  = !this.forget
  		}
  	},goland(){//点击去登陆
  		if(this.verificationinp==''){
  			this.toast('请输入验证码')
  		}else if(this.newpassword==''){
  			this.toast('请输入新密码')
  		}else if(!this.passwordreg.test(this.newpassword)){
  			this.toast('请输入6~18位数字和字母组合')
  		}else{
  			this.ajax('/user/resetPassword',
  				(res)=>{
  					if(res.data.code==0){
                $(document).unbind("scroll.unable");
                localStorage.setItem("token",res.data.data.token)
                localStorage.setItem("id",res.data.data.id)
                localStorage.setItem("mobile",res.data.data.mobile)
                localStorage.setItem("userName",res.data.data.userName)
                this.relationship()
                this.addUserGuideInfo(0)
                
  					}else{
  						this.toast(res.data.message)
  					}
  				},
  				"loginArea","h5",
  				"mobile",this.phoneinp,
  				"newPassword",md5(this.registerpassword).toUpperCase(),
  				"verifyCode",this.verificationinp
  				)
  		}
  	},verificationbutton(){//忘记密码点击获取验证码
  		this.verificationflag=false;
  		this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1000);
  		this.verificationbut = this.verificationnumber+'秒'
  		var that = this
  		this.ajax('sendVerification',
  				(res)=>{
  					console.log(res)
  					if(res.data.code==0){
  						this.toast('验证码发送成功')
  					}else{
  					this.toast(res.data.message)
  					}	
  				},
  				"messageType","1",
  				"phoneNumber",this.phoneinp,
  				)
  		var timing = setInterval(() => {
  			if(this.verificationnumber>1){
    			this.verificationnumber=this.verificationnumber-1
    			this.verificationbut = this.verificationnumber+'秒'
    		}else{
    			clearInterval(timing)
    			this.verificationbut="获取验证码"
    			this.verificationnumber=60
    			this.verificationflag = true
    		}
		},1000)  
  	},verificationbuttonlogin(){//注册点击获取验证码
  		this.verificationflag=false;
  		this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1000);
  		this.verificationbut = this.verificationnumber+'秒'
  		var that = this
  		this.ajax('sendVerification',
  				(res)=>{
  					console.log(res)
  					if(res.data.code==0){
  						this.toast('验证码发送成功')
  					}else{
  					this.toast(res.data.message)
  					}	
  				},
  				"messageType","1",
  				"phoneNumber",this.registerphone,
  				)
  		var timing = setInterval(() => {
  			if(this.verificationnumber>1){
    			this.verificationnumber=this.verificationnumber-1
    			this.verificationbut = this.verificationnumber+'秒'
    		}else{
    			clearInterval(timing)
    			this.verificationbut="获取验证码"
    			this.verificationnumber=60
    			this.verificationflag = true
    		}
		},1000)  
  	},loginCancel(){//阴影层点击取消打开滚动条
  		this.login  =false
  		$(document).unbind("scroll.unable");
  	},forgetCancel(){//阴影层点击取消打开滚动条
  		this.forget  =false
  		$(document).unbind("scroll.unable");
  	},registerCancel(){//阴影层点击取消打开滚动条
  		this.register  =false
  		$(document).unbind("scroll.unable");
  	},relationship(){//绑定好友关系
      this.ajax('/mustLogin/friendManage/addMerchantAndUserFriend',
          (res)=>{
            console.log(res)
            if(res.data.code==0){
            }else{
            this.toast(res.data.message)
            } 
          },
          "proId",this.$route.query.proid,        
          )
    },addUserGuideInfo(type){
      this.ajax('/mustLogin/guide/addUserGuideInfo',
          (res)=>{
            console.log(res)
            if(res.data.code==0){
              this.$router.push('/credit')
            }else{
            this.toast(res.data.message)
            } 
          },
          "proId",this.$route.query.proid,
          "accessType",type,      
          )
    }
  }
}
</script>

<style scoped>
	@media screen and (max-width: 325px) {
 		span.login-verification-button{
 			font-size: 12px;
 		}
	}
	input::-webkit-input-placeholder { /* WebKit browsers */ 
		font-size:12px;
	} 
	input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
		font-size:12px;
	} 
	input::-moz-placeholder { /* Mozilla Firefox 19+ */ 
		font-size:12px;
	} 
	input:-ms-input-placeholder { /* Internet Explorer 10+ */ 
		font-size:12px;
	}
	html,body{
		height: 100%;
	}
	.hello{
		background: rgb(169,216,242);
	}
	.hello>img{
		width: 100%;
	}
	.el-button{
		width:80%;
		margin: 0 auto;
		display: block;
		font-size: 14px;
	}
	.login{
		position: fixed;
		height: 100%;
		top:0;
		left: 0;
		width:100%;
		background:rgba(0,0,0,.5);
	}
	.login .login-land{
		padding: 27px 25px 0;
		position: relative;
      	top: 50%;
      	transform: translateY(-50%);
        background: #fff;
        border-radius: 10px;
        width:85%;
        margin: 0 auto;
	}
	.login-title{
		color: rgb(153,153,153);
		padding-left: 20px;
	}
	.login-title-land{
		padding-left: 20px;
		padding-top: 5px;
		font-size: 20px;
		padding-bottom: 20px;
	}
	.login-phone{
		padding-bottom: 10px;
		margin-bottom:14px;
		border-bottom:1px solid #ccc;
	}
	.icon-login-phone{
		width:30px;
		height: 20px;	
		padding-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	.input-login-phone{
		display: inline-block;
		vertical-align: middle;
		border:none;
		outline: medium;
	}
	.login-password{
		padding-bottom: 10px;
		margin-bottom:24px;
		border-bottom:1px solid #ccc;
	}
	.icon-login-password{
		width:30px;
		height: 20px;
		padding-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	.input-login-password{
		display: inline-block;
		vertical-align: middle;
		border:none;
		outline: medium;
		width: 80%;
	}
	.login-button{
		margin: 0 auto;
		display: block;
		width: 100%;
	}
	.login-register{
		margin-top:10px;
		color: rgb(153,153,153);
		font-size: 12px;
		padding-bottom: 33px;
		display: flex;
		justify-content: space-between;
	}
	.login-register-span{
		color: rgb(16,142,233);
	}
	.login-forget{
		color: rgb(16,142,233);
	}
	.login-verification{
		padding-bottom: 10px;
		margin-bottom:14px;
		border-bottom:1px solid #ccc;
		display: flex;
		justify-content: space-between;
	}
	.login-verification-button{
		display: inline-block;
		font-size: 14px;
		color: rgb(16,142,233);
		position: relative;
	}
	.login-verification-button:after{
		content: "";
		display: block;
		height: 15px;
		position: absolute;
		top:2px;
		width: 1px;
		background: rgb(211,211,211);
		left: -15px;
	}
	.input-login-verification{
		display: inline-block;
		vertical-align: middle;
		border:none;
		outline: medium;
		width: 120px;
	}
</style>
