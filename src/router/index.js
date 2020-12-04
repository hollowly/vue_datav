import Vue from 'vue'
import VueRouter from 'vue-router'

const dataV = () =>import('../components/dataV')
const dataVflyline = () =>import('../components/dataVflyline')

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
		path:'/dataVflyline',
		component:dataVflyline
	}
]

const router = new VueRouter({
	routes,
	mode:"history"
})

export default router
