<template>
  <router-view></router-view>
</template>
<script>
import hotReload from './hot-reload';
hotReload({
  ui: true
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

html,
body {
  height: 100%;
  font-size: 16px;
}
</style>