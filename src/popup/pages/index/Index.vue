<template>
  <div class="index">
    <div class="inner">
      <h1 class="m_B10">chrome-extension-vue3-demo</h1>
      <p class="m_B10">使用vue开发谷歌插件的基础模板</p>
      <p class="m_B10">popup页面</p>

      <a @click="open">
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="2em" height="2em" data-v-87052479="">
          <path fill="currentColor"
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z">
          </path>
        </svg>

      </a>

    </div>
  </div>
</template>
<script setup>
import { useCreateTab } from '@chromeuse';
function open() {
  useCreateTab('https://github.com/wzs28150/chrome-extension-vue3-demo')
}
</script>
<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(@popup/assets/bg.svg);
  background-size: cover;

  h1 {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: var(--el-color-primary);
    text-shadow: 0 0 2px var(--el-color-primary);

  }

  p {
    text-align: center;
  }

  a {
    text-align: center;
    display: block;
  }
}
</style>