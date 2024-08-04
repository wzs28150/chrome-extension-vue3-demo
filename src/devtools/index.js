chrome.devtools.panels.create('devtools', null, '/src/devtools.html', () => {
  console.log('user switched to this panel')
})
console.log(chrome.devtools.panels)
const theme = chrome.devtools.panels.themeName
if (theme.value === 'dark') {
  document.documentElement.classList.add('dark')
}
