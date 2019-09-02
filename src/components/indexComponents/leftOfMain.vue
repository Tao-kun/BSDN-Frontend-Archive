<template>
	<div id="normalPage">		
		<div class="maincontentelement" v-for="m in contentlist">
			<a :href="m.href">
				<img class="contentpic" :src="m.picurl" />
			</a>
			<div class="contentfont">
				<a :href="m.href">
					<div class="contentfonttitle">{{m.title}}</div>
				</a>
				<div class="contentfontintroduction">{{m.introduction}}</div>
				<div class="labels">
					<div class="label" v-for="l in m.label">
						<img src="@/assets/labelicon.png" class="labelicon" />
						<div class="labelfont">{{l}}</div>
					</div>
				</div>
				<div class="contentinfo">
					<div class="contentauthor">
						<img src="@/assets/person.png" class="contentinfoicon" />
						<div class="contenticonfont">{{m.author}}</div>
					</div>
					<div class="contenttime">
						<img src="@/assets/time.png" class="contentinfoicon" />
						<div class="contenticonfont">{{m.time}}</div>
					</div>
					
				</div>
				<div class="contentintros">
					<div class="contenticonfont">{{m.intros}}</div>
				</div>
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
					{
						picurl:"static/articleImg.jpg",
						title:"guigui", 
						label:[
							"币圈",
						],
						author:"yzlyzl",
						time:"2019-08-23",
						intros:"nmslsxc",
						href:"#/view/45"
					},
					{
						picurl:"static/articleImg.jpg",
						title:"hhhh", 
						label:[
							"币圈",
						],
						author:"yzlyzl",
						time:"2019-08-23",
						intros:"sxcnmxl",
						href:"#/view/48"
					},
				],
				pic1url:"static/navimg.png",
				pic2url:"static/navimg.png",
			}
		},
	}
</script>

<style scoped>
	#normalPage{
		width: 100%;
	}
	
	#normalPage:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.maincontentelement{
		width: 100%;
		margin-bottom: 20px;
	}
	
	.maincontentelement:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.contentpic{
		width: 230px;
		height: 130px;
		float: left;
	}
	
	.contentfont{
		float: left;
		margin-left: 10px;
	}
	
	.contentfonttitle{
		margin-top: 5px;
		margin-left: 10px;
		font-weight:  bold;
		font-size: 20px;
		color: black;
	}
	
	.labels:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.label{
		float: left;
		background-color: #e8e8e8;
		margin: 10px 5px 10px;
		padding: 2px 5px;
		border-radius:5px;
	}
	
	.labelicon{
		float: left;
	}
	
	.labelfont{
		float: left;
		font-size: 10px;
		line-height: 16px;
		height: 16px;
		margin-left: 5px;
	}
	
	.contentinfo:after{
		content: "";
		display: block;
		clear: both;
	}
	
	.contentinfo{
		color: #95a5a6;
		margin-top: 5px;
		margin-left: 5px;
	}
	
	.contentinfoicon{
		float: left;
	}
	
	.contentauthor{
		margin-right: 15px;
		float: left;
	}
	
	.contenttime{
		margin-right: 15px;
		float: left;
	}
	
	.contenticonfont{
		float: left;
		line-height: 15px;
		font-size: 15px;
		margin-left: 5px;
	}
	
	.contentintros{
		margin-top: 15px;
		
	}
	
</style>
