<template>
	<div>
		<base-header :activeIndex="activeIndex"></base-header>
		<BSDNUserSpaceMain id="BSDNUserSpaceMain"></BSDNUserSpaceMain>
		<BSDNUserSpaceFooter id="BSDNUserSpaceFooter"></BSDNUserSpaceFooter>
	</div>



</template>

<script>
	import BaseHeader from "./BaseHeader.vue"
	import BSDNUserSpaceMain from "../components/userSpaceComponents/main.vue"
	import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"

	export default {
	  name: 'BSDNUserSpace',
	  data () {
		return {

		}
	  },
	  components:{
		  BaseHeader,
		  BSDNUserSpaceMain,
		  BSDNUserSpaceFooter
	  }
	}
</script>

<style>
	#BSDNUserSpaceMain{
		padding-top: 75px;
	}

	#BSDNUserSpaceFooter{
		margin-top: 50px;
	}
</style>
