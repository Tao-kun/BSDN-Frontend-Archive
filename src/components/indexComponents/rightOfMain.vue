<template>
	<div id="rightOfMain">
		<rightOfMainZones id="rightOfMainZones"></rightOfMainZones>
		<rightOfMainRecommend id="rightOfMainRecommend"></rightOfMainRecommend>
	</div>
</template>

<script>
	import rightOfMainZones from "./rightOfMainZones.vue"
	import rightOfMainRecommend from "./rightOfMainRecommend.vue"
	
	export default {
		name: 'rightOfMain',
		data() {
			return {
				
			}
		},
		components: {
			rightOfMainZones,
			rightOfMainRecommend
		}
	}
</script>

<style scoped>
	#rightOfMain:after{
		content: "";
		display: block;
		clear: both;
	}
	
	#rightOfMain{
		width: 20%;
		float: left;
	}
	
	#rightOfMainZones{
		width: 100%;
		margin-bottom: 50px;
		/* border: black 1px solid; */
	}
	
	#rightOfMainRecommend{
		width: 100%;
		/* border: black 1px solid; */
	}
</style>
