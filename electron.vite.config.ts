import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import serveStatic from 'serve-static'

export default defineConfig({
  main: {
    resolve: {
      alias: {
        '@main': resolve('src/main'),
      }
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@main': resolve('src/main')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@renderer/assets/index.scss" as *;`
        }
      }
    },
    server: {
      host:'0.0.0.0', // 设置为0.0.0.0，这样就可以在局域网内访问了
      port: 3000, // 在这里设置你想要的端口号
      proxy: {
        '/resources/images': {
          target: 'http://localhost:7000',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/resources/, '')
        },
      }
      // middleware: [
      //   (req, res, next) => {
      //     if (req.url.startsWith('/images')) {
      //       serveStatic(path.resolve(__dirname, 'public'))(req, res, next)
      //     } else {
      //       next()
      //     }
      //   }
      // ]
    },
  }
})
