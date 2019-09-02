<template>
  <div class="panel">
    <el-col :span="16">
      <LeftOfPlate class="left"></LeftOfPlate>
    </el-col>
    <el-col :span="8">
      <RightOfPlate class="right"></RightOfPlate>
    </el-col>
  </div>
</template>

<script>
  import LeftOfPlate from "./LeftOfPlate";
  import RightOfPlate from "./RightOfPlate";

    export default {
        name: "Plate",
        components: {RightOfPlate, LeftOfPlate}
    }
</script>

<style scoped>
  .panel{
    padding-top: 100px;
    background-color:#ffffff;
    padding-bottom: 100px;
    content: "";
  }

  .panel:after{
    content: "";
    display: block;
    clear: both;
  }


  .left{
    background: #fff;
    width:90%;
    float: left;
    display: block;
    padding-left: 8%;
  }

  .right{
    background: #fff;
  }


</style>
