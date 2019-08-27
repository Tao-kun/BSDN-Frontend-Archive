<template>
  <div v-title :data-title="title">
    <el-container class="me-area">
      <el-main class="me-main">
        <!--<el-steps class="me-log-box" :space="100"  direction="vertical">
                 <el-step title="步骤 1" status="process"  icon="el-icon-time" description="步骤 1步骤 1步骤 1步骤 1步骤 1"></el-step>
                 <el-step title="步骤 2" status="process" icon="el-icon-time"></el-step>
                 <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                   <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>

                 <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" status="process" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>
                 <el-step title="步骤 3" icon="el-icon-time" description="这是一段很长很长很长的描述性文字"></el-step>

              </el-steps>-->
        <!-- <div class="me-view-content">
            <markdown-editor :editor=article.editor></markdown-editor>
			 </div> -->
       <pre>
          #2019.8.22
          完成用户故事
          后端设计完成数据库
          #2019.8.23
          接口设计
          界面设计
          #2019.8.24
          实现登录注册接口
          界面框架完成
          #2019.8.25
          实现登录注册，发布修改博文，标签功能
       </pre>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  // import MarkdownEditor from '@/components/markdown/MarkdownEditor'
  export default {
    name: 'Log',
    data() {
      return {
          // article: {
          // articleId: '',
          // title: '',
          // commentCount: 0,
          // viewNumber: 0,
          // summary: '',
          // nickName: '',
          // userId:'',
          // tagInfos: [],
          // category:{},
          // publishDate: '',
          // editor: {
          //   value: String.raw`
          //   #2019.8.22
          //   完成用户故事
          //   后端设计完成数据库
          //   #2019.8.23
          //   接口设计
          //   界面设计
          //   #2019.8.24
          //   实现登录注册接口
          //   界面框架完成
          //   #2019.8.25
          //   实现登录注册，发布修改博文，标签功能
          //   `,
          //   toolbarsFlag: false,
          //   subfield: false,
          //   defaultOpen: 'preview'
          // }
        // }
      }
    },
    computed: {
      title (){
        return '日志 - BSDN'
      }
    }
    // components: {
    //   'markdown-editor': MarkdownEditor,
    //   CommmentItem
    // }
  }
</script>

<style scoped>
  .el-container {
    width: 700px;
  }

  .me-main {
    overflow: hidden;
  }

  .me-log-box {
    margin-left: 30%;
    margin-top: 20px;
  }

</style>
