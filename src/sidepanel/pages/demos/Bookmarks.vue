<template>
  <div class="index">
    <el-tree :data="bookmarks" :props="defaultProps" style="max-width: 100vw">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span class="label">{{ node.label }}</span>
          <span>
            <el-button size="mini" v-if="data.url" :icon="Link" type="primary" @click="open(data.url)" link></el-button>
            <el-button size="mini" :icon="Delete" type="danger" link></el-button>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>
<script setup>
import {
  Delete,
  Link,
} from '@element-plus/icons-vue'
const defaultProps = {
  children: 'children',
  label: 'title',
}
const bookmarks = ref([])
function open(url) {
  chrome.tabs.create({ url })
}
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
  background-color: #fff;
  height: 100%;

  :deep(.el-tree) {
    --el-tree-node-content-height: 40px;
  }
}

.custom-tree-node {
  flex: 1;
  max-width: calc(100% - 36px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;

  .label {
    display: block;
    width: calc(100% - 62px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>