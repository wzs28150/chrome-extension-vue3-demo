<template>
  <div>
    <el-button @click="openSidePanel">打开侧边栏</el-button>
  </div>
</template>
<script setup>
function openSidePanel() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.sidePanel.open({ tabId: tabs[0].id });
    }
  })
}
</script>