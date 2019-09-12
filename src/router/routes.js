import Main from '@/components/main'
export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/',
        redirect: '/home',
        component: Main,
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/article',
        component: Main,
        meta: {
            title: '文章管理'
        },
        children: [
            {
                path: 'post',
                component: () => import('@/views/arctical/post.vue'),
                meta: {
                    title: '文章发布'
                }
            },
            {
                path: 'view',
                component: Main,
                meta: {
                    title: '文章列表'
                }
            },
            {
                path: 'updata',
                component: Main,
                meta: {
                    title: '文章修改'
                }
            }
        ]
    }
]
