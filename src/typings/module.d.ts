import type { UnConfig } from '@uni-helper/uni-network'

export interface ReqConfig extends Omit<UnConfig, keyof UnConfig> {
  isMsg?: boolean // 是否自动弹出错误
  domain?: string // 多服务域名
  isLoading?: boolean // 是否全局loading
  cusBaseUrl?: string // 自定义域名
}
