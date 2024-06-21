interface LoginForm {
  username: string
  password: string
}

interface User {
  id: number
  name: string
  gender: number
  age: number
  id_card: string
  email: string | null
  address: string
  status: number
  avatar: string | null
  created_at: string
  updated_at: string
}

interface Pagination<T> {
  currentPage: number
  isFirstPage: boolean
  isLastPage: boolean
  list: T[]
  nextPage: number
  pageCount: number
  previousPage: number | null
  totalCount: number
}

// 接口返回对象
interface ApiRes {
  code: number
  data: string | Record<string, any> | ArrayBuffer | Pagination<User>
  msg: string
  success: boolean
}

// 表单验证
interface ValidationResult {
  valid: boolean
  errors: any
}
