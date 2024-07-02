interface loginDto {
  password: string
  username: string
}

interface UserDto {
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

interface deleteParams {
  ids: number[]
}

interface PageParams {
  pageNum: number
  pageSize: number
  gender?: number
  age?: number
  idCard?: string
  name?: string
  createdStartAt?: string
  createdEndAt?: string
}
