// 明细查询  计划和规划建设表头
module.exports={
  /*
    计划
  */
  // 计划高速
  jh_highSpeed:[
            {name:'序号',dataIndex:'id',minWidth:'40',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'20',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]}
            ]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'50',children:[]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'行政等级',dataIndex:'xzdj',minWidth:'50',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'50',children:[]},
            {name:'建设规模(公里/延米)',dataIndex:'',minWidth:'60',children:[
              {name:'合计',dataIndex:'hjcd',minWidth:'50',children:[]},
              {name:'高速公路',dataIndex:'gsgllc',minWidth:'50',children:[]},
              {name:'一级公路',dataIndex:'yjgllc',minWidth:'50',children:[]},
              {name:'二级公路',dataIndex:'ejgllc',minWidth:'50',children:[]},
              {name:'三级公路',dataIndex:'sjgllc',minWidth:'50',children:[]},
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'60',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'60',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'60',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'60',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'60',children:[
                {name:'',dataIndex:'gstz',minWidth:'60',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'50',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'60',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'60',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'60',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'50',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'60',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'60',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'60',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'50',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'50',children:[]},
              {name:'银行贷款',dataIndex:'bpcjhyhdk',minWidth:'70',children:[]},
              {name:'招商引资',dataIndex:'bpcjhzsyz',minWidth:'50',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'60',children:[]},
              {name:'新增生产能力',dataIndex:'xzscnl',minWidth:'60',children:[]}
            ]},
            {name:'下年度建议计划',dataIndex:'',minWidth:'60',children:[
              {name:'投资',dataIndex:'xndztz',minWidth:'60',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'60',children:[
                {name:'',dataIndex:'xndgstz',minWidth:'60',children:[]},
                {name:'中央投资',dataIndex:'xndzytz',minWidth:'50',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xndzyjsnr',minWidth:'60',children:[]}
            ]},
            {name:'下下年度建议计划',dataIndex:'',minWidth:'60',children:[
              {name:'投资',dataIndex:'xxndztz',minWidth:'60',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'60',children:[
                {name:'',dataIndex:'xxndgstz',minWidth:'60',children:[]},
                {name:'中央投资',dataIndex:'xxndzytz',minWidth:'50',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xxndzyjsnr',minWidth:'60',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'60',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'90',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'90',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'50',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'50',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'60',children:[]}
  ],
  // 计划国省干线
  jh_guodao:[
            {name:'序号',dataIndex:'id',minWidth:'40',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'60',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'60',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'60',children:[]}
            ]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'路线编码',dataIndex:'lxbm',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'90',children:[]},
            {name:'行政等级',dataIndex:'xzdj',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            {name:'建设规模(公里/延米)',dataIndex:'',minWidth:'80',children:[
              {name:'合计',dataIndex:'hjcd',minWidth:'80',children:[]},
              {name:'高速公路',dataIndex:'gsgllc',minWidth:'80',children:[]},
              {name:'一级公路',dataIndex:'yjgllc',minWidth:'80',children:[]},
              {name:'二级公路',dataIndex:'ejgllc',minWidth:'80',children:[]},
              {name:'三级公路',dataIndex:'sjgllc',minWidth:'80',children:[]},
              {name:'四级公路',dataIndex:'sjgllc',minWidth:'80',children:[]},
              {name:'独立大桥',dataIndex:'qlcd',minWidth:'80',children:[]},
              {name:'独立隧道',dataIndex:'sdcd',minWidth:'80',children:[]},
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'80',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'gstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'80',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'80',children:[]},
              {name:'银行贷款',dataIndex:'bpcjhyhdk',minWidth:'80',children:[]},
              {name:'招商引资',dataIndex:'bpcjhzsyz',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'80',children:[]},
              {name:'新增生产能力',dataIndex:'xzscnl',minWidth:'80',children:[]}
            ]},
            {name:'下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'下下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xxndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xxndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xxndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xxndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'80',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'80',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'80',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'80',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 计划农村
  jh_nongchun:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]}
            ]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'路线编码',dataIndex:'lxbm',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            {name:'建设规模(公里/延米)',dataIndex:'',minWidth:'80',children:[
              {name:'合计',dataIndex:'hjcd',minWidth:'80',children:[]},
              {name:'一级公路',dataIndex:'yjgllc',minWidth:'80',children:[]},
              {name:'二级公路',dataIndex:'ejgllc',minWidth:'80',children:[]},
              {name:'三级公路',dataIndex:'sjgllc',minWidth:'80',children:[]},
              {name:'四级公路',dataIndex:'sjgllc',minWidth:'80',children:[]},
              {name:'桥梁',dataIndex:'qlcd',minWidth:'80',children:[]},
              {name:'隧道',dataIndex:'sdcd',minWidth:'80',children:[]},
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'80',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'gstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'80',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'80',children:[]},
              // {name:'银行贷款',dataIndex:'bpcjhyhdk',minWidth:'80',children:[]},
              // {name:'招商引资',dataIndex:'bpcjhzsyz',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'80',children:[]},
              {name:'新增生产能力',dataIndex:'xzscnl',minWidth:'80',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'80',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'80',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'80',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'80',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 计划客货站
  jh_kehuo:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]}
            ]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'项目类型',dataIndex:'xmlx',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'站场等级',dataIndex:'zcdj',minWidth:'80',children:[]},
            {name:'规模和能力',dataIndex:'',minWidth:'80',children:[
              {name:'占地面积(平方米)',dataIndex:'zdmj',minWidth:'80',children:[]},
              {name:'建筑面积(平方米)',dataIndex:'jzmj',minWidth:'80',children:[]},
              {name:'客运能力(年平均发送人次/日)',dataIndex:'kynl',minWidth:'80',children:[]},
              {name:'货运能力(年平均货物处理吨/日)',dataIndex:'hynl',minWidth:'80',children:[]}
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'80',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'gstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'80',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'80',children:[]}
            ]},
             {name:'下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'下下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xxndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xxndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xxndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xxndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'80',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'80',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'80',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'80',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 计划水运
  jh_shuiyun:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]}
            ]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'项目类型',dataIndex:'xmlx',minWidth:'80',children:[]},
            {name:'规模及主要建设内容',dataIndex:'jsgm',minWidth:'80',children:[]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'80',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'gstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'80',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'xzscnl',minWidth:'80',children:[]}
            ]},
             {name:'下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'下下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xxndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xxndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xxndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xxndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'80',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'80',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'80',children:[]},
              {name:'部资金承诺函',dataIndex:'zjcnhwh',minWidth:'80',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'80',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 计划z支持系统
  supportSysetem:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]}
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'项目类型',dataIndex:'xmlx',minWidth:'80',children:[]},
            {name:'规模及主要建设内容',dataIndex:'jsgm',minWidth:'80',children:[]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'jskgn',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jswgn',minWidth:'80',children:[]}
            ]},
            {name:'批复投资',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'gstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'zytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'累计至上批次底完成情况',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'spcljwcztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'spcljwcgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'spcljwczytz',minWidth:'80',children:[]}
              ]}
            ]},
            {name:'本年(本批次)建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'bpcjhztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'bpcjhgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'bpcjhzytz',minWidth:'80',children:[]}
              ]},
              {name:'地方自筹',dataIndex:'bpcjhdfzc',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'zyjsnr',minWidth:'80',children:[]},
              {name:'主要建设内容',dataIndex:'xzscnl',minWidth:'80',children:[]}
            ]},
             {name:'下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'下下年度建议计划',dataIndex:'',minWidth:'80',children:[
              {name:'投资',dataIndex:'xxndztz',minWidth:'80',children:[]},
              {name:'国省投资',dataIndex:'',minWidth:'80',children:[
                {name:'',dataIndex:'xxndgstz',minWidth:'80',children:[]},
                {name:'中央投资',dataIndex:'xxndzytz',minWidth:'80',children:[]}
              ]},
              {name:'主要建设内容',dataIndex:'xxndzyjsnr',minWidth:'80',children:[]}
            ]},
            {name:'前期工作情况',dataIndex:'',minWidth:'80',children:[
              {name:'工可或核准批复文号',dataIndex:'gkwh',minWidth:'80',children:[]},
              {name:'初设或施工图批复文号',dataIndex:'cswh',minWidth:'80',children:[]},
              {name:'部资金承诺函',dataIndex:'zjcnhwh',minWidth:'80',children:[]}
            ]},
            {name:'计划年份',dataIndex:'jhnf',minWidth:'80',children:[]},
            {name:'计划批次',dataIndex:'jhpc',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  /*
    规划
  */
  // 规划高速
  gh_highSpeed:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]},
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            {name:'建设规模(公里)',dataIndex:'jsgm',minWidth:'80',children:[]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'总投资(万元)',dataIndex:'ztz',minWidth:'80',children:[]},
            {name:'\"十一五\"总投资(万元)',dataIndex:'ztz115',minWidth:'80',children:[]},
            {name:'\"十二五\"总投资(万元)',dataIndex:'ztz125',minWidth:'80',children:[]},
            {name:'\"十三五\"总投资(万元)',dataIndex:'ztz135',minWidth:'80',children:[]},
            {name:'\"十四五\"总投资(万元)',dataIndex:'ztz145',minWidth:'80',children:[]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}          
  ],
  // 规划国省干线
  gh_guodao:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县区',dataIndex:'xian',minWidth:'80',children:[]},
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            {name:'行政等级',dataIndex:'xzdj',minWidth:'80',children:[]},
            {name:'路线编码',dataIndex:'',minWidth:'80',children:[
              {name:'旧',dataIndex:'jlxbm',minWidth:'80',children:[]},
              {name:'新',dataIndex:'lxbm',minWidth:'80',children:[]},
            ]},
            {name:'建设规模(公里/延米)',dataIndex:'',minWidth:'80',children:[
              {name:'合计',dataIndex:'jszlc',minWidth:'80',children:[]},
              {name:'一级公路',dataIndex:'yjgllc',minWidth:'80',children:[]},
              {name:'二级公路',dataIndex:'ejgllc',minWidth:'80',children:[]},
              {name:'三级公路',dataIndex:'sjgllc',minWidth:'80',children:[]},
              {name:'大桥',dataIndex:'qlcd',minWidth:'80',children:[]},
              {name:'隧道',dataIndex:'sdcd',minWidth:'80',children:[]},
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'投资情况(万元)',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省补助',dataIndex:'gstz',minWidth:'80',children:[]},
              {name:'地方自筹',dataIndex:'dfzc',minWidth:'80',children:[]}
            ]},
            {name:'纳入部规划',dataIndex:'',minWidth:'80',children:[
              {name:'',dataIndex:'sfbghnxm',minWidth:'80',children:[]},
              {name:'车购税',dataIndex:'zytz',minWidth:'80',children:[]},
            ]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 规划农村公路
  gh_nongchun:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县市区',dataIndex:'xian',minWidth:'80',children:[]},
              {name:'乡镇',dataIndex:'xzmc',minWidth:'80',children:[]},
              {name:'建制村',dataIndex:'jzcmc',minWidth:'80',children:[]},
              {name:'建制村编码',dataIndex:'jzcdm',minWidth:'80',children:[]},
              {name:'自然村',dataIndex:'zrcmc',minWidth:'80',children:[]}
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            //？新还是旧
            {name:'路线编码',dataIndex:'',minWidth:'80',children:[]},
            {name:'建设规模(公里)',dataIndex:'',minWidth:'80',children:[
              {name:'起点桩号',dataIndex:'qdzh',minWidth:'80',children:[]},
              {name:'终点桩号',dataIndex:'zdzh',minWidth:'80',children:[]},
              {name:'建设里程',dataIndex:'',minWidth:'80',children:[]}
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'投资情况(万元)',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省补助',dataIndex:'gstz',minWidth:'80',children:[]},
              {name:'地方自筹',dataIndex:'dfzc',minWidth:'80',children:[]}
            ]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 规划站场建设
  gh_kehuo:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县市区',dataIndex:'xian',minWidth:'80',children:[]},
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            {name:'地区性质',dataIndex:'areatype',minWidth:'80',children:[]},
            {name:'贫困类别',dataIndex:'poortype',minWidth:'80',children:[]},
            {name:'建设性质',dataIndex:'jsxz',minWidth:'80',children:[]},
            {name:'站场等级',dataIndex:'zcdj',minWidth:'80',children:[]},
            {name:'建设规模（㎡）',dataIndex:'',minWidth:'80',children:[
              {name:'占地面积',dataIndex:'zdmj',minWidth:'80',children:[]},
              {name:'建筑面积',dataIndex:'jzmj',minWidth:'80',children:[]}
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'投资情况(万元)',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省补助',dataIndex:'gstz',minWidth:'80',children:[]},
              {name:'地方自筹',dataIndex:'dfzc',minWidth:'80',children:[]}
            ]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 规划水运
  gh_shuiyun:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县市区',dataIndex:'xian',minWidth:'80',children:[]},
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            // ?
            {name:'建设规模(航道等级、里程、泊位性质、吨级、个数、能力等)',dataIndex:'',minWidth:'80',children:[]},
            {name:'港口工程',dataIndex:'',minWidth:'80',children:[
              {name:'泊位数量（个）',dataIndex:'mtbwgs',minWidth:'80',children:[]},
              {name:'吞吐能力（万吨）',dataIndex:'ttnl',minWidth:'80',children:[]}
            ]},
            {name:'航道工程',dataIndex:'',minWidth:'80',children:[
              {name:'航道等级',dataIndex:'hddj',minWidth:'80',children:[]},
              {name:'航道里程(公里)',dataIndex:'hdzlc',minWidth:'80',children:[]},
            ]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'投资情况(万元)',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省补助',dataIndex:'gstz',minWidth:'80',children:[]},
              {name:'地方自筹',dataIndex:'dfzc',minWidth:'80',children:[]}
            ]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ],
  // 规划支持系统
  jh_supportSysetem:[
            {name:'序号',dataIndex:'id',minWidth:'80',children:[]},
            {name:'项目编码',dataIndex:'sghxmbm',minWidth:'80',children:[]},
            {name:'项目所在地区',dataIndex:'',minWidth:'80',children:[
              {name:'市州',dataIndex:'shiqu',minWidth:'80',children:[]},
              {name:'县市区',dataIndex:'xian',minWidth:'80',children:[]},
            ]},
            {name:'项目名称',dataIndex:'xmmc',minWidth:'80',children:[]},
            // ?
            {name:'建设规模及主要建设内容',dataIndex:'',minWidth:'80',children:[]},
            {name:'建设年限',dataIndex:'',minWidth:'80',children:[
              {name:'开工年',dataIndex:'kgnf',minWidth:'80',children:[]},
              {name:'完工年',dataIndex:'jsnf',minWidth:'80',children:[]},
            ]},
            {name:'投资情况(万元)',dataIndex:'',minWidth:'80',children:[
              {name:'总投资',dataIndex:'ztz',minWidth:'80',children:[]},
              {name:'国省补助',dataIndex:'gstz',minWidth:'80',children:[]},
              {name:'地方自筹',dataIndex:'dfzc',minWidth:'80',children:[]}
            ]},
            {name:'备注',dataIndex:'bz',minWidth:'80',children:[]}
  ]
}