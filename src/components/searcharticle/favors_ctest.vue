<!--使用组件化后的粉丝页面-->
<template>
  <div>
    <div>
      <author_info @getFans="getFans"></author_info>
    </div>

    <br><br><br>

    <div class="favors_cycle">

      <div class="favors_intro">
        <div class="favors_text">
          TA关注的用户有
        </div>
      </div>

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
    import {getfavors} from '@/api/login'
    export default {
        name: "favors_ctest",
        created() {
          this.getFavors()
        },
        watch: {
          '$route': 'getFavors'
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
          getFans(){},
          getFavors(){
            	let that = this
              // alert(that.$route.params.id)
              getfavors(that.$route.params.id).then(data => {
                // alert("ok");
                // Object.assign(that.fans, data.data.data)
                that.favors=data.data.data
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

</style>
