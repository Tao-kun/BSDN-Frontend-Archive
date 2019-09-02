<template>
	<div>
		<base-header :activeIndex="activeIndex"></base-header>
		<searcharticleMain id="searcharticleMain"></searcharticleMain>
		<BSDNUserSpaceFooter id="BSDNUserSpaceFooter"></BSDNUserSpaceFooter>
	</div>



</template>

<script>
	import BaseHeader from "./BaseHeader.vue"
	import searcharticleMain from "../components/searcharticle/main.vue"
	import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"

	export default {
	  name: 'searcharticle',
	  data () {
		return {

		}
	  },
	  components:{
		  BaseHeader,
		  searcharticleMain,
		  BSDNUserSpaceFooter
	  }
	}
</script>

<style>
	#searcharticleMain{
		padding-top: 75px;
	}

	#BSDNUserSpaceFooter{
		margin-top: 50px;
	}
</style>
