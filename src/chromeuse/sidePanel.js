export async function useSidePanelOpen(tabId) {
  chrome.sidePanel.open({ tabId })
}
