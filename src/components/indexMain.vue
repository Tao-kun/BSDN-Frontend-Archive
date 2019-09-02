<template>
	<div id="indexMain">
		<div id="indexMainPics">
			<!-- <div>{{carouselWidth}}{{carouselHeight}}</div> -->
			
			<div >
			
			<el-carousel :style="{width:carouselWidth}" :height="carouselHeight" id="carousel" >
				<el-carousel-item v-for="item in piclist" :key="item.key">
					<img :src="item.src" class="carouselimg"/>
				</el-carousel-item>
			</el-carousel>
			
			</div>
			
			<div id="rightOfCarousel">
				<div class="rightOfCarouselPic"> 
					<img :src="pic1url" class="rightOfCarouselPicImg"/>
				</div>			
				<div id="barInPics"></div>
				<div class="rightOfCarouselPic"> 
					<img :src="pic2url" class="rightOfCarouselPicImg"/>
				</div>
			</div>
		</div>
		
		<div id="articles">
			<div id="normalArticles">
				<normalPage></normalPage>
			</div>
			<div id="hotArticles">
				<hotPage></hotPage>
			</div>
		</div>
	
	</div>
</template>

<script>
	import normalPage from "./normalPage.vue"
	import hotPage from "./hotPage.vue"
	
	var PageWidth
	var that
	
	export default {
		name: 'sdindexMain',
		data() {
			return {
				piclist:[
					{src:"static/navimg.png", key:1},
					{src:"static/navimg.png", key:2},
					{src:"static/navimg.png", key:3},
				],
				pic1url:"static/navimg.png",
				pic2url:"static/navimg.png",
			}
		},
		components:{
			normalPage,
			hotPage,
		},
		beforeCreate(){
			PageWidth = parseInt($(window).width()) 
			// console.log(PageWidth)
			this.carouselWidth = 0.5 * PageWidth + "px";
			this.carouselHeight = 0.3 *  PageWidth + "px"
			that = this
		},
	}

	// $(function(){
	// 	$(window).resize(function(){
	// 		PageWidth = parseInt($(window).width()) 
	// 		console.log(PageWidth)
	// 		that.carouselWidth = 0.5 * PageWidth + "px"
	// 		that.carouselHeight = 0.3 *  PageWidth + "px"		
	// 	})
	// })
	
</script>

<style scoped>
	#indexMain {
		width: 100%;
	}
	
	#carousel{
		margin-left: 150px;
		margin-top: 50px;
		/* width: 750px; */
		float: left;
	}
	
	.carouselimg{
		width: 100%;
		height: 100%;
	}
	
	#rightOfCarousel{
		float: left;
		margin-top: 40px;
		margin-left: 50px;
		width: 30%;
	}
	
	.rightOfCarouselPic{
		width: 80%;
		height: 15%;
		float: left;
		margin-top: 10px;
		margin-bottom: 12%;
	}
	
	#barInPics{
		height: 1px;
		/* float: left; */
	}
	
	.rightOfCarouselPicImg{
		width: 100%;
		height: 195px;
	}
	
	#indexMainPics:after{
		content: "";
		display: block;
		clear: both;
	}
	
	#indexMainPics{
		margin-top: 100px;
	}
	
	#articles{
		width: 70%;
		margin: 100px auto 0;
	}
	
	#articles:after{
		content: "";
		display: block;
		clear: both;
	}
	
	#normalArticles{
		float: left;
		width: 50%;
		/* height: 100px; */
		/* border: 1px black solid; */
	}
	
	#hotArticles{
		float: left;
		width: 400px;
		/* height: 100px; */
		/* margin-left: 50px; */
		/* border: 1px black solid; */
	}
	
	#pageTurn{
		width: 500px;
		margin: 0 auto 20px;
	}
</style>
