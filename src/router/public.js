export const publicRoutes = [
	{ path: '/', name: 'Home', component: () => import('../views/Home.vue') },
	{ path: '/scratter-plot', name: 'scratter-plot', component: () => import('../views/ScratterPlot.vue') },
	{ path: '/bar', name: 'bar-chart', component: () => import('../views/YearMesure.vue') },
	{ path: '/retied', name: 'combine-chart', component: () => import('../views/Retirement.vue') }
]