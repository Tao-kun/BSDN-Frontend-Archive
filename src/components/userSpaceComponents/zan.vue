<template>
    <div>
      <button  type="danger" plain @click="favor"  :class="{liked:liked} "
               class="my_button" :style="{backgroundColor:bg_color, color: ft_color,}"
               @mouseenter="change()" @mouseleave="goback()">
        {{content}}
      </button>
    </div>
</template>

<script>
    export default {
        name: "zan",
        props: {
            liked:Boolean
        },
        watch: {
            'liked': 'flush'
        },
        data () {
            return{
                content:'+关注',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
                tmp_bg_color:"",
                tmp_ft_color:"",
            }
        },
        
        methods:{
            favor (e) {
                if(this.liked){
                    this.$emit('unfavor')
                }
                else{
                    this.$emit('favor')
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
            },
            flush(){
                if(this.liked){
                    
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }

                else{
                    this.content="+关注"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";

                }
            }
        }
    }
</script>

<style scoped>
  .liked{
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

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
