import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
/*import Index from '@/views/Index'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Log from '@/views/Log'
import MessageBoard from '@/views/MessageBoard'
import BlogWrite from '@/views/blog/BlogWrite'
import BlogView from '@/views/blog/BlogView'
import BlogAllCategoryTag from '@/views/blog/BlogAllCategoryTag'
import BlogCategoryTag from '@/views/blog/BlogCategoryTag'*/


import {Message} from 'element-ui';


import store from '@/store'

import {getToken} from '@/request/token'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/write/:id?',
      component: r => require.ensure([], () => r(require('@/views/blog/BlogWrite')), 'blogwrite'),
      meta: {
        requireLogin: true
      },
    },
		{
		  path: '/userspace/:id',
		  component: r => require.ensure([], () => r(require('@/views/BSDNUserSpace')), 'userspace'),
		},
    {
      path:'/userspace/fans/:id',
      component: r => require.ensure([], () => r(require('@/views/Platefans')), 'index'),
    },
    
    {
      path:'/search/user/:content',
      component: r => require.ensure([], () => r(require('@/views/searchuser')), 'index'),
    },
    {
      path:'/search/article/:content',
      component: r => require.ensure([], () => r(require('@/views/searcharticle')), 'index'),
    },
    {
      path:'/userspace/favors/:id',
      component: r => require.ensure([], () => r(require('@/views/Platefavors')), 'index'),
    },
		{
		  path: '/',
      // component: r => require.ensure([], () => r(require('@/views/BSDNUserSpace')), 'index')
      // component: r => require.ensure([], () => r(require('@/views/PlatePython')), 'index')
      component: r => require.ensure([], () => r(require('@/views/Plateindex')), 'index')
		},

    {
      path: '',
      name: 'Home',
      component: Home,
      children: [
     //    {
     //      path: '/',
     //      component: r => require.ensure([], () => r(require('@/views/Index')), 'index')
					// // component: r => require.ensure([], () => r(require('@/views/BSDNIndex')), 'index')
					// // component: r => require.ensure([], () => r(require('@/views/BSDNUserSpace')), 'index')
     //    },
        
        {
          path: '/log',
          component: r => require.ensure([], () => r(require('@/views/Log')), 'log')
        },
        {
          path: '/archives/:year?/:month?',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogArchive')), 'archives')
        },
        {
          path: '/messageBoard',
          component: r => require.ensure([], () => r(require('@/views/MessageBoard')), 'messageboard')
        },
        {
          path: '/view/:id',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogView')), 'blogview')
        },
        {
          path: '/:type/all',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogAllCategoryTag')), 'blogallcategorytag')
        },
        {
          path: '/:type/:id',
          component: r => require.ensure([], () => r(require('@/views/blog/BlogCategoryTag')), 'blogcategorytag')
        }
      ]
    },
    {
      path: '/login',
      component: r => require.ensure([], () => r(require('@/views/Login')), 'login')
    },
    {
      path: '/userinfo',
      component: r => require.ensure([], () => r(require('@/views/userInfos')), 'log')
    },
    {
      path: '/register',
      component: r => require.ensure([], () => r(require('@/views/Register')), 'register')
    },

		// {
		//   path: '/',
		//   component: r => require.ensure([], () => r(require('@/views/BSDNIndex')), 'index')
    // },
    // {
    //   path: '/searchresult',
    //   component: r => require.ensure([], () => r(require('@/views/SearchResult')), 'log')
    // },
  ],

})

router.beforeEach((to, from, next) => {
  // alert(3);
  if (getToken()) {

    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.state.account.length === 0) {
        // alert(5);
        store.dispatch('getUserInfo').then(data => { //获取用户信息
          next()
        }).catch(() => {
          // alert("bbb");
          next({path: '/'})
        })
      } else {
        next()
      }
    }
  } else {
    if (to.matched.some(r => r.meta.requireLogin)) {
      // alert(6);
      Message({
        type: 'warning',
        showClose: true,
        message: '请先登录哦'
      })

    }
    else {
      next();
    }
  }
})


export default router
