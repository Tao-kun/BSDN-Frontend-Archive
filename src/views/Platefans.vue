<template>
  <div>
    <BaseHeader ></BaseHeader>
    <fans class="fans_body"></fans>
    <BSDNUserSpaceFooter></BSDNUserSpaceFooter>
  </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";
  import fans from "../components/userSpaceComponents/fans_ctest"
  // import fans from "../components/userSpaceComponents/fans"
  import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"

    export default {
        name: "Platefans",
        components:{
            fans,
            BaseHeader,
            BSDNUserSpaceFooter,
        }
    }
</script>

<style scoped>
  .fans_body{
    padding-top: 75px;
    padding-bottom: 100px;
  }
</style>
