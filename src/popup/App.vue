<template>
  <router-view></router-view>
</template>
<script>
import hotReload from './hot-reload';
if (import.meta.env.MODE === 'watch') {
  hotReload({
    ui: import.meta.env.VITE_UI_HOT,
    web: import.meta.env.VITE_WEB_HOT
  });
}
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