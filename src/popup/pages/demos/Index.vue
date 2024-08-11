<template>
  <div class="p_20">
    <el-button class="list-btn m_B20" @click="openSidePanel">打开侧边栏</el-button>
  </div>
</template>
<script setup>
import { useGetCurrentTab, useSidePanelOpen } from '@chromeuse';
async function openSidePanel() {
  const tab = await useGetCurrentTab();
  await useSidePanelOpen(tab.id)
}
</script>
<style lang="scss" scoped>
.list-btn {
  width: 100%;
}
</style>