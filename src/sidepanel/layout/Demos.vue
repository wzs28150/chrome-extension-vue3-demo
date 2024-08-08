<template>
  <div class="demos">
    <router-view></router-view>
  </div>
</template>
<script setup>
const goBack = () => {
  console.log('go back')
}
</script>
<style>
.demos {
  height: 100%;
}
</style>