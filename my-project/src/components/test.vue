<template>
  <div>    <!--发信息-->
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <span>{{input}}</span>
    <el-button type="primary" @click="sendTo">发送</el-button>
  </div>
</template>
<script>
  // import bus from './bus'
  export default {
    data() {
      return {
       input:''
      }
    },methods:{
      sendTo(){
        var msg=this.input;
        this.bus.$emit('test1event',msg);
      }
    }
  }
</script>
