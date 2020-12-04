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

		}
	},

}

</script>

<style scoped>

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

</style>