<template>  
    <div class="toast"  v-if="isShow">  
        <div class="toast-div">{{ text }}</div>  
    </div>  
</template>  
  
<script>  
export default{  
    data(){  
        return {  
            text:'',  
            isShow:true,  
            duration:1500  
        }  
    }  
}  
</script>  
  
<style>  
.toast{
		display: inline-block;
		position: fixed;
		top:50%;
		font-size: 14px;
		transform: translateY(-50%);
		padding:15px;
		background: rgba(0,0,0,.9);
		color: #fff;
		border-radius: 5px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
	}
</style>  