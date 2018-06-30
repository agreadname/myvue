import ProjectCategory from '../assets/data/headerSearchData'
export default {
  name: 'App',
  data(){
    return {
      ProjectType:ProjectCategory.ProjectType,//工程类别
      city:ProjectCategory.city,//城市
      EthnicMinorities:ProjectCategory.EthnicMinorities,//所属地区
      region:ProjectCategory.region,//地区
      PoorCategory:ProjectCategory.PoorCategory,//贫困级别
      PovertyYears:ProjectCategory.PovertyYears,//脱贫年限
      Plan:ProjectCategory.Plan,//规划
      Invest:ProjectCategory.Invest,//投资计划
      InvestValue:[],//透支计划
      PT_selectedOptions:[],//工程类别
      RG_selectedOptions:[],//所属地区区域
      EM_selectedOptions:[],//少数民族地区
      CT_selectedOptions:[],//行政区域
      PC_selectedOptions:[],//贫困级别
      PY_selectedOptions:[],//贫困脱帽年份
      Plan_selectedOptions:[],//规划
      defaultProps: {//获取值
        children: 'children',
        label: 'label'
      },
      cityOptionshow:false,//控制行政区域的tree是否显示
      cityValue:'',//已选择的行政区域的值
    }
  },
  props:['fid'],
  mounted(){
    if(this.fid==0){
      console.log("invest_searchcondition");
    }else{
      console.log("plan_searchcondition");
    }
  },
  methods:{
    handleChange(value) {

    }, resetChecked() {//重置行政框内容
      this.$refs.tree.setCheckedKeys([]);
      this.cityValue="";
    }, getCheckedKeys() {//确定键获取行政框选择内容
      console.log(this.$refs.tree.getCheckedKeys());
      this.cityValue='已选择'+this.$refs.tree.getCheckedKeys().length+"个";
      this.cityOptionshow=false;
    },test(i){
      console.log(i);
      this. PlanOptionshow=true;
    },btn_search(){
      console.log(this.InvestValue);
      console.log(this.PT_selectedOptions);
      console.log(this.RG_selectedOptions);
      console.log(this.EM_selectedOptions);
      console.log(this.CT_selectedOptions);
      console.log(this.PC_selectedOptions);
      console.log(this.PY_selectedOptions);
      console.log(this.Plan_selectedOptions);
      this.$ajax.get("https://api.myjson.com/bins/10va6e*/").then(res=>{
          //兄弟通信，用于向Sresult发送信息，search_result是Sresult组件的定义在mounted的bus.$on(..)的函数名
          this.bus.$emit('search_result',res);
      }).catch(err=>{
        console.log(err);
      })

    }
  },
  created(){
    document.addEventListener("click",(e)=>{
      //input不能在js中直接添加click事件,必须用添加事件监听的方式
      if(e.target.id=="xz_input"||e.target.id=="xz_tree"){
        this.cityOptionshow=true;
      }else{
        this.cityOptionshow=false;
      }
    });


  }
}
