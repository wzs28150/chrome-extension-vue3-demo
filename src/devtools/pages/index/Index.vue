<template>
  <div class="p_20">
    <h2>首页</h2>
    <ul class="m_T20">
      <li class="m_B10" v-for="item in list">
        <span><b>url:</b> {{ item.url }}</span>
        <span><b>method:</b> {{ item.method }}</span>
        <span><b>tabId:</b> {{ item.tabId }}</span>
        <span><b>requestId:</b> {{ item.requestId }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
console.log('index')
const list = ref([])
chrome.webRequest.onBeforeRequest.addListener((details) => {
  console.log(details);
  list.value.push(details)
}, { urls: ["http://localhost:81/*"] }, [])

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    console.log(details);
    // list.value.push(details)
  }, { urls: ["http://localhost:81/*"] }, []
)
</script>

<style lang="scss" scoped>
ul {
  li {
    span {
      display: block;

      b {
        display: inline-block;
        width: 100px;
      }
    }
  }
}
</style>