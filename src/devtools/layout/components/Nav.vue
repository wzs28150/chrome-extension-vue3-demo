<template>
  <div class="nav">
    <div class="nav-inner">
      <el-menu default-active="/index" class="el-menu-vertical-demo" :collapse="true" router>
        <el-menu-item v-for="item in menuList" :index="item.path">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </el-menu>
    </div>

    <el-menu class="el-menu-vertical-demo" :collapse="true" router>
      <el-menu-item index="/setting">
        <el-icon>
          <component :is="Setting" />
        </el-icon>
        <template #title>设置</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const menuList = ref([
  {
    icon: IconMenu,
    title: '首页',
    path: '/index'
  },
  {
    icon: Document,
    title: '关于',
    path: '/about'
  },

])
</script>

<style lang="scss" scoped>
.nav {
  width: 40px;
  border-right: 1px solid var(--el-border-color-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .nav-inner {
    flex: 1;
  }
}

:deep(.el-menu) {
  border-right: none;
  --el-menu-item-height: 40px;
  --el-menu-base-level-padding: 8px;
}
</style>