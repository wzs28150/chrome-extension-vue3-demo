<template>
  <div class="index">
    <div class="inner">
      <h1 class="m_B20">chrome-extension-vue3-demo</h1>
      <p class="m_B20">使用vue开发谷歌插件的基础模板</p>
      <p>侧边栏</p>
    </div>
  </div>
</template>
<script setup>
const bookmarks = ref([])
async function init() {
  console.log('init')
  const tree = await chrome.bookmarks.getTree()
  if (tree.length > 0) {
    bookmarks.value = tree[0].children;
  }
  console.log(bookmarks.value);

}
init()
</script>
<style lang="scss" scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(@sidepanel/assets/bg.svg);
  background-size: cover;

  h1 {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    color: var(--el-color-primary);
    text-shadow: 0 0 2px var(--el-color-primary);

  }

  p {
    text-align: center;
  }
}
</style>