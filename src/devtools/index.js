chrome.devtools.panels.create('devtools', null, '/src/devtools.html')
console.log(window.chrome.devtools)
if (window.chrome.devtools.panels.themeName === 'dark') {
  document.documentElement.classList.add('dark')
}
