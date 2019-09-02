<template>
  <div class="right">
    <div class="plate_intro">
      <div class="intro_title">
        BSDN简介
      </div>

      <div class="plate_detail">
        {{plate_intro}}
      </div>
    </div>

    <div class="plate_active_title">活跃作者</div>
    <div class="plate_active" v-for="a in authors">
      <a :href="a.href" class="user_info">
        <img :src="a.img" alt="user logo" class="user_logo">
        <span class="user_name">
          {{a.name}}
        </span>
      </a>
    </div>
  </div>

</template>

<script>
    export default {
        name: "RightOfPlate",
        data:function () {
            return{
               plate_intro:"BSDN是基于.NET CORE和vue前后端分离搭建的博客交流平台，具有一般博客平台的常用功能，支持多用户在此网站进行博文分享和交流。",
               authors:[
                   {
                       img:"static/user/my_user1.png",
                       name:"读芯术",
                       href:"#",
                   },
                   {
                       img:"static/user/my_user4.png",
                       name:"运维派V",
                       href:"#",
                   },
                   {
                       img:"static/user/my_user2.png",
                       name:"Hollis在csdn",
                       href:"#",
                   },
                   {
                       img:"static/user/my_user5.png",
                       name:"华为云",
                       href:"#",
                   },
                   {
                       img:"static/user/my_user3.png",
                       name:"智洪昆妙",
                       href:"#",
                   }
               ]
            };
        }
    }
</script>

<style scoped>
  .intro_title,.plate_active_title{
    font-size: 14px;
    color:#969696;
    margin-bottom: 5%;
  }

  .plate_active_title{
    margin-top: 10%;
  }

  .user_info{
    display: flex;
  }

   .user_logo{
    margin:auto 0;
  }

  .user_name{
    margin:auto 0 auto 2%;
  }

  .user_name:hover{
    color: #e69800;
  }

  .plate_active{
    margin:3% 0;
  }

  .user_info{
    vertical-align: middle;
  }

  .plate_detail{
    font-size: 14px;
    color:black;
  }

  .plate_intro{
    height: 145px;
    border-bottom: 1px solid #f1f1f1;
  }

  .user_logo{
    border-radius: 50%;
    height: 35px;
    width:35px;
  }

  .right{
    margin-left:0%;
    margin-right: 30%;
    /*border: 1px solid #000;*/
    border-bottom: 1px solid #f1f1f1;
  }

  .user_name{
    color:black;
    font-size:13px;
  }

</style>
