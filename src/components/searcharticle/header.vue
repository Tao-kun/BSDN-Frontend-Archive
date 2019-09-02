<template>
	<div id="myHeader">
		<a :href="indexUrl"><div id="headerLeftFont">BSDN</div></a>
		<div v-for="he in headerNavContent" style="margin-top:13px;float:left;height:25px;margin-right:2%;"><a :href="he.jumpTo"><img :src="he.picurl" style="width:25px;float:left;"/><div style="line-height:25px;float:left;margin-left:2px;color:#ea6f5a;">{{he.text}}</div></a></div>
		<form :action="searchPageUrl" id="headerSearchForm">
			<input placeholder="搜索" id="headerSearch"/>
			<a><img src="../../assets/serch.png" style="float:left;width:20px;margin-top: 7px;margin-left: 5%;" @click="searchSubmit"/></a>
		</form>
		
		
		<a :href="writeArticleUrl"><div id="writeArticle"><img src="../../assets/pen.png" style="float:left;width:20px;margin-top:7px;margin-left: 7px;"/><div>写文章</div></div></a>
		<a :href="registUrl"><div style="float:right;border:1px #ea6f5a solid;width:80px;height:35px;border-radius:20px;line-height:30px;text-align:center;color:#ea6f5a;margin-top:7px;margin-left:10px;">注册</div></a>
		<a :href="loginUrl"><div style="float:right;border:1px #969696 solid;width:80px;height:35px;border-radius:20px;line-height:30px;text-align:center;color:#969696;margin-top:7px;">登录</div></a>
	</div>
</template>

<script>
export default {
  name: 'myHeader',
  data () {
	return {
	  headerNavContent:[
		  {picurl:"static/nav.png", text:"首页", jumpTo:"/"},
		  {picurl:"static/download.png", text:"下载App", jumpTo:"/"}
	  ],
	  indexUrl:"/",
	  searchPageUrl:"/",
	  writeArticleUrl:"/",
	  registUrl:"/",
	  loginUrl:"/",
	}
  },
  methods:{
	  searchSubmit(){
		  $("#headerSearchForm").submit()
	  }
  },
  components:{
	  
  }
}
</script>

<style scoped>
	#myHeader:after{
		content: "";
		display: block;
		clear: both;		
	}
	
	#myHeader{
		height: 50px;
		border-bottom: gainsboro 1px solid;
		background-color: white;
		position: fixed;
		width: 100%;
		/* margin-top: -50px; */
	}
	
	#headerLeftFont{
		height: 100%;
		line-height: 50px;
		width: 10%;
		text-align: center;
		font-size: 25px;
		font-weight: bold;
		color: #ea6f5a;
		float: left;
		margin-right: 8%;
	}
	
	#headerIndex{
		color: #ea6f5a;
		float: left;
		border: black 1px solid;
	}
	
	#headerSearchForm{
		background-color: #eee;
		width: 10%;
		height: 35px;
		margin-top: 10px;
		border-radius: 20px;
		float: left;
	}
	
	#headerSearch{
		background-color: #eee;
		border: none;
		margin-top: 8px;
		margin-left: 10%;
		width: 60%;
		color: #c48989;
		float: left;
	}
	
	#writeArticle{
		float:right;
		border:1px #969696 solid;
		width:90px;
		height:35px;
		border-radius:20px;
		line-height:30px;
		text-align:center;
		color:white;
		margin-top:7px;
		margin-left:10px;
		background-color:#ec6149;
		margin-right: 40px;
	}
</style>
