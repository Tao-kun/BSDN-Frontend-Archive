<template>
	<div id="main">

    <div class="head">
      <img class="main_avatar" :src="author_info.avatarUrl" alt="">

      <div class="author_name">{{author_info.nickname}}</div>

      <zan v-if="user.login&&this.$store.state.id!=this.author_info.userId" :liked=isliked @favor="favor" @unfavor="unfavor"></zan>

      <div class="more_info">
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

      </div>

      <HR width=0% SIZE=0  style="margin-top:80px;"/>

    </div>

		<div id="maincontentbg">
			<div id="maincontentlist">
				<article-scroll-page :stype="1" :overload="overload"></article-scroll-page>
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
		name: 'userSpaceHead',
		created() {
      this.getUser()
    },
    watch: {
      '$route': 'getUser'
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
	        author_info:{
							userId:0,
	            nickname:"加载中...",
              avatarUrl:"static/avatar1.png",
              articleCount:NaN,
              userFollowerCount:NaN,
              userFollowingCount:NaN,
          },
				isliked:false,
				overload:{},
	      userSpaceContentlist: [
	      
	      ],
	      homeurl: "jump.html",
	      githuburl: "jump.html",
	      twitterurl: "jump.html",
	    }
		},
		methods: {
				articleClick(){
					this.$router.push('/userspace/'+this.author_info.userId)
				},
				fansClick(){
					this.$router.push('/userspace/fans/'+this.author_info.userId)
				},
				followClick(){
					this.$router.push('/userspace/favors/'+this.author_info.userId)
				},
				getUser() {
				let that = this
				// alert(that.$route.params.id)
				// alert(that.$route.params.id)
        getUserById(that.$route.params.id).then(data => {
          // alert("ok");
          Object.assign(that.author_info, data.data.data)
					// alert(JSON.stringify(data.data.data.tagInfos))
					if (!this.author_info.avatarUrl || typeof(this.author_info.avatarUrl)=="undefined") 
					{ 
					this.author_info.avatarUrl="static/avatar1.png"
					}　
							checkfavor(that.$route.params.id,getToken()).then(data => {
							// Object.assign(that.author_info, data.data.data)
							this.isliked=data.data.isFollowing
							// const id=that.$route.params.id
							// this.overloadid=that.$route.params.id
							this.overload={
								id:that.$route.params.id
							}
							// alert("ok")
							// alert(JSON.stringify(overload))
						}).catch(error => {
							// alert("bad");
							if (error !== 'error') {
								that.$message({type: 'error', message: '关注状态加载失败', showClose: true})
							}
						})
				
					// alert(this.avatarUrl)
        }).catch(error => {
          // alert("bad");
          if (error !== 'error') {
            that.$message({type: 'error', message: '用户加载失败', showClose: true})
          }
        })
			},
			favor(){
				let that = this
        // alert(that.$route.params.id)
        favor(that.$route.params.id,getToken()).then(data => {
          // alert("ok");
          // Object.assign(that.author_info, data.data.data)
          // alert(JSON.stringify(data.data.data.tagInfos))
					that.isliked=true;
					that.author_info.userFollowerCount+=1;
        }).catch(error => {
          // alert("bad");
          if (error !== 'error') {
            that.$message({type: 'error', message: '关注失败', showClose: true})
          }
        })
			},
			unfavor(){
				let that = this
        // alert(that.$route.params.id)
        unfavor(that.$route.params.id,getToken()).then(data => {
          // alert("ok");
          // Object.assign(that.author_info, data.data.data)
					// alert(JSON.stringify(data.data.data.tagInfos))
					that.isliked=false;
					that.author_info.userFollowerCount-=1;
        }).catch(error => {
          // alert("bad");
          if (error !== 'error') {
            that.$message({type: 'error', message: '取消关注失败', showClose: true})
          }
        })
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
</style>
