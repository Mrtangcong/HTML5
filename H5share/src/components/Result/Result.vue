<template>
  <div class="hello">
  <img :src="img5">
  <img class="img6" @click="download()" :src="img6">
  <img :src="img2">
  <img :src="img3">
  <img :src="img4">
  <el-dialog
	  title="提示"
	  :visible.sync="dialogVisible"
	  width="80%"
	  >
	  <span>安卓版本暂未开放下载</span>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">我知道了</el-button>
	  </span>
  </el-dialog>
  </div>
</template>

<script>
import img2 from '@/assets/tab.png';
import img4 from '@/assets/list.png';
import img1 from '@/assets/title.png';
import img3 from '@/assets/QR code.png';
import img5 from '@/assets/lightning.png';
import img6 from '@/assets/download.png';
export default {
  name: 'result',
  data () {
    return {
      img1:img1,
      img2:img2,
      img3:img3,
      img4:img4,
      img5:img5,
      img6:img6,
      dialogVisible: false
    }
  },mounted(){

  },methods:{
  	download(){
	  
	        if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
	           	var reg = /OS \d+\_\d/g ;
	           	var version = window.navigator.userAgent.match(reg)[0].match(/\d+/g)[0] ;
	           	parseInt(version) >= 11 &&(function(){window.location.href = "itms-apps://itunes.apple.com/cn/app/id1345828371?mt=8&action=write-review"})(); 
	           	parseInt(version) < 11 &&(function(){console.log(10);window.location.href = "itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?type=Purple+Software&id=1345828371"})(); 
	               
	        }else if(navigator.userAgent.match(/android/i)){
	            window.location.herf="http://imtt.dd.qq.com/16891/DEC35C476EE98AD434ABF6EB86458568.apk?fsname=com.jf.project_1.0.0_1.apk&csr=1bbd"
	        }
	    
  	}
  }
}
</script>

<style scoped>
	html,body{
		height: 100%;
	}
	.hello{
		background: rgb(169,216,242);
	}
	.hello>img{
		width: 100%;
	}
	.hello .img6{
		width: 60%;
		margin: 0 auto;
		display: block;
		position: relative;
		top:-40px;
	}
</style>
