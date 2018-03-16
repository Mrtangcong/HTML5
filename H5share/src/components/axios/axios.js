import Vue from 'vue';   
import axios from 'axios';
import toast from '@/components/toast/index.js'
let ajax = function(url,callback,k1,v1,k2,v2,k3,v3,k4,v4,k5,v5,k6,v6,k7,v7,k8,v8){

	if(typeof(url)=="function"){
        return
    }
	let postData = {};
    postData[k1] = v1;
   	postData[k2] = v2;
   	postData[k3] = v3;
   	postData[k4] = v4;
   	postData[k5] = v5;
   	postData[k6] = v6;
   	postData[k7] = v7;
   	postData[k8] = v8;
	axios({
    	method:'POST',
       	baseURL:('http://192.168.11.201:8080/'+url),
       	headers:{"iou-token":window.localStorage.getItem('token'),"iou-uid":window.localStorage.getItem('id'),"iou-registerwaytype":"4","iou-registertype":"1","iou-devicetype":"H5","iou-appversion":"H5","iou-ostype":"H5","iou-deviceid":"H5","iou-systemversion":"H5",'Content-Type': 'application/json'},
       	data:postData
    })
	.then(function (response) {
	    callback(response);
	    console.log(response)
	})
	.catch( (error)=> {
  		console.log(error);
  		if(error.response.status==401){
  			toast('请重新登录',2000,()=>{
  				this.$router.push('/')
  			})
  		}
	});
	
	
}  
export default ajax  //导出