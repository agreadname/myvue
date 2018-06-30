module.exports = {
    //工程类别
    ProjectType:[
        {
            value: '1',
            label: '建设',
            children: [
                {
                    value: '101',
                    label: '高速公路项目',
                },
                {
                    value: '102',
                    label: '国省干线公路项目',
                    children: [
                        {
                            value: '10201',
                            label: '干线公路新改建'
                        },
                        {
                            value: '10202',
                            label: '红色旅游公路'
                        },
                    ],

                },
                {
                    value: '103',
                    label: '农村公路项目',
                    children: [
                        {
                            value: '10301',
                            label: '乡镇通硬化路'
                        },
                        {
                            value: '10302',
                            label: '建制村通硬化路'
                        },
                        {
                            value: '10303',
                            label: '农场通硬化路'
                        },
                        {
                            value: '10304',
                            label: '林区通硬化路'
                        },
                        {
                            value: '10305',
                            label: '重要县乡道改造'
                        },
                        {
                            value: '10306',
                            label: '一般县乡道改造'
                        },
                        {
                            value: '10307',
                            label: '连通工程'
                        },
                        {
                            value: '10308',
                            label: '撤并建制村通硬化路'
                        },
                        {
                            value: '10309',
                            label: '窄路面加宽'
                        },
                        {
                            value: '10310',
                            label: '边界路'
                        },
                        {
                            value: '10311',
                            label: '断头路'
                        },
                        {
                            value: '10312',
                            label: '资源产业路'
                        },
                        {
                            value: '10313',
                            label: '旅游通景路'
                        },
                        {
                            value: '10314',
                            label: '自然村通水泥（沥青）路'
                        },
                    ],

                },
                {
                    value: '104',
                    label: '客货站场项目',
                    children: [
                        {
                            value: '10401',
                            label: '综合客运枢纽'
                        },
                        {
                            value: '10402',
                            label: '物流园区'
                        },
                        {
                            value: '10403',
                            label: '市县客运站'
                        },
                        {
                            value: '10404',
                            label: '招呼站'
                        },
                    ],
                },
                {
                    value: '105',
                    label: '水运建设项目',
                    children: [
                        {
                            value: '10501',
                            label: '航道工程'
                        },
                        {
                            value: '10502',
                            label: '港口工程'
                        },
                        {
                            value: '10503',
                            label: '船舶标准化工程'
                        },
                        {
                            value: '10504',
                            label: '面上工程'
                        },
                        {
                            value: '10505',
                            label: '渡口码头改造'
                        },
                        {
                            value: '10506',
                            label: '便民码头水运民生工程'
                        },
                        {
                            value: '10507',
                            label: '锚地'
                        },
                        {
                            value: '10508',
                            label: '航道应急保畅'
                        },
                        {
                            value: '10509',
                            label: '水运交通支持保障系统'
                        },
                    ],
                },
                {
                    value: '106',
                    label: '支持系统'
                },
            ]
        },
        {
            value: '2',
            label: '养护',
            children: [
            	{
                    value: '201',
                    label: '高速公路',
                    disabled:true
               	},
                {
                    value: '202',
                    label: '普通公路',
                    children: [

                        {
                            value: '20201',
                            label: '路网结构',
                            children: [
                                {
                                    value: '2020101',
                                    label: '危桥改造'
                                },
                                {
                                    value: '2020102',
                                    label: '安全生命防护'
                                },
                                {
                                    value: '2020103',
                                    label: '病隧改造'
                                },
                                {
                                    value: '2020104',
                                    label: '灾害防治'
                                },
                            ]
                        },
                        {
                            value: '20202',
                            label: '大中修',
                            children: [
                                {
                                    value: '2020201',
                                    label: '普通干线大中修'
                                },
                                {
                                    value: '2020202',
                                    label: '灾毁重建',
                                    disabled:true
                                }

                            ]
                        },
                        {
                            value:'20203',
                            label:'服务区改造'
                        },
                        {
                            value:'20204',
                            label:'渡改桥'
                        }
                    ],
                },

            ]
        }
    ],
    //行政区域名称
    city: [
        {
           id:1, "value": '43', label: '湖南省',
            children:[
                {
                    value: '4301',
                    label: '长沙市',
                    id:2,
                    children: [
                        {id:16,value: '430102', label: '芙蓉区'},
                        {id:17,value: '430103', label: '天心区'},
                        {id:18,value: '430104', label: '岳麓区'},
                        {id:19,value: '430105', label: '开福区'},
                        {id:20,value: '430111', label: '雨花区'},
                        {id:21,value: '430112', label: '望城区'},
                        {id:22,value: '430121', label: '长沙县'},
                        {id:23,value: '430124', label: '宁乡市'},
                        {id:24,value: '430181', label: '浏阳市'}
                    ]
                },
                {
                    value: '4302',
                    label: '株洲市',
                    id:3,
                    children: [
                        {id:25,value: '430202', label: '荷塘区'},
                        {id:26,value: '430203', label: '芦淞区'},
                        {id:27,value: '430204', label: '石峰区'},
                        {id:28,value: '430211', label: '天元区'},
                        {id:29,value: '430221', label: '株洲县'},
                        {id:30,value: '430223', label: '攸县'},
                        {id:31,value: '430224', label: '茶陵县'},
                        {id:32,value: '430225', label: '炎陵县'},
                        {id:33,value: '430281', label: '醴陵市'}
                    ]
                },
                {
                    value: '4303',
                    label: '湘潭市',
                    id:4,
                    children: [

                        {id:34,value: '430302', label: '雨湖区'},
                        {id:35,value: '430304', label: '岳塘区'},
                        {id:36,value: '430321', label: '湘潭县'},
                        {id:37,value: '430381', label: '湘乡市'},
                        {id:38,value: '430382', label: '韶山市'}
                    ]
                },
                {
                    value: '4304',
                    label: '衡阳市',
                    id:5,
                    children: [

                        {id:39,value: '430405', label: '珠晖区'},
                        {id:40,value: '430406', label: '雁峰区'},
                        {id:41,value: '430407', label: '石鼓区'},
                        {id:42,value: '430408', label: '蒸湘区'},
                        {id:43,value: '430412', label: '南岳区'},
                        {id:44,value: '430421', label: '衡阳县'},
                        {id:45,value: '430422', label: '衡南县'},
                        {id:46,value: '430423', label: '衡山县'},
                        {id:47,value: '430424', label: '衡东县'},
                        {id:48,value: '430426', label: '祁东县'},
                        {id:49,value: '430481', label: '耒阳市'},
                        {id:50,value: '430482', label: '常宁市'}
                    ]
                },
                {
                    value: '4305',
                    label: '邵阳市',
                    id:6,
                    children: [

                        {id:51,value: '430502', label: '双清区'},
                        {id:52,value: '430503', label: '大祥区'},
                        {id:53,value: '430511', label: '北塔区'},
                        {id:54,value: '430521', label: '邵东县'},
                        {id:55,value: '430522', label: '新邵县'},
                        {id:56,value: '430523', label: '邵阳县'},
                        {id:57,value: '430524', label: '隆回县'},
                        {id:58,value: '430525', label: '洞口县'},
                        {id:59,value: '430527', label: '绥宁县'},
                        {id:60,value: '430528', label: '新宁县'},
                        {id:61,value: '430529', label: '城步苗族自治县'},
                        {id:62,value: '430581', label: '武冈市'}
                    ]
                },
                {
                    id:7,
                    value: '4306',
                    label: '岳阳市',
                    children: [

                        {id:63,value: '430602', label: '岳阳楼区'},
                        {id:64,value: '430603', label: '云溪区'},
                        {id:65,value: '430611', label: '君山区'},
                        {id:66,value: '430621', label: '岳阳县'},
                        {id:67,value: '430623', label: '华容县'},
                        {id:68,value: '430624', label: '湘阴县'},
                        {id:69,value: '430626', label: '平江县'},
                        {id:70,value: '430681', label: '汨罗市'},
                        {id:71,value: '430682', label: '临湘市'}
                    ]
                },
                {
                    id:8,
                    value: '4307',
                    label: '常德市',
                    children: [

                        {id:72,value: '430702', label: '武陵区'},
                        {id:73,value: '430703', label: '鼎城区'},
                        {id:74,value: '430721', label: '安乡县'},
                        {id:75,value: '430722', label: '汉寿县'},
                        {id:76,value: '430723', label: '澧县'},
                        {id:77,value: '430724', label: '临澧县'},
                        {id:78,value: '430725', label: '桃源县'},
                        {id:79,value: '430726', label: '石门县'},
                        {id:80,value: '430781', label: '津市市'}
                    ]
                },
                {
                    id:9,
                    value: '4308',
                    label: '张家界市',
                    children: [

                        {id:81,value: '430802', label: '永定区'},
                        {id:82,value: '430811', label: '武陵源区'},
                        {id:83,value: '430821', label: '慈利县'},
                        {id:84,value: '430822', label: '桑植县'}
                    ]
                },
                {
                    id:10,
                    value: '4309',
                    label: '益阳市',
                    children: [

                        {id:85,value: '430902', label: '资阳区'},
                        {id:86,value: '430903', label: '赫山区'},
                        {id:87,value: '430921', label: '南县'},
                        {id:88,value: '430922', label: '桃江县'},
                        {id:89,value: '430923', label: '安化县'},
                        {id:90,value: '430981', label: '沅江市'}
                    ]
                },
                {
                    id:11,
                    value: '4310',
                    label: '郴州市',
                    children: [

                        {id:91,value: '431002', label: '北湖区'},
                        {id:92,value: '431003', label: '苏仙区'},
                        {id:93,value: '431021', label: '桂阳县'},
                        {id:94,value: '431022', label: '宜章县'},
                        {id:95,value: '431023', label: '永兴县'},
                        {id:96,value: '431024', label: '嘉禾县'},
                        {id:97,value: '431025', label: '临武县'},
                        {id:98,value: '431026', label: '汝城县'},
                        {id:99,value: '431027', label: '桂东县'},
                        {id:100,value: '431028', label: '安仁县'},
                        {id:101,value: '431081', label: '资兴市'}
                    ]
                },
                {
                    id:12,
                    value: '4311',
                    label: '永州市',
                    children: [

                        {id:102,value: '431102', label: '零陵区'},
                        {id:103,value: '431103', label: '冷水滩区'},
                        {id:104,value: '431121', label: '祁阳县'},
                        {id:105,value: '431122', label: '东安县'},
                        {id:106,value: '431123', label: '双牌县'},
                        {id:107,value: '431124', label: '道县'},
                        {id:108,value: '431125', label: '江永县'},
                        {id:109,value: '431126', label: '宁远县'},
                        {id:110,value: '431127', label: '蓝山县'},
                        {id:111,value: '431128', label: '新田县'},
                        {id:112,value: '431129', label: '江华瑶族自治县'}
                    ]
                },
                {
                    id:13,
                    value: '4312',
                    label: '怀化市',
                    children: [

                        {id:113,value: '431202', label: '鹤城区'},
                        {id:114,value: '431221', label: '中方县'},
                        {id:115,value: '431222', label: '沅陵县'},
                        {id:116,value: '431223', label: '辰溪县'},
                        {id:117,value: '431224', label: '溆浦县'},
                        {id:118,value: '431225', label: '会同县'},
                        {id:119,value: '431226', label: '麻阳苗族自治县'},
                        {id:120,value: '431227', label: '新晃侗族自治县'},
                        {id:121,value: '431228', label: '芷江侗族自治县'},
                        {id:122,value: '431229', label: '靖州苗族侗族自治县'},
                        {id:123,value: '431230', label: '通道侗族自治县'},
                        {id:124,value: '431281', label: '洪江市'}
                    ]
                },
                {
                    id:14,
                    value: '4313',
                    label: '娄底市',
                    children: [

                        {id:125,value: '431302', label: '娄星区'},
                        {id:126,value: '431321', label: '双峰县'},
                        {id:127,value: '431322', label: '新化县'},
                        {id:128,value: '431381', label: '冷水江市'},
                        {id:129,value: '431382', label: '涟源市'}
                    ]
                },
                {
                    id:15,
                    value: '4331',
                    label: '湘西自治州',
                    children: [


                        {id:130,value: '433101', label: '吉首市'},
                        {id:131,value: '433122', label: '泸溪县'},
                        {id:132,value: '433123', label: '凤凰县'},
                        {id:133,value: '433124', label: '花垣县'},
                        {id:134,value: '433125', label: '保靖县'},
                        {id:135,value: '433126', label: '古丈县'},
                        {id:136,value: '433127', label: '永顺县'},
                        {id:137,value: '433130', label: '龙山县'}
                    ]
                }
            ],
        },
    ],

    //所属地区和区域
    region: [
        {
            value: '',
            label: '请选择',
        },
        {
            value: '全面建设小康社会四大区域',
            label: '全面建设小康社会四大区域',
            children: [
                {
                    value: '1',
                    label: '长株潭地区',
                },
                {
                    value: '4',
                    label: '环洞庭湖地区',
                },
                {
                    value: '3',
                    label: '大湘西地区',
                },
                {
                    value: ' 2',
                    label: '湘南地区',
                },
            ]
        },
        {
            value: '所属片区',
            label: '所属片区',
            children: [
                {
                    value: '2',
                    label: '武陵山片区',
                },
                {
                    value: '1',
                    label: '罗霄山片区',
                },
            ]
        },
        {
            value: '地区类别',
            label: '地区类别',
            children: [
                {
                    value: '1',
                    label: '一类地区',
                },
                {
                    value: '2',
                    label: '二类地区',
                },
                {
                    value: '3',
                    label: '三类地区',
                }]

        },

    ],
    //贫困类别
    PoorCategory:[
        {value: '1', label: '国家级贫困县'},
        {value: '2', label: '省级贫困县'},
        {value: '3', label: '非贫困县'},
    ],
    //贫困摘帽年份
    PovertyYears:[
        {value: '2016', label: '2016'},
        {value: '2017', label: '2017'},
        {value: '2018', label: '2018'},
        {value: '2019', label: '2019'},
        {value: '2020', label: '2020'},
    ],
    //少数民族地区
    EthnicMinorities: [
       // {value: [], label: '请选择'},
        {value: '1', label: '少数民族过半县'},
        {value: '2', label: '民族自治县'},
        {value: '3', label: '湘西自治州县'},
        {value: '4', label: '享受民族政策县'}

    ],
    //线路行政等级
    LineAdministrativeLevel:[
        {value: 'G', label: '国道'},
        {value: 'S', label: '省道'},
        {value: 'X', label: '县道'},
        {value: 'Y', label: '乡道'},
        {value: 'C', label: '村道'},
    ],
  //规划
  Plan:[
    {value: '十一五', label: '十一五'},
    {value: '十二五', label: '十二五'},
    {value: '十三五', label: '十三五'},
  ],
  //投资计划
  Invest:[
    {
      value: '2018',
      label: '2018',
      children:[
        {
          value: '01',
          label: '第一批'
        },{
          value: '02',
          label: '第二批'
        },{
          value: '03',
          label: '第三批'
        },
      ]
    },{
      value: '2017',
      label: '2017',
      children:[
        {
          value: '01',
          label: '第一批'
        },{
          value: '02',
          label: '第二批'
        },{
          value: '03',
          label: '第三批'
        },
      ]
    },{
      value: '2016',
      label: '2016',
      children:[
        {
          value: '01',
          label: '第一批'
        },{
          value: '02',
          label: '第二批'
        },{
          value: '03',
          label: '第三批'
        },
      ]
    }
  ],
}
