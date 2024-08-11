<template>
  <div class="layout">

    <div class="layout-inner">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <div class="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" size="small"
        :ellipsis="false" router>
        <el-menu-item v-for="item in menuList" :index="item.path">{{ item.name }}</el-menu-item>
      </el-menu>
    </div>
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
    name: "示例",
    path: '/demos'
  }
])
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  --el-menu-horizontal-height: 40px;
  --el-menu-item-height: 36px;
  display: flex;
  flex-direction: column;
  background-color: var(--el-color-info-light-8);

  // overflow: hidden;
  :deep(.el-menu--horizontal) {
    flex-wrap: wrap;
  }

  :deep(.el-menu-item) {
    flex: 1
  }

  &-inner {
    flex: 1;
    max-height: calc(100% - 40px);
    overflow: hidden;
  }

  .nav {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 5px var(--el-color-info-light-8);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>