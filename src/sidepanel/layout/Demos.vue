<template>
  <div class="demos">
    <div class="demos-nav-bar">
      {{ $route.meta.title }}
    </div>
    <div class="demos-inner">
      <el-scrollbar height="100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
const goBack = () => {
  console.log('go back')
}
</script>
<style lang="scss" scoped>
.demos {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-nav-bar {
    height: 40px;
    line-height: 40px;

    background: #fff;
    text-align: center;
    border-bottom: 1px solid var(--el-color-info-light-8);
  }

  &-inner {
    max-height: calc(100% - 41px);
    flex: 1;
  }
}
</style>