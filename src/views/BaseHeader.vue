<template>
  <el-header class="me-area">
    <el-row class="me-header">

      <el-col :span="4" class="me-header-left">
        <router-link to="/" class="me-title">
          <img src="../assets/img/logo.png"/>
        </router-link>
      </el-col>

      <el-col v-if="!simple" :span="16">
        <el-menu :router=true menu-trigger="click" active-text-color="#5FB878" :default-active="activeIndex"
                 mode="horizontal">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item v-if="user.login" :index="userspaceUrl">我的园地</el-menu-item>
          <!-- <el-menu-item index="/category/all">文章分类</el-menu-item> -->
          <!-- <el-menu-item index="/tag/all">标签</el-menu-item> -->
          <!-- <el-menu-item index="/archives">文章归档</el-menu-item> -->
          <!-- <el-menu-item index="/log">日志</el-menu-item> -->
          <!-- <el-menu-item index="/messageBoard">留言板</el-menu-item> -->
          <div  id="headerSearchForm">
		        <div style="margin-top: 7px;">
  			    <el-input placeholder="请输入内容" v-model="input1" class="input-with-select">
    			    <el-select v-model="select" slot="prepend" placeholder="请选择">
      			    <el-option label="搜索用户" value="1"></el-option>
      			    <el-option label="搜索文章" value="2"></el-option>
      	
    	  		  </el-select>
    			  <el-button slot="append" icon="el-icon-search" @click="searchSubmit"></el-button>
  			    </el-input>
		        </div>
		      </div>
          <!-- <form :action="searchPageUrl" id="headerSearchForm">
            <input placeholder="搜索" id="headerSearch"/>
            <a><img src="../assets/serch.png" style="float:left;width:20px;margin-top: 7px;margin-left: 5%;" @click="searchSubmit"/></a>
          </form> -->
          <!-- <el-col :span="4" :offset="10"> -->
            <el-menu-item index="/write" ><i class="el-icon-edit" ></i>写文章</el-menu-item>
          <!-- </el-col> -->

        </el-menu>
      </el-col>

      <template v-else>
        <slot></slot>
      </template>

      <el-col :span="4">
        <el-menu :router=true menu-trigger="click" mode="horizontal" active-text-color="#5FB878">

          <template v-if="!user.login">
            <el-menu-item index="/login">
              <el-button type="text">登录</el-button>
            </el-menu-item>
            <el-menu-item index="/register">
              <el-button type="text">注册</el-button>
            </el-menu-item>
          </template>

          <template v-else>
            <el-submenu index>
              <template slot="title">
                <img class="me-header-picture" :src="user.avatar"/>
              </template>
              <el-menu-item index @click="logout"><i class="el-icon-back"></i>退出</el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>

    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: 'BaseHeader',
    props: {
      activeIndex: String,
      simple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
      input1: '',
      select: ''
      }
    },
    computed: {
      user() {
        let login = this.$store.state.account.length != 0
        let avatar = this.$store.state.avatar
        return {
          login, avatar
        }
      },
      userspaceUrl() {
        return "/userspace/"+this.$store.state.id
      }
    },
    methods: {
      logout() {
        let that = this
        this.$store.dispatch('logout').then(() => {
          this.$router.push({path: '/'})
        }).catch((error) => {
          if (error !== 'error') {
            that.$message({message: error, type: 'error', showClose: true});
          }
        })
      },
    searchSubmit(){
      if(this.select==1){
        if(this.input1){
          this.$router.push('/search/user/'+this.input1)
        }
      }
		  else if(this.select==2){
        if(this.input1){
          this.$router.push('/search/article/'+this.input1)
        }
      }
	  }

    }
  }
</script>

<style>

  	#headerSearchForm{
		/* background-color: #eee; */
		 width: 50%;  
		/* height: 35px; */
		margin-top: 4px; 
		border-radius: 20px;
		float: left;
	}
	  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-header {
    position: fixed;
    z-index: 1024;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  }

  .me-title {
    margin-top: 10px;
    font-size: 24px;
  }

  .me-header-left {
    margin-top: 10px;
  }

  .me-title img {
    max-height: 2.4rem;
    max-width: 100%;
  }

  .me-header-picture {
    width: 36px;
    height: 36px;
    border: 1px solid #ddd;
    border-radius: 50%;
    vertical-align: middle;
    background-color: #5fb878;
  }
</style>
