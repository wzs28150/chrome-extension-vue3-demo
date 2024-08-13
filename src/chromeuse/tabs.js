/*
 * @Title: 封装tabs相关api
 * @Description: 封装tabs相关api, 方便使用, 使用前提是在manifest.json中配置权限
 * @version: 1.0.0
 * @Author: wzs
 * @Date: 2024-08-10 19:14:09
 * @LastEditors: wzs
 * @LastEditTime: 2024-08-13 15:56:16
 */

/**
 * 获取当前激活的标签页
 *
 * @returns 返回一个包含当前激活的标签页信息的对象，如果获取失败则抛出错误
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
/**
 * 捕获当前可见标签页的截图
 *
 * @returns 返回一个Promise，解析为捕获到的截图
 * @throws 捕获失败时抛出异常
 */
export async function useCaptureVisibleTab() {
  try {
    const image = await chrome.tabs.captureVisibleTab()
    return image
  } catch (error) {
    console.error('Failed to capture visible tab:', error)
    throw error
  }
}
/**
 * 创建新标签页并跳转到指定URL
 *
 * @param url 要跳转的URL地址
 * @returns 返回创建的标签页信息
 * @throws 当创建标签页失败时，会抛出异常并输出错误信息到控制台
 */
export async function useCreateTab(url) {
  try {
    return await chrome.tabs.create({ url })
  } catch (error) {
    console.error('Failed to create tab:', error)
    throw error
  }
}
/**
 * 使用指定tabid重新加载标签页
 *
 * @param tabid 标签页的ID
 * @returns 返回Promise对象，表示重新加载标签页的结果
 * @throws 当重新加载标签页失败时，抛出异常并输出错误信息到控制台
 */
export async function useTabReload(tabid) {
  try {
    return await chrome.tabs.reload(tabid)
  } catch (error) {
    console.error('Failed to reload tab:', error)
    throw error
  }
}
