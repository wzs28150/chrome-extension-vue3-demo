# chrome-extension-vue3-demo

## chorme 扩展官方的文档

> 具体扩展如何开发，可以参考下面的官方文档

https://developer.chrome.com/docs/extensions/get-started?hl=zh-cn

## 前言

> 本案例是使用 vue3 + vite 搭建的 chrome 扩展程序，主要探索将 pupup 页面、侧边栏页面、后台页面、内容脚本、消息传递等内容整合到一起，实现一个完整的扩展程序。

## 开发

```bash
// 安装依赖
pnpm install

// 开发模式
pnpm dev

// 打包
pnpm build
```

## 热更新

> 在每一个页面的部分，App.vue 文件，添加了如下代码

```JS
import hotReload from './hot-reload';
if (import.meta.env.MODE === 'watch') {
  hotReload({
    ui: import.meta.env.VITE_UI_HOT == 'true',
    web: import.meta.env.VITE_WEB_HOT == 'true'
  });
}
```

> 然后在 .env.watch 中进行配置,控制扩展的调试刷新。因为当刷新整个组件的时候，popup 页面会直接关闭，不方便页面 ui 的调试。所以当设置 VITE_UI_HOT = true 的时候，只刷新当前扩展的页面。

```env
# 调试UI，如果为true则不刷新整个组件，false则刷新整个组件
VITE_UI_HOT = true
# 调试时是否刷新网页
VITE_WEB_HOT = false
```
