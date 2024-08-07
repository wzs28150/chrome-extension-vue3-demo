<template>
  <div class="index">
    <div class="inner">
      <h1>chrome-extension-vue3-demo</h1>
      <p>使用vue开发谷歌插件的基础模板</p>
    </div>
  </div>
</template>
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
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
}
</style>