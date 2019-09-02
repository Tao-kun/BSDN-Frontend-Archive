<!--用户所有个人信息的大组件-->
<template>
  <div class="head">
    <img class="main_avatar" :src="author_info.avatarUrl" alt="">

    <div class="author_name">{{author_info.nickname}}</div>

    <zan v-if="user.login&&this.$store.state.id!=this.author_info.userId" :liked=isliked @favor="favor" @unfavor="unfavor"></zan>

    <div class="more_info">
      <el-col :span="2" offset="9">
        
        <a>

        <div class="blog_number" @click="fansArticleClick">
          {{author_info.articleCount}}
        </div>

        </a>
        
        <div class="char_font" >
          已发文章数
        </div>
        
      </el-col >

      <div style="float:left;width: 2px;height: 45px; background: #efefef;"></div>

      <el-col :span="2">
        <a>
        <div class="fans_num" @click="fansFansClick">
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
        <div class="char_num" @click="fansFollowClick">
          {{author_info.userFollowingCount}}
        </div>
        </a>
        <div class="num_font">
          关注用户
        </div>
      </el-col>

    </div>

  </div>
</template>

<script>
  import zan from "./zan.vue"
  import {getUserById,favor,unfavor,checkfavor} from '@/api/login'
  import {getToken} from '@/request/token'
    export default {
        name: "author_info",
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
        data(){
            return{
                // author_info:{
                //     nickname:"Eddie Peng",
                //     avatar:"static/avatar1.png",
                //     blogs:13,
                //     fans:10,
                //     favor:8,
                // },
                author_info:{
                    userId:0,
                    nickname:"加载中...",
                    avatarUrl:"static/avatar1.png",
                    articleCount:NaN,
                    userFollowerCount:NaN,
                    userFollowingCount:NaN,
                },
                isliked:false
            }
        },
        methods: {
            fansArticleClick(){
              
              this.$router.push('/userspace/'+this.author_info.userId)
            },
            fansFansClick(){
              this.$router.push('/userspace/fans/'+this.author_info.userId)
            },
            fansFollowClick(){
              this.$router.push('/userspace/favors/'+this.author_info.userId)
            },
            getUser() {
            let that = this
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
                  // alert("ok");
                  // Object.assign(that.author_info, data.data.data)
                  this.isliked=data.data.isFollowing
                  this.overload={
                    id:that.$route.params.id
                  }
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
              this.$emit('getFans')
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
              this.$emit('getFans')
            }).catch(error => {
              // alert("bad");
              if (error !== 'error') {
                that.$message({type: 'error', message: '取消关注失败', showClose: true})
              }
            })
          }
        },
        components:{
            zan,
        }
    }
</script>

<style scoped>
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
</style>
