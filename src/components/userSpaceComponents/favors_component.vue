<!--把每一个favors组件化-->
<template>
  <div class="clear item">
    <el-col :span="3">
      <a :href="ava">
        <img :src="ava" alt="" class="user_img" style="margin:0 15%">
      </a>
    </el-col>

    <el-col :span="11" >
      <div class="user_info" >
        <a href="#"  class="user_tittle" @click="gohishome">
          {{name}}
        </a>
        <div class="other_info" >
          <el-col :span="4">
            <span>关注 {{favors}}</span>
          </el-col>

          <div style="float:left;width: 1.5px;height: 20px; background: #a4a4a4;"></div>

          <el-col :span="4" style="margin-left:2%">
            <span >粉丝 {{fans}}</span>
          </el-col>

          <div style="float:left;width: 1.2px;height: 20px; background: #a4a4a4;"></div>

          <el-col :span="10" style="margin-left:2%">
            <span>文章 {{blogs}}</span>
          </el-col>
        </div>
      </div>
    </el-col>

    <el-col :span="4" offset="6">
    <div style="float:left">
      <zan v-if="user.login&&this.$store.state.id!=this.id" :liked=isliked @favor="favor" @unfavor="unfavor"></zan>
    </div>
    </el-col>
  </div>
</template>

<script>
  import zan from "./zan"
  import {getUserById,favor,unfavor,checkfavor} from '@/api/login'
  import {getToken} from '@/request/token'
    export default {
        name: "favors_component",
        created() {
          this.getUser()
        },
        watch: {
          '$route': 'getUser'
        },
        props: {
            id:{
              type:Number,
              default:1,
            },
            // name: {
            //   type: String,
            //   default: 'NAN'
            // },
            // ava: {
            //   type: String,
            //   default: 'static/articleImg.jpg'
            // },
            // fans: {
            //   type: Number,
            //   default: 0
            // },
            // favors: {
            //   type: Number,
            //   default: 0
            // },
            // blogs: {
            //   type: Number,
            //   default: 0
            // },
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
                name:'加载中...',
                ava:'static/articleImg.jpg',
                fans:NaN,
                favors:NaN,
                blogs:NaN,
                isliked:false
            }
        },
        components:{
            zan,
        },
        // props:['name','ava','fans','favors','blogs'],
        methods: {
        gohishome(){
          this.$router.push('/userspace/'+this.id)
        },
				getUser() {
				let that = this
        // alert(that.$route.params.id)
        getUserById(that.id).then(data => {
          // alert("ok");
          // Object.assign(that.author_info, data.data.data)
          this.name=data.data.data.nickname
          this.ava=data.data.data.avatarUrl
          this.fans=data.data.data.userFollowerCount
          this.favors=data.data.data.userFollowingCount
          this.blogs=data.data.data.articleCount
					// alert(JSON.stringify(data.data.data.tagInfos))
					if (!this.ava || typeof(this.ava)=="undefined") 
					{ 
					this.ava="static/avatar1.png"
					}　
							checkfavor(that.id,getToken()).then(data => {
							// alert("ok");
							// Object.assign(that.author_info, data.data.data)
              this.isliked=data.data.isFollowing
              // alert(this.name+" "+this.isliked)
							// this.overload={
							// 	id:that.$route.params.id
							// }
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

        // checkfavor(that.id,getToken()).then(data => {
				// 			// alert("ok");
				// 			// Object.assign(that.author_info, data.data.data)
				// 			this.isliked=data.data.isFollowing
				// 			// this.overload={
				// 			// 	id:that.$route.params.id
				// 			// }
				// 		}).catch(error => {
				// 			// alert("bad");
				// 			if (error !== 'error') {
				// 				that.$message({type: 'error', message: '关注状态加载失败', showClose: true})
				// 			}
				// 		})
			},
			favor(){
				let that = this
        // alert(that.$route.params.id)
        favor(that.id,getToken()).then(data => {
          // alert("ok");
          // Object.assign(that.author_info, data.data.data)
          // alert(JSON.stringify(data.data.data.tagInfos))
          that.isliked=true;
          that.fans+=1;
					// that.author_info.userFollowerCount+=1;
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
        unfavor(that.id,getToken()).then(data => {
          // alert("ok");
          // Object.assign(that.author_info, data.data.data)
					// alert(JSON.stringify(data.data.data.tagInfos))
          that.isliked=false;
          that.fans-=1;
					// that.author_info.userFollowerCount-=1;
        }).catch(error => {
          // alert("bad");
          if (error !== 'error') {
            that.$message({type: 'error', message: '取消关注失败', showClose: true})
          }
        })
			}
		},
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

  .clear{
    clear:both;
  }

 .user_info{
    margin-left:5%;
  }


  .other_info{
    font-size:13px;
    color:#969696;
    margin :1% 0 0 0;
    display:flex;
  }

  .user_img{
    margin:0 15%;
    height: 70px;
    width:70px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .user_tittle{
    font-weight:  bold;
    font-size: 18px;
    color: black;
    vertical-align: middle;
    margin:0 0 1% 0;
  }

  .user_tittle:hover{
    color:#e69800;
  }


</style>
