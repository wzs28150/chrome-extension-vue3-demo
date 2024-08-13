/*
 * @Title: 封装书签相关api
 * @Description: 使用前提是在manifest.json中配置权限
 * @version: 1.0.0
 * @Author: wzs
 * @Date: 2024-08-12 13:37:00
 * @LastEditors: wzs
 * @LastEditTime: 2024-08-12 15:18:04
 */
/**
 * 获取书签树
 *
 * @returns 返回一个包含书签树子节点的数组，如果获取失败则返回空数组
 * @throws 获取书签树失败时抛出异常
 */
export async function useGetBookmarksTree() {
  try {
    const tree = await chrome.bookmarks.getTree()
    if (tree.length > 0) {
      return tree[0].children
    } else {
      return []
    }
  } catch (error) {
    console.error('Failed to get bookmarks tree:', error)
    throw error
  }
}
/**
 * 删除书签
 *
 * @param id 书签ID
 * @param url 书签地址
 * @param title 书签标题
 * @returns Promise，表示删除书签的异步操作结果
 * @throws 当获取书签树失败时抛出异常
 */
export async function useRemoveBookmark({ id, url, title }) {
  try {
    if (id) {
      return await chrome.bookmarks.remove(id)
    } else if (url || title) {
      const query = url || title
      const results = await useSearchBookmark(query)
      // 过滤出所有匹配的书签ID
      const bookmarkIdsToRemove = results
        .filter((result) => {
          // 如果query是url，则检查url是否匹配
          // 如果query是title（即url未提供），则检查title是否匹配
          return (
            (query && result.url === query) || (query && result.title === query)
          )
        })
        .map((result) => result.id)

      if (bookmarkIdsToRemove.length > 0) {
        // 使用Promise.all并行删除所有匹配的书签
        return Promise.all(
          bookmarkIdsToRemove.map((id) => chrome.bookmarks.remove(id))
        )
      } else {
        // 如果没有找到匹配的书签，可以返回一个已解决的Promise
        return Promise.resolve()
      }
    }
  } catch (error) {
    console.error('Failed to get bookmarks tree:', error)
    throw error
  }
}
/**
 * 使用Chrome书签搜索功能
 *
 * @param query 搜索关键词
 * @returns 返回搜索结果
 * @throws 搜索失败时抛出异常
 */
export async function useSearchBookmark(query) {
  try {
    const result = await chrome.bookmarks.search(query)
    return result
  } catch (error) {
    console.error('Failed to search bookmarks:', error)
    throw error
  }
}
/**
 * 监听书签变化
 *
 * @param callBack 回调函数
 * @returns 无返回值
 * @throws 当监听书签变化失败时，抛出异常
 */
export async function watchBookmark(callBack) {
  try {
    chrome.bookmarks.onChanged.addListener(callBack)
    chrome.bookmarks.onCreated.addListener(callBack)
    chrome.bookmarks.onRemoved.addListener(callBack)
    chrome.bookmarks.onMoved.addListener(callBack)
    chrome.bookmarks.onChildrenReordered.addListener(callBack)
    chrome.bookmarks.onImportBegan.addListener(callBack)
    chrome.bookmarks.onImportEnded.addListener(callBack)
  } catch (error) {
    console.error('Failed to watch bookmarks change:', error)
    throw error
  }
}
