<template>
  <div class="index" v-loading="loading">
    <el-tree :data="bookmarks" :props="defaultProps" node-key="id" :default-expanded-keys="expanded"
      style="max-width: 100vw" ref="tree" @node-expand="handleNodeExpand" @node-collapse="handleNodeCollapse">
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span class="label">{{ node.label }}</span>
          <span>
            <el-button size="mini" v-if="data.url" :icon="Link" type="primary" @click="open(data.url)" link></el-button>
            <el-button size="mini" v-if="(data.children && data.children.length == 0) || !data.children" :icon="Delete"
              type="danger" link @click="handleRemove(data)"></el-button>
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
import { useCreateTab, useGetBookmarksTree, useRemoveBookmark, watchBookmark } from '@chromeuse';

const loading = ref(false)
const defaultProps = {
  children: 'children',
  label: 'title',
}
const tree = ref(null)
const expanded = ref([])
const bookmarks = ref([])
function open(url) {
  useCreateTab(url)
}

function handleNodeExpand(data) {
  // 当节点展开时，将节点ID添加到expandedNodes数组中
  if (!expanded.value.includes(data.id)) {
    expanded.value.push(data.id);
  }
  // 可以在这里做其他处理
}

function handleNodeCollapse(data) {
  // 当节点折叠时，从expandedNodes数组中移除节点ID
  const index = expanded.value.indexOf(data.id);
  if (index > -1) {
    expanded.value.splice(index, 1);
  }
}

async function handleRemove(data) {
  await useRemoveBookmark({ title: data.title })
}

async function getTree() {
  loading.value = true
  bookmarks.value = await useGetBookmarksTree()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

async function init() {
  getTree()
  await watchBookmark(getTree)
}
init()


</script>
<style lang="scss" scoped>
.index {
  background-color: #fff;
  height: calc(100vh - 81px);

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