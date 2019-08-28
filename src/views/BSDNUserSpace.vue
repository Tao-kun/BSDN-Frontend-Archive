<template>
	<div>
		<BSDNUserSpaceHeader></BSDNUserSpaceHeader>
		<BSDNUserSpaceMain id="BSDNUserSpaceMain"></BSDNUserSpaceMain>
		<BSDNUserSpaceFooter id="BSDNUserSpaceFooter"></BSDNUserSpaceFooter>
	</div>
	
	
	
</template>

<script>
	import BSDNUserSpaceHeader from "../components/userSpaceComponents/header.vue"
	import BSDNUserSpaceMain from "../components/userSpaceComponents/main.vue"
	import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"
	
	export default {
	  name: 'BSDNUserSpace',
	  data () {
		return {
		  
		}
	  },
	  components:{
		  BSDNUserSpaceHeader,
		  BSDNUserSpaceMain,
		  BSDNUserSpaceFooter
	  }
	}
</script>

<style>
	#BSDNUserSpaceMain{
		padding-top: 50px;
	}
	
	#BSDNUserSpaceFooter{
		margin-top: 50px;
	}
</style>
