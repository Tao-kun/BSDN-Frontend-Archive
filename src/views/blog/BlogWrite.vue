<template>
  <div id="write" v-title :data-title="title">
    <el-container>
      <base-header :simple=true>
        <el-col :span="4" :offset="2">
          <div class="me-write-info">{{title}}</div>
        </el-col>
        <el-col :span="4" :offset="6">
          <div class="me-write-btn">
            <!-- <el-button round @click="publishShow">发布</el-button> -->
            <el-button round @click="publishShow">{{oktxt}}</el-button>
            <el-button round @click="cancel">取消</el-button>
          </div>
        </el-col>
      </base-header>

      <el-container class="me-area me-write-box">
        <el-main class="me-write-main">
          <div class="me-write-title">
            <el-input resize="none"
                      type="textarea"
                      autosize
                      v-model="articleForm.title"
                      placeholder="请输入标题"
                      class="me-write-input">
            </el-input>

          </div>
          <div id="placeholder" style="visibility: hidden;height: 89px;display: none;"></div>
          <markdown-editor :editor="articleForm.editor" class="me-write-editor"></markdown-editor>
        </el-main>
      </el-container>

      <el-dialog title="请选择标签"
                 :visible.sync="publishVisible"
                 :close-on-click-modal=false
                 custom-class="me-dialog">

        <el-form :model="articleForm" ref="articleForm" :rules="rules">
          <!-- <el-form-item prop="summary">
            <el-input type="textarea"
                      v-model="articleForm.summary"
                      :rows="6"
                      placeholder="请输入摘要">
            </el-input>
          </el-form-item>
          <el-form-item label="文章分类" prop="category">
            <el-select v-model="articleForm.category" value-key="id" placeholder="请选择文章分类">
              <el-option v-for="c in categorys" :key="c.id" :label="c.categoryname" :value="c"></el-option>
            </el-select>
          </el-form-item> -->

          <el-form-item label="文章标签" prop="articleTags">
            <el-checkbox-group v-model="articleForm.articleTags">
              <el-checkbox v-for="t in articleTags" :key="t.tagId" :label="t.tagId" name="articleTags">{{t.tagName}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="publishVisible = false">取 消</el-button>
          <el-button type="primary" @click="publish(articleForm)">发布</el-button>
        </div>
      </el-dialog>
    </el-container>
  </div>
</template>

<script>
  import BaseHeader from '@/views/BaseHeader'
  import MarkdownEditor from '@/components/markdown/MarkdownEditor'
  import {publishArticle, getArticleById,editArticle} from '@/api/article'
  import {getAllCategorys} from '@/api/category'
  import {getAllTags} from '@/api/tag'
  import {getToken} from '@/request/token'
  import {addTagForArticles} from '@/api/tag'

  export default {
    name: 'BlogWrite',
    mounted() {

      if(this.$route.params.id){
        this.isEditMode=true
        this.oktxt='保存'
        this.title='编辑文章'
        this.getArticleById(this.$route.params.id)
      }

      this.getCategorysAndTags()
      this.editorToolBarToFixedWrapper = this.$_.throttle(this.editorToolBarToFixed, 200)

      window.addEventListener('scroll', this.editorToolBarToFixedWrapper, false);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.editorToolBarToFixedWrapper, false)
    },
    data() {
      return {
        publishVisible: false,
        isEditMode:false,
        title:'写文章',
        categorys: [],
        oktxt:'发布',
        articleTags: [],
        articleForm: {
          articleId: '',
          title: '',
          summary: '',
          category: '',
          articleTags: [],
          editor: {
            value: '',
            ref: '',//保存mavonEditor实例  实际不该这样
            default_open: 'edit',
            toolbars: {
              bold: true, // 粗体
              italic: true, // 斜体
              header: true, // 标题
              underline: true, // 下划线
              strikethrough: true, // 中划线
              mark: true, // 标记
              superscript: true, // 上角标
              subscript: true, // 下角标
              quote: true, // 引用
              ol: true, // 有序列表
              ul: true, // 无序列表
              imagelink: true, // 图片链接
              code: true, // code
              fullscreen: true, // 全屏编辑
              readmodel: true, // 沉浸式阅读
              help: true, // 帮助
              undo: true, // 上一步
              redo: true, // 下一步
              trash: true, // 清空
              navigation: true, // 导航目录
              //subfield: true, // 单双栏模式
              preview: true, // 预览
            }
          }
        },
        rules: {
          // summary: [
          //   {required: true, message: '请输入摘要', trigger: 'blur'},
          //   {max: 80, message: '不能大于80个字符', trigger: 'blur'}
          // ],
          // category: [
          //   {required: true, message: '请选择文章分类', trigger: 'change'}
          // ],
          articleTags: [
            {type: 'array', required: true, message: '请选择标签', trigger: 'change'}
          ]
        }
      }
    },
    computed: {
      
    },
    methods: {
      getArticleById(id) {
        let that = this
        getArticleById(id).then(data => {

          Object.assign(that.articleForm, data.data.data)
          that.articleForm.editor.value = data.data.data.content

          let articleTags = this.articleForm.articleTags.map(function (item) {
            return item.id;
          })

          this.articleForm.articleTags = articleTags


        }).catch(error => {
          if (error !== 'error') {
            that.$message({type: 'error', message: '文章加载失败', showClose: true})
          }
        })
      },
      publishShow() {
        // alert("end:"+JSON.stringify(this.articleForm.articleTags));
        if (!this.articleForm.title) {
          this.$message({message: '标题不能为空哦', type: 'warning', showClose: true})
          return
        }

        if (this.articleForm.title.length > 30) {
          this.$message({message: '标题不能大于30个字符', type: 'warning', showClose: true})
          return
        }

        if (!this.articleForm.editor.ref.d_render) {
          this.$message({message: '内容不能为空哦', type: 'warning', showClose: true})
          return
        }
        if(this.isEditMode==true){
          this.edit(this.articleForm)
        }
        else{
          this.publishVisible = true;
        }
        
      },
      edit(articleForm){

        let that = this
        // alert(this.articleId)
        let article = {
              title: this.articleForm.title,
              content: this.articleForm.editor.value,
              // articleId: this.articleForm.articleId,
              
              // summary: this.articleForm.summary,
              // category: this.articleForm.category,
              // articleTags: articleTags,
              // body: {
                
              //   contentHtml: this.articleForm.editor.ref.d_render
              // }

            }

            this.publishVisible = false;

            let loading = this.$loading({
              lock: true,
              text: '发布中，请稍后...'
            })
          // alert(JSON.stringify(this.articleForm.articleTags))
           editArticle(article,getToken(),this.articleForm.articleId).then((data) => {
            //  this.articleForm.articleTags.map(function(t,index){
            //     //  alert(JSON.stringify(t))
            //                 addTagForArticles(data.data.data.articleId,t,getToken()).then((data) => {
            //                   // alert("ok")
            //               }).catch((error) => {
            //                 // alert("bad")
            //                 loading.close();
                            
            //                 if (error !== 'error') {
            //                   that.$message({message: error, type: 'error', showClose: true});
            //                 }
            //               })
            //   });

              loading.close();      
              that.$message({message: '修改成功啦', type: 'success', showClose: true})
              that.$router.push({path: `/view/${this.articleForm.articleId}`})

            }).catch((error) => {
              loading.close();
              
              if (error !== 'error') {
                that.$message({message: error, type: 'error', showClose: true});
              }
            })
      },
      publish(articleForm) {

        let that = this

        let article = {
              title: this.articleForm.title,
              content: this.articleForm.editor.value,
              // articleId: this.articleForm.articleId,
              
              // summary: this.articleForm.summary,
              // category: this.articleForm.category,
              // articleTags: articleTags,
              // body: {
                
              //   contentHtml: this.articleForm.editor.ref.d_render
              // }

            }

            this.publishVisible = false;

            let loading = this.$loading({
              lock: true,
              text: '发布中，请稍后...'
            })
          // alert(JSON.stringify(this.articleForm.articleTags))
           publishArticle(article,getToken()).then((data) => {
             this.articleForm.articleTags.map(function(t,index){
                //  alert(JSON.stringify(t))
                            addTagForArticles(data.data.data.articleId,t,getToken()).then((data) => {
                              // alert("ok")
                          }).catch((error) => {
                            // alert("bad")
                            loading.close();
                            
                            if (error !== 'error') {
                              that.$message({message: error, type: 'error', showClose: true});
                            }
                          })
              });

              loading.close();      
              that.$message({message: '发布成功啦', type: 'success', showClose: true})
              that.$router.push({path: `/view/${data.data.data.articleId}`})

            }).catch((error) => {
              loading.close();
              
              if (error !== 'error') {
                that.$message({message: error, type: 'error', showClose: true});
              }
            })



        // let that = this
        // let article = {
        //       title: this.articleForm.title,
        //       content: this.articleForm.editor.value,
        //       // articleId: this.articleForm.articleId,
              
        //       // summary: this.articleForm.summary,
        //       // category: this.articleForm.category,
        //       // articleTags: articleTags,
        //       // body: {
                
        //       //   contentHtml: this.articleForm.editor.ref.d_render
        //       // }

        //     }
        //   // alert(1)
        //   let loading = this.$loading({
        //       lock: true,
        //       text: '发布中，请稍后...'
        //     })
        // publishArticle(article,getToken()).then((data) => {
        //       loading.close();
        //       that.$message({message: '发布成功啦', type: 'success', showClose: true})
        //       that.$router.push({path: `/view/${data.data.data.articleId}`})

        //     }).catch((error) => {
        //       loading.close();
              
        //       if (error !== 'error') {
        //         that.$message({message: error, type: 'error', showClose: true});
        //       }
        //     })

        // let that = this

        // this.$refs[articleForm].validate((valid) => {
        //   if (valid) {

        //     let articleTags = this.articleForm.articleTags.map(function (item) {
        //       return {id: item};
        //     });

        //     let article = {
        //       title: this.articleForm.title,
        //       content: this.articleForm.editor.value,
        //       // articleId: this.articleForm.articleId,
              
        //       // summary: this.articleForm.summary,
        //       // category: this.articleForm.category,
        //       // articleTags: articleTags,
        //       // body: {
                
        //       //   contentHtml: this.articleForm.editor.ref.d_render
        //       // }

        //     }

        //     this.publishVisible = true;

        //     let loading = this.$loading({
        //       lock: true,
        //       text: '发布中，请稍后...'
        //     })

        //     publishArticle(article,getToken()).then((data) => {
        //       loading.close();
        //       that.$message({message: '发布成功啦', type: 'success', showClose: true})
        //       that.$router.push({path: `/view/${data.data.articleId}`})

        //     }).catch((error) => {
        //       loading.close();
        //       if (error !== 'error') {
        //         that.$message({message: error, type: 'error', showClose: true});
        //       }
        //     })

        //   } else {
        //     return false;
        //   }
        // });
      },
      cancel() {
        this.$confirm('文章将不会保存, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // alert("ok")
          this.$router.push('/')
        })
      },
      getCategorysAndTags() {
        let that = this
        // getAllCategorys().then(data => {
        //   that.categorys = data.data
        // }).catch(error => {
        //   if (error !== 'error') {
        //     that.$message({type: 'error', message: '文章分类加载失败', showClose: true})
        //   }
        // })
        // alert("in");
        getAllTags().then(data => {
          that.articleTags = data.data.data
          // alert("ok:"+JSON.stringify(data));
        }).catch(error => {
          // alert("error:"+JSON.stringify(error));
          if (error !== 'error') {
            that.$message({type: 'error', message: '标签加载失败', showClose: true})
          }
        })
        

      },
      editorToolBarToFixed() {

        let toolbar = document.querySelector('.v-note-op');
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
        if (curHeight >= 160) {
          document.getElementById("placeholder").style.display = "block"; //bad  用计算属性较好
          toolbar.classList.add("me-write-toolbar-fixed");
        } else {
          document.getElementById("placeholder").style.display = "none";
          toolbar.classList.remove("me-write-toolbar-fixed");
        }
      }
    },
    components: {
      'base-header': BaseHeader,
      'markdown-editor': MarkdownEditor
    },
    //组件内的守卫 调整body的背景色
    beforeRouteEnter(to, from, next) {
      window.document.body.style.backgroundColor = '#fff';
      next();
    },
    beforeRouteLeave(to, from, next) {
      window.document.body.style.backgroundColor = '#f5f5f5';
      next();
    }
  }
</script>

<style>
  .el-header {
    position: fixed;
    z-index: 1024;
    min-width: 100%;
    box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
  }

  .me-write-info {
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
  }

  .me-write-btn {
    margin-top: 10px;
  }

  .me-write-box {
    max-width: 700px;
    margin: 80px auto 0;
  }

  .me-write-main {
    padding: 0;
  }

  .me-write-title {
  }

  .me-write-input textarea {
    font-size: 32px;
    font-weight: 600;
    height: 20px;
    border: none;
  }

  .me-write-editor {
    min-height: 650px !important;
  }

  .me-header-left {
    margin-top: 10px;
  }

  .me-title img {
    max-height: 2.4rem;
    max-width: 100%;
  }

  .me-write-toolbar-fixed {
    position: fixed;
    width: 700px !important;
    top: 60px;
  }

  .v-note-op {
    box-shadow: none !important;
  }

  .auto-textarea-input, .auto-textarea-block {
    font-size: 18px !important;
  }
</style>
