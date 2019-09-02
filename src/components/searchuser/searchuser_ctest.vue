<!--使用组件化后的粉丝页面-->
<template>
  <div>
    <!-- <div>
      <author_info @getFans="getFans"></author_info>
    </div> -->
    <div id="searchblank">
			<div class="container">
                <span class="searchresult" ><a>热门用户</a>·<a>相似用户</a>·<a>最新作者</a>·<a>推荐作者</a> | </span>
    <el-dropdown @command="search">
  <span class="el-dropdown-link">
    默认排序<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="1">按照用户id升序</el-dropdown-item>
    <el-dropdown-item command="4">按照注册日期降序</el-dropdown-item>
    <el-dropdown-item command="5">按照昵称升序</el-dropdown-item>
    <!-- <el-dropdown-item command="10">评论量大到小</el-dropdown-item> -->
    <!-- <el-dropdown-item divided>常用：浏览量从大到小</el-dropdown-item> -->
  </el-dropdown-menu>
</el-dropdown>
    
            </div>
			</div>
   

    <div class="favors_cycle">

      <!-- <div class="favors_intro">
        <div class="favors_text">
          TA关注的用户有
        </div>
      </div> -->

      <!-- <fans_component class="fanscomponent platebody" v-for="fan in fans" :id="fan.userId" :ava="fan.ava"
        :name="fan.nickName" :blogs="fan.blogs" :fans="fan.fans" :favors="fan.favors"
      :key="fan.userId"> -->
      <favors_component class="favorscomponent platebody" v-for="favor in favors" :id="favor.userId"
      :key="favor.userId">
      </favors_component>

    </div>

  </div>
</template>

<script>
    import author_info from "./author_info";
    import favors_component from "./favors_component";
    import {getUsersByKeyword} from '@/api/login'
    export default {
        name: "favors_ctest",
        created() {
          this.init()
        },
        watch: {
          '$route': 'init'
        },
        data () {
            return {
                author_info:{
                    nickname:"加载中...",
                    avatar:"static/avatar1.png",
                    blogs:NaN,
                    fans:NaN,
                    favor:NaN,
                },
                // fans:[],
                favors:[
                    
                ]
            }
        },
        components:{
            author_info,
            favors_component,
        },
        methods: {
          init(){
            this.search(5)
          },
          search(sid){
              let that = this
              // alert(that.$route.params.id)
              getUsersByKeyword(sid,that.$route.params.content).then(data => {
                // alert("ok");
                // Object.assign(that.fans, data.data.data)
                // alert(JSON.stringify(data))
                this.favors=data
                // alert(JSON.stringify(data.data.data.tagInfos))
                    
              
                // alert(this.avatarUrl)
              }).catch(error => {
                // alert("bad");
                if (error !== 'error') {
                  that.$message({type: 'error', message: '没找到搜索结果~~~', showClose: true})
                }
              })
          },
          getFans(){},
        }

    }
</script>

<style scoped>
  el-col{
    background:#fff;
  }

  .favorscomponent{
    /*border: 1px solid ;*/
    margin:100px;
  }

  .favors_text{
    margin-bottom: 3%;
  }

  .favors_intro{
    text-align: center;
    border-bottom: solid 1px #efefef;
    margin-left:20%;
    margin-right: 20%;
  }

  .favors_cycle{
    /*text-align: center;*/
    margin:2% auto 0;
    width:60%;
  }

  .platebody{
    border-bottom: solid 1px #f1f1f1;
    height:120px;
    align-items: center;
    display: flex;
    margin:0 auto;
    width:100%;
  }
  #searchblank{
    text-align: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    /* color: #409EFF; */
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
