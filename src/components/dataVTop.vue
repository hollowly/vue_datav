<!--  -->
<template>
	<div>
		<!-- <dv-full-screen-container> -->
		<dv-loading style="color:white">Loading...</dv-loading>
		<dv-decoration-5 />
		<dv-decoration-1 />
		<dv-decoration-5 />
		<dv-decoration-1 />
		<dv-decoration-5 />	
		<dv-decoration-1 />
		<dv-decoration-9>66%</dv-decoration-9>
		<dv-decoration-10 />
		<dv-decoration-11 >dv-decoration-11</dv-decoration-11>
		<dv-decoration-12></dv-decoration-12>
		<!-- 桃花运 -->
		<dv-charts :option="option" class="charts" />
		<dv-active-ring-chart :config="configBar" class="configBar"/>
		<dv-capsule-chart :config="configBar" class="row-data-bar"/>
		<!-- 水位图 -->
		<dv-water-level-pond :config="configWater" class="configWater" />
		<!-- 进度池 -->
		<dv-percent-pond :config="configProgress" class="configProgress"/>
	</div>
</template>

<script>
export default {
	data () {
		return {
			option:{
				title: {
					text: '你的桃花运',
					style: {
						fill: '#fff'
					}
				},
				series: [
					{
						type: 'gauge',
						data: [ { name: 'itemA', value: 99 } ],
						center: ['50%', '55%'],
						axisLabel: {
						formatter: '{value}%',
						style: {
							fill: '#fff'
						}
					},
					axisTick: {
						style: {
							stroke: '#fff'
						}
					},
						animationCurve: 'easeInOutBack'
					}
				]
			},

			configBar:{
				data: [
					{
						name: '周口',
						value: 55
					},
					{
						name: '南阳',
						value: 120
					},
					{
						name: '西峡',
						value: 78
					},
					{
						name: '驻马店',
						value: 66
					},
					{
						name: '新乡',
						value: 80
					}
				],
				digitalFlopStyle: {
					fontSize: 25,
					fill: 'rgb(13,231,194)'
				},
				colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
				unit: '单位',
				showValue: true
			},
				
			configWater: {
				data: [65, 45],
				shape: 'roundRect',
			},

			configProgress: {
				value: 66,
				borderWidth: 5,
				borderRadius: 10,
				borderGap: 5
			},
		}
	},

}

</script>

<style scoped>
	.barbox div{
		float: left !important;
	}
	div.dv-decoration-1 {
		width:200px;
		height:50px;
	}
	div.dv-decoration-5 {
		width:300px;
		height:40px;
	}
	div.dv-decoration-9 {
		width:150px;
		height:150px;
	}
	div.dv-decoration-10 {
		width:500px;
		height:5px;
		position: absolute;
		left: 15px;
		top: 290px;
	}
	div.dv-decoration-11 {
		width:200px;
		height:60px;
		transform: translate(0px,10px);
	}
	div.dv-decoration-12 {
		width:150px;
		height:150px;
	}

	div.dv-decoration-9, div.dv-decoration-9, div.dv-decoration-11,div.dv-decoration-10, div.dv-decoration-12 {
		margin-top: 50px;
	}

	/* 图表 */
	.charts,.configBar {
		width:300px;
		height:300px;
	}
	.row-data-bar {
		width:300px;
		height:200px;
		margin-top: 45px;
	}

	/* 水柱图 */
	.configWater {
		width:150px;
		height:200px;
		margin:0px 20px 0px -50px;
	}
	/* 进度条 */
	.configProgress {
		width:200px;
		height:100px;
		margin:40px 0px 0px 0px;
	}
</style>