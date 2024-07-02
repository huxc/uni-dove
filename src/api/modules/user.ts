import type { ReqConfig } from '@/typings/module'
import http from '@/utils/uni-network/index'

/**
 * 180.100.200.14 登录
 */
export function login(data: loginDto, prop: ReqConfig = {}): Promise<ApiRes> {
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
export function getCustomers(data: PageParams, prop: ReqConfig = {}): Promise<ApiRes<Pagination<UserDto>>> {
  return http.request({
    data,
    ...prop,
    method: 'GET',
    domain: 'basics',
    url: '/customer',
  })
}

/**
 * api_user_getCustomerById
 * 获取单个客户信息
 */
export function getCustomerById(id: number, prop: ReqConfig = {}): Promise<ApiRes<UserDto>> {
  return http.request({
    ...prop,
    method: 'GET',
    domain: 'basics',
    url: `/customer/${id}`,
  })
}

/**
 * api_user_deleteCustomers
 * 删除客户
 */
export function deleteCustomers(data: deleteParams, prop: ReqConfig = {}): Promise<ApiRes> {
  return http.request({
    data,
    ...prop,
    method: 'delete',
    domain: 'basics',
    url: `/customer`,
  })
}
