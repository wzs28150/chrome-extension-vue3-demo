import { useDark, useToggle } from '@vueuse/core'

export function useDarkMode() {
  const isDark = useDark({
    storageKey: 'el-theme-appearance',
    valueDark: 'dark',
    valueLight: 'light',
  })

  const toggleDark = useToggle(isDark)

  watch(
    () => isDark,
    (val) => {
      toggleDark()
    }
  )
  return {
    isDark,
  }
}
