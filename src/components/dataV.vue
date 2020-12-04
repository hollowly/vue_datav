<!--  -->
<template style='none'>
	<div class="barbox">
		<router-link to='dataVflylineChart'>
			<btn id="btn"></btn>
		</router-link>
		<dv-border-box-11 class="box">
			<!-- 上部分 -->
				<dataVTop></dataVTop>

			<!-- 中部分 -->
				<dataVmiddle></dataVmiddle>
			<!-- 下部分 -->
			<div>
				<dataVbottom></dataVbottom>
			</div>
		</dv-border-box-11>
	</div>
</template>
<script>
	import btn from './btn'
	import dataVTop from './dataVTop'
	import dataVmiddle from './dataVmiddle'
	import dataVbottom from './dataVbottom'
	export default {
		data() {
			return {
			}
		},

		components: {
			btn,
			dataVTop,
			dataVmiddle,
			dataVbottom,
		},

	}
</script>


<style>
	.barbox {
		width: 1500px;
		height: 1350px;
		margin: 0 auto;
	}
	.barbox div{
		float: left !important;
	}
	
	.box {
		width: 100%;
	}
</style>