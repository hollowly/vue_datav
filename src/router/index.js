import Vue from 'vue'
import VueRouter from 'vue-router'

const dataV = () =>import('../components/dataV')
const dataVflylineChart = () =>import('../components/dataVflylineChart')

Vue.use(VueRouter)

const routes = [
	{
		path:'',
		redirect:'/dataV'
	},
	{
		path:'/dataV',
		component:dataV
	},
	{
		path:'/dataVflylineChart',
		component:dataVflylineChart
	}
]

const router = new VueRouter({
	routes,
	mode:"history"
})

export default router
