import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/signin'
	},
	{
		path:'/signin',
		component: () => import('../components/login/Login.vue')
	},
	{
		path: '/system',
		component: () => import('../components/system/System.vue'),
		children:[
			{
				path:'',
				redirect: 'devices'
			},
			{
				path:'platforms',
				meta: {
					requireAuth: true
				},
				component: () => import('../components/system/platforms/Platforms.vue')
			},
			{
				path:'devices',
				component: () => import('../components/system/Devices.vue'),
				meta: {
					requireAuth:true
				}
			}
		]
	}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})

router.beforeEach((to,from,next) => {
	if (to.meta.requireAuth) {
		if (to.path == '/system/devices') {
			if (localStorage.isLogedIn === 'true') {
				next()
			} else {
				next('/signin')
			}
		} else if (to.path == '/system/platforms') {
			if (localStorage.authority == 0) {
				next()
			} else {
				next('/system/devices')
			}
		}
	} else {
		next()
	}
})

export default router