<template>
	<!-- 翻页还没做 -->
	<div id="turnpage">
		<div id="turnleft">	<</div> 
			<div id="turnmiddle">

				<!-- 用vue-router来写 -->
				<!-- 每一个都是分别判断是不是首尾页以决定显示哪一种 -->
				<!-- <div>{{curpage}}</div>
				<div>{{cururl}}</div> -->
				<div v-if="curpage == 1" class="currentpage">
					<currentPage></currentPage>
				</div>
				<div v-else class="normalpage">
					<normalPage></normalPage>
				</div>
				<div v-if="curpage>1&&curpage<endpage" class="currentpage">
					<currentPage></currentPage>
				</div>
				<div v-else class="normalpage">
					<normalPage></normalPage>
				</div>
				<div v-if="curpage == endpage" class="currentpage">
					<currentPage></currentPage>
				</div>
				<div v-else class="normalpage">
					<normalPage></normalPage>
				</div>
			</div>
		<div id="turnright">></div>
	</div>
</template>

<script>
	import normalPage from "./userSpaceNormalPage.vue"
	import currentPage from "./currentPage.vue"
	var url = "http://localhost:8080"

	function computePage(u) {
		var num = parseInt(u.split(url)[1].match(/\d+/))

		return isNaN(num) ? 1 : num
	}

	export default {
	  name: 'sdturnPage',
	  data () {
	    return {
	      curpage: computePage(window.location.href),
	      endpage: 3,
		  cururl: window.location.href,
		  curpageInLeft: computePage(window.location.href) == 1,
		  curpageInMid:  computePage(window.location.href) > 1 &&  computePage(window.location.href) <  3,
	    }
	  },
	  components:{
		  normalPage,
		  currentPage
	  }
	}
	
	
</script>

<style scoped>
	#turnpage {
		border-radius: 15px;
		height: 50px;
		width: 260px;
		margin: 50px auto 0;
		overflow: hidden
	}

	#turnpage:after {
		content: "";
		display: block;
		clear: both;
	}

	#turnleft {
		float: left;
		line-height: 50px;
		color: white;
		background-color: #e4e7ea;
		width: 50px;
		text-align: center;
		font-size: 30px;
		margin-right: 5px;
	}

	#turnmiddle {
		float: left;
	}

	.normalpage {
		float: left;
		width: 50px;
		height: 50px;
		background-color: #e4e7ea;
	}

	.currentpage {
		float: left;
		width: 50px;
		height: 50px;
		background-color: #e4e7ea;
	}

	#turnright {
		float: right;
		line-height: 50px;
		color: white;
		background-color: #e4e7ea;
		width: 50px;
		text-align: center;
		font-size: 30px;
		margin-left: 5px;
	}
</style>
