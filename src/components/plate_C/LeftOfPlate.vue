<template>
  <div class="left">
    <div class="platetittle">
      <img src="static/Java.jpg" alt="java logo" class="plateimg"/>
      <div class="plate_welcome">
        {{welcome_speech}}
      </div>
    </div>

    <div class="plate_cycle">
      <div class="platebody" v-for="article in contentlist">
        <el-col :span="6">
          <a :href="article.href">
            <img :src="article.img" alt="" class="article_img">
          </a>
        </el-col>

        <el-col :span="18">
          <a href="#"  class="article_tittle" >
                {{article.tittle}}
          </a>
          <div class="article_info">

            <div class="article_intros">
              {{article.intros}}
            </div>
            <div class="other_info">
              <span>{{article.author}}</span> ·
              <span>{{article.time}}</span> ·
              <span>阅读量{{article.read}}</span>
            </div>
          </div>
        </el-col>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "LeftOfPlate",
        data:function(){
            return{
                contentlist:[
                    {
                        img:"static/a2.jpg",
                        author:"业级Web",
                        read:19,
                        tittle:"IPv6的黑洞路由何去何从",
                        label:[
                            'java',
                        ],
                        time:"2019-08-23",
                        intros:"IPv4的黑洞路由自有用处，本文不谈。IPv6地址空间太TM大了" ,
                        href:"#/view/45"
                    },
                    {
                        img:"static/a1.jpeg",
                        author:"终于长头发了",
                        read:37,
                        tittle:"线上 GC 告警，我菊花一紧，裤子都没提！！",
                        label:[
                            'java',
                        ],
                        time:"2019-08-23",
                        intros:"阅读本文约需要5分钟就在上周，晚上下班后在家上厕所，突然微信企业邮箱收到线上GC告警了",
                        href:"#/view/48"
                    },

                ],
                welcome_speech:"Keep coding in C!",
                };
            }

    }
</script>

<style scoped>
  .plate_cycle{
    line-height: 1.5;
  }

  .other_info{
    font-size:13px;
    color:#969696;
    margin :1% 0 0 0;
  }


  .left{
    margin-right:15%;
  }

  .platebody{
    border-bottom: solid 1px #f1f1f1;
    height:136px;
    align-items: center;
    display: flex;
    margin-left:15%;
    margin-right:5%;
  }

  .plate_cycle{
    margin-bottom:10%;
  }



  .article_img{
    height: 100px;
    width:125px;
    vertical-align: middle;
    border-radius: 5%;
  }

  .article_intros{
    font-size:13px;
    color:#969696;
    margin:1% 0 1% 0;
  }

  .article_tittle{
    font-weight:  bold;
    font-size: 18px;
    color: black;
    vertical-align: middle;
    margin:0 0 1% 0;
  }

  .article_tittle:hover{
    color:#e69800;
  }

  .platetittle{
    background-color: #fff;
    height:200px;
    border-bottom: 1px solid #f1f1f1;
    margin-left:15%;
    margin-right:5%;
    display:flex;
  }

  .plateimg{
    margin :auto 0;
    border-radius: 5%;
  }

  .plate_welcome{
    font-weight: bold;
    font-size: 45px;
    margin :auto 0 auto 5%;
  }




</style>
