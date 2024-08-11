/*
 * @Title: 封装tabs相关api
 * @Description: 封装tabs相关api, 方便使用, 使用前提是在manifest.json中配置权限
 * @version: 1.0.0
 * @Author: wzs
 * @Date: 2024-08-10 19:14:09
 * @LastEditors: wzs
 * @LastEditTime: 2024-08-11 21:15:17
 */
export async function useGetCurrentTab() {
  try {
    const queryOptions = { active: true, currentWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    return tab
  } catch (error) {
    console.error('Failed to get visible tab:', error)
    throw error
  }
}

export async function useCaptureVisibleTab() {
  try {
    const image = await chrome.tabs.captureVisibleTab()
    return image
  } catch (error) {
    console.error('Failed to capture visible tab:', error)
    throw error
  }
}

export async function useCreateTab(url) {
  try {
    return await chrome.tabs.create({ url })
  } catch (error) {
    console.error('Failed to create tab:', error)
    throw error
  }
}

export async function useTabReload(tabid) {
  try {
    return await chrome.tabs.reload(tabid)
  } catch (error) {
    console.error('Failed to reload tab:', error)
    throw error
  }
}
