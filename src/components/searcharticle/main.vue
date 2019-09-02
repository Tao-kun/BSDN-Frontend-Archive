<template>
	<div id="main">

    <div class="head">
      <!-- <img class="main_avatar" :src="author_info.avatarUrl" alt="">

      <div class="author_name">{{author_info.nickname}}</div>

      <zan v-if="user.login&&this.$store.state.id!=this.author_info.userId" :liked=isliked @favor="favor" @unfavor="unfavor"></zan> -->

      <!-- <div class="more_info">
          <el-col :span="2" offset="9">
						<a>
            <div class="blog_number" @click="articleClick">
              {{author_info.articleCount}}
            </div>
						</a>
            <div class="char_font">
              已发文章数
            </div>
          </el-col >

          <div style="float:left;width: 2px;height: 45px; background: #efefef;"></div>

          <el-col :span="2">
						<a>
            <div class="fans_num" @click="fansClick">
              {{author_info.userFollowerCount}}
            </div>
						</a>
            <div class="char_font">
              粉丝数
            </div>
          </el-col>

          <div style="float:left;width: 2px;height: 45px; background: #f1f1f1;"></div>

          <el-col :span="2">
						<a>
            <div class="char_num" @click="followClick">
              {{author_info.userFollowingCount}}
            </div>
						</a>
            <div class="num_font">
              关注用户
            </div>
          </el-col>

      </div> -->
			<div id="searchblank">
			<div class="container">
                <span class="searchresult" ><a>热门文章</a>·<a>相似文章</a>·<a>最新发布</a>·<a>最新评论</a> | </span>
    <el-dropdown @command="search">
  <span class="el-dropdown-link">
    默认排序<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="1">按照作者id升序</el-dropdown-item>
    <el-dropdown-item command="4">按照发表日期降序</el-dropdown-item>
    <el-dropdown-item command="5">按照标题升序</el-dropdown-item>
    <el-dropdown-item command="10">评论量大到小</el-dropdown-item>
    <!-- <el-dropdown-item divided>常用：浏览量从大到小</el-dropdown-item> -->
  </el-dropdown-menu>
</el-dropdown>
    
            </div>
			</div>
      <HR width=0% SIZE=0  style="margin-top:80px;"/>

    </div>

		<div id="maincontentbg">
			<div id="maincontentlist">
				<article-scroll-page :stype="2" :overload="overload"></article-scroll-page>
				<!-- <div class="maincontentelement" v-for="m in userSpaceContentlist">
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
				</div> -->
			</div>
		</div>



	</div>
</template>

<script>
  import zan from "./zan"
	import {getUserById,favor,unfavor,checkfavor} from '@/api/login'
	import ArticleScrollPage from '@/views/common/ArticleScrollPage'
	import {getToken} from '@/request/token'
	export default {
		name: 'searcharticleMain',
		created() {
      this.init()
    },
    watch: {
      '$route': 'init'
		},
		computed: {
            user() {
                let login = this.$store.state.account.length != 0
                let avatar = this.$store.state.avatar
                return {
                login, avatar
                }
            },
        },
	  data () {
	    return {
				overload:{},
	      userSpaceContentlist: [
	      
	      ],
	      homeurl: "jump.html",
	      githuburl: "jump.html",
	      twitterurl: "jump.html",
	    }
		},
		methods: {
			init(){
				this.overload={
					sid:8,
					keyword:this.$route.params.content
				}
			},
			search(sid){
				this.overload={
					sid:sid,
					keyword:this.$route.params.content
				}
			}
		},
		components: {
			ArticleScrollPage,
			zan
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
	.searchresult{
	color:#909399;
	}
	.el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
