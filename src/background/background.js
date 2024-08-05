console.log('background start')

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'sampleMenu',
    title: '我的自定义菜单',
    contexts: ['all'], // 在所有上下文中显示
  })

  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'sampleMenu') {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: '../icon/icon.png',
        title: '菜单被点击了！',
        message: '这是通过右键菜单触发的通知。',
      })
    }
  })
})
