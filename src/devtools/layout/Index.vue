<template>
  <div class="devtools">
    <Nav />
    <div class="devtools-inner">
      <el-scrollbar height="100%">
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>
<script setup>
import Nav from './components/Nav.vue';
</script>
<style lang="scss" scoped>
.devtools {
  height: 100%;
  display: flex;

  &-inner {
    flex: 1;
    height: 100%;
  }
}
</style>