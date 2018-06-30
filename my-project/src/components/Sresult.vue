<template>
  <div v-if="tableData3.length!=0">
    <!--查询结果-->
    <p class="hse_searchcondition_search_p">查询结果</p>
    <!--/查询结果-->
    <!--年份和地区是需要根据查询条件自动生成的-->
    <p class="hse_result_capition_p">2017年环洞庭湖地区国省干线大中修计划汇总表</p>
    <div class="hse_result_tablebox_div">
      <el-table
        :data="tableData3"
        style="width: 100%"
        :stripe="true"
        :border="true"
        :row-class-name="tableRowClassName"
        :header-cell-style="{'textAlign':'center','background':'#fff'}"
      >
        <el-table-column
          label="序号"
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="市州"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="县区"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="实施里程(km）"
          width="90">
        </el-table-column>
        <el-table-column
          prop="date"
          label="换板面积（m2）"
          width="90">
        </el-table-column>
        <el-table-column label="总投资">
          <el-table-column
            prop="name"
            label="合计"
            width="100">
          </el-table-column>
          <el-table-column
            label="国省总补助"
            >
            <el-table-column
              prop="name"
              width="120"
              label="国省补助资金总额（万元）"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              width="120"
              label="部补助资金（万元）"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              width="120"
              label="省补助资金（万元）"
            >
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="name"
            width="80"
            label="地方自筹"
          >
          </el-table-column>
        </el-table-column>
        <el-table-column label="年计划情况">
          <el-table-column
            prop="name"
            label="小计"
            width="90">
          </el-table-column>
          <el-table-column
            label="国省补助"
          >
            <el-table-column
              prop="name"
              width="120"
              label="国省补助资金（万元）"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              width="120"
              label="部补助资金（万元）"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              width="110"
              label="省补助资金（万元）"
            >
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="name"
            label="地方自筹"
          >
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  import tableData from '../assets/data/myjsondata'
  export default {
    methods: {
  tableRowClassName({row, rowIndex}){
        if (rowIndex === 0) {
          return 'warning-row premary';
        } else if (rowIndex === 3) {
          return 'success-row premary';
        }
        return 'premary';
      }
    },

    data() {
      return {
                tableData3:[]
      };
    },mounted(){
      this.bus.$on('search_result',(msg)=>{
        console.log("result");
        console.log(msg.data.tableData3);
       this.tableData3=msg.data.tableData3;
        console.log("/result");
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hse_result_table_div{

  }
  .hse_result_tablebox_div .el-table .premary{
    text-align: center;
  }
  .hse_result_tablebox_div .el-table .warning-row {
    background: #a4fbfd;
  }
  .hse_result_tablebox_div .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table--enable-row-hover .el-table__body tr.warning-row.premary:hover>td{
    background: #a4fbfd;
  }
  .el-table--enable-row-hover .el-table__body tr.premary:hover>td{
    background: #edf3fe;
  }

</style>
