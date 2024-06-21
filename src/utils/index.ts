/**
 * 获取类型
 */
export function typeOf(obj: any): string {
  const toString = Object.prototype.toString
  const map: { [key: string]: string } = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  }
  return map[toString.call(obj)] || 'unknown'
}

/**
 * 判断空对象
 */
export function isObjEmpty(obj: any): boolean {
  return !!obj && obj.constructor === Object && Object.keys(obj).length === 0
}

/**
 * 深拷贝
 */
export function deepCopy<T>(data: T): T {
  const t = typeOf(data)
  let o: any

  if (t === 'array') {
    o = []
    for (let i = 0; i < (data as any[]).length; i++) {
      o.push(deepCopy((data as any[])[i]))
    }
  }
  else if (t === 'object') {
    o = {}
    for (const i in data as object) {
      if (Object.prototype.hasOwnProperty.call(data, i)) {
        o[i] = deepCopy((data as { [key: string]: any })[i])
      }
    }
  }
  else {
    return data
  }

  return o as T
}
