<template>
  <div class="devtools">
    <Nav />
    <div class="devtools-inner">
      <router-view></router-view>
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
  }
}
</style>