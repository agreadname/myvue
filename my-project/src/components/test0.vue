<template>
  <div>
    <send></send>
    <re></re>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      stripe
      :border=true
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import t1 from './test'
  import t2 from './test1'
  export default {
    data() {
      return {
          msg:'',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    components:{
      send:t1,//发
      re:t2//收
    },
    methods:{
      	arraySpanMethod({row,column,rowIndex,columnIndex}){
          if(rowIndex==0){
            if(columnIndex==0){
              return [1,2]
            }else if(columnIndex==3){
              return [1,2];
            }else if(columnIndex==2){
              return [1,1];
            }else {
              return [0,0];
            }
          }else if(rowIndex==1){
            if(columnIndex==0){
              return [1,3];
            }else if(columnIndex==3||columnIndex==4){
              return [1,1];
            }else {
              return [0,0];
            }
          }else if(rowIndex==2){
            if(columnIndex==0){
              return [1,2];
            }else if(columnIndex==2){
              return [1,2];
            }else if(columnIndex==4){
              return [1,1];
            }else return [0,0];
          }else {
            if(columnIndex==0){
              return [1,2];
            }else if(columnIndex==1) {
              return [0,0];
            }else {
              return [1,1];
            }
          }

      	}
 	}
  }
</script>
