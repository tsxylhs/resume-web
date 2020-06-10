import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from './layout/Layout'

export const constantRouterMap = [
    {
        path: '/404',
        name: 'notFound',
        component: () => import('./404'),
        hidden: true
    }
]

export const menuMap = [
    {
        path: '',
        component: Layout,
        name: 'overview',
        meta: {title: '概览', icon: 'settings'},
        children: [
            {
                path: 'overview/home',
                name: 'overview.home',
                meta: {
                    title: '概览',
                    icon: 'settings',
                    permissions: ['overview.home']
                },
                component: () => import('./overview/Overview')
            }
        ]
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({y: 0}),
    routes: constantRouterMap
})
