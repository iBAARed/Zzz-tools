import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)

    // 使用 contextBridge 暴露对象给渲染进程
    contextBridge.exposeInMainWorld('startFunction', {
      invoke: (methodName, ...args) => ipcRenderer.invoke('start-function', methodName, ...args)
    });

  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api

  window.startFunction = {
    invoke: (methodName, ...args) => ipcRenderer.invoke('start-function', methodName, ...args)
  }
}
