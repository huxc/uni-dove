import process from 'node:process'
import uni from '@dcloudio/vite-plugin-uni'
import ViteRestart from 'vite-plugin-restart'
import { envParse } from 'vite-plugin-env-parse'
import uniRouter from 'unplugin-uni-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import RemoveConsole from 'vite-plugin-remove-console'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniPlatform from '@uni-helper/vite-plugin-uni-platform'
import UniPlatformModifier from '@uni-helper/vite-plugin-uni-platform-modifier'
import { getAutoImport } from './custom-auto-import'

const isProduction = process.env.NODE_ENV === 'production'
/**
 * 添加vite插件
 */
export async function createVitePlugins() {
  const UnoCSS = (await import('unocss/vite')).default
  return [
    envParse({
      dtsPath: 'src/typings/env.d.ts',
    }),
    UniPages({
      routeBlockLang: 'json5',
      dts: 'src/typings/uni-pages.d.ts',
      subPackages: ['src/pages-sub'],
      exclude: ['**/components/**/*.*'],
    }),
    UniPlatform(),
    UniManifest(),
    uni(),
    UniPlatformModifier(),
    uniRouter(),
    AutoImport({
      imports: ['vue', 'uni-app', getAutoImport()],
      dts: 'src/typings/auto-import.d.ts',
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
    }),
    ViteRestart({
      restart: ['vite.config.[jt]s', './src/api/**.[tj]s'],
    }),
    UnoCSS(),
    ...(isProduction ? [RemoveConsole()] : []),
  ]
}
