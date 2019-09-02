<template>
  <scroll-page :loading="loading" :offset="offset" :no-data="noData" v-on:load="load">
    <article-item v-for="a in articles" :key="a.id" v-bind="a"></article-item>
  </scroll-page>
</template>

<script>
  import ArticleItem from '@/components/article/ArticleItem'
  import ScrollPage from '@/components/scrollpage'
  import {getArticles,getArticlesByKeyword} from '@/api/article'
  import store from '@/store'

  export default {
    name: "ArticleScrollPage",
    props: {
      offset: {
        type: Number,
        default: 100
      },
      page: {
        type: Object,
        default() {
          return {}
        }
      },
      query: {
        type: Object,
        default() {
          return {}
        }
      },
      stype:Number,
      overload:Object,
    },
    watch: {
      'query': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage.pageNumber = 1
          this.getArticles()
        },
        deep: true
      },
      'page': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage = this.page
          this.getArticles()
        },
        deep: true
      },
      'overload': {
        handler() {
          this.noData = false
          this.articles = []
          this.innerPage.pageNumber = 1
          this.getArticles()
        },
        deep: true
      },
    },
    created() {
      this.getArticles()
    },
    data() {
      return {
        loading: false,
        noData: false,
        innerPage: {
          pageSize: 5,
          pageNumber: 1,
          name: 'a.createDate',
          sort: 'desc'
        },
        articles: []
      }
    },
    methods: {
      load() {
        this.getArticles()
      },
      view(id) {
        this.$router.push({path: `/view/${id}`})
      },
      getArticles() {
        // alert(JSON.stringify(this.overload))
        if(this.stype==1){//userspace
              let that = this
                      that.loading = true
                      
                      getArticles(that.query, that.innerPage,this.overload.id).then(data => {

                        let newArticles = data
                        // alert("newArticles:"+newArticles)
                        if (newArticles && newArticles.length > 0) {
                          that.innerPage.pageNumber += 1
                          that.articles = that.articles.concat(newArticles)
                        } else {
                          // alert("ok")
                          that.noData = true
                        }

                      }).catch(error => {
                        // alert("jj")
                        if (error !== 'error') {
                          that.$message({type: 'error', message: '文章加载失败!', showClose: true})
                        }
                      }).finally(() => {
                        // alert("jjl")
                        that.loading = false
                      })

                    }
          else if(this.stype==2){
              let that = this
                      that.loading = true
                      
                      getArticlesByKeyword(that.query, that.innerPage,this.overload.sid,this.overload.keyword).then(data => {

                        let newArticles = data
                        // alert("newArticles:"+newArticles)
                        if (newArticles && newArticles.length > 0) {
                          that.innerPage.pageNumber += 1
                          that.articles = that.articles.concat(newArticles)
                        } else {
                          // alert("ok")
                          that.noData = true
                        }

                      }).catch(error => {
                        // alert("jj")
                        if (error !== 'error') {
                          that.$message({type: 'error', message: '文章加载失败!', showClose: true})
                        }
                      }).finally(() => {
                        // alert("jjl")
                        that.loading = false
                      })


          }
        }
        
    },
    components: {
      'article-item': ArticleItem,
      'scroll-page': ScrollPage
    }

  }
</script>

<style scoped>
  .el-card {
    border-radius: 0;
  }

  .el-card:not(:first-child) {
    margin-top: 10px;

  }
</style>
