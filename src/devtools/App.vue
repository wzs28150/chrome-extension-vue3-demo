<template>
  <router-view />
</template>

<script setup>
import hotReload from './hot-reload';
import { useDarkMode } from '@devtools/utils/index';
if (import.meta.env.MODE === 'watch') {
  hotReload({
    ui: import.meta.env.VITE_UI_HOT == 'true',
    web: import.meta.env.VITE_WEB_HOT == 'true'
  });
}
useDarkMode()

</script>