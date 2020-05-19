<template>
	<div class="holder">
		<div class="wraper clearfix">
			<h4>设备月度故障率总览<span>（最近1月）</span></h4>
			<div class="chart">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Devices',
		mounted() {
			this.drawChart()
		},
		methods: {
			drawChart() {
				let chart = this.$echarts.init(document.getElementsByClassName('chart')[0])
				let option = {
				    title: {
				        text: ''
				    },
				    legend:{
				        itemGap: 50,
				        bottom: '5%',
				        left: 'center'
				    },
				    tooltip: {
				        trigger: 'item'
				    },
				    grid: {
								top: '15%',
				        bottom: '25%',
								left: 20,
								right: 40,
				        containLabel: true,
				    },
				    xAxis: {
				        data: ["产品销售事业部","KA事业部","渠道事业部","冷链事业部"],
				        axisTick: {
				            show: false
				        },
				        axisLine: {
				            lineStyle: {
				                color: '#e6ebf2',
				                width: 1
				            }
				        },
				        axisLabel: {
				            textStyle: {
				                color: '#606266'
				            }
				        }
				    },
				    yAxis: [{
				        type:'value',
				        min:0,
				        max:100,
				        axisTick: {
				            show: false
				        },
				        axisLabel: {
				            formatter: function(value){return value>0?value+'%':value},
				            textStyle: {
				                color: '#606266',
				                fontSize: '12px'
				            }
				        },
				        splitLine: {
				            show:true,
				            lineStyle: {
				                color: '#e6ebf2',
				                type: 'dotted',
				                width: 1
				            }
				        },
				        axisLine: {
				            lineStyle: {
				                color: '#e6ebf2'
				            }
				        }
				    },{
				        axisLine: {
				            lineStyle: {
				                color: '#e6ebf2'
				            }
				        }
				    }],
				    series: [{
				        name:"当月",
				        type: 'bar',
				        data: [60,60,60,60],
				        color: '#5eadfe',
								itemStyle: {
									barBorderRadius: [3,3,0,0]
								},
				        barWidth: 30,
								barGap: '100%',
				        markPoint: {
				            symbol: 'rect',
				            symbolSize: [40,25],
				            symbolOffset: [0,"-100%"],
				            data: [{
				                name: 'month',
				                coord: [0,60]
				            },{
				                name: 'month',
				                coord: [1,60]
				            },{
				                name: 'month',
				                coord: [2,60]
				            },{
				                name: 'month',
				                coord: [3,60]
				            }],
				            label: {
				                formatter: '60%'
				            }
				        }
				    },{
				        name: "当季度",
				        type: "bar",
				        data: [80,80,80,80],
				        color: '#66d8d7',
				        barWidth: 30,
								itemStyle: {
									barBorderRadius: [3,3,0,0]
								},
				        markPoint: {
				            symbol: 'rect',
				            symbolSize: [40,25],
				            symbolOffset: [0,"-100%"],
				            data: [{
				                name: 'quater',
				                coord: [0,80]
				            },{
				                name: 'quater',
				                coord: [1,80]
				            },{
				                name: 'quater',
				                coord: [2,80]
				            },{
				                name: 'quater',
				                coord: [3,80]
				            }],
										label: {
										    formatter: '80%'
										}
				        }
				    },{
				        name: "当年",
				        type: "bar",
				        data: [46,46,46,46],
				        color: '#eec17d',
				        barWidth: 30,
								itemStyle: {
									barBorderRadius: [3,3,0,0]
								},
				        markPoint: {
				            symbol: 'rect',
				            symbolSize: [40,25],
				            symbolOffset: [0,"-100%"],
				            data: [{
				                name: 'year',
				                coord: [0,46]
				            },{
				                name: 'year',
				                coord: [1,46]
				            },{
				                name: 'year',
				                coord: [2,46]
				            },{
				                name: 'year',
				                coord: [3,46]
				            }],
										label: {
										    formatter: '46%'
										}
				        }
				    }]
				};
				chart.setOption(option)
			}
		}
	}
</script>

<style scoped>
	.holder {
		padding: 10px;
		background-color: #dae1eb;
		width: 100%;
		min-width: 800px;
	}
	.wraper {
		background-color: #fff;
		width: 100%;
	}
	.wraper>h4 {
		padding: 20px 20px;
	}
	.wraper>h4>span {
		font-size: 14px;
	}
	.chart {
		width: 100%;
		height: 556px;
		max-width: 1150px;
	}
</style>