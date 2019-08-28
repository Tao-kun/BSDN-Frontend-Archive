<template>
	<div id="myMain">
		<LeftOfMain id="LeftOfMain"></LeftOfMain>
		<RightOfMain></RightOfMain>
	</div>
</template>

<script>
	import LeftOfMain from "./leftOfMain.vue"
	import RightOfMain from "./rightOfMain.vue"
	
	export default {
		name: 'myMain',
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components: {
			LeftOfMain,
			RightOfMain
		}
	}
</script>

<style>
	#myMain:after{
		content: "";
		display: block;
		clear: both;			
	}
	
	#myMain{
		width: 100%;
		padding-top: 100px;
	}
	
	#LeftOfMain{
		width: 40%;
		margin-left: 20%;
		float: left;
	}
</style>
