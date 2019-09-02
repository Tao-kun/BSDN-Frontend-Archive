<template>
	<div id="main">

    <div class="head">

      <zan></zan>

	<div id="searchblank">
		<div class="container">
                <span class="searchresult" ><a>热门文章</a>·<a>相似文章</a>·<a>最新发布</a>·<a>最新评论</a> | </span>
    <el-dropdown>
  <span class="el-dropdown-link">
    默认排序<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>按照作者姓名升序</el-dropdown-item>
    <el-dropdown-item>按照发表日期降序</el-dropdown-item>
    <el-dropdown-item>按照标题升序</el-dropdown-item>
    <el-dropdown-item >评论量大到小</el-dropdown-item>
    <el-dropdown-item divided>常用：浏览量从大到小</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
                <br>
                <br>
    
            </div>
	<div><span>因政策原因，部分结果不予显示</span></div>
	</div>
      <HR width=100% SIZE=1  style="margin-top:80px;"

    </div>

		<div id="maincontentbg">
			<div id="maincontentlist">
				<div class="maincontentelement" v-for="m in userSpaceContentlist">
					<img class="contentpic" :src="m.picurl" />
					<div class="contentfont">
						<div class="contentfonttitle">
              <a href="m.readmore" style="color: black" >
                <span class="m_title">{{m.title}}
                </span>
              </a>
            </div>
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



	</div>
</template>

<script>
  import zan from "./userSpaceComponents/zan"

	export default {
	  name: 'sduserSpaceHead',
	  components: {
        zan,
	  },
	  data () {
	    return {
	        author_info:{
	            nickname:"Eddie Peng",
              avatar:"static/avatar1.png",
              blogs:13,
              fans:10,
              favor:8,
          },

	      userSpaceContentlist: [
	      	{
	      		picurl: "static/articleImg.jpg",
	      		title: "VUE教程 ",
	      		introduction: "如何使用axios",
	      		label: [
	      			"入门",
	      			"VUE",
	      			"JAVA",
	    
	      			"PHP7"
	      		],
	      		author: "Smile",
	      		time: "1天前",
	      		readers: 4370,
	      		readmore: "jump.html"
			  },
			  {
	      		picurl: "static/articleImg.jpg",
	      		title: ".NET core 项目实例 ",
	      		introduction: "项目实例",
	      		label: [
	      			"中级",
	      			"C#",
	      			".NET core",
	      			"Ubuntu",
	      			"PHP7"
	      		],
	      		author: "CaiXuKun",
	      		time: "3周前",
	      		readers: 2333,
	      		readmore: "jump.html"
	      	},
	      	{
	      		picurl: "static/articleImg.jpg",
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

<style scoped>
  .m_title:hover{
    color:#e69800;
  }

  .author_name{
    font-weight: bold;
    font-size: 20px;
  }

  .more_info{
    font-size: 14px;
  }

  .head{
    text-align: center;
  }


  .head >*{
    margin-bottom: 1%;
  }

  .main_avatar{
    width:90px;
    height:90px;
    border-radius: 50%;
  }

.searchresult{
	color:#909399;
}

	#maincontentbg{
		width: 100%;
		padding-top:10px;
		margin-bottom: 100px;
	}

	#maincontentlist{
		margin: 0 auto;
		width: 60%;
	}

	.maincontentelement:after{
		content: "";
		display: block;
		clear: both;
	}

	.maincontentelement{
		width: 100%;
		margin: 20px 0;
	}

	.contentpic{
		float: left;
		width: 30%;
		height: 150px;
		border-radius: 10px;
	}

	.contentfont{
		float: left;
		margin-left: 5%;
		height: 150px;
		width: 65%;
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

	.labels{
		height: 25px;
		margin-top: 10px;
	}

	.label{
		float: left;
		background-color: #e8e8e8;
		margin-top: 1%;
		margin-right: 1%;
		padding: 2px 5px;
		border-radius:5px;
		height: 15px;
	}

	.labelicon{
		float: left;
	}

	.labelfont{
		float: left;
		font-size: 10px;
		line-height: 16px;
		height: 16px;
		margin-left: 3px;
	}

	.contentinfo:after{
		content: "";
		display: block;
		clear: both;
	}

	.contentinfo{
		color: #95a5a6;
		margin-top: 20px;
		margin-left: 5px;
		height: 30px;
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
		float: right;
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
