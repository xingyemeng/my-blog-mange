import Main from '@/components/main'
export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/',
        redirect: 'home',
        component: Main,
        meta: {
            hideMenu: true
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/Home.vue'),
                meta: {
                    title: '首页'
                }
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
                name: 'post',
                component: () => import('@/views/arctical/post.vue'),
                meta: {
                    title: '文章发布'
                }
            },
            {
                path: 'view',
                name: 'view',
                component: Main,
                meta: {
                    title: '文章列表'
                }
            },
            {
                path: 'updata',
                name: 'update',
                component: Main,
                meta: {
                    title: '文章修改'
                }
            }
        ]
    },
    {
        path: '/auth',
        component: Main,
        meta: {
            title: '权限管理',
            access: ['admin']
        },
        children: [
            {
                path: 'roleMange',
                name: 'roleMange',
                component: () => import('@/views/auth/RoleMange'),
                meta: {
                    title: '角色管理'
                }
            },
            {
                path: 'userMange',
                name: 'userMange',
                component: Main,
                meta: {
                    title: '用户管理'
                }
            }
        ]
    }
]
