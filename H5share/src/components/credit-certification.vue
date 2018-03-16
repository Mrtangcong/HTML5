<template>
	<div>
		<div class="credit" v-show="tishi">*温馨提示：请填写真实有效信息以顺利通过审核</div>	
		<div class="list" v-show="sfxxshow" @click="smrz()">
			<div >
				<img class="icon" :src="sfxx"/>
				<span class="font">身份信息</span>
			</div>
			<div>
				<span :class="sfxxst">{{sfxxstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="list" v-show="jbxxshow" @click="jbxx()">
			<div>
				<img class="icon" :src="jbxximg"/>
				<span class="font">基本信息</span>
			</div>
			<div>
				<span :class="jbxxst">{{jbxxstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="list" v-show="cxshow" @click="cx()">
			<div>
				<img class="icon" :src="chexian"/>
				<span class="font">车险</span>
			</div>
			<div>
				<span :class="cxst">{{cxstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="list" v-show="sbshow" @click="sb()">
			<div>
				<img class="icon" :src="shebaoimg"/>
				<span class="font">社保</span>
			</div>
			<div>
				<span :class="sbst">{{sbstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="list" v-show="gjjshow" @click="gjj()">
			<div>
				<img class="icon" :src="gjjimg"/>
				<span class="font">公积金</span>
			</div>
			<div>
				<span :class="gjjst">{{gjjstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="list" v-show="yysshow" @click="yys()">
			<div>
				<img class="icon" :src="yysimg"/>
				<span class="font">运营商</span>
			</div>
			<div>
				<span :class="yysst">{{yysstate}}</span>
				<img class="icon copy" :src="copy"/>
			</div>
		</div>
		<div class="credit" style="font-size:13px;color:#000">请输入借款信息（必填项）</div>
		<div class="jkje">
			<span class="font"><span style="color:#f00;vertical-align:middle;font-size:16px"> * </span>借款金额</span>
			<div>
				<input type="number" v-model="amount" placeholder="请输入借款金额(100～5000)">
				元
			</div>
		</div>
		<div class="jkje">
			<span class="font"><span style="color:#f00;vertical-align:middle;font-size:16px"> * </span>借款时长</span>
			<div>
				<input type="number" v-model="period" placeholder="请输入借款天数(1～730)">
				天
			</div>
		</div>
		<div class="jkje" @click="nhllshow = true">
			<span class="font"><span style="color:#f00;vertical-align:middle;font-size:16px"> * </span>年化利率</span>
			<div>
				<input type="number" v-model="interestRate" placeholder="0.00">
				%
			</div>
		</div>
		<div class="Rectangle"></div>
		<div class="user">
			<img :src="portrait" class="portrait">
			<span class="Lenders">出借人</span>
			<div class="title">
				此出借人可提供的借贷范围
			</div>
			<div class="userlist">
				<span class="user-left">借款金额</span>
				<span class="user-right">{{jkje}}</span>
			</div>
			<div class="userlist">
				<span class="user-left">借款期限</span>
				<span class="user-right">{{jkqx}}</span>
			</div>
			<div class="userlist">
				<span class="user-left">年化利率</span>
				<span class="user-right">{{nhll}}</span>
			</div>
			<div class="userlist" style="margin-bottom:0">
				<span class="user-left">还款方式</span>
				<span class="user-right">{{yicixing}}</span>
			</div>
		</div>
		<div class="bottom">
			<div class="but">
				<el-button type="primary" class="button" @click="problem()">提交</el-button>
				<div class="footer">
					<p>出借人电话：<span class="blue">0571-12345678</span></p>
					<p>平台客服：<span class="blue">0571-87007384</span></p>
				</div>
			</div>
		</div>
	
    </div>
</template>

<script>
import yysimg from '@/assets/yys.png';
import chexian from '@/assets/chexian.png';
import shebaoimg from '@/assets/shebao.png';
import sfxx from '@/assets/xyrz.png';
import jbxximg from '@/assets/jbxx.png';
import gjjimg from '@/assets/gjj.png';
import portrait from '@/assets/portrait.png';
import copy from '@/assets/copy.png'
export default {
  name: 'credit',
  data () {
    return {
    	yysimg:yysimg,//运营商
    	chexian:chexian,//车险
    	shebaoimg:shebaoimg,//社保
    	sfxx:sfxx,//身份信息
    	jbxximg:jbxximg,//基本信息
    	gjjimg:gjjimg,//公积金
    	copy:copy,//右箭头
    	portrait:portrait,//出借人头像
    	yicixing:'',//还款方式
    	jkje:'',//借款金额
    	jkqx:'',//借款期限
    	nhll:'',//年华利率
    	sfxxstate:'',
    	jbxxstate:'',
    	sbstate:'',
    	yysstate:'',
    	gjjstate:'',
    	cxstate:'',//套餐字段
    	sfxxst:'',
    	jbxxst:'',
    	sbst:'',
    	yysst:'',
    	gjjst:'',
    	cxst:'',//套餐颜色
    	sfxxshow:false,
    	jbxxshow:false,
    	cxshow:false,
    	sbshow:false,
    	gjjshow:false,
    	yysshow:false,//套餐列表显示开关
    	period:'',
		interestRate:'',
		amount:'',
		nhllshow: false,//年华利率点击弹出框
		myItems1:[],
		tishi:true,
    }
  },mounted(){
  	
  	for(var i = 0;i<=36;i++){
  		this.myItems1.push({"label":i,"callback":(i)=>{this.interestRate=i}})
  	}
  	  		this.ajax('/mustLogin/production/queryProductionByProid',
			(res)=>{
				
				if(res.data.code==0){
					var record=res.data.data;//出借人数据
					var list =record.loanLimitDayList;//借款期限
					var days = [];//借款起始和结束 相等时 取一个值
					this.yicixing = record.repayWayStr
					this.nhll =record.interestRateLower+'~'+record.interestRateUpper+' %'
					this.jkje= record.loanAmountLower+'~'+record.loanAmountUpper+" 元"
					//判断起始时间和结束时间相同 只显示一个 否则显示区间
					if(list[0].limitDayLower==list[0].limitDayUpper){
						for(var i=0;i<list.length;i++){
							 days.push(list[i].limitDayLower)
						}
						this.jkqx=days.join(',')+' 天'
					}else{
						this.jkqx=list[0].limitDayLower+"~"+list[0].limitDayUpper+' 天'
					}
				}else{
					this.toast(res.data.message)
				}
				this.sfxxshow=this.switch(record.creditAuth)
				this.jbxxshow=this.switch(record.primaryInfo)
				this.cxshow=this.switch(record.insurance)
				this.sbshow=this.switch(record.socialSecurity)
				this.gjjshow=this.switch(record.accumulationFund)
				this.yysshow=this.switch(record.operatorInfo)
				if(record.operatorInfo==record.accumulationFund==record.socialSecurity==record.insurance==record.primaryInfo==record.creditAuth==0){
					this.tishi=false
				}
			},
			"proId",localStorage.getItem('proid')
			)
  	  		this.ajax('mustLogin/auth/queryState',
  	  			(res)=>{
  	  				var status = res.data.data

  	  				this.sfxxstate=this.font(status.identityInfoAuth)
  	  				this.sfxxst=this.color(status.identityInfoAuth)

  	  				this.jbxxstate=this.font(status.userInfoHasComplete)
  	  				this.jbxxst=this.color(status.userInfoHasComplete)

  	  				this.sbstate=this.font(status.sheBaoAuth)
  	  				this.sbst=this.color(status.sheBaoAuth)

  	  				this.yysstate=this.font(status.mobileAuth)
  	  				this.yysst=this.color(status.mobileAuth)

  	  				this.gjjstate=this.font(status.gjjAuth)
  	  				this.gjjst=this.color(status.gjjAuth)

  	  				this.cxstate=this.font(status.carInsuranceAuth)
  	  				this.cxst=this.color(status.carInsuranceAuth)
  	  			},
  	  			)
  },methods:{
  	switch(data){//认证套餐列表
  		if(data==1){
  			return true
  		}else if(data==0){
  			return false
  		}
  	},
  	font(data){//认证套餐状态
  		if(data==0||data==false){
  			return '未认证'
  		}else if(data==3||data==true){
  			return '认证成功'
  		}else if(data==1){
  			return '认证中。。。'
  		}
  	},
  	color(data){//认证套餐颜色
  		if(data==0||data==false){
  			return 'state99'
  		}else if(data==3||data==true){
  			return 'state54'
  		}else if(data==1){
  			return 'stateff'
  		}
  	},
  	cx(){
  		this.ajax('/mustLogin/auth/dataMagicBox',
			(res)=>{
				if(res.data.code==0){
					window.location.href=res.data.data;
				}else{
					this.toast(res.data.message)
				}
			},
			"type","cx",
			)
  	},
  	sb(){
  		this.ajax('/mustLogin/auth/dataMagicBox',
			(res)=>{
				if(res.data.code==0){
					window.location.href=res.data.data;
				}else{
					this.toast(res.data.message)
				}
			},
			"type","shebao",
			)
  	},
  	yys(){
  		this.ajax('/mustLogin/auth/dataMagicBox',
			(res)=>{
				if(res.data.code==0){
					window.location.href=res.data.data;
				}else{
					this.toast(res.data.message)
				}
			},
			"type","yys",
			)
  	},
  	gjj(){
  		this.ajax('/mustLogin/auth/dataMagicBox',
			(res)=>{
				if(res.data.code==0){
					window.location.href=res.data.data;
				}else{
					this.toast(res.data.message)
				}
			},
			"type","gjj",
			)
  	},
  	smrz(){//把id跟token传到之前米小二服务 已经写好的实名认证和基本信息页面中 实名完成 回到当前页面
  		window.location.href="http://devweb.jinfujt.com/authenticationH5.html?id="+localStorage.getItem('id')+'&token='+localStorage.getItem('token')
  	},
  	jbxx(){
  		window.location.href="http://devweb.jinfujt.com/essentialInformationH5.html?id="+localStorage.getItem('id')+'&token='+localStorage.getItem('token')
  	},
  	problem(){
  		if(this.jkje==""){
  			this.toast('请输入借款金额')
  			return
  		}else if(this.jkqx==""){
  			this.toast('请输入借款天数')
  			return
  		}else if(this.nhll==""){
  			this.toast('请输入借款天数')
  			return
  		}else{
  			this.ajax('/mustLogin/receipt/insertReceipt',
			(res)=>{
				if(res.data.code==0){
					
				}else{
					this.toast(res.data.message)
				}
			},
			"proid",localStorage.getItem('proid'),
			"amount",this.amount,
			"period",this.period,
			"interestRate",this.interestRate,
			"priodUnit","0",
			)
  		}
  	},
  	},
}
</script>

<style scoped>
	.credit{
		background: #f6f6f6;
		height: 38px;
		line-height: 38px;
		font-size: 12px;
		color: #666666;
		padding-left: 18px;
	}
	.icon{
		width: 25px;
		display: inline-block;
		vertical-align: middle;
		margin-right: 10px;
	}
	.list{
		padding:14px 18px 14px 0;
		font-size: 14px;
		margin-left: 18px;
		border-bottom: 1px solid #eeeeee;
		display: flex;
		justify-content: space-between;
	}
	.font{
		vertical-align: middle;
	}
	.arrow{

	}
	.jkje{
		display: flex;
		justify-content: space-between;
		padding:14px  0;
		font-size: 14px;
		margin-left: 18px;
		margin-right: 18px;
		border-bottom: 1px solid #eeeeee;
	}
	.jkje input{
		border:none;
		outline:none;
		text-align: right;
	}
	.Rectangle{
		height: 10px;
		background: #f6f6f6;
	}
	.user{
		padding: 24px 18px 0 18px;
		background: #fff;
	}
	.portrait{
		width: 48px;
		height: 48px;
		vertical-align: middle;
	}
	.Lenders{
		font-size: 15px;
		color: #333;
	}
	.title{
		font-size: 13px;
		color: #333;
		height: 50px;
		line-height: 50px;
	}
	.userlist{
		display: flex;
		justify-content: space-between;
		font-size: 13px;
		margin-bottom: 10px;
	}
	.user-left{
		color: #666;
	}
	.user-right{
		color: #333;
	}
	.but{
		margin-top: 30px;
		text-align: center;
		width: 80%;
		margin: 0 auto;

	}
	.button{
		width: 100%;
	}
	.blue{
		color: #108ee9;
	}
	.bottom{
		background: #f6f6f6;
		padding-top: 127px;
	}
	.footer{
		margin-top: 18px;
		color: #666;
		font-size: 12px;
	}
	.footer p{
		margin-bottom: 5px;
	}
	.copy{
		margin:0;
		height: 25px;
	}
	.state54{
		color: #54a771;
	}
	.stateff{
		color: #ff7d07;
	}
	.state99{
		color: #999999;
	}
</style>
