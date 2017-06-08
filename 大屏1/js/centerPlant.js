var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false}
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};

/*** 资源使用占比*/
if(document.getElementById('zwjzjf')!=null){
var zwjzjf = echarts.init(document.getElementById('zwjzjf')); 
 zwjzjf.setOption({
	 color:[ '#F9F900','#00DB00']  ,
     title: {
        text: '资源使用占比',
        x: 'center',
        y: 'center',
        itemGap: 20,
        textStyle : {
            color : 'rgba(30,144,255,0.8)',
            fontFamily : '微软雅黑',
            fontSize : 18,
            fontWeight : 'bolder'
        }
    },
    tooltip : {
        show: true,
        formatter: "{b} <br/> {a}: {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : document.getElementById('zwjzjf').offsetWidth / 2,
        y : 0,
        itemGap:12,
        data:['VIP机房','整机柜'],
		textStyle: {
            color: '#fff'          // 图例文字颜色
        }
    },
    series : [
        {
            name:'已用',
            type:'pie',
            clockWise:false,
            radius : [75, 95],
            itemStyle : dataStyle,			
            data:[
                {
                    value:6,
                    name:'VIP机房'
                },
                {
                    value:2,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'剩余',
            type:'pie',
            clockWise:false,
            radius : [55, 75],
            itemStyle : dataStyle,
            data:[
                {
                    value:300, 
                    name:'整机柜'
                },
                {
                    value:1200,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }
    ]
});
}

/** 机房设备统计(二级)*/
if(document.getElementById('jzjfejsb')!=null){
 var jzjfejsb = echarts.init(document.getElementById('jzjfejsb')); 
 jzjfejsb.setOption({
	color:[ '#0e79df','#1419bb','#349933','#f1960a','#e51400','#00FFFF']  ,
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
       series : [
        {
            name:'机房设备',
            type:'pie',
            radius : [30,100],
            center: ['50%', '50%'],
			
            data:[
                {value:3854, name:'服务器'},
                {value:1820, name:'交换机'},
				{value:980, name:'防火墙'},
                {value:360, name:'UPS'},
				{value:240, name:'空调'},
                {value:560, name:'监控'}
            ].sort(function (a, b) { return a.value - b.value}),
                             
        }
    ]
});
}

/***托管资产分类统计*/
if(document.getElementById('jzjferzc')!=null){
var jzjferzc = echarts.init(document.getElementById('jzjferzc'),'shine'); 
 jzjferzc.setOption({
    //backgroundColor: '#2c343c',
    title: {
        text: '托管资产',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
	legend: {
        x : 'center',
        y : 'bottom',
        data:['服务器','交换机','防火墙'],
		textStyle: {
            color: '#fff'          // 图例文字颜色
        }
    },
	color:[ '#FFFF33','#33FF33','#00AAAA']  ,
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
       series : [
        {
            name:'托管资产',
            type:'pie',
            radius : [30, 90],
			roseType : 'radius',
            center: ['60%', '50%'],
			label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
			},
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:2854, name:'服务器'},
                {value:1820, name:'交换机'},
				{value:1380, name:'防火墙'}
            ].sort(function (a, b) { return a.value - b.value})                                
        }
    ]
});
}



/** 弹出机房设备*/
 if(document.getElementById('tcjfsb')!=null){
	var tcjfsb = echarts.init(document.getElementById('tcjfsb')); 
    option={
    	title : {
        text: '机柜体用占比统计',
        subtext: '',
        x:'center',
        textStyle:{
		    fontSize: 18,
		    fontWeight: 'bolder',
		    color: '#fff'
		}  
    },
	backgroundColor: 'rgba(4, 72, 137,0.8)',
	color:[ '#d54d35','#18a2e0','#f1960a']  ,
	tooltip : {
        trigger: 'item ',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
//      data: ['服务器', '交换机'],
//		textStyle: {
//          color: '#fff'          // 图例文字颜色
//      }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        name : '数量',
		axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }, 
        type: 'value',
        
        max:400
//      splitNumber:8
    },
    xAxis: {
        type: 'category',
		axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }, 
        data: ['301机房','302机房','303机房','304机房','305机房']
    },
    series: [
        {
            name: '服务器',
            type: 'bar',
            itemStyle: {normal: {
				label : {show:true,position:'top',formatter:function(a,b,c){
					return a.value/4+'%';
				}}
			}},
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [240, 80, 160, 320, 400],
        },
        {
            name: '交换机',
            type: 'bar',
            stack: '总量',
            itemStyle: {normal: {
				label : {show:true,position:'top',formatter:function(a,b,c){
					return '';
				}}
			}},
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [160, 320, 240, 80, 0]
        }
//      {
//          name: '防火墙',
//          type: 'bar',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'insideRight'
//              }
//          },
//          data: [22, 18, 19, 23, 29]
//      }
    ]
};


   tcjfsb.setOption(option);
 }
 
