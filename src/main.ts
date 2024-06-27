import { createSSRApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerStore } from './store'
import store from '@/store/register'
import 'virtual:uno.css'

/**
 * createApp
 */
export function createApp() {
  const app = createSSRApp(App)
  app.use(router)
  app.use(store)

  // 注册pinia状态管理库
  registerStore()

  return {
    app,
  }
}
