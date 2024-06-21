import pages from 'uni-router-routes'
import { createRouter } from 'uniapp-router-next'

const router = createRouter({
  routes: [
    ...pages,
    // 通配符，一般用于匹配不到路径跳转404页面
    {
      path: '*',
      // eslint-disable-next-line jsdoc/require-jsdoc
      redirect: () => {
        // 可返回{ name: '404' }，{ path: '/pages/404/404' }， '/pages/404/404'
        return { name: '404' }
      },
    },
  ],
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line node/prefer-global/process
  platform: process.env.UNI_PLATFORM,
  h5: {},
})
export default router
