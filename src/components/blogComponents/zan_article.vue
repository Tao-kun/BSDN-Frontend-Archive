<template>
    <div>
      <button   @click="favor"
               class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
               @mouseenter="change()" @mouseleave="goback()">
        赞{{count}}
      </button>
    </div>
</template>

<script>
    export default {
        name: "zan_article",
        data () {
            return{
                liked:false,
                count:0,
                // content:'赞',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
                tmp_bg_color:"",
                tmp_ft_color:"",
            }
        },
        methods:{
            favor (e) {
                this.liked=!this.liked;
                if(this.liked){
                    // this.content="赞";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                    this.count++;
                }

                else{
                    // this.content="点个赞吧~"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                    this.count--;
                }
            },
            change(){
                this.bg_color="#ff9999";
                this.ft_color="#fef0f0";
            },
            goback(){
                if(this.liked){
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }
                else{
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                }
            }
        }
    }
</script>

<style >
  button{
    outline:none;
  }

  .my_button{
    color: #f56c6c;
    background: #fef0f0;
    border: #fbc4c4 solid;
    border-radius: 20px;
    padding: 12px 23px;
    text-align: center;
    font-size: 16px;
    -webkit-transform: scale(0.7);
  }

</style>
