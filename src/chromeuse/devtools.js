export async function watchNetworkFinished(resolve) {
  chrome.devtools.network.onRequestFinished.addListener(resolve)
}
