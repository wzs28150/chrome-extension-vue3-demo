<template>
  <div class="p_20">
    <h2 class="m_B20">设置</h2>
    <el-form label-width="auto" label-position="top">
      <el-form-item label="主题设置" @click="switchTheme">
        <!--<el-radio-group v-model="isDark" @change="beforeChange">
          <!~~ <el-radio-button label="自动" value="auto" /> ~~>
          <el-radio-button label="浅色" :value="false" />
          <el-radio-button label="深色" :value="true" />
        </el-radio-group>-->
        <el-switch v-model="isDark" :before-change="beforeChange" active-text="深色模式" inactive-text="浅色模式" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { useDarkMode } from '@devtools/utils/index';
const { isDark } = useDarkMode();
let resolveFn
const switchTheme = (event) => {
  const isAppearanceTransition =
    // @ts-expect-error
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition || !event) {
    resolveFn(true)
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  console.log(endRadius);

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    resolveFn(true)
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      }
    )
  })
}
const beforeChange = () => {
  return new Promise((resolve) => {
    resolveFn = resolve
  })
}
// const theme = chrome.devtools.panels.themeName
//   ? chrome.devtools.panels.themeName
//   : 'light'
// if (theme === 'dark') {
//   document.documentElement.classList.add('dark')
// }
</script>
