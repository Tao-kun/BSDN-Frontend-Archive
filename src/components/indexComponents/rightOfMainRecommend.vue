<template>
	<div>
		<div id="recommendHead">
			<div style="float: left;color: #00D1B2;height: 15px;line-height: 15px;margin-left: 10px;">推荐作者</div>
			<div @click="refresh">
				<a>
					<div style="float: right;color: #00D1B2;height: 15px;line-height: 15px;margin-right: 10px;">换一批</div>
				</a>
				<img src="../../assets/refresh.png" style="float:right;width: 15px;"/>
			</div>
		</div>
		<div v-for="author in authorList" class="recommendAuthor">
			<a :href="author.userSpaceUrl">
				<img :src="author.picurl" style="width: 50px; height: 50px; border-radius: 50%;float: left;margin-left: 10px;margin-bottom: 10px;"/>
			</a>
			<div style="float: left;height: 50px;width: 70%;margin-left: 6%;">
				<div class="authorInfo">
					<a :href="author.userSpaceUrl">
						<div style="float: left;color: black;">{{author.name}}</div>
					</a>
					<a>
						<div style="float: right;font-size: 10px;margin-top: 3px;color: #42c02e;" @click="follow">关注</div>
					</a>
				</div>
				<div style="font-size: 12px;margin-top: 10px;color: #969696;">写了{{author.words}}字 · {{author.likes}}喜欢 </div>
			</div>
		</div>
		<a href="allUsersUrl">
			<div style="height: 40px;width: 100%;color: #787878;text-align: center;line-height: 40px;border: 1px solid #dcdcdc;border-radius: 10px;margin-bottom: 20px;">查看全部&nbsp;&nbsp;></div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'rightOfMainRecommend',
		data() {
			return {
				authorList:[
					{picurl:"static/cxk.png", name:"蔡徐坤", words:"0", likes:"1e", userSpaceUrl:"/"},
					{picurl:"static/sxc.png", name:"孙笑川", words:"8000", likes:"6324", userSpaceUrl:"/"}
				],
				allUsersUrl:"/"
			}
		},
		methods:{
			refresh(){
				
			},
			follow(){
				
			}
		}
	}
</script>

<style scoped>
	#recommendHead:after{
		content: "";
		display: block;
		clear: both;
	}
	
	#recommendHead{
		margin-bottom: 20px;
	}
	
	.recommendAuthor:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.recommendAuthor{
		width: 100%;
	}
	
	.authorInfo:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.authorInfo{
		margin-top: 5px;
		width: 100%;
	}
</style>
