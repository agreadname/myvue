<template>
  <div class="hse_main_main_div">
    <!--导航栏-->
      <header>
        <el-row class="hse_main_header_a">
          <el-col :span="12" >
            <div :class="{hse_main_header_div:true, hse_main_header_bglight:!headerLight}"  @click="canheaderLightChange(1)">
              <router-link to="/plan" class="hse_main_header_routeLink">规划</router-link>
            </div>
          </el-col>
          <el-col :span="12">
            <div :class="{hse_main_header_div:true, hse_main_header_bglight:headerLight}" @click="canheaderLightChange(0)">
             <router-link to="/invest" class="hse_main_header_routeLink">市州投资计划</router-link>
             </div>
          </el-col>
        </el-row>
      </header>
    <!--/导航栏-->
    <!--用于子组件显示视图的地方-->
    <router-view></router-view>
    <!--/用于子组件显示视图的地方-->
  </div>
</template>

<script>

export default {
  data () {
    return {
        headerLight:true,//切换背景颜色的布尔值
    }
  },methods:{
    //用于给切换模块背景色
    canheaderLightChange(i){
      if(i) {//选择投资
        this.headerLight=true;
      }else {//选择规划
        this.headerLight=false;
      }
    }
  },mounted(){
    //用于网页刷新后判断当前页面的组件是那个
    var reg=/^invest/ig;
    if(reg.test(location.href.split("#/")[1])){//选择plan
      this.headerLight=false;
    }else {//选择invest
      this.headerLight=true;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hse_main_main_div{
    background: #e7ebee;
  }
  .hse_main_header_div{
    font:16px "宋体";
    color: #3c5e81;
    line-height: 34px;
    text-align: center;
  }
  .hse_main_header_div.hse_main_header_bglight{
    background: #cae3fc;
  }
  .hse_main_header_routeLink{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
