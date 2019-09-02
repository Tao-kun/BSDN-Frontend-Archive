<template>
  <div>
    <div class="head">
      <img class="main_avatar" :src="author_info.avatar" alt="">

      <div class="author_name">{{author_info.nickname}}</div>

      <zan></zan>

      <div class="more_info">
        <el-col :span="2" offset="9">
          <a>
          <div class="blog_number" @click="fansArticleClick">
            {{author_info.blogs}}
          </div>
          </a>
          <div class="char_font">
            已发文章数
          </div>
        </el-col >

        <div style="float:left;width: 2px;height: 45px; background: #efefef;"></div>

        <el-col :span="2">
          <a>
          <div class="fans_num" @click="fansFansClick">
            {{author_info.fans}}
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
            {{author_info.favor}}
          </div>
          </a>
          <div class="num_font">
            关注用户
          </div>
        </el-col>

      </div>

    </div>

    <br><br><br>

    <div class="fans_cycle">
      <div class="fans_intro">
        <div class="fans_text">
          关注TA的用户有
        </div>
      </div>
      <div class="platebody" v-for="item in fans">
        <el-col :span="3">
          <a :href="item.ava">
            <img :src="item.ava" alt="" class="user_img">
          </a>
        </el-col>

        <el-col :span="11" >
          <div class="user_info" >
            <a href="#"  class="user_tittle" >
              {{item.name}}
            </a>
            <div class="other_info">
              <el-col :span="4">
                <span>关注 {{item.fans}}</span>
              </el-col>

              <div style="float:left;width: 1.5px;height: 20px; background: #a4a4a4;"></div>

              <el-col :span="4" style="margin-left:2%">
                <span>粉丝数 {{item.favors}}</span>
              </el-col>

              <div style="float:left;width: 1px;height: 20px; background: #a4a4a4;"></div>

              <el-col :span="5" style="margin-left:2%">
                <span>文章数 {{item.blogs}}</span>
              </el-col>
            </div>
          </div>
        </el-col>

        <el-col :span="4" offset="6">
          <zan></zan>
        </el-col>


      </div>

    </div>

  </div>
</template>

<script>
  import zan from "./zan"
  import author_info from "./author_info";

    export default {
        name: "fans",
        data () {
            return {
                author_info:{
                    nickname:"Eddie Peng",
                    avatar:"static/avatar1.png",
                    blogs:13,
                    fans:10,
                    favor:8,
                },
                fans:[
                    {
                        name:"第五次",
                        ava:"static/user/my_user1.png",
                        fans:"100",
                        favors:"3",
                        blogs:"10",
                    },
                    {
                        name:"第如果从",
                        ava:"static/user/my_user2.png",
                        fans:"34",
                        favors:"3",
                        blogs:"12",
                    },
                    {
                        name:"撤入公会",
                        ava:"static/user/my_user3.png",
                        fans:"61",
                        favors:"43",
                        blogs:"122",
                    },
                    {
                        name:"自动分割",
                        ava:"static/user/my_user4.png",
                        fans:"11",
                        favors:"30",
                        blogs:"32",
                    }
                ]
            }
        },
        components:{
            zan,
            author_info,
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
  el-col{
    background:#fff;
  }

  .fans_text{
    margin-bottom: 3%;
  }

  .user_info{
    margin-left:5%;
  }

  .fans_intro{
    text-align: center;
    border-bottom: solid 1px #efefef;
    margin-left:20%;
    margin-right: 20%;
  }

  .fans_cycle{
    /*text-align: center;*/
    margin:2% auto 0;
    width:60%;
  }

  .other_info{
    font-size:13px;
    color:#969696;
    margin :1% 0 0 0;
  }

  .platebody{
    border-bottom: solid 1px #f1f1f1;
    height:120px;
    align-items: center;
    display: flex;
    margin:0 auto;
    width:100%;
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
