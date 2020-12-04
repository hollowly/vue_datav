<!--  -->
<template>
	<div>
		<!-- 飞线图 -->
		<!-- <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" /> -->
		<!-- 锥形图 -->
		<dv-conical-column-chart :config="configCone" class="configCone"/>
		<!-- </dv-full-screen-container> -->
		<!-- 数字翻牌器 -->
		<!-- <dv-digital-flop :config="config1" style="width:150px;height:100px;" /> -->
		<!-- 轮播表 -->
		<dv-scroll-board :config="configTable" class="configTable"/>
	</div>

</template>

<script>
export default {
	data () {
		return {
			configCone:{
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
					value: 71
				},
				{
					name: '驻马店',
					value: 66
				},
				{
					name: '新乡',
					value: 80
				},
				{
					name: '信阳',
					value: 35
				},
				{
					name: '漯河',
					value: 15
				}
			],
			img: [
				'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
				'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png',
			],
			showValue: true
			},

			configTable: {
				data: [
					['行1列1', '行1列2', '行1列3'],
					['行2列1', '行2列2', '行2列3'],
					['行3列1', '行3列2', '行3列3'],
					['行4列1', '行4列2', '行4列3'],
					['行5列1', '行5列2', '行5列3'],
					['行6列1', '行6列2', '行6列3'],
					['行7列1', '行7列2', '行7列3'],
					['行8列1', '行8列2', '行8列3'],
					['行9列1', '行9列2', '行9列3'],
					['行10列1', '行10列2', '行10列3']
				]
			},
		}
	},

}

</script>

<style>
	/* 柱状图 */
	.configCone {
		width:450px;
		height:250px;
		margin-left: 20px;
		margin-top:-180px;
	}
	/* 表格 */
	.configTable {
		width:500px;
		height:220px;
		transform: translate(30px,-160px);
	}
	
</style>