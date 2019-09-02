<template>
  <div>
    <BaseHeader ></BaseHeader>
    <searchusermain class="searchuser_body"></searchusermain>
    <BSDNUserSpaceFooter></BSDNUserSpaceFooter>
  </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";
  import searchusermain from "../components/searchuser/searchuser_ctest"
  // import fans from "../components/userSpaceComponents/fans"
  import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"

    export default {
        name: "searchuser",
        components:{
            searchusermain,
            BaseHeader,
            BSDNUserSpaceFooter,
        }
    }
</script>

<style scoped>
  .searchuser_body{
    padding-top: 75px;
    padding-bottom: 100px;
  }
</style>
