<!--使用组件化后的粉丝页面-->
<template>
  <div>
    <div>
      <author_info @getFans="getFans"></author_info>
    </div>

    <br><br><br>

    <div class="fans_cycle">

      <div class="fans_intro">
        <div class="fans_text">
          关注TA的用户有
        </div>
      </div>

      <!-- <fans_component class="fanscomponent platebody" v-for="fan in fans" :id="fan.userId" :ava="fan.ava"
        :name="fan.nickName" :blogs="fan.blogs" :fans="fan.fans" :favors="fan.favors"
      :key="fan.userId"> -->
      <fans_component class="fanscomponent platebody" v-for="fan in fans" :id="fan.userId"
      :key="fan.userId">
      </fans_component>

    </div>

  </div>
</template>

<script>
    import author_info from "./author_info";
    import fans_component from "./fans_component";
    import {getfans} from '@/api/login'
    export default {
        name: "fans_ctest",
        created() {
          this.getFans()
        },
        watch: {
          '$route': 'getFans'
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
                fans:[
                    
                ]
            }
        },
        components:{
            author_info,
            fans_component,
        },
        methods: {
          getFans(){
            	let that = this
              // alert(that.$route.params.id)
              getfans(that.$route.params.id).then(data => {
                // alert("ok");
                // Object.assign(that.fans, data.data.data)
                that.fans=data.data.data
                // alert(JSON.stringify(data.data.data.tagInfos))
                    
              
                // alert(this.avatarUrl)
              }).catch(error => {
                // alert("bad");
                if (error !== 'error') {
                  that.$message({type: 'error', message: '列表加载失败', showClose: true})
                }
              })
          }
        }

    }
</script>

<style scoped>
  el-col{
    background:#fff;
  }

  .fanscomponent{
    /*border: 1px solid ;*/
    margin:100px;
  }

  .fans_text{
    margin-bottom: 3%;
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

  .platebody{
    border-bottom: solid 1px #f1f1f1;
    height:120px;
    align-items: center;
    display: flex;
    margin:0 auto;
    width:100%;
  }

</style>
