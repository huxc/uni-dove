import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import unocssRemToRpx from './src/plugin/unocss-rem-to-rpx'

export default defineConfig({
  presets: [
    presetUni({
      remRpx: {
        baseFontSize: 4,
        screenWidth: 750, // 默认350
      },
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    unocssRemToRpx(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  rules: [
    /** 自定义规则 */
  ],
})
