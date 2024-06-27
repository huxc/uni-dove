import { definePreset } from '@unocss/core'

const remRE = /(-?[.\d]+)rem/g

export interface RemToRpxOptions {
  baseFontSize?: number
  unit?: 'px' | 'rem' | 'rpx'
}

export const unocssRemToRpx = definePreset((options: RemToRpxOptions = {}) => {
  const {
    unit = 'rpx',
    baseFontSize = 4,
  } = options

  return {
    name: 'unocss-plugin-rem-to-rpx',
    /**
     * 处理替换单位
     */
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (typeof value === 'string' && remRE.test(value))
          i[1] = value.replace(remRE, (_, p1) => `${p1 * baseFontSize}${unit}`)
      })
    },
  }
})

export default unocssRemToRpx
