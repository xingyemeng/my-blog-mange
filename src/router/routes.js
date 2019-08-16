export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue')
    }
]
