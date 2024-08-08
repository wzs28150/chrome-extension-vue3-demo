<template>
  <div class="p_20">
    <router-link to="/demos/bookmarks" class="list-btn">
      <el-button class="list-btn m_B20">书签 BookMarks</el-button>
    </router-link>
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
<style lang="scss" scoped>
.list-btn {
  width: 100%;
}
</style>