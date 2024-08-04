import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import copy from 'rollup-plugin-copy'
export default defineConfig(({ mode, command }) => {
  const plugins = [
    vue(),
    autoImport({
      imports: ['vue', 'vue-router'],
      dts: false,
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    copy({
      targets: [
        { src: 'src/manifest.json', dest: 'dist' },
        { src: 'public/icon', dest: 'dist' },
        { src: 'public/*', dest: 'dist' },
      ],
      hook: 'writeBundle', // 在构建完成后复制文件
    }),
  ]
  return {
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src'),
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
      rollupOptions: {
        input: {
          devtools: path.resolve(__dirname, 'src/devtools.html'),
          popup: path.resolve(__dirname, 'src/popup.html'),
          background: path.resolve(__dirname, 'src/background/background.js'),
          content: path.resolve(__dirname, 'src/content/content.js'),
        },
        output: {
          entryFileNames: `js/[name].js`,
          chunkFileNames: `js/[name].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        },
      },
    },
    plugins,
    server: {
      port: 80,
      host: true,
      open: true,
    },
  }
})
