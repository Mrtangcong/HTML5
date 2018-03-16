import Vue from 'vue';   
import Toast from './toast.vue';     //引入组件  
let ToastConstructor  = Vue.extend(Toast) // 返回一个“扩展实例构造器”  
  
let myToast = (text,duration,func)=>{  
  
    if(typeof(text)=="function"){
        return
    }
    let toastDom = new ToastConstructor({  
        el:document.createElement('div')    //将toast组件挂载到新创建的div上  
    })  
    document.body.appendChild( toastDom.$el )   //把toast组件的dom添加到body里  
  
    toastDom.text = text;
    if(duration==undefined||duration=="undefined"){
    	toastDom.duration= 1500
    }else{
     	toastDom.duration= duration;  
    }
  
    // 在指定 duration 之后让 toast消失  
    setTimeout(()=>{  
        toastDom.isShow = false;
        if(func!=undefined||func!="undefined"){
          func()
        }else{

        }
    }, toastDom.duration);  
}  
export default myToast;