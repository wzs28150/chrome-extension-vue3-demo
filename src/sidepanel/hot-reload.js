// 代码来源：https://github.com/xpl/crx-hotreload/edit/master/hot-reload.js
import { useGetCurrentTab, useTabReload } from '@chromeuse'
export default function hotReload(options) {
  const filesInDirectory = (dir) =>
    new Promise((resolve) =>
      dir.createReader().readEntries((entries) =>
        Promise.all(
          entries
            .filter((e) => e.name[0] !== '.')
            .map((e) =>
              e.isDirectory
                ? filesInDirectory(e)
                : new Promise((resolve) => e.file(resolve))
            )
        )
          .then((files) => [].concat(...files))
          .then(resolve)
      )
    )

  const timestampForFilesInDirectory = (dir) =>
    filesInDirectory(dir).then((files) =>
      files.map((f) => f.name + f.lastModifiedDate).join()
    )

  const watchChanges = (dir, lastTimestamp) => {
    timestampForFilesInDirectory(dir).then((timestamp) => {
      if (!lastTimestamp || lastTimestamp === timestamp) {
        setTimeout(() => watchChanges(dir, timestamp), 1000) // retry after 1s
      } else {
        if (options.ui) {
          window.location.reload()
        } else {
          chrome.runtime.reload()
        }
      }
    })
  }

  chrome.management.getSelf(async (self) => {
    if (self.installType === 'development') {
      chrome.runtime.getPackageDirectoryEntry((dir) => watchChanges(dir))
      if (options.web) {
        const tab = await useGetCurrentTab()
        await useTabReload(tab.id)
      }
    }
  })
}
