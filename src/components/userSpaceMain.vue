<template>
	<div id="main">
		<div id="maintopfont">yzlyzl</div>
		<div id="maincontentbg">
			<div id="maincontentlist">
				<div class="maincontentelement" v-for="m in userSpaceContentlist">
					<img class="contentpic" :src="m.picurl" />
					<div class="contentfont">
						<div class="contentfonttitle">{{m.title}}</div>
						<div class="contentfontintroduction">{{m.introduction}}</div>
						<div class="labels">
							<div class="label" v-for="l in m.label">
								<img src="@/assets/labelicon.png" class="labelicon" />
								<div class="labelfont">{{l}}</div>
							</div>
						</div>
						<div class="contentinfo">
							<div class="contentauthor">
								<img src="@/assets/person.png" class="contentinfoicon" />
								<div class="contenticonfont">{{m.author}}</div>
							</div>
							<div class="contenttime">
								<img src="@/assets/time.png" class="contentinfoicon" />
								<div class="contenticonfont">{{m.time}}</div>
							</div>
							<div class="contentreaders">
								<img src="@/assets/eye.png" class="contentinfoicon" />
								<div class="contenticonfont">{{m.readers}}</div>
							</div>
							<a class="contentreadmore" :href="m.readmore">
								Read More >
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<turnPage></turnPage>
		
		
	</div>
</template>

<script>
	import turnPage from "../components/turnPage.vue"
	export default {
	  name: 'userSpaceHead',
	  components: {
		  turnPage
	  },
	  data () {
	    return {
	      userSpaceContentlist: [
	      	{
	      		picurl: "static/navimg.png",
	      		title: "Ubuntu 16.04 环境安装部署 ",
	      		introduction: "项目部署文档",
	      		label: [
	      			"入门",
	      			"Linux",
	      			"Laravel",
	      			"Ubuntu",
	      			"PHP7"
	      		],
	      		author: "Jiajian",
	      		time: "10个月前",
	      		readers: 4370,
	      		readmore: "jump.html"
	      	}, 
	      	{
	      		picurl: "static/navimg.png",
	      		title: "Ubuntu 16.04 环境安装部署 ",
	      		introduction: "项目部署文档",
	      		label: [
	      			"入门",
	      			"Linux",
	      			"Laravel",
	      			"Ubuntu",
	      			"PHP7"
	      		],
	      		author: "Jiajian",
	      		time: "10个月前",
	      		readers: 4370,
	      		readmore: "jump.html",				
	      	}, 
	      ],
	      homeurl: "jump.html",
	      githuburl: "jump.html",
	      twitterurl: "jump.html",
	      curpage: 1,
	      endpage: 3,
	    }
	  }
	}
	
	$(function(){
		//给左右翻页绑定
		$("#turnleft").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.style.color = "#6289ad"
			}
			this.onmouseleave = function(){
				that.style.color = "white"
			}
		})
		$("#turnright").each(function(index){
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
	#maintopfont{
		height: 200px;
		font-size: 50px;
		background-color: rgb(156, 174, 191);
		color: white;
		width: 100%;
		text-align: center;
		line-height: 200px;
	}
	
	#maincontentbg{
		width: 100%;
		background-color: #f9f9fb;
		padding-top:100px;
		padding-left: 20%;
	}
	
	#maincontentlist{
		width: 60%;
	}
	
	.maincontentelement:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.maincontentelement{
		padding: 0 0 30px;
		border-bottom: 1px lightgrey solid;
	}
	
	.contentpic{
		float: left;
		width: 260px;
		height: 146px;
		border-radius: 10px;
	}
	
	.contentfont{
		float: left;
		margin-left: 10px;
	}
	
	.contentfonttitle{
		font-size: 25px;
		line-height: 25px;
		margin-top: 5px;
	}
	
	.contentfontintroduction{
		color: #7f8c8d;
		font-size: 20px;
		margin-top: 10px;
	}
	
	.labels:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.label{
		float: left;
		background-color: #e8e8e8;
		margin: 20px 5px 10px;
		padding: 2px 5px;
		border-radius:5px;
	}
	
	.labelicon{
		float: left;
	}
	
	.labelfont{
		float: left;
		font-size: 10px;
		line-height: 16px;
		height: 16px;
		margin-left: 5px;
	}
	
	.contentinfo:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.contentinfo{
		color: #95a5a6;
		margin-top: 5px;
		margin-left: 5px;
	}
	
	.contentinfoicon{
		float: left;
	}
	
	.contentauthor{
		margin-right: 15px;
		float: left;
	}
	
	.contenttime{
		margin-right: 15px;
		float: left;
	}
	
	.contentreaders{
		float: left;
	}
	
	.contentreadmore{
		float: left;
		margin-left: 300px;
		font-size: 15px;
		line-height: 15px;
		color: #95a5a6;
	}
	
	.contenticonfont{
		float: left;
		line-height: 15px;
		font-size: 15px;
		margin-left: 5px;
	}
	
	#main{
		background-color: #f9f9fb;
		padding-bottom: 50px;
	}
</style>
