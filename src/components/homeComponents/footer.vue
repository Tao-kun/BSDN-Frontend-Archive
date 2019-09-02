<template>
	<div class="footer">
			<!-- 还要给每个icon移入变色 -->
			<div class="footicons">
				<div class="footicondiv">
					<a :href="homeurl"><img src="static/home.png" class="footicon"/></a>
				</div>
				<div class="footicondiv">
					<a :href="githuburl"><img src="static/github.png" class="footicon"/></a>
				</div>
					
				<div class="footicondiv">
					<a :href="twitterurl"><img src="static/twitter.png" class="footicon"/></a>
				</div>
			</div>
			
			<div class="copyright">@cxknmsl</div>
		</div>
	</div>
	
</template>

<script>
	export default {
	  name: 'userSpaceHead',
	  data () {
	    return {
	     homeurl: "jump.html",
	     githuburl: "jump.html",
	     twitterurl: "jump.html",
	     curpage: 1,
	     endpage: 3,
		}
	  }
	}
	
	
	$(function(){
		//给最底下三个icon绑定
		$(".footicons img").each(function(index){
			var that = this
			this.onmouseenter = function(){
				that.src = that.src.split(".png")[0] + "hover.png"
			}
			this.onmouseleave = function(){
				that.src = that.src.split("hover.png")[0] + ".png"
			}
		})		
	})
</script>

<style scoped>
	.footer{
		background-color: #dbe0e4;
		height: 100px;
		padding-top: 30px;
		width: 100%;
		clear: both;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.footicondiv{
		float: left;
		margin: 8%;
		width: 15%;
	}
	
	.footicon{
		float: left;
		width: 100%;
		margin-left: 30%;
	}
	
	.footicons{
		width: 8%;
		margin: 0 auto;
		height: 50px;
	}
	
	.footicons:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.copyright{
		color: white;
		width: 20%;
		margin: 20px auto;
		text-align: center;
	}
</style>
