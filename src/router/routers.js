// 管理整个项目的路由

const Login = ()=>import('@/pages/login/login.vue'),//登录
    Index = ()=>import('@/pages/index/index.vue'), //首页
    Broadcast = ()=>import('@/pages/broadcast/broadcast.vue'),   //新闻列表
    Password = ()=>import('@/pages/password/password.vue'),  //修改密码
    Sms = ()=>import('@/pages/sms/sms.vue'),   //发送短信页面
    Add = ()=>import('@/pages/add/add.vue'),   //添加发送人员
    Details = ()=>import('@/pages/details/details')


export default{
    routes: [
		{
			path: '/',
		    name: 'Login',
            component: Login,
        },{
            path: '/index',
		    name: 'Index',
            component: Index,
            redirect: '/broadcast',
            children: [
                {
                    path: '/broadcast',
                    name: 'Broadcast',
                    component: Broadcast
                },{
                    path: '/password',
                    name: 'Passsword',
                    component: Password
                },{
                    path: '/sms',
                    name: 'Sms',
                    component: Sms
                }
            ]
        },{
            path: '/add',
            name: 'Add',
            component: Add
        },{
            path: '/details',
            name: 'Details',
            component: Details
        }
    ]
}