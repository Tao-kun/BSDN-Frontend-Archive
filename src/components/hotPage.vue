<template>
	<div id="hotArticlesOuter">
		<div id="hotArticleFont">热门文章</div>
		<div v-for="c in contentlist" class="contentEle">
			<div class="hotArticleImg">
				<img :src="c.picurl" class="innerImg"/>
			</div>
			
			<div class="hotArticleFont">
				{{c.description}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'indexMain',
		data() {
			return {
				contentlist:[
					{picurl:"static/navimg.png", description:"进击的格鲁吉亚：社会中的弱者，已被区块链守护 | 北纬31度"},
					{picurl:"static/navimg.png", description:"进击的格鲁吉亚：社会中的弱者，已被区块链守护 | 北纬31度"},
				],
			}
		}
	}
</script>

<style>
	#hotArticlesOuter{
		width: 100%;
	}
	
	#hotArticleFont{
		font-weight: bold;
	}
	
	.contentEle{
		margin-top: 20px;
	}
	
	.contentEle:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.hotArticleImg{
		float: left;
		width: 75px;
		height: 35px;
	}
	
	.innerImg{
		width: 100%;
		height: 100%;
	}
	
	.hotArticleFont{
		float: left;
		height: 100%;
		/* line-height: 100%; */
		width: 75%;
		font-size: 15px;
		margin-left: 10px;
		/* margin-top: 10px; */
	}
</style>
