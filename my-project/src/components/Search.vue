<template>
  <div>
    <!--查询条件标题-->
      <p class="hse_searchcondition_search_p">选择查询条件</p>
    <!--/查询条件标题-->
    <!--查询条件选择框-->
    <div class="hse_searchcondition_content_div">
      <!--第一行工程行政计划-->
      <el-row class="hse_searchcondition_option_elrow">
        <!--工程类别-->
        <el-col :span="8">
              <el-col :span="8" class="hse_searchcondition_caption_toright">
                <span>工程类别:</span>
              </el-col>
              <el-col :span="13">
                <el-cascader
                  :options="ProjectType"
                  v-model="PT_selectedOptions"
                  @change="handleChange" style="width: 100%;">
                </el-cascader>
              </el-col>
        </el-col>
        <!--/工程类别-->
        <!--行政区域名称-->
        <el-col :span="8">
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span>行政区域名称:</span>
          </el-col>
          <el-col :span="13">
            <el-input v-model="cityValue" placeholder="请选择行政区域" readonly='true' id="xz_input"></el-input>
            <!--行政项的选择框-->
            <div class="hse_searchcodition_xzboxdown_div" v-show="cityOptionshow">
              <div class="hse_searchcodition_xzboxoption_div">
                <el-tree
                  :data="city"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[1]"
                  ref="tree"
                  :props="defaultProps" style="background:#f5f6f8;" id="xz_tree">
                </el-tree>
              </div>
              <p style="text-align: center;padding: 10px;">
                <el-button type="primary" plain @click="resetChecked">重置</el-button>
                <el-button type="primary" @click="getCheckedKeys">确定</el-button>
              </p>
            </div>
          </el-col>
          <!--/行政项的选择框-->
        </el-col>
        <!--/行政区域名称-->
        <!--计划或者规划,根据父组件通信获取-->
        <el-col :span="8">
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span class="demonstration" v-if="fid==1">规划:</span>
            <span class="demonstration" v-if="fid==0">计划:</span>
          </el-col>
          <!--规划-->
          <el-col :span="13"  v-if="fid==1">
            <el-select v-model="Plan_selectedOptions" placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in Plan"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <!--/规划-->
          <!--计划-->
          <el-col :span="13"  v-if="fid==0">
            <el-cascader
              :options="Invest"
              v-model="InvestValue"
              @change="handleChange" style="width: 100%">
            </el-cascader>
          </el-col>
          <!--/计划-->
        </el-col>
        <!--/计划或者规划-->
      </el-row>
      <!--/第一行-->
      <!--第二行区域贫困摘帽-->
      <el-row class="hse_searchcondition_option_elrow">
        <!--所属地区/区域-->
        <el-col :span="8">
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span class="demonstration">所属地区/区域:</span>
          </el-col>
          <el-col :span="13">
            <el-cascader
              :options="region"
              v-model="RG_selectedOptions"
              @change="handleChange" style="width: 100%;">
            </el-cascader>
          </el-col>
        </el-col>
        <!--/所属地区/区域-->
        <!--贫困级别-->
        <el-col :span="8">
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span class="demonstration">贫困级别:</span>
          </el-col>
          <el-col :span="13">
            <el-select v-model="PC_selectedOptions" multiple placeholder="请选择" style="width: 100%">
              <el-option
                v-for="item in PoorCategory"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-col>
        <!--/贫困级别-->
        <!--贫困县摘帽年份-->
        <el-col :span="8">
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span class="demonstration">贫困县摘帽年份:</span>
          </el-col>
          <el-col :span="13">
          <el-select v-model="PY_selectedOptions" multiple placeholder="请选择" style="width: 100%">
            <el-option
              v-for="item in PovertyYears"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-col>
        </el-col>
        <!--/贫困县摘帽年份-->
      </el-row>
      <!--/第二行-->
      <!--第三行-->
      <el-row class="hse_searchcondition_option_elrow">
        <el-col :span="8">
          <!--少数民族地区-->
          <el-col :span="8" class="hse_searchcondition_caption_toright">
            <span class="demonstration">少数民族地区:</span>
          </el-col>
          <el-col :span="13">
            <el-cascader
              :options="EthnicMinorities"
              v-model="EM_selectedOptions"
              @change="handleChange" style="width: 100%;">
            </el-cascader>
          </el-col>
          <!--/少数民族地区-->
        </el-col>
      </el-row>
      <!--/第三行-->
      <el-button type="primary" class="hse_searchcodition_el_button" @click="btn_search">查询</el-button>
    </div>
    <!--/查询条件选择框-->



  </div>
</template>
<script src="./searchcondition.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
