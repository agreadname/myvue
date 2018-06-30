<template>
  <div> <!--收信息-->
    <p><span>从兄弟组件接收的信息：</span> {{msg}}</p>
  </div>
</template>
<script>
  // import bus from './bus'
  export default {
    data() {
      return { msg:''}
    },mounted(){
      this.bus.$on('test1event',(msg)=>{
        this.msg=msg;
      });
    }
  }
</script>
