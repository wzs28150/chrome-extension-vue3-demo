<template>
  <router-view />
</template>

<script setup>
import hotReload from './hot-reload';
if (import.meta.env.MODE === 'watch') {
  hotReload({
    ui: import.meta.env.VITE_UI_HOT,
    web: import.meta.env.VITE_WEB_HOT
  });
}
</script>