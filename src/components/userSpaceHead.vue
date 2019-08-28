<template>
	<nav id="navigator">
		<div id="navcontent">
			<a :href="navurl" id="nava">
				<img src="@/assets/navimg.png" id="navimg" />
				<!-- 后续要鼠标移入改颜色 -->
				<div :style="navfont" @mouseover="navfontmousein" @mouseout="navfontmouseout" id="navfont">PJ Blog</div>
			</a>
	
			<ul id="navlist">
				<li v-for="n in navlist" class="navElement"><a :href="n.value" style="color: white;">{{n.key}}</a></li>
			</ul>
	
			<form :action="searchurl" id="navform">
				<input placeholder="搜索" id="search">
			</form>
	
			<!-- 这一块后续要用v-if判断登没登陆，显示不同 -->					
			
			<div v-if="login" id="userinfo">
				欢迎你,{{username}}
			</div>
			
			<div v-else id="userinfo">
				<a :href="loginurl" style="color: white;" id="login">登录</a> &nbsp;&nbsp;&nbsp;
				<a :href="registurl" style="color: white;" id="regist">注册</a>
			</div>
	
			<div v-if="login" id="logout">注销</div>
		</div>
	</nav>
</template>

<script>
	export default {
	  name: 'userSpaceHead',
	  data () {
	    return {
	      navurl: "jump.html",
	      navfont: {
	      	color: "white",
	      },
	      navlist: [{
	      		key: "文章",
	      		value: "jump.html"
	      	},
	      	{
	      		key: "分享",
	      		value: "jump.html"
	      	},
	      	{
	      		key: "文档",
	      		value: "jump.html"
	      	},
	      	{
	      		key: "例子",
	      		value: "jump.html"
	      	},
	      ],
	      searchurl: "jump.html",
	      username: "孙笑川",
	      login: true,
	      loginurl: "jump.html",
	      registurl: "jump.html",
	    }
	  },
	  methods: {
	  	navfontmousein(e) {
	  		this.navfont.color = "#6289ad"
	  	},
	  	navfontmouseout(e) {
	  		this.navfont.color = "white"
	  	},
	  }
	}
	
	
	$(function(){
		//给所有nav中的a标签绑定移动变色事件
		$("ul a").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.style.color = "#6289ad"
			}
			this.onmouseleave = function(){
				that.style.color = "white"
			}
		})
		
		//给注销绑定
		$("#logout").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.style.color = "#6289ad"
			}
			this.onmouseleave = function(){
				that.style.color = "white"
			}
		})
		
		//给潜在的登录注册绑定
		$("#regist").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.style.color = "#6289ad"
				console.log(1)
			}
			this.onmouseleave = function(){
				that.style.color = "white"
			}
		})
		$("#login").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.style.color = "#6289ad"
			}
			this.onmouseleave = function(){
				that.style.color = "white"
			}
		})
	})
	
</script>




<style>
	#navigator{
		height: 300px;
		background-color: rgb(156, 174, 191);
		width: 100%;
		height: 60px;
	}
	
	#navcontent{
		margin: 0 auto;
		height: 60px;
		width: 80%;
	}
	
	#nava{
		height: 60px;
		float: left;
		text-decoration:none;
	}
	
	#navimg{
		height: 60px;
		float: left;
	}
	
	#navfont{
		height: 60px;
		line-height: 60px;
		float: left;
		font-size: 20px;
	}
	
	#navlist{
		float: left;
		height: 60px;
		line-height: 60px;
		margin-left: 20px;
	}
	
	.navElement{
		float: left;
		list-style-type: none;
		width: 60px;
		color: white;
		text-align: center;
	}
	
	#navform{
		margin-top: 18px;
		margin-left: 35%;
		width: 150px;
		float: left;
		height: 30px;
		border: 2px white solid;
		border-radius: 10px;
	}
	
	#search{
		height: 20px;
		margin-top: 4px;
		margin-left: 10px;
		width: 120px;
		font-size: 15px;
		color: white;
		background-color: rgb(156, 174, 191);
		border: none;
	}
	
	#userinfo{
		margin-left: 50px;
		margin-top: 25px;
		float: left;
		color: white;
	}
	
	#logout{
		margin-left: 20px;
		margin-top: 25px;
		float: left;
		color: white;
	}
</style>
