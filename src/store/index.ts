import { useUserStore } from './modules/userStore'

const appStore: Record<string, any> = {}

/**
 * 注册app状态库
 */
export function registerStore() {
  appStore.userStore = useUserStore()
}

export default appStore
