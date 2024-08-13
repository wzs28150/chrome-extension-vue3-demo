/**
 * 打开侧边栏
 *
 * @param tabId 选项卡ID
 * @returns 无返回值，异步执行
 */
export async function useSidePanelOpen(tabId) {
  chrome.sidePanel.open({ tabId })
}
