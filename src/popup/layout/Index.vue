<template>
  <div class="layout">
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" size="small"
        router>
        <el-menu-item v-for="item in menuList" :index="item.path">{{ item.name }}</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
const activeIndex = ref('/')
const menuList = ref([
  {
    name: "首页",
    path: '/'
  },
  {
    name: "关于",
    path: '/about'
  },
])
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.layout {
  width: 300px;
  height: 500px;
  --el-menu-horizontal-height: 40px;

  // :deep(.el-menu-item) {
  //   flex: 1
  // }
}
</style>