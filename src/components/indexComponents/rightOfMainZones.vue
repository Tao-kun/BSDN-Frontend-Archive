<template>
	<div>
		<a v-for="z in zoneList" :href="z.jumpTo">
			<div  :style="{color:z.color,backgroundColor:z.bgcolor}" style="height:50px;lineHeight:50px;text-align: center;width: 100%;font-size: 20px;margin-bottom: 10px;border-radius: 20px;">
				{{z.text}}&nbsp;&nbsp;>
			</div>
		</a>
	</div>
</template>

<script scoped>
	export default {
		name: 'rightOfMainZones',
		data() {
			return {
				zoneList:[
					{text:"java", jumpTo:"/", bgcolor:"#edb458", color:"white"},
					{text:"python", jumpTo:"/", bgcolor:"#d4d4aa", color:"#63683c"},
					{text:"c#", jumpTo:"/", bgcolor:"#65c3fc", color:"#0096bf"},
					{text:"c++", jumpTo:"/", bgcolor:"#00bef2", color:"#740906"},
					
				]
			}
		},
	}
</script>

<style>

</style>
