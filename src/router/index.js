import Vue from 'vue'
import VueRouter from 'vue-router'

const dataV = () =>import('../components/dataV')
const dataVconent = () =>import('../components/dataVconent')

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
		path:'/dataVconent',
		component:dataVconent
	}
]

const router = new VueRouter({
	routes,
	mode:"history"
})

export default router
