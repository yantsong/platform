import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Mheader from '@/components/m-header/m-header'
import Help from '@/components/help/help'
import Login from '@/components/login/login'
import Setting from '@/components/setting/setting'
import History from '@/components/history/history'
import Wraning from '@/components/wraning/wraning'
import Myaccount from '@/components/myaccount/myaccount'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Wraning
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/history',
            name: 'History',
            component: History
        },
        {
            path: '/myaccount',
            name: 'Myaccount',
            component: Myaccount
        }
    ]
})