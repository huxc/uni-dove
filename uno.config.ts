import { transformerAttributify } from 'unocss-applet'
import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerAttributify({
      prefixedOnly: true,
      prefix: 'v3',
    }),
  ],
  rules: [
    /** 自定义规则 */
  ],
})