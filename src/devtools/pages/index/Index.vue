<template>
  <div class="p_20">
    <h2>请求</h2>
    <p class="m_T20" style="opacity: 0.7;">操作页面可查看页面的请求信息</p>
    <ul class="m_T20">
      <li class="m_B10" v-for="item in list">
        <span><b>请求地址:</b> {{ item.url }}</span>
        <span><b>请求方式:</b> {{ item.method }}</span>
        <span><b>请求参数:</b> {{ item.queryString }}</span>
        <span><b>请求状态:</b> {{ item.status }}{{ item.statusText }}</span>
        <span><b>请求时间:</b> {{ item.responseTime }}毫秒</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { watchNetworkFinished } from '@chromeuse';
const list = ref([])

async function getList() {
  watchNetworkFinished((net) => {
    const { request, response, _resourceType, time } = net;

    console.log(request, response, _resourceType);

    if (
      _resourceType === 'xhr' ||
      _resourceType === 'fetch' ||
      request.url.endsWith('.json')
    ) {
      const item = { ...request, status: response.status, statusText: response.statusText, responseTime: time.toFixed(2) }
      list.value.push(item);
    }
  });


}
getList();
// chrome.devtools.network.onRequestFinished.addListener(
//   (net) => {
//     const { request, response, _resourceType, time } = net;
//     if (
//       _resourceType === 'xhr' ||
//       _resourceType === 'fetch' ||
//       request.url.endsWith('.json')
//     ) {
//       const item = { ...request, status: response.status, statusText: response.statusText, responseTime: time.toFixed(2) }
//       list.value.push(item);
//     }
//   }
// );
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