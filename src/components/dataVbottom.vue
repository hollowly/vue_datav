<!--  -->
<template>
	<div>
		<dv-scroll-ranking-board :config="configRanking" class="configRanking" />
		<dataVflylineChart class="flylineChart"/>
	</div>
</template>

<script>
import dataVflylineChart from './dataVflylineChart'

export default {
	data () {
		return {
			configRanking: {
				data: [
					{
						name:'南阳',
						value: 120
					},
					{
						name:'新乡',
						value: 80
					},
					{
						name:'西峡',
						value: 120
					},
					{
						name:'驻马店',
						value: 66
					},
					{
						name:'周口',
						value: 55
					},
					{
						name:'信阳',
						value: 35
					},
					{
						name:'漯河',
						value: 15
					}
				],
				unit: '单位',
				valueFormatter ({ value }) {
					// console.warn(arguments)
					const reverseNumber = (value + '').split('').reverse()
					let valueStr = ''
					while (reverseNumber.length) {
						const seg = reverseNumber.splice(0, 3).join('')
						valueStr += seg
						if (seg.length === 3) valueStr += ','
					}
					return valueStr.split('').reverse().join('')
				}
			},
		}
	},
	components: {
		dataVflylineChart
	}

}

</script>

<style scoped>
.configRanking {
		width:500px;
		height:300px;
		transform:translate(30px,-100px);
	}
	.flylineChart {
		transform: translate(100px,-140px);
	}
</style>