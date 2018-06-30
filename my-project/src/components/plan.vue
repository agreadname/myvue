<template>
  <div>
    <!--当前位置-->
    <p v-html="msg" class="hse_investplan_currentposition_p"></p>
    <!--/当前位置-->
    <!--包裹查询条件和查询结果的div-->
    <div class="hse_investplan_widemagin_div">
      <searchcondition fid="1"></searchcondition>
      <result></result>
    </div>
    <!--/包裹查询条件和查询结果的div-->
  </div>
</template>

<script>
  import searchCondition from './searchcondition'
  import Result from './Sresult'
export default {
  data () {
    return {
      msg: '当前位置:综合统计 &gt; 规划 &gt; 查询'
    }
  },components:{
    searchcondition:searchCondition,
    result:Result
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
