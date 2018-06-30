import axios from "axios";
// 明细查询分页
/*
  _this:组件this,page:页码,url:api,params:请求参数,
  success:成功的回调,isMaintain:养护还是建设 isPlan:计划还是规划
*/
function changePage(_this,page,url,params,success,isMaintain,isPlan){
	  var method='',arg,getParams;
	  params.per_page=20;
	  params.current_page=page;
	  // 养护
	  if(isMaintain){
	  	method="post";
	  	arg=params;
	  } else{
	  	// 建设
	  	method="get";
	  	getParams=getParamsChange(params,isPlan);
	  	arg={params:getParams};
	  }
	  _this.detailLoading=true;

	  // 请求
	  axios[method](url,arg).then(res=>{
	  	 console.log("分页结果",res);
	  	 _this.detailLoading=false;

	     if(res.data.code=="1"){
	     	if(res.data.info.total==0){
	     		_this.$alert("没有查询到数据", '温馨提示', {
		            confirmButtonText: '确定',
		            type: 'error',
		        })
		        _this.clearDetailtable();
	     	} else{
	     	  success(res.data.info);
	     	  method=="post"?_this.queryData=arg:_this.queryData=getParams;
	     	}

	     } else if(res.data.code=="0"){
            _this.$alert(res.data.msg, '温馨提示', {
	            confirmButtonText: '确定',
	            type: 'error',
	        })
	        _this.clearDetailtable();
	     }

	  }).catch(err => {
	  	 _this.detailLoading=false;
		 (err.response) && (_this.getXhrState(err, err.response.status));
	  })
}

// get方法参数转化
function getParamsChange(params,isPlan){
	params.autonomous_county=params.autonomous_county.length>0?params.autonomous_county.join(","):"";
	params.cast_poor=params.cast_poor.length>0?params.cast_poor.join(","):"";
	params.county_code=params.county_code.length>0?params.county_code.join(","):"";
	if(isPlan){
		params.plan_batch=params.plan_batch.length>0?params.plan_batch.join(","):"";
	}
    params.poor_type=params.poor_type.length>0?params.poor_type.join(","):"";
    params.road_level=params.road_level.length>0?params.road_level.join(","):"";
    return params;
}

var server={
	changePage:changePage,
	getParamsChange:getParamsChange
}
module.exports=server;