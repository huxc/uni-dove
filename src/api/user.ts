import http from '@/utils/uni-network/index'

/**
 * 180.100.200.14 登录
 */
export function login(data: any, prop = {}) {
  return http.request({
    data,
    ...prop,
    method: 'post',
    domain: 'basics',
    url: '/users/login',
  })
}

/**
 * api_user_getCustomers
 * 获取客户信息列表
 */
export function getCustomers(data: any, prop = {}) {
  return http.request({
    data,
    ...prop,
    method: 'GET',
    domain: 'basics',
    url: '/customer',
  })
}

/**
 * api_user_deleteCustomers
 * 删除客户
 */
export function deleteCustomers(data: any, prop = {}) {
  return http.request({
    data,
    ...prop,
    method: 'delete',
    domain: 'basics',
    url: `/customer`,
  })
}
