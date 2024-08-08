<template>
  <div class="index">
    <el-tree :data="bookmarks" :props="defaultProps" @node-click="handleNodeClick" />
  </div>
</template>
<script setup>
const defaultProps = {
  children: 'children',
  label: 'title',
}
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
  height: 100%;


}
</style>