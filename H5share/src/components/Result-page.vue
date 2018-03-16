<template>
  <div class="result">
  	<img :src="Success" class="img" style="width:60px;height:60px;">
  	<p class="layer">提交成功</p>
  	<div class="follow">
  		您可以在【米小二服务】公众号或【米小二】App中
		生成报告，生成之后会有相关工作人员通知您。
	</div>
	<img :src="QR" style="width:160px;height:160px;margin-bottom:22px;">
  <div>
    - 扫码关注“米小二服务” -
  </div>
  <div>
    <el-button round style="color:#108ee9;border:2px solid #108ee9;width:164px;margin:24px 0;" @click="dow()">下载APP</el-button>
  </div>
  <img :src="youshi" style="width:100%;display:block;,margin-bottom:30px;">
  <div class="footer">
    <div class="Extension">
      <img :src="zhongli" class="Extension-left">
      <div class="Extension-right">
        <p style="text-align:left;font-size:14px;margin-bottom:5px">中立</p>
        <p style="text-align:left;font-size:14px;">始终站在第三方撮合平台的角度，不涉及任何资金流。</p>
      </div>
    </div>
    <div class="Extension">
      <img :src="anquan" class="Extension-left">
      <div class="Extension-right">
        <p style="text-align:left;font-size:14px;margin-bottom:5px">安全</p>
        <p style="text-align:left;font-size:14px;">实名认证、信用报告、第三方支付等，确保借款安全有凭据。</p>
      </div>
    </div>
    <div class="Extension">
      <img :src="bianjie" class="Extension-left" style="width:20px;margin-right:33px;">
      <div class="Extension-right">
        <p style="text-align:left;font-size:14px;margin-bottom:5px">便捷</p>
        <p style="text-align:left;font-size:14px;">一键补借条、自动催还款，随时随地管理您的借条。</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Success from '@/assets/Success.png';
import error from '@/assets/error.png';
import QR from '@/assets/QR.png';
import youshi from '@/assets/youshi.png';
import zhongli from '@/assets/zhongli.png';
import anquan from '@/assets/anquan.png';
import bianjie from '@/assets/bianjie.png';
export default {
  name: 'page',
  data () {
    return {
    	Success:Success,
    	error:error,
    	QR:QR,
      youshi:youshi,
      zhongli:zhongli,
      anquan:anquan,
      bianjie:bianjie,
    }
  },mounted(){

  },methods:{
    dow(){
          if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
                  var str= navigator.userAgent.toLowerCase(); 
                  var ver=str.match(/cpu iphone os (.*?) like mac os/);
                        if(ver[1].replace(/_/g,".")>=11.0){
                            window.location.href ="itms-apps://itunes.apple.com/cn/app/id1344696410?mt=8&action=write-review"
                        }else{
                             window.location.href ="itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?type=Purple+Software&id=1344696410"
                        }
                      }
           else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
            window.location.herf="http://imtt.dd.qq.com/16891/DEC35C476EE98AD434ABF6EB86458568.apk?fsname=com.jf.project_1.0.0_1.apk&csr=1bbd"
          } else { //pc
            console.log('PC')
            this.toast('请在移动端打开')
          };    

  }
}
}
</script>

<style scoped>
.result{
	text-align: center;
	margin: 0 auto;
}
.img{
	margin-top: 35px;
	display: inline-block;
	margin-bottom: 17px;
}
.layer{
	font-size: 20px;
	color:#333;
	margin-bottom: 10px;

}
.follow{
	padding: 0 28px;
	margin-bottom: 30px;
}
.Extension{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.Extension-right{
  display: inline-block;
  vertical-align: middle;
}
.Extension-left{
  vertical-align: middle;
  display: inline-block;
  width: 30px;
  margin: 0 24px 0 21px;
  margin-top: 10px;
  height: 30px;
}
.footer{
   padding: 35px 24px 43px 21px;
}
</style>
