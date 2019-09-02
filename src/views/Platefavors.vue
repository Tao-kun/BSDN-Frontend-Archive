<template>
  <div>
    <BaseHeader ></BaseHeader>
    <favors class="fans_body"></favors>
    <BSDNUserSpaceFooter></BSDNUserSpaceFooter>
  </div>
</template>

<script>
  import BaseHeader from "./BaseHeader";
  import favors from "../components/userSpaceComponents/favors_ctest"
  // import fans from "../components/userSpaceComponents/fans"
  import BSDNUserSpaceFooter from "../components/userSpaceComponents/footer.vue"

    export default {
        name: "Platefavors",
        components:{
            favors,
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
